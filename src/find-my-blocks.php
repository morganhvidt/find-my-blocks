<?php
/**
 * Plugin Name: Find My Blocks
 * Plugin URI: https://findmyblocks.com/
 * Description: Locate instances of WordPress blocks across your entire site.
 * Version: XPLUGIN_VERSION
 * Requires at least: 5.0
 * Requires PHP: 7.4
 * Author: Morgan Hvidt
 * Author URI: https://morganhvidt.com/
 * License: GPLv2
 * Text Domain: find-my-blocks
 * Domain Path: /languages
 *
 * @package find-my-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'FMB_VERSION' ) ) {
	define( 'FMB_VERSION', 'XPLUGIN_VERSION' );
}

/**
 * Load plugin textdomain.
 */
function find_my_blocks_load_textdomain() {
	load_plugin_textdomain( 'find-my-blocks', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}

require plugin_dir_path( __FILE__ ) . 'inc/functions.php';
require plugin_dir_path( __FILE__ ) . 'inc/settings-page.php';
require plugin_dir_path( __FILE__ ) . 'inc/enqueue.php';
require plugin_dir_path( __FILE__ ) . 'inc/register-route.php';

/**
 * Uninstall Find My Blocks & remove data.
 */
function find_my_blocks_uninstall() {
	// Prior version of Find My Blocks stored settings. Remove those on uninstall.
	delete_option( 'find_my_blocks_settings' );
}

register_uninstall_hook( __FILE__, 'find_my_blocks_uninstall' );



