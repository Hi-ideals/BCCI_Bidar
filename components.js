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
  initStatsCounters();
});

// Render Header Navigation
function renderHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  // Generate Navigation items
  let navItemsHtml = '';
  SITE.nav.forEach(item => {
    const isCurrent = window.location.pathname.includes(item.href) || 
                      (item.href === 'index.html' && (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html')));
    const activeClass = isCurrent ? 'text-[var(--primary-color)] font-bold' : 'text-[var(--text-gray)]';

    if (item.children) {
      navItemsHtml += `
        <li class="relative nav-item-relative py-4 group">
          <a href="${item.href}" class="hover:text-[var(--primary-color)] ${activeClass} font-semibold text-sm transition-colors flex items-center gap-1 whitespace-nowrap">
            ${item.label}
            <svg class="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </a>
          <ul class="nav-dropdown py-2 mt-1 bg-[var(--header-bg)]">
            ${item.children.map(c => {
              const isChildCurrent = window.location.pathname.includes(c.href);
              const childActiveClass = isChildCurrent ? 'text-[var(--primary-color)] font-bold' : 'text-[var(--text-gray)]';
              return `
                <li>
                  <a href="${c.href}" class="block px-6 py-2.5 hover:bg-gray-50 hover:text-[var(--primary-color)] text-sm font-medium ${childActiveClass} transition-colors whitespace-nowrap">
                    ${c.label}
                  </a>
                </li>
              `;
            }).join('')}
          </ul>
        </li>
      `;
    } else {
      navItemsHtml += `
        <li>
          <a href="${item.href}" class="hover:text-[var(--primary-color)] ${activeClass} font-semibold text-sm transition-colors whitespace-nowrap">
            ${item.label}
          </a>
        </li>
      `;
    }
  });

  header.innerHTML = `
    <!-- Top Bar toolbar -->
    <div class="bg-[var(--secondary-color)] text-white text-xs py-2 border-b border-white/10 hidden md:block">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div class="flex items-center gap-6">
          <a href="tel:${SITE.org.phone.replace(/[^0-9+]/g, '')}" class="flex items-center gap-1.5 font-medium text-white/90 hover:text-[var(--primary-color)] transition-colors">
            <svg class="w-3.5 h-3.5 text-[var(--primary-color)] inline-block flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Call: ${SITE.org.phone}
          </a>
          <a href="mailto:${SITE.org.email}" class="flex items-center gap-1.5 font-medium text-white/90 hover:text-[var(--primary-color)] transition-colors">
            <svg class="w-3.5 h-3.5 text-[var(--primary-color)] inline-block flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Email: ${SITE.org.email}
          </a>
        </div>
        <div class="flex items-center gap-4">
          
        </div>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <header class="bg-[var(--header-bg)] border-b border-gray-100 sticky top-0 z-40 transition-all duration-300 py-2 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <!-- Logo -->
        <a href="index.html" class="flex items-center gap-3">
          <img src="${SITE.org.logo}" alt="${SITE.org.name}" class="h-12 w-auto object-contain">
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
                  <div class="font-bold text-[var(--text-gray)] text-base mb-2 px-2 flex items-center justify-between">
                    <span>${item.label}</span>
                  </div>
                  <ul class="space-y-2 pl-4 border-l-2 border-gray-100">
                    ${item.children.map(c => `
                      <li><a href="${c.href}" class="block py-1.5 text-[var(--text-gray)]/85 hover:text-[var(--primary-color)] text-sm font-medium transition-colors">${c.label}</a></li>
                    `).join('')}
                  </ul>
                </li>
              `;
            } else {
              return `
                <li>
                  <a href="${item.href}" class="block py-1 px-2 font-bold text-[var(--text-gray)] hover:text-[var(--primary-color)] text-base transition-colors">
                    ${item.label}
                  </a>
                </li>
              `;
            }
          }).join('')}
        </ul>
      </nav>
      <div class="mt-auto pt-6 border-t border-gray-100 space-y-4 text-xs text-gray-500">
        <a href="tel:${SITE.org.phone.replace(/[^0-9+]/g, '')}" class="flex items-center gap-2 hover:text-[var(--primary-color)] transition-colors">
          <svg class="w-3.5 h-3.5 text-[var(--primary-color)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> ${SITE.org.phone}
        </a>
        <a href="mailto:${SITE.org.email}" class="flex items-center gap-2 hover:text-[var(--primary-color)] transition-colors">
          <svg class="w-3.5 h-3.5 text-[var(--primary-color)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> ${SITE.org.email}
        </a>
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
                <a href="${link.href}" class="hover:text-[var(--primary-color)] transition-colors flex items-center gap-2 opacity-80 hover:opacity-100">
                  <svg class="w-3 h-3 text-[var(--primary-color)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> ${link.label}
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
              <svg class="w-5 h-5 text-[var(--primary-color)] mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span class="leading-relaxed">${SITE.org.address}</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-[var(--primary-color)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span><a href="tel:${SITE.org.phone.replace(/[^0-9+]/g, '')}" class="hover:text-[var(--primary-color)] transition-colors">${SITE.org.phone}</a> / <a href="tel:${SITE.org.phone2.replace(/[^0-9+]/g, '')}" class="hover:text-[var(--primary-color)] transition-colors">${SITE.org.phone2}</a></span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-[var(--primary-color)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span><a href="mailto:${SITE.org.email}" class="hover:text-[var(--primary-color)] transition-colors">${SITE.org.email}</a></span>
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
      <a href="${t.link}" target="_blank" class="text-white hover:text-[var(--primary-color)] font-semibold text-xs tracking-wide transition-colors mx-8 inline-flex items-center gap-2 uppercase">
        <svg class="w-3.5 h-3.5 text-[var(--primary-color)] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="8" x2="22" y2="12"></line><line x1="12" y1="2" x2="22" y2="12"></line><path d="M12 2 2 12h5l9 9v-5l5-5L12 2z"></path></svg> ${t.text}
      </a>
    `;
  });
  ticker.innerHTML = html;
}

// Initialise Member Voices Testimonials Marquee
function initTestimonials() {
  const track = document.getElementById('testimonialMarqueeTrack');
  if (!track) return;
  
  let html = '';
  // Double the testimonials array for a seamless infinite scrolling loop
  const items = [...SITE.testimonials, ...SITE.testimonials];
  
  items.forEach(t => {
    html += `
      <div class="testimonial-card-glass relative min-h-[220px]">
        <span class="text-5xl text-[var(--primary-color)] font-serif absolute top-2 left-3 opacity-25">“</span>
        <p class="text-[var(--text-gray)]/90 text-sm leading-relaxed mb-6 italic relative z-10 font-medium">${t.text}</p>
        <div class="flex items-center gap-3 mt-auto pt-4 border-t border-white/40">
          <img src="${t.avatar}" alt="${t.name}" class="w-11 h-11 rounded-full object-cover shadow-inner bg-white/50 border border-white/50">
          <div>
            <h4 class="font-bold text-sm text-[var(--secondary-color)]">${t.name}</h4>
            <p class="text-xs text-[var(--text-gray)]/60 font-semibold mt-0.5">${t.role}</p>
          </div>
        </div>
      </div>
    `;
  });
  
  track.innerHTML = html;
}

// Initialise Stats Number Counters with Golden Glassmorphism
function initStatsCounters() {
  const statsRow = document.getElementById('statsRow');
  if (!statsRow) return;

  statsRow.innerHTML = '';

  SITE.about.stats.forEach((s, idx) => {
    const match = s.number.match(/^(\d+)(.*)$/);
    const target = match ? parseInt(match[1]) : 0;
    const suffix = match ? match[2] : '';

    statsRow.innerHTML += `
      <div class="stat-card text-center" data-target="${target}" data-suffix="${suffix}">
        <div class="stat-number font-['Playfair_Display']" id="stat-count-${idx}">0${suffix}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `;
  });

  const cards = statsRow.querySelectorAll('.stat-card');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const numberEl = card.querySelector('.stat-number');
        const target = parseInt(card.getAttribute('data-target'));
        const suffix = card.getAttribute('data-suffix') || '';
        
        let start = 0;
        const duration = 2000; // 2 seconds
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(easeProgress * target);
          
          numberEl.textContent = currentVal + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            numberEl.textContent = target + suffix;
          }
        };

        requestAnimationFrame(updateCount);
        obs.unobserve(card);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
}

