/*
Khaled Rayan 2020
*/

// Scroll to anchor ID using scrollTO event
function scrollInto(itemId) {
  var elmnt = document.getElementById("section"+itemId);
  elmnt.scrollIntoView({behavior: 'smooth'});
}

// back to top
const scrollToTop = () => {
  const scrolling = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrolling > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, scrolling - scrolling / 50);
  }
};
// active section
window.onscroll = function() {activeSection()};

function activeSection() {
  if (document.documentElement.scrollTop > 50 && document.documentElement.scrollTop < 1000) {
    document.getElementById("section1").className = "your-active-class";
	document.getElementById("section2").className = "";
    document.getElementById("section3").className = "";

  } 
  else if (document.documentElement.scrollTop > 1000 && document.documentElement.scrollTop < 1650) {
    document.getElementById("section2").className = "your-active-class";
	document.getElementById("section1").className = "";
    document.getElementById("section3").className = "";

  } 
else if (document.documentElement.scrollTop > 1650) {
    document.getElementById("section3").className = "your-active-class";
	document.getElementById("section2").className = "";
    document.getElementById("section1").className = "";

  }  
  else {
    document.getElementById("section1").className = "";
    document.getElementById("section2").className = "";
    document.getElementById("section3").className = "";
  }
}
