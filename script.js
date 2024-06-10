let navPane = document.getElementById("nav-pane");
let mobHeader = document.getElementById("mob-header")

function openNav() {
  navPane.style.display = "block";
  navPane.style.width = "100%";
}

function closeNav() {
  navPane.style.width = "0%";
  navPane.style.display = "none";
}

const handleMediaQuery = (x) => {
  if (x.matches) {
    // If the media query matches (viewport width <= 760px)
    // At this point the hamburger icon will display according to the css styling rule set.
    // And the main navigation menu for viewports > 760px will not be displayed.
   mobHeader.style.display = "flex"
   navPane.style.display = "none"
  } else {
    mobHeader.style.display = "none"
    navPane.style.display = "block"
    // Otherwise (viewport width > 760px)
  }
};

// Create a MediaQueryList object for the specified media query
var x = window.matchMedia("(max-width: 768px)");

// Call the listener function initially
handleMediaQuery(x);

// Attach the listener function to changes in the media query state
x.addEventListener("change", handleMediaQuery);
