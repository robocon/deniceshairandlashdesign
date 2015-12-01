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