document.addEventListener('DOMContentLoaded', function () {
  const transition = document.querySelector(".transition");

  // Trigger the transition animation without a delay
  transition.classList.add("clicked");

  // After the animation, redirect to Part 2
  setTimeout(function () {
    window.location.href = "part2.html"; // Adjust the URL to your Part 2 page
  }, 1000); // This delay controls how long the curtains animation takes
});
