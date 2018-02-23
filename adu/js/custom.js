// 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player,src;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtube_player', {
          height: '390',
          width: '640',
          videoId: src,
					playerVars: { 'autoplay': 1},
          events: {
            'onReady': onPlayerReady
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      function stopVideo() {
        player.stopVideo();
      }
var Nolly = {
	init: function () {
		Nolly.naviBg();
	},
	play: function () {
		src = $('.carousel-item.active .movie-url').text();
		$('#myModal').modal('show');
		var tag = document.createElement('script');

		 tag.src = "https://www.youtube.com/iframe_api";
		 var firstScriptTag = document.getElementsByTagName('script')[0];
		 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
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
	},
	loadMore: function () {
		$("#video_list > div").each(function(i) {
			if(i == 0) return;
			$("#video_list").append($(this)[0].outerHTML);
		})
	}
};

$(document).ready(function () {
	Nolly.init();
	$("#play_movie,#movie_slider .carousel-inner").on("click", function () {
		Nolly.play();
	});
	$('#myModal').on('hidden.bs.modal', function (e) {
  		$('#myModal iframe').remove();
			$('#myModal .modal-dialog').append('<div id="youtube_player"></div>');
	})
	$(window).on('scroll', function() {
		Nolly.naviBg();
	});
	$(".navbar-toggler").on('click', function() {
		Nolly.isMobileNaviOpen();
	});
	$("#load_more").on('click', function() {
		Nolly.loadMore();
	});
});
