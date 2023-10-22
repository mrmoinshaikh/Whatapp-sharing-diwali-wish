document.addEventListener('DOMContentLoaded', function () {
    const continueButton = document.querySelector(".continue-button");
    const intro = document.querySelector(".intro");
  
    continueButton.addEventListener("click", function () {
      intro.classList.add("clicked");
    });
  });

  function submitName() {
    const name = document.getElementById('name-input').value;
    // Store the name and redirect to Part 2
    window.location.href = `part2.html?name=${encodeURIComponent(name)}`;
}