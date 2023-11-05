const illustration = document.getElementById("illustration");
const newsletterForm = document.getElementById("newsletterForm");
const newsletterCard = document.getElementById("newsletterCard");
const thankYouCard = document.getElementById("thankYouCard");
const subscribeBtn = document.getElementById("subscribeBtn");
const dismissBtn = document.getElementById("dismissBtn");
const email = document.getElementById("email");
const emailInsertion = document.getElementById("emailInsertion");
const errorMessage = document.getElementById("errorMessage");

// Change illustration for tablet and mobile screen sizes
function changeImage() {
	if (window.innerWidth <= 860) {
		illustration.src = "/assets/images/illustration-sign-up-mobile.svg";
		illustration.alt = "Mobile Illustration";
	} else {
		illustration.src = "/assets/images/illustration-sign-up-desktop.svg";
		illustration.alt = "Illustration";
	}
}

// Initial call to set the image based on the initial screen size
changeImage();

// Add an event listener to detect changes in screen size
window.addEventListener("resize", changeImage);

// function to check email
const validateEmail = (emailAddress) => {
	const regexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (regexPattern.test(emailAddress)) {
		return true;
	} else if (emailAddress === "") {
		errorMessage.innerText = "Email cannot be blank";
	} else {
		errorMessage.innerText = "Valid email required";
	}
	return false;
};

// Function to subscribe
const subscribe = () => {
	if (validateEmail(email.value.trim())) {
		emailInsertion.innerText = email.value;
		newsletterCard.style.display = "none";
		thankYouCard.style.display = "flex";
	}
};

// function to dismiss
const dismiss = () => {
	newsletterCard.style.display = "flex";
	thankYouCard.style.display = "none";
	errorMessage.innerText = ""; // Clear error message
	email.value = ""; // Clear the email input
};

subscribeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	subscribe();
});

dismissBtn.addEventListener("click", (e) => {
	dismiss();
});
