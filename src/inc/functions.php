<?php

/**
 * Get the post types that support the 'editor' feature (Gutenberg). show_in_rest must be true for the post type.
 * This function finds FSE Templates & Template parts too.
 */
function fmb_editor_enabled_post_types() {
	$args = [ 
		'show_in_rest' => true,
	];

	$post_types = get_post_types( $args, 'objects' );

	$post_types_with_editor = [];

	foreach ( $post_types as $post_type ) {
		if ( post_type_supports( $post_type->name, 'editor' ) ) {
			$post_types_with_editor[] = $post_type->name;
		}
	}

	$post_types_with_editor = apply_filters( 'fmb_post_types', $post_types_with_editor );

	return $post_types_with_editor;
}

/**
 * Search posts for blocks.
 *
 * @param array $args The arguments for the search.
 * @return array The found blocks and other relevant information.
 */
function fmb_search_posts_for_blocks( $args = [] ) {

	$default_args = [ 
		'post_type' => fmb_editor_enabled_post_types(),
		'posts_per_page' => 10,
		'paged' => 1,
		'orderby' => 'date',
		'order' => 'DESC',
	];

	$args = wp_parse_args( $args, $default_args );

	$query = new WP_Query( $args );

	$found_blocks = [];
	$posts_with_blocks = [];

	// Get all the posts from the query
	$posts = $query->get_posts();

	foreach ( $posts as $post ) {

		// Get the content of the current post
		$post_content = $post->post_content;

		if ( empty( $post_content ) ) {
			continue;
		}

		// Parse blocks from the post content
		$blocks = parse_blocks( $post_content );

		if ( empty( $blocks ) ) {
			continue;
		}

		// Initialize an array to store block names
		$block_names = [];
		// Loop through the blocks and add the block names to the array
		foreach ( $blocks as $block ) {

			if ( ! empty( $block['blockName'] ) ) {
				$block_names[] = $block['blockName'];
			} else {
				/*
				 * NOTE: Some blocks may not have names. This happens with classic blocks, so far. There may be more.
				 * We'll have to guess and mark a temporary block name.
				 */
				if ( ! empty( $block['innerHTML'] ) && ! empty( trim( $block['innerHTML'] ) ) ) {
					$guess_block_name = 'core/classic-editor (?)';// If there's any innerHTML, guess it's a classic editor.
				} else {
					continue;// Otherwise, skip. It's likely an empty paragraph.
				}

				$block['blockName'] = $guess_block_name;
				$block_names[] = $guess_block_name;
			}

			fmb_process_block( $block, $found_blocks, $post );
		}
		// Add the block names array to the posts_with_blocks array with post ID as key
		$posts_with_blocks[ $post->ID ] = $block_names;
	}

	return [ 
		'blocks' => $found_blocks,
		'scanned_posts' => count( $posts_with_blocks ),
		'total_posts' => $query->found_posts,
		'total_pages' => $query->max_num_pages,
		'posts_per_page' => $args['posts_per_page'],
		'current_page' => $args['paged'],
		'post_types' => $args['post_type'],
		// 'query' => $query,
	];
}

function find_my_blocks_search_for_block_key( $array, $field, $value ) {
	foreach ( $array as $key => $val ) {
		if ( $val[ $field ] === $value ) {
			return $key;
		}
	}
	return false;
}

/**
 * Recursive function to find all blocks.
 *
 * @param array  $block The block to inspect.
 * @param array  $blocks The record of all blocks.
 * @param object | $post The current post.
 */
function fmb_process_block( $block, &$found_blocks, &$post, $nested_block_name = null ) {

	/**
	 * If the block has nested blocks, go over them first.
	 */
	foreach ( $block['innerBlocks'] as $inner_block ) {
		fmb_process_block( $inner_block, $found_blocks, $post, $block['blockName'] );
	}

	$current_theme_slug = get_stylesheet(); // Get the current theme slug.

	/**
	 * If block is not in blocks array, push the
	 * blockName into the array.
	 */
	if ( ! in_array( $block['blockName'], array_column( $found_blocks, 'name' ), true ) ) {
		$block_array = [ 
			'name' => $block['blockName'],
			'posts' => [],
		];

		array_push( $found_blocks, $block_array );
	}

	$block_key = find_my_blocks_search_for_block_key( $found_blocks, 'name', $block['blockName'] );

	/**
	 * Integration with the Conditional Blocks plugin.
	 */
	$conditional_blocks = ! empty( $block['attrs']['conditionalBlocks'] ) ? true : false;

	if ( ! in_array( $post->ID, array_column( $found_blocks[ $block_key ]['posts'], 'id' ), true ) ) {

		$is_template = 'wp_template' === $post->post_type;
		$is_template_part = 'wp_template_part' === $post->post_type;

		// Determine if the post is a template or template part.
		$is_template_or_part = $is_template || $is_template_part;

		// Get the edit URL for the post.
		$edit_url = get_edit_post_link( $post, false );
		$post_url = get_permalink( $post->ID );

		$current_theme = wp_get_theme()->get_stylesheet();

		// Refactor to handle wp_template_part post type.
		if ( $is_template_or_part ) {

			$template_provider = wp_get_post_terms( $post->ID, 'wp_theme' );
			$template_provider = ! empty( $template_provider[0]->name ) ? $template_provider[0]->name : $current_theme;

			$third_party_template = $template_provider !== wp_get_theme()->get_stylesheet();

			// If we detected a third-party template or template part, then we need to update the edit link.
			if ( $third_party_template ) {

				$post_type_query = $is_template ? 'wp_template' : 'wp_template_part';
				$edit_url = admin_url( "site-editor.php?postType={$post_type_query}&postId={$template_provider}//{$post->post_name}" );
				$post_url = $edit_url; // For templates and template parts, we can only preview in the WordPress Editor.
			} else {
				$post_url = $edit_url; // It's still a template or template part, we can only preview in the WordPress Editor.
			}
		} else {
			$template_provider = false;
		}

		// Get the title of the wp_templates.
		// For wp_template post type, the title is usually available in the post_title field.
		$title = ! empty( $post->post_title ) ? $post->post_title : $post->post_name;

		$found_blocks[ $block_key ]['posts'][] = [ 
			'id' => $post->ID,
			'title' => $title,
			'count' => 1,
			'isSyncedPattern' => 'wp_block' === $post->post_type,
			'isTemplate' => $is_template,
			'isNested' => $nested_block_name !== null,
			'nestedBlockType' => $nested_block_name,
			'hasConditionalBlocks' => $conditional_blocks,
			'postType' => $post->post_type,
			'status' => $post->post_status,
			'post_url' => $post_url,
			'edit_url' => $edit_url,
			'templateProvider' => $template_provider,
			'isThirdPartyTemplate' => $template_provider && $template_provider !== $current_theme,
		];
	} else {
		$post_key = find_my_blocks_search_for_block_key( $found_blocks[ $block_key ]['posts'], 'id', $post->ID );
		$found_blocks[ $block_key ]['posts'][ $post_key ]['count']++;
	}
}
