// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* fixing anchor jumps */

var nav_height = 70; // pixels

$(window).bind('hashchange', function(e){
    if($(location.hash).hasClass('anchor')){
        scrollBy(0, nav_height);
    }
    return false;
});
$(document).ready(function(){
    if($(location.hash).hasClass('anchor')){
        $('html,body').animate({
            scrollTop: $(location.hash).offset().top - nav_height - 10
        }, 10 );
    }
});