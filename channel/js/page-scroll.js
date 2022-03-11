/*  Smooth Scroll  */
var scroll = new SmoothScroll('a[href*="#"]', {
	// Selectors
	header: '[data-scroll-header]',
	topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
});


var anchor = "";

$('.switchNav a').on('click', function(e) {
	e.preventDefault();
	$(this).tab('show');
	var theThis = $(this);
	$('.switchNav a').removeClass('active');
	theThis.addClass('active');

	anchor = document.querySelector('#Category');
	scroll.animateScroll(anchor);	
  
});


/*  Nav collapse  */

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

/*  Carousel  */

$('.carousel').carousel({
  interval: 6000,
})

/*  Follow Button  */

$(".btn-follow.far.fa-heart").click(function() {
  $(this).toggleClass("fa");
});

/* go-top */
$(window).on('scroll',function() {
	const scrollTop = $(window).scrollTop();
	if (scrollTop > 500) {
		$('#go-top').show();
	} else {
		$('#go-top').hide();
	}
});

