<?php
/**
 * Registers an endpoint at /wp-json/find-my-blocks/v1/blocks
 *
 * @package find-my-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers a custom REST API endpoint for searching posts.
 *
 * This endpoint is used to retrieve the posts needed for the block.
 * The endpoint is accessible to users with the 'edit_posts' capability.
 */
function find_my_blocks_register_route() {
	register_rest_route(
		'find-my-blocks/v1',
		'search',
		[ 
			'methods' => WP_REST_Server::READABLE,
			'callback' => 'find_my_blocks_rest_search_callback',
			'permission_callback' => function () {
				return current_user_can( 'edit_posts' );
			}
		]
	);
}

add_action( 'rest_api_init', 'find_my_blocks_register_route' );

/**
 * Callback function for the REST API endpoint.
 * This function searches for posts that contain blocks.
 *
 * @param WP_REST_Request $request The REST request object.
 * @return WP_REST_Response The REST response object.
 */
function find_my_blocks_rest_search_callback( $request ) {

	try {
		$time_start = microtime( true );

		// Initialize an empty array for the arguments
		$args = [];

		// Get 'per_page' parameter and ensure it's a positive integer
		$posts_per_page = $request->get_param( 'posts_per_page' );

		if ( $posts_per_page && is_numeric( $posts_per_page ) && (int) $posts_per_page > 0 ) {
			$args['posts_per_page'] = (int) $posts_per_page;
		}

		// Get 'page' parameter and ensure it's a positive integer
		$paged = $request->get_param( 'paged' );
		if ( $paged && is_numeric( $paged ) && (int) $paged > 0 ) {
			$args['paged'] = (int) $paged;
		}

		$search_data = fmb_search_posts_for_blocks( $args );

		$duration = microtime( true ) - $time_start;

	} catch (Throwable $e) {
		// Return WP Error as REST Response.
		$error_message = $e->getMessage();

		if ( $e instanceof Error || $e instanceof Exception ) {
			$error_message = $e->getMessage();
		} else {
			$error_message = get_class( $e ) . ': ' . $e->getMessage();
		}
		return new WP_REST_Response( [ 
			'error' => $error_message,
		], 500 );
	}

	return new WP_REST_Response( [ 
		'data' => $search_data,
		'duration' => $duration,
	], 200 );
}
