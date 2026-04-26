// === MATRIX RAIN CANVAS ===
function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, columns, drops;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*(){}[]|;:<>?/~`';
  const fontSize = 14;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    columns = Math.floor(w / fontSize);
    drops = Array(columns).fill(1);
  }
  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.fillStyle = 'rgba(10,10,10,0.06)';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#CCFF00';
    ctx.font = fontSize + 'px monospace';
    ctx.globalAlpha = 0.12;
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > h && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    ctx.globalAlpha = 1;
  }

  let animId;
  function loop() {
    draw();
    animId = requestAnimationFrame(loop);
  }
  loop();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(animId);
    else loop();
  });
}

// === FLOATING PARTICLES ===
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h;
  const particles = [];
  const count = 60;
  const maxDist = 120;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(204,255,0,0.3)';
      ctx.fill();
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'rgba(204,255,0,' + (0.15 * (1 - dist / maxDist)) + ')';
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// === SCROLL REVEAL ===
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .border-draw');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  els.forEach(el => observer.observe(el));
}

// === LIVE COUNTDOWN ===
function initCountdown() {
  const target = new Date('2026-06-15T09:00:00').getTime();
  const daysEl = document.getElementById('cd-days');
  const hrsEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');
  if (!daysEl) return;

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function update() {
    const now = Date.now();
    const diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000);
    const hr = Math.floor((diff % 86400000) / 3600000);
    const mn = Math.floor((diff % 3600000) / 60000);
    const sc = Math.floor((diff % 60000) / 1000);

    function set(el, val) {
      const s = pad(val);
      if (el.textContent !== s) {
        el.classList.add('flip');
        el.textContent = s;
        setTimeout(() => el.classList.remove('flip'), 400);
      }
    }
    set(daysEl, d); set(hrsEl, hr); set(minsEl, mn); set(secsEl, sc);
  }
  update();
  setInterval(update, 1000);
}

// === STAT COUNTER ===
function initStatCounters() {
  const stats = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const end = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();
        function step(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * end) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  stats.forEach(s => observer.observe(s));
}

// === NAV ACTIVE HIGHLIGHT ===
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector('.nav-link[href="#' + e.target.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
}

// === MOBILE MENU ===
function initMobileMenu() {
  const btn = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('menu-backdrop');
  const closeBtn = document.getElementById('menu-close');
  if (!btn || !menu) return;

  function toggle() {
    menu.classList.toggle('open');
    backdrop.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden');
  }
  btn.addEventListener('click', toggle);
  closeBtn.addEventListener('click', toggle);
  backdrop.addEventListener('click', toggle);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', toggle));
}

// === FAQ ACCORDION ===
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// === BACK TO TOP ===
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// === TIMELINE PROGRESS ===
function initTimelineProgress() {
  const fill = document.getElementById('timeline-fill');
  const section = document.getElementById('timeline');
  if (!fill || !section) return;
  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    const sectionH = section.offsetHeight;
    const visible = Math.min(Math.max(0, (window.innerHeight - rect.top) / (sectionH + window.innerHeight)), 1);
    fill.style.height = (visible * 100) + '%';
  });
}

// === INIT ALL ===
document.addEventListener('DOMContentLoaded', () => {
  initMatrix();
  initParticles();
  initScrollReveal();
  initCountdown();
  initStatCounters();
  initNavHighlight();
  initMobileMenu();
  initFAQ();
  initBackToTop();
  initTimelineProgress();
});
