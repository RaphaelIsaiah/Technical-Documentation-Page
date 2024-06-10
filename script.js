let navPane = document.getElementById("nav-pane");
let mobHeader = document.getElementById("mob-header");
let cancelBtn = document.getElementById("fa-x");
let mainSegment = document.getElementById("main");

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
    // If the media query matches (viewport width <= 768px)
    // At this point the hamburger icon will display according to the css styling rule set.
    // And the main navigation menu for viewports > 760px will not be displayed.
    mobHeader.style.display = "flex";
    navPane.style.display = "none";
    mainSegment.style.margin = "0";
    cancelBtn.style.display = "block";
  } else {
    mobHeader.style.display = "none";
    navPane.style.display = "block";
    navPane.style.width = "25%";
    cancelBtn.style.display = "none";
    mainSegment.style.marginLeft = "26.4%";
    // Otherwise (viewport width > 768px)
  }
};

// Create a MediaQueryList object for the specified media query
var x = window.matchMedia("(max-width: 768px)");

// Call the listener function initially
handleMediaQuery(x);

// Attach the listener function to changes in the media query state
x.addEventListener("change", handleMediaQuery);
