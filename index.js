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

//Highlight navigation links when scrolling
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
   const scrollPos = window.scrollY + 100;

   document.querySelectorAll('section[id]').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
         navLinks.forEach(link => {
            link.classList.remove('text-orange-600');
         });

         const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);
         if (correspondingLink) {
            correspondingLink.classList.add('text-orange-600');
         }
      }
   });

   // Special case for Home when at the top
   if (scrollPos < document.querySelector('section').offsetTop) {
      navLinks.forEach(link => {
         link.classList.remove('text-orange-600');
      });
      document.querySelector('.nav-link[href="index.html"]').classList.add('text-orange-600');
   }
});

// Smooth scroll when clicking on navigation links
navLinks.forEach(link => {
   link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      if (href.includes('#') && !href.startsWith('menu')) {
         e.preventDefault();
         const targetId = href.split('#')[1];
         const targetSection = document.getElementById(targetId);

         if (targetSection) {
            const offset = 100;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
               top: offsetPosition,
               behavior: 'smooth'
            });
         }
      }
   });
});

// Handle scroll to top button visibility
const scrollToTopButton = document.getElementById('scrollToTop');
scrollToTopButton.style.opacity = '0';
scrollToTopButton.style.visibility = 'hidden';

window.addEventListener('scroll', () => {
   const newsSection = document.getElementById('news');
   const newsSectionTop = newsSection.getBoundingClientRect().top;

   if (newsSectionTop < window.innerHeight) {
      scrollToTopButton.style.visibility = 'visible';
      scrollToTopButton.style.opacity = '1';
   } else {
      scrollToTopButton.style.opacity = '0';
      setTimeout(() => {
         if (scrollToTopButton.style.opacity === '0') {
            scrollToTopButton.style.visibility = 'hidden';
         }
      }, 300);
   }
});

// Handle scroll to top button click
scrollToTopButton.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});

// Handle mobile menu button
document.addEventListener('DOMContentLoaded', function () {
   const navLinks = document.getElementById('nav-links');
   const mobileMenuButton = document.getElementById('mobile-menu-button');

   // Remove hidden class initially but keep it translated out of view
   navLinks.classList.remove('hidden');

   mobileMenuButton.addEventListener('click', function () {
      // Toggle hamburger animation class
      requestAnimationFrame(() => {
         mobileMenuButton.classList.toggle('hamburger-active');
      });
      
      if (navLinks.classList.contains('translate-x-full')) {
         // Show menu
         navLinks.classList.remove('translate-x-full');
         navLinks.classList.add('translate-x-0');
      } else {
         // Hide menu
         navLinks.classList.remove('translate-x-0');
         navLinks.classList.add('translate-x-full');
      }
   });
});