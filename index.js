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

// Xử lý scroll và highlight navigation links
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
   // Lấy vị trí scroll hiện tại
   const scrollPos = window.scrollY + 100; // Thêm offset để highlight sớm hơn một chút

   // Kiểm tra từng section
   document.querySelectorAll('section[id]').forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
         // Remove active class from all links
         navLinks.forEach(link => {
            link.classList.remove('text-orange-600');
         });

         // Add active class to corresponding link
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

// Xử lý smooth scroll khi click vào navigation links
navLinks.forEach(link => {
   link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Chỉ xử lý cho các link có hashtag
      if (href.includes('#') && !href.startsWith('menu')) {
         e.preventDefault();
         const targetId = href.split('#')[1];
         const targetSection = document.getElementById(targetId);

         if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
         }
      }
   });
});