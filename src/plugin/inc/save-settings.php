<?php

if ( ! function_exists( 'find_my_blocks_save_settings' ) ) :
	function find_my_blocks_save_settings() {
		check_ajax_referer( 'find_my_blocks_nonce' );

		$new_settings = $_REQUEST['settings'];
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
