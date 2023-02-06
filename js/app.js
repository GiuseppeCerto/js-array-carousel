// MILESTONE 1 


const slideElements = document.getElementsByClassName('slide')

console.log(slideElements)

let indexActiveSlide = 0

const rightBtnElement = document.querySelector('.carousel-arrow.arrow-right')

console.log(rightBtnElement)

// Creare un carolsello con 6 img

rightBtnElement.addEventListener('click', function () {

	let slideCorrente = slideElements[indexActiveSlide]

	slideCorrente.classList.remove('active')

	indexActiveSlide += 1

	let prossimaSlide = slideElements[indexActiveSlide]

	prossimaSlide.classList.add('active')

	console.log('next slide', indexActiveSlide)

})


const leftBtnElement = document.querySelector('.carousel-arrow.arrow-left')

console.log(leftBtnElement)

// Creo il carosello con bottone left per il riavvolgimento delle slides

leftBtnElement.addEventListener('click', function () {

	let slideCorrente = slideElements[indexActiveSlide]

	slideCorrente.classList.remove('active')

	indexActiveSlide -= 1

	let precedenteSlide = slideElements[indexActiveSlide]

	precedenteSlide.classList.add('active')

	console.log('next slide', indexActiveSlide)
})

// Riproduco il markup delle slides con js


const slideImages= [
    './img/img-1.jpeg',
    './img/img-2.jpeg',
    './img/img-3.jpeg',
    './img/img-4.jpeg',
    './img/img-5.jpeg',
    './img/img-6.jpeg'
]

console.log(slideImages)

const carouselSection = document.getElementById('carousel-section')

console.log(carouselSection.innerHTML)

carouselSection.innerHTML = (

`<div class="slide active">
    <img src="${slideImages[0]}" alt="">
</div> 
        
<div class="slide">
    <img src="${slideImages[0]}" alt="">
</div>
        
<div class="slide">
    <img src="${slideImages[0]}" alt="">
</div>
        
<div class="slide">
    <img src="${slideImages[0]}" alt="">
</div>

<div class="slide">
    <img src="${slideImages[0]}" alt="">
</div>

<div class="slide">
    <img src="${slideImages[0]}" alt="">
</div>

<div class="carousel-arrow arrow-left">
    <i class="fa-solid fa-chevron-left"></i>
</div>

<div class="carousel-arrow arrow-right">
    <i class="fa-solid fa-chevron-right"></i>
</div>`
)

console.log(carouselSection.innerHTML)

