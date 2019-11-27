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
      var bottom_of_object = $(this).offset().top + $(this).outerHeight() /2;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 800);
      }
    });
  }
  $('.spot-video').each(function(i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() /2;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object) {
      $(this).get(0).play();
    }
  });
});
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

var typed = new Typed('.contact-type-anim', {
  strings: ["email^500", "call^500", "follow^500"],
  loop: true,
  typeSpeed: 130
});
