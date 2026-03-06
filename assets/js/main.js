/* ============================================================
   ABIA Network – Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile nav toggle ──────────────────────────────────── */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
  }

  /* ── Active nav link ────────────────────────────────────── */
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/index';
  document.querySelectorAll('.site-nav a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.replace(/\/$/, '').replace(/\.html$/, '');
    const curNorm = currentPath.replace(/\.html$/, '');
    if (curNorm.endsWith(linkPath) && linkPath !== '' && linkPath !== '/index') {
      link.classList.add('active');
    } else if ((curNorm === '' || curNorm === '/index' || curNorm.endsWith('/index')) && (linkPath === '' || linkPath === '/index' || href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── FAQ accordion ──────────────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      // Close all
      document.querySelectorAll('.faq-question').forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        const ans = document.getElementById(b.getAttribute('aria-controls'));
        if (ans) ans.classList.remove('open');
      });
      // Open clicked (if was closed)
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        const answer = document.getElementById(this.getAttribute('aria-controls'));
        if (answer) answer.classList.add('open');
      }
    });
  });

  /* ── Smooth scroll for anchor links ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Scroll-reveal animation ─────────────────────────────── */
  if ('IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll('.card, .feature-box, .mvv-card, .benefit-card, .event-card, .faq-item');
    revealEls.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

})();
