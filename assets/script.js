const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let numero = 0;

function ChangeSlides(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slides.length - 1;
    if (numero > slides.length - 1)
        numero = 0;
    document.getElementById("image").src = "assets/images/slideshow/" + slides[numero].image;
	document.getElementById("tagLine").innerHTML = slides[numero].tagLine;
}
