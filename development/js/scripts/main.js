// Variables
var slidePosition = 0;															// Set initial slide position

var container = document.getElementById('imgContainer');						// Container Element
var viewport = document.getElementById('viewport');								// viewport Element
var ul = container.getElementsByTagName('ul')[0];								// 1st ul Element
var img = ul.getElementsByTagName('li');										// All li Elements
var li = img[0];																// 2st li Element

var imgWidth = li.offsetWidth;													// Image width
var totalImg = img.length;														// Total number of images withing carousel
var containerWidth = viewport.offsetWidth;										// Container width
var viewableImg = Math.floor(containerWidth / imgWidth);						// Viewable images
var resetSlide = (totalImg - viewableImg);										// Slide position to reset slidePosition to 0 without any white space

// prevBtn function
function prevBtn() {
	slidePosition++;															// Iterate current slide

	if (slidePosition > 0) {													// If slidePosition is showing the first image position
		slidePosition = (resetSlide - (resetSlide * 2));						// Set slidePosition to the last image position 
	}

	var slideAnim = (imgWidth * slidePosition);									// Calculate animation distance (#px from left)

	container.style.left = slideAnim + "px";									// Animate container
}

// nextBtn function
function nextBtn() {
	slidePosition--;															// Iterate current slide

	if (slidePosition <= resetSlide - ((resetSlide * 2) + 1) ) {				// After last images comes into view
		slidePosition = 0;														// Set slidePosition to the first image position
	}

	var slideAnim = (imgWidth * slidePosition);									// Calculate animation distance (#px from left)

	container.style.left = slideAnim + "px";									// Animate container
}

// Controls Event Listeners
document.getElementById('prev').addEventListener('click', prevBtn, false);
document.getElementById('next').addEventListener('click', nextBtn, false);