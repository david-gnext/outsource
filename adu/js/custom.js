var Nolly = {
	play: function () {
		var src = $('.carousel-item.active .movie-url').text();
		$('#myModal').modal('show');
        $('#myModal iframe').attr('src', src);
	},
	// navigation background
	naviBg: function () {
		if($('body').scrollTop() > 50) {			
			$(".navbar-light").removeClass("navbar-transparent");
		} else {
			$(".navbar-light").addClass("navbar-transparent");
		}
	}
};

$(document).ready(function () {
	Nolly.naviBg();
	$("#play_movie,#movie_slider .carousel-inner").on("click", function () {
		Nolly.play();
	});
	$('#myModal').on('hidden.bs.modal', function (e) {
  		$('#myModal iframe').removeAttr('src');
	})
	$(window).on('scroll', function() {
		Nolly.naviBg();
	});
});