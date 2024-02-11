window.addEventListener('scroll', function() {
    var historySection = document.getElementById('history-section');
    var navbar = document.getElementById('navbar');
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-item a');
    var visibleLogo = document.getElementById('visibleLogo');
    var invisibleLogo = document.getElementById('invisibleLogo');

    if (historySection.getBoundingClientRect().top <= 0) {
        navbar.classList.add('bg-slide-in');
        navbarLinks.forEach(function(link) {
            link.style.color = '#414f6b';
            link.style.textDecorationColor = '#414f6b';
        });
        visibleLogo.classList.add('hide');
        invisibleLogo.classList.remove('hide');
    } else {
        navbar.classList.remove('bg-slide-in');
        navbarLinks.forEach(function(link) {
            link.style.color = 'white';
            link.style.textDecorationColor = 'white';
            link.style.borderBottomColor = 'white';
        });
        visibleLogo.classList.remove('hide');
        invisibleLogo.classList.add('hide');
    }
});




$(document).ready(function() {
    var slideCount = $(".slide").length;
    var currentIndex = 0;

    $(".dot").on("click", function() {
        var index = $(this).index();
        currentIndex = index * 4;
        updateCarousel();
    });

    function updateCarousel() {
        var translateValue = -currentIndex * $(".slide").width();
        $(".carousel").css("transform", "translateX(" + translateValue + "px)");

        $(".dot").removeClass("active");
        $(".dot:eq(" + (currentIndex / 4) + ")").addClass("active");
    }
});



function toggleBackground(element) {
    $('.selected').removeClass('selected').addClass('unselected');
    $(element).addClass('selected').removeClass('unselected');

    if ($(element).hasClass('Team-Mountain-text1')) {
        $('.Tab1').removeClass('hide');
        $('.Tab2').addClass('hide');
    } else {
        $('.Tab2').removeClass('hide');
        $('.Tab1').addClass('hide');
    }
}





