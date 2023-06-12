const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// eventlistener 

let suivant = document.getElementById('suivant');
suivant.addEventListener("click", () => { nouvelIndex = changeSlide( nouvelIndex + 1, nouvelIndex)});

let precedent = document.getElementById('precedent');
precedent.addEventListener("click", () => { nouvelIndex = changeSlide(nouvelIndex - 1, nouvelIndex)});


// creation de mes dots

let dotContainer = document.querySelector('.dots');
let dots = [];

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('div');
	dotContainer.appendChild(dot);
	dot.classList.add('dot');
	dots.push(dot); 
};

// fonction changement image

const banner = document.getElementById("banner");

const image = document.createElement("img");
image.classList.add("banner-img");
banner.appendChild(image);

const tagLine = document.createElement("p");
banner.appendChild(tagLine);

let nouvelIndex = changeSlide (0, 0)

function changeSlide( nouvelIndex, ancienIndex) {

	if ( nouvelIndex < 0 ) { nouvelIndex = slides.length -1};
	if ( nouvelIndex > slides.length - 1) { nouvelIndex = 0};

	tagLine.innerHTML = slides[nouvelIndex].tagLine;
	image.src = slides[nouvelIndex].image;

	dots[ancienIndex].classList.remove('dot_selected');
	dots[nouvelIndex].classList.add('dot_selected');
	
	return nouvelIndex;
}