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

const carouselSection = document.querySelector('.carousel-section')

const slideImages= [
    './img/img-1.jpeg',
    './img/img-2.jpeg',
    './img/img-3.jpeg',
    './img/img-4.jpeg',
    './img/img-5.jpeg',
    './img/img-6.jpeg'
]

carouselSection.innerHTML(

`   <div class="slide active">
        ${slideImages[1]}
    </div>
    <div class="slide">
        ${slideImages[2]}
    </div>
    <div class="slide">
        ${slideImages[3]}
    </div>
    <div class="slide">
        ${slideImages[4]}
    </div>
    <div class="slide">
        ${slideImages[5]}
    </div>
    <div class="slide">
        ${slideImages[6]}
    </div>
 `
)


