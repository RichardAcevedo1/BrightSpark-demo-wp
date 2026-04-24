<?php
function astra_child_enqueue_styles() {
    wp_enqueue_style('astra-parent-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'astra_child_enqueue_styles');

function mi_custom_assets() {

    wp_enqueue_style(
        'mi-custom-css',
        get_stylesheet_directory_uri() . '/assets/css/custom.css',
        array(),
        '1.0'
    );

    wp_enqueue_script(
        'mi-custom-js',
        get_stylesheet_directory_uri() . '/assets/js/custom.js',
        array(),
        '1.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'mi_custom_assets');
