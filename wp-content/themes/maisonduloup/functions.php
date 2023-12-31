<?php

// Ajouter la prise en charge des images mises en avant
add_theme_support('post-thumbnails');

// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support('title-tag');

// create custom function to return nav menu
function custom_wp_menu()
{
    // Replace your menu name, slug or ID carefully
    return wp_get_nav_menu_items('Main Menu');
}

// create new endpoint route
add_action('rest_api_init', function () {
    register_rest_route('wp/v2', 'menu', array(
        'methods' => 'GET',
        'callback' => 'custom_wp_menu',
    ));
});

register_nav_menus(
    array(
        'primary' => esc_html__('Primary menu', 'maisonduloup'),
        'footer'  => esc_html__('Secondary menu', 'maisonduloup'),
    )
);

add_theme_support('custom-logo', array(
    'flex-height' => true,
    'flex-width'  => true,
    'header-text' => array('site-title', 'site-description'),
));
