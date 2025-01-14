// Handle scroll events
const navbar = document.getElementById('navbar');
const mainLogo = document.getElementById('main-logo');
const navLogo = document.getElementById('nav-logo');

window.addEventListener('scroll', () => {
   if (window.scrollY > 100) {
      navbar.classList.remove('-translate-y-full');
      mainLogo.classList.add('opacity-0');
      navLogo.classList.remove('opacity-0');
   } else {
      navbar.classList.add('-translate-y-full');
      mainLogo.classList.remove('opacity-0');
      navLogo.classList.add('opacity-0');
   }
});

// Redirect to menu page instead of expanding
const viewAllBtn = document.getElementById('view-all-btn');
viewAllBtn.addEventListener('click', () => {
   window.location.href = 'menu.html';
});

// Optional: Add smooth scroll for mobile users when collapsing
if ('scrollBehavior' in document.documentElement.style) {
   // Browser supports smooth scroll
} else {
   // Polyfill for smooth scroll on older browsers
   import('smoothscroll-polyfill').then((smoothScroll) => {
      smoothScroll.polyfill();
   });
}