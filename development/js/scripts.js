// Variables
var currentSlide = 0;																		// Set initial slide position
var imgWidth = document.getElementById('imgContainer').children[0].offsetWidth;				// Find width of first image
var imgTotal = document.getElementById('imgContainer').getElementsByTagName('img').length;	// Find number of images withing carousel

// prevBtn function
function prevBtn() {
	currentSlide++;															// Iterate current slide

	if (currentSlide > 0) {													// If currentSlide is showing the first image position
		currentSlide = (imgTotal - (imgTotal * 2)) + 1;						// Set currentSlide to the last image position
	}

	var slideAnim = (imgWidth * currentSlide);								// Calculate animation distance (#px from left)
	document.getElementById('imgContainer').style.left = slideAnim + "px";	// Animate container
}

// nextBtn function
function nextBtn() {
	currentSlide--;															// Iterate current slide

	if (currentSlide <= imgTotal - (imgTotal * 2)) {						// If currentSlide is showing the last image position
		currentSlide = 0;													// Set currentSlide to the first image position
	}

	var slideAnim = (imgWidth * currentSlide);								// Calculate animation distance (#px from left)
	document.getElementById('imgContainer').style.left = slideAnim + "px";	// Animate container
}

// Controls Event Listeners
document.getElementById('prev').addEventListener('click', prevBtn, false);
document.getElementById('next').addEventListener('click', nextBtn, false);