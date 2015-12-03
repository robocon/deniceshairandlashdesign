<?php 

add_action( 'wp_enqueue_scripts', 'salient_child_enqueue_styles',50);
function salient_child_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

/**
 * Override old function by remove other image size
 */
if (!function_exists('nectar_add_image_sizes')) {
	function nectar_add_image_sizes(){
		add_theme_support( 'post-thumbnails' );
	}
}

nectar_add_image_sizes();

/**
 * Print coupon
 */
add_action("wp", "check_service_page");
function check_service_page(){
    
	// If is_page and is_page_template not working open function below
	// http://stackoverflow.com/questions/21898891/wordpress-is-page-always-returned-with-false
	// wp_reset_query();
    $test_page = is_page( array( 482, 'services' ) );
    if( $test_page === true ){
    	add_action( 'wp_enqueue_scripts', 'load_coupon_print' );
    }

}

function load_coupon_print()
{
    wp_enqueue_script( 'custom-script', get_template_directory_uri() . '-child/js/coupon_print.js' );
}