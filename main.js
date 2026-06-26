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

  }

  // Initialize Theme and Language Controls
  initControls();
});

// --- TRANSLATION SYSTEM ---
const TRANSLATIONS = {
  es: {
    // Navigation items
    "About me": "Sobre mí",
    "Work": "Trabajos",
    "Bigger projects": "Proyectos principales",
    "Social Media Videos": "Videos de Redes Sociales",
    "Youtube Videos": "Videos de Youtube",
    "Graphic designs": "Diseño gráfico",
    "Other videos": "Otros videos",
    "Video Editor": "Editora de Video",
    
    // Page subtitles and categories
    "Based in Buenos Aires, Argentina • Diseño de Imagen y Sonido (FADU - UBA)": "Basada en Buenos Aires, Argentina • Diseño de Imagen y Sonido (FADU - UBA)",
    "Profile": "Perfil",
    "Featured Productions": "Producciones Destacadas",
    "Short-Form Content": "Contenido Corto",
    "Long-Form Content": "Contenido de Formato Largo",
    "Branding & Art": "Branding y Arte",
    "Miscellaneous Visuals": "Ediciones Varias",
    
    // Titles
    "Crafting cinematic rhythm & visual stories.": "Creando ritmo cinematográfico e historias visuales.",
    "The Editor's Story": "La historia de la editora",
    "Bigger projects": "Proyectos principales",
    "Social Media Videos": "Videos de Redes Sociales",
    "Youtube Videos": "Videos de Youtube",
    "Graphic designs": "Diseño gráfico",
    "Other videos": "Otros videos",
    "Page Not Found": "Página no encontrada",
    
    // Descriptions
    "I edit dynamic social media campaigns, long-form content, and cinematic narratives. Combining rhythm, intent, and modern aesthetics to connect with audiences.": "Edito campañas dinámicas para redes sociales, contenido de formato largo y narrativas cinematográficas. Combinando ritmo, intención y estética moderna para conectar con la audiencia.",
    "A collection of cinematic video projects, commercial advertisements, and narrative visual editing work.": "Una colección de proyectos de video cinematográficos, anuncios comerciales y trabajos de edición visual narrativa.",
    "Fast-paced, creative editing styles built to capture attention, maximize retention rates, and build strong visual messaging.": "Estilos de edición rápidos y creativos creados para captar la atención, maximizar la retención y construir mensajes visuales potentes.",
    "Vlogs, tutorials, reviews, and documentary-style YouTube video edits featuring clean storytelling pacing and sound design.": "Vlogs, tutoriales, reseñas y ediciones de video de YouTube de estilo documental con un ritmo de narración limpio y diseño de sonido.",
    "Demonstrating visual identity, layout structuring, and illustrative design skills for custom digital branding.": "Demostrando identidad visual, estructuración de diseño y habilidades de diseño ilustrativo para branding digital personalizado.",
    "Freelance video edits, experimental montages, and client reviews spanning miscellaneous formats.": "Ediciones de video freelance, montajes experimentales y reseñas de clientes en varios formatos.",
    "The link you followed might be broken, or the page may have been removed from the server.": "El enlace que seguiste podría estar roto, o la página podría haber sido eliminada del servidor.",
    
    // About Page Bio
    "\"Visual storytelling is not just about cutting clips; it's about finding the underlying rhythm that drives human emotion.\"": "\"El storytelling visual no es solo cortar clips; es encontrar el ritmo subyacente que mueve la emoción humana.\"",
    "I'm a <span>professional video editor</span> and <span>Image and Sound Design</span> (Diseño de Imagen y Sonido) graduate from <span>FADU - UBA</span>. With years of experience transforming abstract concepts and raw footages into visual narratives with strong messaging, my goal is to deliver rhythm, timing, and intent. This ranges from fast-paced, high-conversion content for social media platforms to long-form storytelling and cinematic corporate reviews.": "Soy <span>editora de video profesional</span> y graduada de <span>Diseño de Imagen y Sonido</span> de la <span>FADU - UBA</span>. Con años de experiencia transformando conceptos abstractos y material en bruto en narrativas visuales con mensajes potentes, mi objetivo es aportar ritmo, sincronía e intención. Esto abarca desde contenido dinámico de alta conversión para redes sociales hasta narrativas de formato largo y videos corporativos cinematográficos.",
    "Utilizing industry-standard creative tools like <span>Adobe Premiere Pro</span> and <span>After Effects</span>, I work collaboratively with creators, brands, and agencies. I specialize in sound design syncing, dynamic subtitles, color correction, and pacing that maximizes viewer retention.": "Utilizando herramientas creativas estándar de la industria como <span>Adobe Premiere Pro</span> y <span>After Effects</span>, trabajo en colaboración con creadores, marcas y agencias. Me especializo en sincronización de diseño de sonido, subtítulos dinámicos, corrección de color y un ritmo que maximiza la retención del espectador.",
    
    // Buttons & Footers
    "View Portfolio": "Ver Portafolio",
    "Get in touch": "Contactar",
    "Return to Safety": "Volver al inicio",
    "© 2026 Cecilia Longhi.<br>Creative Visual Editor.": "© 2026 Cecilia Longhi.<br>Editora Visual Creativa.",
    
    // Grid Cover Cards (index page)
    "2025 Series": "Serie 2025",
    "Social Media": "Redes Sociales",
    "2025 Reels": "Reels 2025",
    "2025 Content": "Contenido 2025",
    "2025 Branding": "Branding 2025",
    "2023 Creative": "Creativo 2023",
    
    // Design Card Overlays
    "Editorial Design": "Diseño Editorial",
    "Art Direction": "Dirección de Arte",
    "Typography Layout": "Diseño Tipográfico",
    "Branding Guidelines": "Guías de Branding"
  }
};

