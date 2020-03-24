function parallax() {
	var scrolled = $(window).scrollTop() + 1;
	$('.parallax').css('background-position', '0' + -(scrolled * 0.3) + 'px');
}

$(window).scroll(function (e) {
	parallax();
});


/* our menu*/
$('#myTab a').on('click', function (e) {
	e.preventDefault()
	$(this).tab('show')
})




$(window).scroll(function () {
	/* scrollTop*/
const navbar = $('.navbar');
const aboutHeight = $('#about');
	if (aboutHeight[0].getBoundingClientRect().top < 0) {
		navbar.addClass('black');
	} else {
		navbar.removeClass('black');
	}
});

