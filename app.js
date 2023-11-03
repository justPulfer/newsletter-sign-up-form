const illustration = document.getElementById("illustration");
const newsletterCard = document.getElementById("newsletterCard");
const thankYouCard = document.getElementById("thankYouCard");
const subscribeBtn = document.getElementById("subscribeBtn");
const dismissBtn = document.getElementById("dismissBtn");

if (screen.width <= 1024) {
	illustration.src = "/assets/images/illustration-sign-up-mobile.svg";
}

subscribeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	newsletterCard.style.display = "none";
	thankYouCard.style.display = "flex";
});

dismissBtn.addEventListener("click", (e) => {
	newsletterCard.style.display = "flex";
	thankYouCard.style.display = "none";
});