const METADATA_TRANSLATIONS = {
  es: {
    // Titles
    "Cecilia Longhi — Portfolio": "Cecilia Longhi — Portafolio",
    "About me — Cecilia Longhi": "Sobre mí — Cecilia Longhi",
    "Bigger projects — Cecilia Longhi": "Proyectos principales — Cecilia Longhi",
    "Social Media Videos — Cecilia Longhi": "Videos de Redes Sociales — Cecilia Longhi",
    "Youtube Videos — Cecilia Longhi": "Videos de Youtube — Cecilia Longhi",
    "Graphic designs — Cecilia Longhi": "Diseño gráfico — Cecilia Longhi",
    "Other videos — Cecilia Longhi": "Otros videos — Cecilia Longhi",
    "Page Not Found — Cecilia Longhi": "Página no encontrada — Cecilia Longhi",
    
    // Descriptions
    "Maria Cecilia Longhi - Professional Video Editor & Designer portfolio. Turning ideas into impactful visual stories.": "Portafolio de María Cecilia Longhi - Editora de Video Profesional y Diseñadora. Transformando ideas en historias visuales impactantes.",
    "Maria Cecilia Longhi - Professional Video Editor & Designer.": "María Cecilia Longhi - Editora de Video Profesional y Diseñadora.",
    "Learn more about Cecilia Longhi - a creative video editor experienced in Adobe Premiere Pro and After Effects.": "Conoce más sobre Cecilia Longhi - editora de video creativa con experiencia en Adobe Premiere Pro y After Effects.",
    "View cinematic and long-form video projects edited by Cecilia Longhi.": "Mira proyectos de video cinematográficos y de formato largo editados por Cecilia Longhi.",
    "Explore engaging, high-retention short-form video editing reels for TikTok, Reels, and YouTube Shorts.": "Explora reels de edición de video cortos y de alta retención para TikTok, Reels y YouTube Shorts.",
    "View long-form edits, vlogs, and custom structured content for YouTube by editor Cecilia Longhi.": "Mira ediciones de formato largo, vlogs y contenido estructurado personalizado para YouTube por la editora Cecilia Longhi.",
    "Browse graphic designs, branding guidelines, and visual illustrations created by Cecilia Longhi.": "Explora diseños gráficos, guías de marca e ilustraciones visuales creadas por Cecilia Longhi.",
    "View miscellaneous video editing work, freelance cuts, and editing projects by Cecilia Longhi.": "Mira trabajos de edición de video diversos, cortes freelance y proyectos de edición de Cecilia Longhi.",
    "The requested page could not be found.": "La página solicitada no pudo ser encontrada."
  }
};

