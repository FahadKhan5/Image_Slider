const slides = document.querySelectorAll(".slide");

counter = 0;

slides.forEach (
	(slide, index) => {
		slide.style.left = `${index * 100}%`
	});

const goBack = () => {
	if (counter > 0) {
	counter --;
	slideImage();
	}
}

const goNext = () => {
	if (counter < 3) { //if you want to add more pictures < value +
		counter ++;
		slideImage();
}
}
const slideImage = () => {
	slides.forEach(
		(slide) => {
			slide.style.transform = `translateX(-${counter*100}%)`
		});
}
