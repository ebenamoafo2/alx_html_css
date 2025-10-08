// Select elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle menu open/close
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Change icon (bars ↔ close)
  hamburger.innerHTML = navLinks.classList.contains('active')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});
