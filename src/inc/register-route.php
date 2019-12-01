<?php
/**
 * Registers an endpoint at /wp-json/find-my-blocks/blocks
 *
 * @package FindMyBlocks
 */

if ( ! function_exists( 'find_my_blocks_register_route' ) ) :
	/**
	 * Register a custom endpoint that will allow us to get
	 * the posts needed for the block.
	 */
	function find_my_blocks_register_route() {
		register_rest_route(
			'find-my-blocks',
			'blocks',
			array(
				'methods'  => WP_REST_Server::READABLE,
				'callback' => 'find_my_blocks_route_callback',
			)
		);
	}

	add_action( 'rest_api_init', 'find_my_blocks_register_route' );
endif;

if ( ! function_exists( 'find_my_blocks_route_callback' ) ) :
	/**
	 * Callback function that will get a list of blocks and
	 * the posts that they are used in
	 *
	 * @param WP_REST_Request $request - WordPress api request.
	 */
	function find_my_blocks_route_callback( WP_REST_Request $request ) {
		$data = array(
			'eddy'  => 'sims',
			'libby' => 'padilla',
		);

		$response = new WP_REST_Response( $data, 200 );
		return $response;
	}
endif;
