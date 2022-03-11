$(function() {
/*  Smooth Scroll  */
var scroll = new SmoothScroll('a[href*="#"]', {
	// Selectors
	header: '[data-scroll-header]',
	topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
});


$("#ProductSection div[id^='ProductSection']").addClass('tab-pane');
$("#ProductSection div[id^='ProductSection']").addClass('fade');
$('#mainmenu .dropdown').eq(0).find('a').addClass('single');
$('#mainmenu_m .tab-pane').eq(0).find('a').addClass('single');
$('#mainmenu .dropdown').last().find('a').addClass('link');

$('.switchNav a').add($(".tab-content .dropdown a")).on('click', function(e) {
	$(this).tab('show');
	var theThis = $(this);
	$('.switchNav a').removeClass('active');
	theThis.addClass('active');

	if ($(this).hasClass('single') === false) {
		$("#TopSection div[id^='TopSection']").addClass('tab-pane');
		$("#TopSection div[id^='TopSection']").removeClass('active');
		var anchor = document.querySelector('#ProductSection');
		scroll.animateScroll(anchor);
	} else {
		$("#TopSection div[id^='TopSection']").removeClass('tab-pane');
		$("#ProductSection div[id^='ProductSection']").addClass('tab-pane');
		$("#ProductSection div[id^='ProductSection']").addClass('fade');
		$("#ProductSection div[id^='ProductSection']").removeClass('active');
		if ($($.attr(this, 'href')).length > 0) {
			goAnchor($($.attr(this, 'href')));
		}
	}

});


/*  Nav collapse  */

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

/*  Carousel  */

$('.carousel').carousel({
  interval: 6000,
})

/* go-top */
$(window).on('scroll',function() {
	const scrollTop = $(window).scrollTop();
	if (scrollTop > 500) {
		$('#go-top').show();
	} else {
		$('#go-top').hide();
	}
});


function goAnchor(element = null) {
	let offset = '';

	if (element === null) {
			offset = 0;
	} else {
			offset = $(element).offset().top - 250;
	}
	$('html,body').animate({'scrollTop': offset},'swing');
}

});