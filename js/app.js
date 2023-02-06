// MILESTONE 1 


const slideElements = document.getElementsByClassName('slide')

let indexActiveSlide = 0

// Riproduco il markup delle slides con js


const slideImages= [
    './img/img-1.jpeg',
    './img/img-2.jpeg',
    './img/img-3.jpeg',
    './img/img-4.jpeg',
    './img/img-5.jpg',
    './img/img-6.jpg'
]


const carouselSection = document.getElementById('carousel-section')


carouselSection.innerHTML += (

`
<div class="slide active">
    <img src="${slideImages[0]}" alt="">
</div> 
        
<div class="slide">
    <img src="${slideImages[1]}" alt="">
</div>
        
<div class="slide">
    <img src="${slideImages[2]}" alt="">
</div>
        
<div class="slide">
    <img src="${slideImages[3]}" alt="">
</div>

<div class="slide">
    <img src="${slideImages[4]}" alt="">
</div>

<div class="slide">
    <img src="${slideImages[5]}" alt="">
</div>
`
)

const rightBtnElement = document.getElementById('btnright')


// Creare un carolsello con 6 img

rightBtnElement.addEventListener('click', function () {

    console.log("Bottone destro")

	let slideCorrente = slideElements[indexActiveSlide]

	slideCorrente.classList.remove('active')

	indexActiveSlide += 1

	let prossimaSlide = slideElements[indexActiveSlide]

	prossimaSlide.classList.add('active')

    if(indexActiveSlide >= 5){

        slideElements[0]

        prossimaSlide.classList.add('active')

    }

})


const leftBtnElement = document.getElementById('btnleft')


// Creo il carosello con bottone left per il riavvolgimento delle slides

leftBtnElement.addEventListener('click', function () {

    console.log("Bottone sinistro")

	let slideCorrente = slideElements[indexActiveSlide]

	slideCorrente.classList.remove('active')

	indexActiveSlide -= 1

	let precedenteSlide = slideElements[indexActiveSlide]

	precedenteSlide.classList.add('active')

	console.log('next slide', indexActiveSlide)

})

// console.log(carouselSection.innerHTML)