function translatePage(lang) {
  // Translate document title
  if (!document.dataset) document.dataset = {};
  if (!document.dataset.originalTitle) {
    document.dataset.originalTitle = document.title;
  }
  const origTitle = document.dataset.originalTitle;
  if (lang === 'es' && METADATA_TRANSLATIONS.es[origTitle]) {
    document.title = METADATA_TRANSLATIONS.es[origTitle];
  } else {
    document.title = origTitle;
  }

  // Translate meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    if (!metaDesc.dataset.originalContent) {
      metaDesc.dataset.originalContent = metaDesc.getAttribute('content');
    }
    const origContent = metaDesc.dataset.originalContent;
    if (lang === 'es' && METADATA_TRANSLATIONS.es[origContent]) {
      metaDesc.setAttribute('content', METADATA_TRANSLATIONS.es[origContent]);
    } else {
      metaDesc.setAttribute('content', origContent);
    }
  }

  // Selectors of elements containing translatable texts
  const selectors = [
    '.logo-title span', '.nav-menu a', '.footer-text',
    '.hero-subtitle', '.hero-title', '.hero-desc',
    '.page-category', '.page-title', '.page-description',
    '.about-quote', '.about-quote-author', '.about-bio-para',
    '.btn-primary', '.btn-secondary',
    '.cover-title', '.cover-date',
    '.design-card-title',
    '.error-heading', '.error-desc'
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (!el.dataset.originalHtml) {
        el.dataset.originalHtml = el.innerHTML.trim();
      }

      const orig = el.dataset.originalHtml;
      if (lang === 'es') {
        const trans = TRANSLATIONS.es[orig];
        if (trans) {
          el.innerHTML = trans;
        }
      } else {
        el.innerHTML = orig;
      }
    });
  });
  
  // Set lang attribute
  document.documentElement.setAttribute('lang', lang);
}

function initControls() {
  const sidebar = document.getElementById('sidebar');
  const mobileHeader = document.querySelector('.mobile-header');
  
  if (!sidebar) return;
  
  // Controls markup builder
  const createControlsHTML = (isMobile) => {
    return `
      <div class="${isMobile ? 'mobile-controls' : 'sidebar-controls'}">
        <button class="control-btn theme-btn" aria-label="Toggle Theme">
          <span class="icon-sun">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
          </span>
          <span class="icon-moon">
            <svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </span>
        </button>
        <button class="control-btn lang-btn" aria-label="Toggle Language">
          <span class="lang-en-label">EN</span>
          <span style="margin: 0 2px; opacity: 0.3;">/</span>
          <span class="lang-es-label">ES</span>
        </button>
      </div>
    `;
  };

  // Inject in desktop sidebar
  const sidebarFooter = sidebar.querySelector('.sidebar-footer');
  if (sidebarFooter) {
    sidebarFooter.insertAdjacentHTML('beforebegin', createControlsHTML(false));
  }
  
  // Inject in mobile header
  if (mobileHeader) {
    const hamburgerBtn = mobileHeader.querySelector('.hamburger-btn');
    if (hamburgerBtn) {
      hamburgerBtn.insertAdjacentHTML('beforebegin', createControlsHTML(true));
    }
  }
  
  // Theme initialization
  const themeBtns = document.querySelectorAll('.theme-btn');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  });
  
  // Language initialization
  const langBtns = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('lang') || 'en';
  translatePage(savedLang);
  
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentLang = document.documentElement.getAttribute('lang') || 'en';
      const newLang = currentLang === 'en' ? 'es' : 'en';
      translatePage(newLang);
      localStorage.setItem('lang', newLang);
    });
  });
}

