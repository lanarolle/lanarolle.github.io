const navToggle = document.getElementById('nav-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');

// Toggle overlay and navbar visibility
navToggle.addEventListener('click', () => {
  mobileOverlay.classList.toggle('hidden');
});

// Close overlay if clicked outside the navbar
document.addEventListener('click', (event) => {
  if (!navToggle.contains(event.target) && !mobileOverlay.contains(event.target)) {
    mobileOverlay.classList.add('hidden');
  }
});


// // const navToggle = document.getElementById("nav-toggle");
// const navbar = document.getElementById("navbar-default");


// navToggle.addEventListener("click", () => {
//   navbar.classList.toggle("hidden");
// });
