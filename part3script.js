document.addEventListener("DOMContentLoaded", function () {
  // Parse the URL to get the name parameter
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("name");

  // Update the H1 header with the user's name if available
  const usernameElement = document.getElementById("username");
  if (userName) {
    usernameElement.textContent = userName;
  }
});



let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 3000); // Change image every 3 seconds (3000 milliseconds)
}

showSlides();

function shareOnWhatsApp() {
  // Get the user's name from the H1 element
  const username = document.getElementById("username").textContent;

  // URL to share
  const urlToShare = "Your_Diwali_Website_URL" + "?name=" + encodeURIComponent(username);

  // Generate the WhatsApp message
  const whatsappMessage = "Check out our Diwali website: " + urlToShare;

  // Create the WhatsApp link
  const whatsappLink = "whatsapp://send?text=" + encodeURIComponent(whatsappMessage);

  // Trigger the share action
  window.location.href = whatsappLink;
}
