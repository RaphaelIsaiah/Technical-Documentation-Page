const navBar = document.getElementById("navbar");

// Functionality to handle changes in the media query
const handleMediaQuery = (x) => {
  if (x.matches) {
    // If the media query matches (viewport width <= 760px)
    // At this point the hamburger icon will display according to the css styling rule set.
    // And the main navigation menu for viewports > 760px will not be displayed.
    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        navBar.style.top = "0";
      } else {
        navBar.style.top = "-200px";
      }
      prevScrollpos = currentScrollPos;
    };
  } else {
    // Otherwise (viewport width > 760px)
    navBar.style.top = "0";
  }
};

// Create a MediaQueryList object for the specified media query
var x = window.matchMedia("(max-width: 815px)");

// Call the listener function initially
handleMediaQuery(x);

// Attach the listener function to changes in the media query state
x.addEventListener("change", handleMediaQuery);
