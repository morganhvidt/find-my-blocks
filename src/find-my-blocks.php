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
			$str = 'Thank you for using Find My Blocks. Go to the';
			?>
				<div class="updated notice is-dismissible">
					<p>
						<?php
							echo sprintf(
								/* translators: placeholders are used to esc the url of the settings page. */
								esc_html__( 'Thank you for using Find My Blocks. Go to the %1$s %2$s %3$s to find your blocks.', 'find-my-blocks' ),
								'<a href="' . esc_url( admin_url( '/options-general.php?page=find-my-blocks' ) ) . '">',
								esc_html__( 'settings page', 'find-my-blocks' ),
								'</a>'
							);
						?>
					</p>
				</div>
			<?php
			/* Delete transient, only display this notice once. */
			delete_transient( 'fmb-activation-notice' );
		}
	}

	add_action( 'admin_notices', 'fmb_activation_notice' );
endif;

if ( ! function_exists( 'find_my_blocks_add_reusable_to_admin_menu' ) ) :
	/**
	 * Adds Reusable blocks to the admin menu.
	 */
	function find_my_blocks_add_reusable_to_admin_menu() {
		add_menu_page(
			'Reusable Blocks',
			'Reusable Blocks',
			'edit_posts',
			'edit.php?post_type=wp_block',
			'',
			'dashicons-editor-table',
			22
		);
	}
	add_action( 'admin_menu', 'find_my_blocks_add_reusable_to_admin_menu' );
endif;

require plugin_dir_path( __FILE__ ) . 'inc/settings-page.php';
require plugin_dir_path( __FILE__ ) . 'inc/enqueue.php';
require plugin_dir_path( __FILE__ ) . 'inc/register-route.php';
