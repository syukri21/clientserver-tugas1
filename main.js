
var fog =  document.querySelectorAll(".fog")[0];
var bars = document.querySelectorAll(".bars")[0];
var sidebar = document.querySelectorAll(".sidebar")[0];




function scrollClick(e, target) {
	var offsetTop = document.querySelectorAll(target)[0].offsetTop - 50
	e.preventDefault();
	window.scrollTo({
		top: offsetTop,
		behavior: "smooth"
	})
}



var scrollNavigasi = function() {

	var aboutme = document.querySelectorAll(".aboutme-btn")[0];
	var contactme = document.querySelectorAll(".contactme-btn")[0];
	var gallery = document.querySelectorAll(".gallery-btn")[0];
	var logo  = document.querySelectorAll(".logo")[0];
	var aboutmeside = document.querySelectorAll(".about-me-side")[0];
	var contactmeside = document.querySelectorAll(".contact-me-side")[0];
	var galleryside = document.querySelectorAll(".gallery-side")[0];


	aboutme.addEventListener("click", function(e){
		scrollClick(e, ".about-me");
	});

	contactme.addEventListener("click", function(e) {
		scrollClick(e, ".contact-me");
	})


	gallery.addEventListener("click", function(e){
		scrollClick(e, ".gallery");
	})

	logo.addEventListener("click", function(e){
		scrollClick(e, "header")
	})

	galleryside.addEventListener("click", function(e){
		scrollClick(e, ".gallery");
		sidebar.style.display = "none";
	})

	aboutmeside.addEventListener("click", function(e){
		scrollClick(e, ".about-me");
		sidebar.style.display ="none"
	})

	contactmeside.addEventListener("click", function(e){
		scrollClick(e, ".contact-me");
		sidebar.style.display = "none";
	})

}();


var sidebarTampil = function(){

	bars.addEventListener("click", function(){
		sidebar.style.display = "block";
	})

	fog.addEventListener("click", function(){
		sidebar.style.display = "none";
	})
}();




var lendingElement = function(){

	var left;
	var windowheight;
	var gallery;
	var img;
	function init(){
		// AboutMe
		aboutme = document.querySelectorAll(".about-me")[0];
		leftitem = document.querySelectorAll(".about-me .left")[0];
		right = document.querySelectorAll(".about-me")[0];
		rightitem = document.querySelectorAll(".about-me .right")[0];
		windowheight = window.innerHeight;

		// gallery init
		gallery = document.querySelectorAll(".gallery")[0];
		img = document.querySelectorAll(".gallery-items img");
	}



	function onscrollanimation (){

		window.addEventListener("load", init());
		window.addEventListener("resize", init());
		window.addEventListener("scroll", function(){

			// About Me 

			if (aboutme.getBoundingClientRect().top <= 200) {
				Object.assign(leftitem.style, {
					transform: "rotate(0deg)",
					transition: "all 500ms ease-in-out",
					opacity: 1,
				})

				Object.assign(rightitem.style, {
					transform: "rotate(0deg)",
					transition: "all 500ms ease-in-out",
					opacity: 1,
				})
			}

			if (aboutme.getBoundingClientRect().top <= -(aboutme.getBoundingClientRect().height) + 200) {
				Object.assign(leftitem.style, {
				  	transform: "translateX(-100px) rotate(12deg)",
				  	transition: "all 200ms ease-in-out",
				  	opacity: 0,
				})

				Object.assign(rightitem.style, {
				  transform: "translateX(100px) rotate(-12deg)",
				  transition: "all 200ms ease-in-out", 
				  opacity: 0,
				})
			}

			if (aboutme.getBoundingClientRect().top >  200) {
				Object.assign(leftitem.style, {
				  transform: "translateX(-100px) rotate(12deg)",
				  transition: "all 200ms ease-in-out",
				  opacity: 0,
				})

				Object.assign(rightitem.style, {
				  transform: "translateX(100px) rotate(-12deg)",
				  transition: "all 200ms ease-in-out", 
				  opacity: 0,
				})
			}


			// Gallery 


			if (gallery.getBoundingClientRect().top <= 300) {
				img.forEach(function(e, k){
					Object.assign(e.style, {
						opacity: 1,
						transform: "scale(1)",
						transition: "all 500ms ease-in-out",
					})
				})

			}

			if (gallery.getBoundingClientRect().top <=  -(gallery.getBoundingClientRect().height) + 200) {
				img.forEach(function(e, k){
					Object.assign(e.style, {
						opacity: 0,
						transform: "scale(.9)",
						transition: "all 500ms ease-in-out",
					})
				})

			}

			
			if (gallery.getBoundingClientRect().top >  300 ) {
				img.forEach(function(e, k){
					Object.assign(e.style, {
						opacity: 0,
						transform: "scale(.9)",
						transition: "all 500ms ease-in-out",
					})
				})

			}			

		})

	}

	onscrollanimation();


	

}();