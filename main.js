document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Menu Navigation Toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  const menuOverlay = document.getElementById('menu-overlay');

  if (hamburgerBtn && sidebar && menuOverlay) {
    const toggleMenu = () => {
      hamburgerBtn.classList.toggle('open');
      sidebar.classList.toggle('open');
      menuOverlay.classList.toggle('open');
      
      if (sidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    hamburgerBtn.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // Close menu when clicking nav links on mobile
    const navLinks = sidebar.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {
          toggleMenu();
        }
      });
    });
  }

  // Active Menu Link Detection
  const currentPath = window.location.pathname;
  const menuLinks = document.querySelectorAll('.nav-item a');
  
  menuLinks.forEach(link => {
    const href = link.getAttribute('href');
    const cleanPath = currentPath === '/' ? '/index.html' : currentPath;
    const cleanHref = href === '/' ? '/index.html' : href;

    if (cleanPath.endsWith(cleanHref) || (cleanHref === '/index.html' && cleanPath.endsWith('/work'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Lightbox Implementation for Graphic Designs
  const designCards = document.querySelectorAll('.design-card');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  if (designCards.length > 0 && lightbox && lightboxImg && lightboxClose) {
    designCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        if (img) {
          const fullSrc = img.getAttribute('src');
          lightboxImg.src = fullSrc;
          lightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      setTimeout(() => {
        lightboxImg.src = '';
      }, 300);
      document.body.style.overflow = '';
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close lightbox on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightbox();
      }
    });
  }
});
