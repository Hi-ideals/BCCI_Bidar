// Global Date Helpers
function getDay(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return isNaN(d.getDate()) ? '' : String(d.getDate()).padStart(2, '0');
}

function getMonth(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return isNaN(d.getDate()) ? '' : d.toLocaleString('en-US', { month: 'long' });
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d.getDate())) return '';
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

// Global Lightbox Logic
let lightboxItems = [];
let lightboxIndex = 0;

function openLightbox(items, index) {
  lightboxItems = items;
  lightboxIndex = index;
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
      <span class="lightbox-nav lightbox-prev" onclick="prevLightbox()">&#10094;</span>
      <span class="lightbox-nav lightbox-next" onclick="nextLightbox()">&#10095;</span>
      <img id="lightboxImg" class="lightbox-img" src="" alt="">
      <div id="lightboxCaption" class="lightbox-caption"></div>
    </div>
  `;
  lb.classList.add('open');
  updateLightboxContent();
  document.addEventListener('keydown', handleLightboxKeydown);
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.removeEventListener('keydown', handleLightboxKeydown);
}

function prevLightbox() {
  lightboxIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
  updateLightboxContent();
}

function nextLightbox() {
  lightboxIndex = (lightboxIndex + 1) % lightboxItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (img && cap && lightboxItems[lightboxIndex]) {
    img.src = lightboxItems[lightboxIndex].image;
    cap.textContent = lightboxItems[lightboxIndex].caption;
  }
}

function handleLightboxKeydown(e) {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevLightbox();
  if (e.key === 'ArrowRight') nextLightbox();
}

// Make lightbox functions accessible globally
window.getDay = getDay;
window.getMonth = getMonth;
window.formatDate = formatDate;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.prevLightbox = prevLightbox;
window.nextLightbox = nextLightbox;

// DOM rendering functions
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initHeroSlider();
  initTicker();
  initTestimonials();
});

// Render Header Navigation
function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  // Generate Navigation items
  let navItemsHtml = '';
  SITE.nav.forEach(item => {
    if (item.children) {
      navItemsHtml += `
        <li class="relative nav-item-relative py-6 group">
          <a href="${item.href}" class="hover:text-[var(--primary-color)] text-[var(--secondary-color)] font-semibold text-sm transition-colors flex items-center gap-1">
            ${item.label}
            <svg class="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </a>
          <ul class="nav-dropdown py-2 mt-1">
            ${item.children.map(c => `
              <li>
                <a href="${c.href}" class="block px-6 py-2.5 hover:bg-gray-50 hover:text-[var(--primary-color)] text-sm font-medium text-gray-700 transition-colors">
                  ${c.label}
                </a>
              </li>
            `).join('')}
          </ul>
        </li>
      `;
    } else {
      navItemsHtml += `
        <li>
          <a href="${item.href}" class="hover:text-[var(--primary-color)] text-[var(--secondary-color)] font-semibold text-sm transition-colors">
            ${item.label}
          </a>
        </li>
      `;
    }
  });

  header.innerHTML = `
    <!-- Top Bar toolbar -->
    <div class="bg-[var(--secondary-color)] text-white text-xs py-3 border-b border-white/10 hidden md:block">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center gap-6">
          <span class="flex items-center gap-1.5 font-medium text-white/90">
            📞 Call: ${SITE.org.phone}
          </span>
          <span class="flex items-center gap-1.5 font-medium text-white/90">
            ✉️ Email: ${SITE.org.email}
          </span>
        </div>
        <div class="flex items-center gap-4">
          
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="bg-white border-b border-gray-100 sticky top-0 z-40 transition-all duration-300 py-3 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <!-- Logo -->
        <a href="index.html" class="flex items-center gap-3">
          <img src="${SITE.org.logo}" alt="${SITE.org.name}" class="h-14 w-auto object-contain">
          <div class="hidden lg:block">
            <span class="block font-bold text-lg text-[var(--secondary-color)] tracking-tight leading-tight">${SITE.org.name}</span>
            <span class="block text-xs font-semibold text-[var(--primary-color)] tracking-wider mt-0.5">${SITE.org.tagline}</span>
          </div>
        </a>

        <!-- Desktop Menu -->
        <nav class="hidden md:block">
          <ul class="flex items-center gap-6">
            ${navItemsHtml}
          </ul>
        </nav>

        <!-- Mobile Hamburguer Trigger -->
        <button class="md:hidden p-2 text-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors" onclick="toggleMobileMenu()" aria-label="Open Menu">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
        </button>
      </div>
    </header>

    <!-- Mobile Drawer -->
    <div id="mobileOverlay" class="mobile-overlay" onclick="toggleMobileMenu()"></div>
    <div id="mobileDrawer" class="mobile-drawer">
      <div class="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
        <img src="${SITE.org.logo}" alt="${SITE.org.name}" class="h-12 w-auto object-contain">
        <button class="p-2 text-gray-500 hover:text-red-500 transition-colors" onclick="toggleMobileMenu()">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <nav class="flex-1 overflow-y-auto">
        <ul class="space-y-4">
          ${SITE.nav.map(item => {
            if (item.children) {
              return `
                <li>
                  <div class="font-bold text-gray-800 text-base mb-2 px-2 flex items-center justify-between">
                    <span>${item.label}</span>
                  </div>
                  <ul class="space-y-2 pl-4 border-l-2 border-gray-100">
                    ${item.children.map(c => `
                      <li><a href="${c.href}" class="block py-1.5 text-gray-600 hover:text-[var(--primary-color)] text-sm font-medium transition-colors">${c.label}</a></li>
                    `).join('')}
                  </ul>
                </li>
              `;
            } else {
              return `
                <li>
                  <a href="${item.href}" class="block py-1 px-2 font-bold text-gray-800 hover:text-[var(--primary-color)] text-base transition-colors">
                    ${item.label}
                  </a>
                </li>
              `;
            }
          }).join('')}
        </ul>
      </nav>
      <div class="mt-auto pt-6 border-t border-gray-100 space-y-4 text-xs text-gray-500">
        <p class="flex items-center gap-1.5">📞 ${SITE.org.phone}</p>
        <p class="flex items-center gap-1.5">✉️ ${SITE.org.email}</p>
      </div>
    </div>
  `;
}

// Toggle mobile navigation menu
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('mobileOverlay');
  if (drawer && overlay) {
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
  }
}
window.toggleMobileMenu = toggleMobileMenu;

// Render Footer
function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

  footer.innerHTML = `
    <footer class="bg-[var(--secondary-color)] text-white/80 py-16 border-t-4 border-[var(--primary-color)] text-sm">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Col 1: About -->
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <img src="${SITE.org.logo}" alt="Logo" class="h-12 w-auto bg-white rounded p-1">
            <h3 class="font-bold text-white text-lg tracking-tight">${SITE.org.shortName}</h3>
          </div>
          <p class="leading-relaxed text-white/70">${SITE.footer.description}</p>
          <div class="flex items-center gap-3">
            
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div>
          <h3 class="font-bold text-white text-lg mb-6 tracking-wide uppercase font-['Playfair_Display'] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:height-0.5 after:bg-[var(--primary-color)]">Quick Links</h3>
          <ul class="grid grid-cols-2 gap-y-3 gap-x-4">
            ${SITE.footer.quickLinks.map(link => `
              <li>
                <a href="${link.href}" class="hover:text-[var(--primary-color)] transition-colors flex items-center gap-1 opacity-80 hover:opacity-100">
                  ⚡ ${link.label}
                </a>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Col 3: Contact details -->
        <div>
          <h3 class="font-bold text-white text-lg mb-6 tracking-wide uppercase font-['Playfair_Display'] relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:height-0.5 after:bg-[var(--primary-color)]">Contact Info</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <span class="text-[var(--primary-color)] mt-0.5">📍</span>
              <span class="leading-relaxed">${SITE.org.address}</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-[var(--primary-color)]">📞</span>
              <span>${SITE.org.phone} / ${SITE.org.phone2}</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-[var(--primary-color)]">✉️</span>
              <span>${SITE.org.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-xs opacity-75">
        <p>${SITE.footer.copyright}</p>
      </div>
    </footer>
  `;
}

// Initialise Hero Slider logic
function initHeroSlider() {
  const slider = document.getElementById('heroSlider');
  if (!slider) return;

  let html = '';
  // Build slide elements
  SITE.hero.forEach((h, idx) => {
    html += `
      <div class="hero-slide ${idx === 0 ? 'active' : ''}">
        <img src="${h.image}" alt="${h.heading}">
        <div class="hero-overlay"></div>
        <div class="max-w-7xl mx-auto px-4 w-full h-full flex items-center relative z-10">
          <div class="hero-content-box lg:w-2/3">
            <span class="text-[var(--primary-color)] uppercase tracking-[3px] text-xs font-bold block mb-2">BCCI Bidar - Established 1996</span>
            <h1 class="text-3xl md:text-5xl font-bold font-['Playfair_Display'] text-white mb-4 leading-tight">${h.heading}</h1>
            <p class="text-white/85 text-base md:text-lg mb-8 font-medium leading-relaxed">${h.subheading}</p>
            <a href="${h.cta.href}" class="btn-gold">${h.cta.label} →</a>
          </div>
        </div>
      </div>
    `;
  });

  // Slide Arrows
  html += `
    <button class="slider-arrow slider-arrow-left" onclick="changeSlide(-1)">
      &#10094;
    </button>
    <button class="slider-arrow slider-arrow-right" onclick="changeSlide(1)">
      &#10095;
    </button>
  `;

  // Navigation Dots
  html += '<div class="slider-dots">';
  SITE.hero.forEach((_, idx) => {
    html += `<span class="slider-dot ${idx === 0 ? 'active' : ''}" onclick="goToSlide(${idx})"></span>`;
  });
  html += '</div>';

  slider.innerHTML = html;

  let currentSlide = 0;
  let interval = setInterval(() => changeSlide(1), 6000);

  function changeSlide(direction) {
    currentSlide = (currentSlide + direction + SITE.hero.length) % SITE.hero.length;
    updateSlider();
    resetTimer();
  }

  function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    resetTimer();
  }

  function updateSlider() {
    const slides = slider.querySelectorAll('.hero-slide');
    const dots = slider.querySelectorAll('.slider-dot');
    slides.forEach((slide, idx) => {
      if (idx === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function resetTimer() {
    clearInterval(interval);
    interval = setInterval(() => changeSlide(1), 6000);
  }

  // Bind events to window for index click triggers
  window.changeSlide = changeSlide;
  window.goToSlide = goToSlide;
}

// Initialise news notifications ticker
function initTicker() {
  const ticker = document.getElementById('tickerContent');
  if (!ticker) return;
  let html = '';
  // Repeat content to ensure continuous scrolling
  const doubled = [...SITE.ticker, ...SITE.ticker];
  doubled.forEach(t => {
    html += `
      <a href="${t.link}" target="_blank" class="text-white hover:text-[var(--primary-color)] font-semibold text-xs tracking-wide transition-colors mx-8 inline-flex items-center gap-1.5 uppercase">
        <span class="text-[var(--primary-color)] text-sm">📌</span> ${t.text}
      </a>
    `;
  });
  ticker.innerHTML = html;
}

// Initialise Member Voices Testimonials Carousel
function initTestimonials() {
  const carousel = document.getElementById('testimonialCarousel');
  if (!carousel) return;
  
  const track = carousel.querySelector('.testimonial-track');
  const dotsContainer = carousel.querySelector('.testimonial-dots');
  if (!track || !dotsContainer) return;
  
  let html = '';
  SITE.testimonials.forEach(t => {
    html += `
      <div class="testimonial-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
        <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col h-full text-left relative min-h-[250px]">
          <span class="text-5xl text-[var(--primary-color)] font-serif absolute top-2 left-3 opacity-20">“</span>
          <p class="text-gray-600 text-sm leading-relaxed mb-6 italic relative z-10 font-medium">${t.text}</p>
          <div class="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
            <img src="${t.avatar}" alt="${t.name}" class="w-11 h-11 rounded-full object-cover shadow-inner">
            <div>
              <h4 class="font-bold text-sm text-[var(--secondary-color)]">${t.name}</h4>
              <p class="text-xs text-gray-400 font-semibold mt-0.5">${t.role}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  track.innerHTML = html;
  
  let dotsHtml = '';
  // On desktop we show 3 items, on tablet 2, on mobile 1.
  // For sliding, let's allow slide by item.
  SITE.testimonials.forEach((_, idx) => {
    dotsHtml += `<span class="testimonial-dot w-2.5 h-2.5 rounded-full bg-gray-200 cursor-pointer transition-all duration-300" onclick="goToTestimonial(${idx})"></span>`;
  });
  dotsContainer.innerHTML = dotsHtml;
  
  let currentIndex = 0;
  
  function goToTestimonial(idx) {
    // Clamp index to prevent scrolling past empty items depending on screen size
    let visibleCards = 1;
    if (window.innerWidth >= 1024) visibleCards = 3;
    else if (window.innerWidth >= 768) visibleCards = 2;
    
    const maxIndex = SITE.testimonials.length - visibleCards;
    currentIndex = Math.max(0, Math.min(idx, maxIndex));
    updateCarousel();
  }
  
  function updateCarousel() {
    const cards = track.querySelectorAll('.testimonial-card');
    const dots = dotsContainer.querySelectorAll('.testimonial-dot');
    if (!cards.length) return;
    
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    
    // Toggle active dots
    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('bg-[var(--primary-color)]', 'w-6');
        dot.classList.remove('bg-gray-200');
      } else {
        dot.classList.remove('bg-[var(--primary-color)]', 'w-6');
        dot.classList.add('bg-gray-200');
      }
    });
  }
  
  window.goToTestimonial = goToTestimonial;
  
  // Set initial state
  setTimeout(updateCarousel, 200);
  
  // Slide on resize
  window.addEventListener('resize', updateCarousel);
}

