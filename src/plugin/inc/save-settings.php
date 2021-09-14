<?php

if ( ! function_exists( 'find_my_blocks_save_settings' ) ) :
	function find_my_blocks_save_settings() {
		check_ajax_referer( 'wp_rest' );

		$new_settings = sanitize_option('find_my_blocks_settings', $_REQUEST['settings']);
		$current_settings = get_option( 'find_my_blocks_settings' );

		if( is_array( $current_settings ) ) {
			foreach ( $new_settings as $key => $setting ) {
				$current_settings[$key] = $setting;
			}
		}
		else {
			$current_settings = $new_settings;
		}

		update_option( 'find_my_blocks_settings', $current_settings, true );

		$response[ 'type' ] = 'success';
		$response = json_encode( $response );
		echo $response;
		die();
	}

	add_action( 'wp_ajax_find_my_blocks_save_settings', 'find_my_blocks_save_settings' );
endif;

if ( !function_exists( 'sanitize_find_my_blocks_settings') ) {
	function sanitize_find_my_blocks_settings( $data ) {

		if (!is_array( $data )) {
			wp_die( 'Invalid entry, go back and try again.' );
		}

		if ($data['include_drafts'] === 'true' || $data['include_drafts'] === true ) {
			$result['include_drafts'] = true;
		} else {
			$result['include_drafts'] = false;
		}

		return $result;
	}
}
add_filter( 'sanitize_option_find_my_blocks_settings', 'sanitize_find_my_blocks_settings' );
