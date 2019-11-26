/*jshint esversion: 6 */

$(".navbar-toggler").click(function() {
  $(".nav-icon").toggleClass("close");
});

window.addEventListener("load", function() {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
  $(".navbar-brand").addClass("animated fadeIn");
  $(".home-text").addClass("animated fadeInRight slow delay-1s");
  $(".project-text").addClass("animated fadeInRight slow delay-1s");
  $(".nav-item").addClass("animated fadeInDown");
  $(".projects").addClass("animated fadeIn");
  $(".nav-toggler-icon").addClass("animated fadeIn delay-2s");
});

$(document).ready(function() {
  /* Every time the window is scrolled ... */
  $(window).scroll(function() {
    if ($(window).width() > 1024) {
    /* Check the location of each desired element */
    $('.hideme').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 800);
      }
    });
  }});
  if ($(window).width() < 1024) {
    $('.home-project').addClass("animated fadeIn delay-3s");
  }else if ($(window).width() > 1024){
    $('.home-project').removeClass("animated fadeIn delay-3s");
  }
});

// $(document).ready(function() {
//   if ($(window).width() < 1024) {
//     $('.home-project').addClass("animated fadeIn delay-3s");
//   }else if ($(window).width() > 1024){
//     $('.home-project').removeClass("animated fadeIn delay-3s");
//   }
//
// });


$(".return-project").hover(function(){
  $(this).html("<img src='img/branding/arrow-red.png' class='link-arrow'>back to projects");
  }, function(){
  $(this).html("<img src='img/branding/arrow-black.png' class='link-arrow'>back to projects");
});

(function($){
    /* Store the original positions */
    var d1 = $('.one');
    var d1orgtop = d1.position().top;
    var d2 = $('.two');
    var d2orgtop = d2.position().top;
    var d3 = $('.three');
    var d3orgtop = d3.position().top;
    var d4 = $('.four');
    var d4orgtop = d.position().top;
    var d5 = $('.five');
    var d5orgtop = d5.position().top;
    var d6 = $('.six');
    var d6orgtop = d6.position().top;
    var d7 = $('.seven');
    var d7orgtop = d7.position().top;

    /* respond to the scroll event */
    $(window).scroll(function(){
        /* get the current scroll position */
        var st = $(window).scrollTop();

        /* change classes based on section positions */
        if (st >= d1orgtop) {
            d1.addClass('latched');
        } else {
            d1.removeClass('latched');
        }
        if (st >= d2orgtop) {
            d2.addClass('latched');
        } else {
            d2.removeClass('latched');
        }
        if (st >= d3orgtop) {
            d3.addClass('latched');
        } else {
            d3.removeClass('latched');
        }
        if (st >= d4orgtop) {
            d4.addClass('latched');
        } else {
            d4.removeClass('latched');
        }
        if (st >= d5orgtop) {
            d5.addClass('latched');
        } else {
            d5.removeClass('latched');
        }
        if (st >= d6orgtop) {
            d6.addClass('latched');
        } else {
            d6.removeClass('latched');
        }
        if (st >= d7orgtop) {
            d7.addClass('latched');
        } else {
            d7.removeClass('latched');
        }
    });

})(window.jQuery);
