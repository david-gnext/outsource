var Nolly = {
	init: function () {
		Nolly.naviBg();
	},
	play: function () {
		var src = $('.carousel-item.active .movie-url').text();
		$('#myModal').modal('show');
        $('#myModal iframe').attr('src', src);
	},
	// navigation background
	naviBg: function () {
		if($('body').scrollTop() > 50) {
			$(".navbar-light").hide();
		} else {
			$(".navbar-light").show();
		}
	},
	isMobileNaviOpen: function () {
		if($(".navbar-toggler").attr("aria-expanded") != 'true') {
			$(".navbar-toggler span").hide();
			$(".navbar-toggler svg").show();
		} else {
			$(".navbar-toggler span").show();
			$(".navbar-toggler svg").hide();
		}
	}
};

$(document).ready(function () {
	Nolly.init();
	$("#play_movie,#movie_slider .carousel-inner").on("click", function () {
		Nolly.play();
	});
	$('#myModal').on('hidden.bs.modal', function (e) {
  		$('#myModal iframe').removeAttr('src');
	})
	$(window).on('scroll', function() {
		Nolly.naviBg();
	});
	$(".navbar-toggler").on('click', function() {
		Nolly.isMobileNaviOpen();
	});
});
