<?php
/**
 * Enqueue our scripts for our plugin
 *
 * @package find-my-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Checks if a block styles/scripts should be enqueued.
 *
 * @param string $hook - Options page hook.
 */
function find_my_blocks_enqueue_scripts( $page_hook ) {

	if ( 'tools_page_find-my-blocks' !== $page_hook ) {
		return;
	}

	wp_enqueue_script(
		'find-my-blocks-script',
		plugin_dir_url( __DIR__ ) . '/assets/js/find-my-blocks.js',
		[ 
			'react', 'wp-api-fetch', 'wp-components', 'wp-element', 'wp-i18n',
		],
		filemtime( plugin_dir_path( __DIR__ ) . '/assets/js/find-my-blocks.js' ),
		true
	);

	wp_set_script_translations(
		'find-my-blocks-script',
		'find-my-blocks',
	);

	wp_localize_script(
		'find-my-blocks-script',
		'fmbGlobal',
		[ 
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce( 'wp_rest' ),
			'action' => 'find_my_blocks_save_settings',
			'settings' => get_option( 'find_my_blocks_settings' ),
			'site_url' => get_rest_url(),
			'editor_enabled_post_types' => fmb_editor_enabled_post_types(),
			'version' => FMB_VERSION,
			'admin_url' => admin_url(),
			'conditional_blocks_installed' => defined( 'CONDITIONAL_BLOCKS_VERSION' )
		]
	);

	wp_enqueue_style( 'wp-components' );

	wp_enqueue_style(
		'find-my-blocks-app-style',
		plugin_dir_url( __DIR__ ) . '/assets/js/main.css',
		[],
		filemtime( plugin_dir_path( __DIR__ ) . '/assets/js/main.css' ),
	);

	wp_enqueue_style(
		'find-my-blocks-style',
		plugin_dir_url( __DIR__ ) . 'assets/css/find-my-blocks.css',
		[],
		filemtime( plugin_dir_path( __DIR__ ) . 'assets/css/find-my-blocks.css' ),
	);
}

add_action( 'admin_enqueue_scripts', 'find_my_blocks_enqueue_scripts' );
