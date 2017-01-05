// scroll-bar position save variation (px) 
var	currentScrollTop = 0;

// it's asynchronous jQuery, window load needed first
window.onload = function() {
		// when page reloaded
		scrollController();

		// Run when it's scrolling
		$(window).on('scroll', function () {
			scrollController();
		});
}

// Function; control menu-position
function scrollController() {
	currentScrollTop = $(window).scrollTop();
	if (currentScrollTop < 150) {
		$('#menu').css('top', 150-(currentScrollTop));
		if	($('#menu').hasClass('fixed')) {
			 $('#menu').removeClass('fixed');
			 $('#menu .menu-icon').removeClass('on');
		}
	}	else	{
		  if	(!$('#menu').hasClass('fixed'))	{
				 $('#menu').css('top', 0);
				 $('#menu').addClass('fixed');
				 $('#menu .menu-icon').addClass('on');	
			}		

		}

} 
