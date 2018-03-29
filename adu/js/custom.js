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
        if ($(".navbar-toggler").attr("aria-expanded") == 'true') {
            return;
        }
        if ($('body').scrollTop() > 50) {
            $(".navbar-light").hide();
        } else {
            $(".navbar-light").show();
        }
    },
    isMobileNaviOpen: function () {
        if ($(".navbar-toggler").attr("aria-expanded") != 'true') {
            $(".navbar-toggler span").hide();
            $(".navbar-toggler i").show();
        } else {
            $(".navbar-toggler span").show();
            $(".navbar-toggler i").hide();
        }
    },
    loadMore: function () {
        $("#video_list > div").each(function (i) {
            if (i == 0)
                return;
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
        var iframe = '<iframe width="100%" height="90%" frameborder="0" allowscriptaccess="always" allowfullscreen="" class="card"></iframe>'
        $('#myModal .modal-dialog').append(iframe);
    })
    $(window).on('scroll', function () {
        Nolly.naviBg();
    });
    $(".navbar-toggler").on('click', function () {
        Nolly.isMobileNaviOpen();
    });
    $("#load_more").on('click', function () {
        Nolly.loadMore();
    });
    $(".nav-link .dropdown-toggle").on("click", function () {
        if ($(".navbar-toggler").attr("aria-expanded") == 'true') {
            if (!$(this).attr("menu-first")) {
                $(this).attr("menu-first", 1);
                return;
            }
            // var menu = $(this).parent().find(".dropdown-menu");
            // if (menu.css("display") == 'none') {
            //     menu.css('display', 'block');
            // } else {
            //     menu.hide();
            // }
        }
    });
    $("#dropdownAboutButton").on("click",function() {
        var menu = $(this).parent().find('.dropdown-menu');
        if($(this).attr('aria-expanded') == 'true') {
            menu.hide();
        } else {
            menu.show();
        }
    });
    $(".dropdown.nav-link").hover(function() {
        $(this).find('.dropdown-menu').show();
    },function() {
        $(this).find('.dropdown-menu').hide();
    });
});
