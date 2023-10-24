const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//création variable

const totalSlides = slides.length - 1
let visualSlide = 0

//mémo: action au clic sur fléche gauche
// on veut au clic que image + tagLine + dot reculent de -1
const buttonArrowLeft = document.querySelector(".arrow_left")
buttonArrowLeft.addEventListener("click", () => {
	if (visualSlide <= totalSlides && visualSlide > 0) {
		visualSlide--
	} else {
		visualSlide = totalSlides
	}
	let bannerImg = document.querySelector(".banner-img")
	bannerImg.src = "./assets/images/slideshow/" + slides[visualSlide].image
	let tagLine = document.querySelector("p")
	tagLine.innerHTML = slides[visualSlide].tagLine
})

//mémo: action au clic sur fléche droite
// on veut au clic que (image + tagLine + dot) avance de +1

const buttonArrowRight = document.querySelector(".arrow_right")
buttonArrowRight.addEventListener("click", () => {
	if (visualSlide < totalSlides) {
		visualSlide++
	} else {
		visualSlide = 0
	}

	let bannerImg = document.querySelector(".banner-img")
	bannerImg.src = "./assets/images/slideshow/" + slides[visualSlide].image// permet de changer d'image au clic
	let tagLine = document.querySelector("p")
	tagLine.innerHTML = slides[visualSlide].tagLine // idem permet de changer le texte de l'image au clic


})

let bulletPoint = document.querySelectorAll(".dot")
console.log(bulletPoint)
bulletPoint.classlist.add(".dot_selected")

