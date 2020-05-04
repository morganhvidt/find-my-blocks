<?php
/**
 * Registers an options page for find-my-blocks
 *
 * @package FindMyBlocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'find_my_blocks_register_options_page' ) ) :
	/**
	 * Register the options page
	 */
	function find_my_blocks_register_options_page() {
		add_menu_page(
			'Find My Blocks',
			'Find My Blocks',
			'edit_posts',
			'find-my-blocks',
			'find_my_blocks_register_options_page_markup',
			// 'data:image/svg+xml;base64,' . base64_encode('<svg viewBox="-1 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.35484 0L0 3.85151L0.0942928 12.7146L4.5732 15.2668L7.40198 20L10.1365 15.2668L14.6154 12.7378V3.89791L7.35484 0ZM5.94045 12.8538L2.87593 11.1369V7.09977L5.94045 8.90951V12.8538ZM4.38462 4.68678L7.35484 3.15545L10.2779 4.68678L7.35484 6.40371L4.38462 4.68678ZM11.7866 11.1369L8.76923 12.8538V8.90951L11.7866 7.14617V11.1369Z"/></svg>');
			'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSItMSAwIDE3IDIwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik03LjM1NDg0IDBMMCAzLjg1MTUxTDAuMDk0MjkyOCAxMi43MTQ2TDQuNTczMiAxNS4yNjY4TDcuNDAxOTggMjBMMTAuMTM2NSAxNS4yNjY4TDE0LjYxNTQgMTIuNzM3OFYzLjg5NzkxTDcuMzU0ODQgMFpNNS45NDA0NSAxMi44NTM4TDIuODc1OTMgMTEuMTM2OVY3LjA5OTc3TDUuOTQwNDUgOC45MDk1MVYxMi44NTM4Wk00LjM4NDYyIDQuNjg2NzhMNy4zNTQ4NCAzLjE1NTQ1TDEwLjI3NzkgNC42ODY3OEw3LjM1NDg0IDYuNDAzNzFMNC4zODQ2MiA0LjY4Njc4Wk0xMS43ODY2IDExLjEzNjlMOC43NjkyMyAxMi44NTM4VjguOTA5NTFMMTEuNzg2NiA3LjE0NjE3VjExLjEzNjlaIi8+PC9zdmc+',
			85,
		);
	}

	add_action( 'admin_menu', 'find_my_blocks_register_options_page' );
endif;

if ( ! function_exists( 'find_my_blocks_register_options_page_markup' ) ) :
	/**
	 * Markup for the options page. This will only display a
	 * div to render our React app.
	 */
	function find_my_blocks_register_options_page_markup() {
		?>
			<div class="wrap">
				<div id="find-my-blocks"></div>
				<div id="editor"></div>
			</div><!-- /.wrap -->
		<?php
	}
endif;
