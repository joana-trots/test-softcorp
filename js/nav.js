$(document).ready(function(){

  // change header bg-color on scroll
  $(window).scroll(function(){
      if($(window).scrollTop() > 120){
          $("header").css({"background-color":"rgba(16, 16, 29, 1)"});   
      }
      else{
          $("header").css({"background-color":"rgba(16, 16, 29, .9)"});
      }
  })

  // hamburger menu
  $('.hamburger-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
		$('.mobile-menu-overlay').toggleClass('visible');
	})
	$('.mobile-menu-overlay > ul > li > a').on('click', function () {
		$('.hamburger-menu').removeClass('animate');
		$('.mobile-menu-overlay').removeClass('visible');
	})
})