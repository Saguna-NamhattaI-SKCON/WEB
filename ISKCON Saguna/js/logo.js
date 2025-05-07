// Select Elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navbar-nav');
const navItems = document.querySelectorAll('.nav-link');

// Ensure elements exist before adding event listeners
if (menuToggle && navLinks) {
  // Toggle Mobile Menu
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });

  // Close Menu When Clicking Outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    }
  });

  // Close Menu on ESC Key Press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    }
  });

  // Smooth Scroll for Internal Links
  navItems.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Close menu after clicking a link (for mobile)
      navLinks.classList.remove('active');
      menuToggle.classList.remove('open');
    });
  });
}
// Select More Button & Dropdown
const moreBtn = document.querySelector('.more-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownContainer = document.querySelector('.nav-item.dropdown');

// Toggle More Dropdown
moreBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent immediate closing
    dropdownContainer.classList.toggle('active');
});

// Close Dropdown When Clicking Outside
document.addEventListener('click', (e) => {
    if (!dropdownContainer.contains(e.target)) {
        dropdownContainer.classList.remove('active');
    }
});
