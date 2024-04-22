<?php
/**
 * Registers an options page for find-my-blocks
 *
 * @package find-my-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register the options page.
 */
function find_my_blocks_register_options_page() {
	add_management_page(
		'Find My Blocks',
		'Find My Blocks',
		'edit_posts',
		'find-my-blocks',
		'find_my_blocks_register_options_page_markup',
		5
	);
}

add_action( 'admin_menu', 'find_my_blocks_register_options_page' );

/**
 * Markup for the options page. This will only display a
 * div to render our React app.
 */
function find_my_blocks_register_options_page_markup() {
	echo '<div id="find-my-blocks-app"></div>';
}
