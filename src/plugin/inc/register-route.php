<?php
/**
 * Registers an endpoint at /wp-json/find-my-blocks/blocks
 *
 * @package FindMyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'find_my_blocks_register_route' ) ) :
	/**
	 * Register a custom endpoint that will allow us to get
	 * the posts needed for the block.
	 */
	function find_my_blocks_register_route() {
		register_rest_route(
			'find-my-blocks',
			'blocks',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => 'find_my_blocks_route_callback',
				'permission_callback' => function() {
					return current_user_can('edit_others_posts');
				}
			)
		);
	}

	add_action( 'rest_api_init', 'find_my_blocks_register_route' );
endif;

if ( ! function_exists( 'find_my_blocks_route_callback' ) ) :
	/**
	 * Callback function that will get a list of blocks and
	 * the posts that they are used in
	 *
	 * @param WP_REST_Request $request - WordPress api request.
	 */
	function find_my_blocks_route_callback( WP_REST_Request $request ) {
		$blocks = array();
		$settings = get_option( 'find_my_blocks_settings' );
		$blockName = $request->get_param( 'name' );

		/**
		 * Get an array of all of our post types, then we will
		 * remove any unwanted post types
		 */
		$post_types = get_post_types(
			array(
				'public'  => true,
				'show_ui' => true,
			)
		);

		array_push( $post_types, 'wp_block' );
		unset( $post_types['attachment'] );

		/**
		 * Get a list of all posts
		 */
		$post_ids = array();

		foreach ( $post_types as $key => $post_type ) {
			$valid_statuses = array( 'publish', 'private', 'pending', 'future' );

			if ( $settings[ 'include_drafts' ] == "true" ) {
				array_push( $valid_statuses, 'draft' );
			}

			$posts = get_posts(
				array(
					'posts_per_page' => -1,
					'post_type'      => $post_type,
					'post_status'    => $valid_statuses,
				)
			);

			foreach ( $posts as $post ) {
				array_push( $post_ids, $post->ID );
			}
		}

		/**
		 * Loop through post IDs and get the blocks that are used.
		 */
		foreach ( $post_ids as $post_ID ) {
			$post = get_post( $post_ID );

			if ( ! has_blocks( $post->post_content ) ) {
				continue;
			}

			$post_blocks = parse_blocks( $post->post_content );

			foreach ( $post_blocks as $block ) {
				find_blocks( $block, $blocks, $post );
			}
		}

		/**
		 * Filter blocks based on GET parameter name
		 */
		if ( ! empty( $blockName ) ) {
			$blocks = array_filter( $blocks,
				function ( $v ) use ( $blockName ) {
					return $v['name'] === $blockName;
				}
			);
		}

		$data = array(
			'blocks' => $blocks,
		);

		$response = new WP_REST_Response( $data, 200 );
		return $response;
	}
endif;

/**
 * Searches an array for a value.
 *
 * @param array  $array - Array to search through.
 * @param string $field - Key to search.
 * @param string $value - Value to search in key.
 *
 * @return array/boolean
 */
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
 * @param Array  $block The block to inspect.
 * @param Array  $blocks The record of all blocks.
 * @param Object $post The current post.
 */
function find_blocks( $block, &$blocks, &$post, $nested_block_name = null ) {

	/**
	 * If the block name is blank, skip
	 */
	if ( strlen( $block['blockName'] ) === 0 ) {
		return;
	}

	/**
	 * If the block is reusable, skip
	 */
	if ( 'core/block' === $block['blockName'] ) {
		return;
	}

	foreach ( $block['innerBlocks'] as $inner_block ) {
		find_blocks( $inner_block, $blocks, $post, $block['blockName'] );
	}

	/**
	 * If block is not in blocks array, push the
	 * blockName into the array.
	 */
	if ( ! in_array( $block['blockName'], array_column( $blocks, 'name' ), true ) ) {
		$block_array = array(
			'name'  => $block['blockName'],
			'posts' => array(),
		);

		array_push( $blocks, $block_array );
	}

	$block_key = find_my_blocks_search_for_block_key( $blocks, 'name', $block['blockName'] );

	if ( ! in_array( $post->ID, array_column( $blocks[ $block_key ]['posts'], 'id' ), true ) ) {
		$blocks[ $block_key ]['posts'][] = array(
			'id'              => $post->ID,
			'title'           => $post->post_title,
			'count'           => 1,
			'isReusable'      => 'wp_block' === $post->post_type,
			'isNested'        => $nested_block_name !== null,
			'nestedBlockType' => $nested_block_name,
			'postType'        => $post->post_type,
			'status'          => $post->post_status,
			'post_url'        => get_permalink( $post->ID ),
			'edit_url'        => get_admin_url() . 'post.php?post=' . $post->ID . '&action=edit',
		);
	} else {
		$post_key = find_my_blocks_search_for_block_key( $blocks[ $block_key ]['posts'], 'id', $post->ID );
		$blocks[ $block_key ]['posts'][ $post_key ]['count']++;
	}
}
