var slideShow = document.getElementById("slideshow");
var slides = slideShow.getElementsByTagName("img");
var slideShowTexts = document.getElementById("slideshowtexts");
console.log(slideShowTexts);
var slidesText = slideShowTexts.getElementsByTagName("div");
console.log(slides);
var index = 0;

function nextSlide() {
    slides[index].classList.remove('active');
    slidesText[index].classList.remove('active');
    console.log("index: " + (index+1) + " slides.length: " + slides.length);

    index = (index + 1) % slides.length;
    console.log(index);
    slides[index].classList.add('active');
    slidesText[index].classList.add('active');
}

function prevSlide() {
    slides[index].classList.remove("active");
    slidesText[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
    slidesText[index].classList.add('active');
}