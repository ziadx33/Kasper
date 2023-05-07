// Changing landing background with bullets
let arrow1 = document.getElementById("changeBg");
let arrow2 = document.getElementById("returnBg");
let landingBg = document.getElementById("landing");
let bullets = document.querySelectorAll(".bullets li");
let firstBul = document.querySelector(".bullets li:first-child");
let lastBul = document.querySelector(".bullets li:last-child");

arrow1.onclick = function () {
	landingBg.style.backgroundImage = 'url("images/subscribe.jpg")';
	bullets.forEach(function (el) {
		bullets.forEach(function (ele) {
			ele.classList.remove("active");
		});
		lastBul.classList.add("active");
	});
};

arrow2.onclick = function () {
	landingBg.style.backgroundImage = 'url("images/landing.jpg")';
	bullets.forEach(function (el) {
		bullets.forEach(function (ele) {
			ele.classList.remove("active");
		});
		firstBul.classList.add("active");
	});
};
