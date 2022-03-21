let loading = document.querySelector('.loading')
let imgGif = document.querySelector('.loading-img-gif')
let slider = document.querySelector('.slideshow-container ')
let sliderBtn = document.querySelector('.slider-btn')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let dot1 = document.querySelector('.dot1')
let dot2 = document.querySelector('.dot2')
let dot3 = document.querySelector('.dot3')
let dot4 = document.querySelector('.dot4')
let num = 0
    //?=======================================================
    //!loading page
setTimeout(loadingPage, 6400)

function loadingPage() {
    imgGif.setAttribute('src', './img/zed.png')
}
setTimeout(loadingPage, 6400)

function loadingPageOf() {
    loading.style.opacity = '0'
}
setTimeout(loadingPageOff, 6350)

function loadingPageOff() {
    loading.style.display = 'none'
    slider.style.display = 'block'
}
//?=============================================
//! Slider
let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
    showSlides((slideIndex += n))
}

function currentSlide(n) {
    showSlides((slideIndex = n))
}

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName('mySlides')
    let dots = document.getElementsByClassName('dot')
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }
    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].className += ' active'
}
next.addEventListener('click', clickNext)
let contBtn = document.querySelector('.slider-btn')

function clickNext() {
    num += 1
    if (num == 0) {
        prev.style.display = 'none'
    } else if (num == 3) {
        next.style.display = 'none'
        contBtn.style.display = 'block'
    } else {
        prev.style.display = 'block'
        next.style.display = 'block'
    }
}
prev.addEventListener('click', clickPrev)

function clickPrev() {
    next.style.display = 'block'
    num -= 1
    if (num == 0) {
        prev.style.display = 'none'
    } else if (num != 3) {
        contBtn.style.display = 'none'
    }
}
//?==================================================
//!

dot1.addEventListener("click", () => {
    num = 0;
    contBtn.style.display = 'none';
    prev.style.display = 'none';
    next.style.display = 'block';

})
dot2.addEventListener("click", () => {
    num = 1;
    contBtn.style.display = 'none';
    prev.style.display = 'block';
    next.style.display = 'block';

})
dot3.addEventListener("click", () => {
    num = 2;
    contBtn.style.display = 'none';
    prev.style.display = 'block';
    next.style.display = 'block';


})
dot4.addEventListener("click", () => {
    num = 3;
    contBtn.style.display = 'block';
    prev.style.display = 'block';
    next.style.display = 'none';


})
let v = document.querySelector('.loading-video')
document.addEventListener('DOMContentLoaded', getTasksOnLoad)

function getTasksOnLoad() {}