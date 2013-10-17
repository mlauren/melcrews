/**
 * Created with JetBrains PhpStorm.
 * User: loganfisher
 * Date: 10/3/13
 * Time: 10:20 PM
 * To change this template use File | Settings | File Templates.
 */



(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=213021155398697";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Basic Javascript
$(function(){
    // Trigger maximage
    jQuery('#maximage').maximage();
});

$(window).load(function(){
    var windowHeight = $(window).height();
    $('.page').height(windowHeight);
});

// Init navigation function.
$('.nav-item').click(function(){
    var clickedElement = $(this),
        targetItem = clickedElement.attr('href');

    primary_navigation_animation(clickedElement, targetItem, 800);

    return false;
});

// Function to animate sections of content
// by clicking a navigational element.
function primary_navigation_animation(clickedElement, targetItem, speed) {

    var clickedElementClass = clickedElement.attr('id');

    clickedElement.addClass(clickedElementClass + '-active');
    // scrolls the user to the selected navigation item.
    $('html, body').animate({
        scrollTop: $(targetItem).offset().top
    }, speed, function(){

    });
}



