document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const continueButton = document.getElementById("continueButton");
  const usernameHeader = document.getElementById("username");

  startButton.addEventListener("click", function () {
    // Hide Part 1
    document.querySelector(".part1-content").style.display = "none";

    // Show the Transition Page
    document.querySelector(".transition-page").style.display = "block";

    // Change the username in Part 2
    usernameHeader.textContent = "Moin";
  });

  continueButton.addEventListener("click", function () {
    // Handle transition to Part 2
    window.location.href = "part2.html";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  // Parse the URL to get the name parameter
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("name");

  // Update the H1 header with the user's name
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

function updateCountdown() {
  const targetDate = new Date("2023-11-12"); // Replace with your target date
  const currentDate = new Date();

  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the elements in the HTML
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Call the function to update the countdown immediately
updateCountdown();

// You can also set an interval to update the countdown periodically (e.g., every second)
setInterval(updateCountdown, 1000);

