$(document).ready(function(){

	$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});


//body parallax
	window.addEventListener('scroll', doParallax);
	function doParallax(){
    var positionY = window.pageYOffset/2;
    document.body.style.backgroundPosition = "0 -" + positionY + "px";
}




//mobile media query for menu
function myFunction(x) {
  if (x.matches) { // If media query matches
    $( ".container" ).click(function() {
  		$( "ul" ).fadeToggle("slow");
		$( "#headerLogo" ).fadeToggle(0);
	});
	$( "li").click(function(){
		$( "ul" ).fadeToggle("slow");
		$( "#headerLogo" ).fadeToggle("slow");
	});
  } else {
   
  }
}

var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)

//mobile menu toggle



	$('#introDiv').slick({
	autoplaySpeed: 4000,
	speed: 3000,
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false
  });
  
  $('#slideShow').slick({
	autoplaySpeed: 4000,
	speed: 3000,
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true
  });

  // The debounce function receives our function as a parameter
const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}

// Listen for new scroll events, here we debounce our `storeScroll` function
document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
storeScroll();


//Contact div
$( "#contactDisplay1" ).click(function() {
		$( "#contactDisplay2").fadeToggle("slow");
	});

$( "#contact" ).hover(function() {
		$( "#contactDisplay2").fadeToggle("fast");
	});


})

