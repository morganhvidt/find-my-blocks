<?php
/**
 * Enqueue our scripts for our plugin
 *
 * @package FindMyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'find_my_blocks_enqueue_scripts' ) ) :
	/**
	 * Checks if a block styles/scripts should be enqueued.
	 *
	 * @param string $hook - Options page hook.
	 */
	function find_my_blocks_enqueue_scripts( $hook ) {
		if ( 'tools_page_find-my-blocks' !== $hook ) {
			return;
		}

		$js_deps = array(
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
			$js_deps,
			filemtime( plugin_dir_path( __DIR__ ) . 'find-my-blocks.js' ),
			true
		);

		wp_localize_script(
			'find-my-blocks-script',
			'find_my_blocks_globals',
			[
				'ajax_url' => admin_url( 'admin-ajax.php' ),
				'nonce'    => wp_create_nonce('wp_rest'),
				'action'   => 'find_my_blocks_save_settings',
				'settings' => get_option( 'find_my_blocks_settings' ),
				'site_url' => get_rest_url()
			]
		);

		wp_enqueue_style('wp-components');

		wp_enqueue_style(
			'find-my-blocks-style',
			plugin_dir_url( __DIR__ ) . 'find-my-blocks.css',
			null,
			filemtime( plugin_dir_path( __DIR__ ) . 'find-my-blocks.css' )
		);
	}

	add_action( 'admin_enqueue_scripts', 'find_my_blocks_enqueue_scripts' );
endif;
