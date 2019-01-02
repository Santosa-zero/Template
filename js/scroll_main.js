$(document).ready(function() {
    $('href').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable

            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 600, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
      $(".navbar").css("background" , "white");
      $(".navbar-brand").css("color" , "#007bff");
      $(".nav-link").css("color" , "black");
    }

    else{
        $(".navbar").css("background" , "transparent");  
        $(".navbar-brand").css("color" , "white");	
        $(".nav-link").css("color" , "white");
    }

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('.nav-link.active').removeClass('active');
                    $('.nav-link').eq(i).addClass('active');
            }
    });
}).scroll();