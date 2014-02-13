// Basic Javascript
$(function(){
  // Trigger maximage
  jQuery('#maximage').maximage();


});

$(function(){
  jQuery('#maximage').maximage({
    cycleOptions: {
      fx: 'fade',
      // Speed has to match the speed for CSS transitions
      speed: 1000, 
      timeout: 0,
      prev: '#arrow_left',
      next: '#arrow_right',
      pause: 1
    },
    onFirstImageLoaded: function(){
      jQuery('#maximage').fadeIn('fast');
      jQuery('.image-loader').hide();
      var ImageHeight  = jQuery('#maximage').height(),
        num = 55,
        newImageHeight = ImageHeight + 55;
      jQuery('#landing-page').height(newImageHeight);
      jQuery('#new-arrivals').show().css('height', newImageHeight);
      jQuery('#maximage').css('margin-top', num);

    },
    // cssBackgroundSize might be causing choppiness in retina display safari
    cssBackgroundSize: false
  });
});

// Init navigation function.
$('.nav-item').click(function(){
  var clickedElement = $(this),
      targetItem = clickedElement.attr('href');

  primary_navigation_animation(clickedElement, targetItem, 800);

  return false;
});

$(function() {
  var ImageHeight = $('#maximage').height();
  setTimeout(function doItAgain() {
    if (ImageHeight <= 0) {
      setTimeout(doItAgain, 10);
      console.log('hello');
    }
    else {
      console.log('hello');
    }
  //$('#landing-page').height(ImageHeight);
  }, 10);
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



