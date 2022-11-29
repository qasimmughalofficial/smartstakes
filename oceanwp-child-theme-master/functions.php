<?php
/**
 * OceanWP Child Theme Functions
 *
 * When running a child theme (see http://codex.wordpress.org/Theme_Development
 * and http://codex.wordpress.org/Child_Themes), you can override certain
 * functions (those wrapped in a function_exists() call) by defining them first
 * in your child theme's functions.php file. The child theme's functions.php
 * file is included before the parent theme's file, so the child theme
 * functions will be used.
 *
 * Text Domain: oceanwp
 * @link http://codex.wordpress.org/Plugin_API
 *
 */

/**
 * Load the parent style.css file
 *
 * @link http://codex.wordpress.org/Child_Themes
 */
function oceanwp_child_enqueue_parent_style() {

	// Dynamically get version number of the parent stylesheet (lets browsers re-cache your stylesheet when you update the theme).
	$theme   = wp_get_theme( 'OceanWP' );
	$version = $theme->get( 'Version' );

	// Load the stylesheet.
	wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'oceanwp-style' ), $version );
	
}

add_action( 'wp_enqueue_scripts', 'oceanwp_child_enqueue_parent_style' );


// react app
add_shortcode('react-app','react_app');
function react_app(){
    ob_clean();
    ?>
        <div id="my-react-app"></div>
    <?php
    return ob_get_clean();
//    exit();
}

// header widget
add_shortcode('sport-cards-widget','sport_cards_widget');
function sport_cards_widget($atts){
    
    $atts = shortcode_atts(
        array(
            'sport' => 'any',
        ), $atts, 'sport-cards-widget' );
        
    // ob_clean();
    ?>
        <div id="<?php echo $atts['sport']; ?>" data-default-sports="<?php echo $atts['sport']; ?>"></div>
    <?php
    // return ob_get_clean();
//    exit();
}

add_action('init', 'wp55290310_rewrite_rules');

function wp55290310_rewrite_rules() {
    add_rewrite_rule('^app/(.+)?', 'index.php?pagename=app', 'top');
}

add_action('wp_enqueue_scripts', 'my_react_app');
function my_react_app()
{
    wp_enqueue_script(
        'my_react_app',
        get_stylesheet_directory_uri() . '/build/index.js', // This refer to the built React app
        ['wp-element'], //This dependency indicates that you need React at Frontend
        rand(), // This could be changed to the theme version for production
        true
    );
    wp_enqueue_style( 'react-styles', get_stylesheet_directory_uri() . '/build/index.css' );
}