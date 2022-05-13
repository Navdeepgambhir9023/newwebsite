	$(document).ready(function() {
	  $(window).scroll(function() {
	    // sticky navbar on scroll script
	    if (this.scrollY > 20) {
	      $('.navbar').addClass("sticky");
	    } else {
	      $('.navbar').removeClass("sticky");
	    }

	    // scroll-up button show/hide script
	    if (this.scrollY > 500) {
	      $('.scroll-up-btn').addClass("show");
	    } else {
	      $('.scroll-up-btn').removeClass("show");
	    }
	  });

	  // slide-up script
	$('.scroll-up-btn').click(function() {
	  $('html').animate({
	    scrollTop: 0
	  });
	  // removing smooth scroll on slide-up button click
	  $('html').css("scrollBehavior", "auto");
	});


	  var windowHeight = $(window).height(),
	    topSection = $('master-section');
	  topSection.css('height', windowHeight);

	  $(window).resize(function() {
	    var windowHeight = $(window).height();
	    topSection.css('height', windowHeight);
	  });
	  // scroll-up button show/hide script
	  if (this.scrollY > 500) {
	    $('.scroll-up-btn').addClass("show");
	  } else {
	    $('.scroll-up-btn').removeClass("show");
	  }
	});
