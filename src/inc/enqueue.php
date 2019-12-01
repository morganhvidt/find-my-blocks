<?php
/**
 * Enqueue our scripts for our plugin
 *
 * @package FindMyBlocks
 */

if ( ! function_exists( 'find_my_blocks_enqueue_scripts' ) ) :
	/**
	 * Checks if a block styles/scripts should be enqueued.
	 *
	 * @param string $hook - Options page hook.
	 */
	function find_my_blocks_enqueue_scripts( $hook ) {
		if ( 'settings_page_find-my-blocks' !== $hook ) {
			return;
		}

		$deps = array(
			'wp-block-library',
			'wp-blocks',
			'wp-element',
			'wp-edit-post',
			'jquery',
		);

		/**
		 * We need to enqueue `wp-edit-post` and `jquery`
		 * so they are loaded into the DOM
		 */
		wp_enqueue_script(
			'find-my-blocks-script',
			plugin_dir_url( __DIR__ ) . 'find-my-blocks.js',
			$deps,
			filemtime( plugin_dir_path( __DIR__ ) . 'find-my-blocks.js' ),
			true
		);

		wp_enqueue_style(
			'find-my-blocks-style',
			plugin_dir_url( __DIR__ ) . 'find-my-blocks.css',
			null,
			filemtime( plugin_dir_path( __DIR__ ) . 'find-my-blocks.css' )
		);
	}

	add_action( 'admin_enqueue_scripts', 'find_my_blocks_enqueue_scripts' );
endif;
