// Variables
var slidePosition = 0;																		// Set initial slide position
var iw = document.getElementById('imgContainer').children[0].offsetWidth;					// Image width
var ti = document.getElementById('imgContainer').getElementsByTagName('img').length;		// Total number of images withing carousel
var cw = document.getElementById('window').offsetWidth;										// Container width
var vi = Math.floor(cw / iw);																// Viewable images
var resetSlide = (ti - vi);																	// Slide position to reset slidePosition to 0 without any white space

// prevBtn function
function prevBtn() {
	slidePosition++;															// Iterate current slide

	if (slidePosition > 0) {													// If slidePosition is showing the first image position
		slidePosition = (resetSlide - (resetSlide * 2));						// Set slidePosition to the last image position 
	}

	var slideAnim = (iw * slidePosition);										// Calculate animation distance (#px from left)

	document.getElementById('imgContainer').style.left = slideAnim + "px";		// Animate container
}

// nextBtn function
function nextBtn() {
	slidePosition--;															// Iterate current slide

	if (slidePosition <= resetSlide - ((resetSlide * 2) + 1) ) {				// After last images comes into view
		slidePosition = 0;														// Set slidePosition to the first image position
	}

	var slideAnim = (iw * slidePosition);										// Calculate animation distance (#px from left)

	document.getElementById('imgContainer').style.left = slideAnim + "px";		// Animate container
}

// Controls Event Listeners
document.getElementById('prev').addEventListener('click', prevBtn, false);
document.getElementById('next').addEventListener('click', nextBtn, false);