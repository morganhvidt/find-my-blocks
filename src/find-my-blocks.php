<?php
/**
 * Plugin Name: Find My Blocks!
 * Plugin URI: https://eddysims.com
 * Description: A plugin to find your gutenberg blocks
 * Version: 0.0.1
 * Author: Eddy Sims
 * Author URI: https://eddysims.com
 * License: GPLv2
 * Text Domain: find-my-blocks
 *
 * @package FindMyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}




if ( ! function_exists( 'fmb_activation_hook' ) ) :
	/**
	 * Set transient for message when plugin is actiavated.
	 */
	function fmb_activation_hook() {
		set_transient( 'fmb-activation-notice', true, 5 );
	}

	register_activation_hook( __FILE__, 'fmb_activation_hook' );
endif;

if ( ! function_exists( 'fmb_activation_notice' ) ) :
	/**
	 * Display a welcome notice when the plugin is activated.
	 */
	function fmb_activation_notice() {
		/* Check transient, if available display notice */
		if ( get_transient( 'fmb-activation-notice' ) ) {
			?>
				<div class="updated notice is-dismissible">
					<p>Thank you for using Find My Blocks. Go to the <a href="#">settings page</a> to use this plugin.</p>
				</div>
			<?php
			/* Delete transient, only display this notice once. */
			delete_transient( 'fmb-activation-notice' );
		}
	}

	add_action( 'admin_notices', 'fmb_activation_notice' );
endif;
