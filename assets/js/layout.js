/* ============================================================
   ABIA Network – Layout injection (header + footer)
   ============================================================ */

(function () {
  'use strict';

  /* Determine base path for assets (handles subdirectory deploys) */
  const base = (function () {
    const scripts = document.querySelectorAll('script[src*="layout.js"]');
    if (scripts.length) {
      const src = scripts[scripts.length - 1].getAttribute('src');
      return src.replace(/assets\/js\/layout\.js$/, '');
    }
    return '';
  })();

  /* ── Header ─────────────────────────────────────────────── */
  const headerHTML = `
<a class="skip-link" href="#main-content">跳到主要內容</a>
<header class="site-header" role="banner">
  <div class="container">
    <a href="${base}index.html" class="site-logo" aria-label="ABIA 亞太商業創新聯盟 首頁">
      <img src="${base}assets/images/abia-logo.png" alt="ABIA Logo" width="120" height="44" onerror="this.style.display='none'">
      <span class="site-logo__text">亞太商業創新聯盟<br>Asia-Pacific Business Innovation Association</span>
    </a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="開啟導航選單">
      <span></span><span></span><span></span>
    </button>
    <nav class="site-nav" id="site-nav" role="navigation" aria-label="主要導航">
      <a href="${base}index.html">首頁</a>
      <a href="${base}about.html">關於我們</a>
      <a href="${base}services.html">核心服務</a>
      <a href="${base}membership.html">會員權益</a>
      <a href="${base}events.html">活動資訊</a>
      <a href="${base}contact.html">聯絡我們</a>
      <a href="https://forms.zohopublic.com/infoab1/form/MembershipForm/formperma/-ysz5uEbG5e68X0pzcqEOMikx_2Po2ESv7AQm2OUggw" class="btn-join" target="_blank" rel="noopener noreferrer">成為會員</a>
    </nav>
  </div>
</header>`;

  /* ── Footer ─────────────────────────────────────────────── */
  const footerHTML = `
<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="${base}assets/images/abia-logo.png" alt="ABIA Logo" width="120" height="40">
        <p>亞太商業創新聯盟（ABIA）是亞太地區多邊非營利組織，專注搭建一站式企業出海生態服務與資源對接平台，立足亞太、聯結多邊，助力跨境合作高效對接、共創共贏生態。</p>
        <div class="footer-social">
          <a href="https://www.instagram.com/abia.network/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.facebook.com/abia.network" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="mailto:info@abia.network" aria-label="電郵">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>快速連結</h4>
        <ul>
          <li><a href="${base}index.html">首頁</a></li>
          <li><a href="${base}about.html">關於我們</a></li>
          <li><a href="${base}services.html">核心服務</a></li>
          <li><a href="${base}membership.html">會員權益</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>資源</h4>
        <ul>
          <li><a href="${base}events.html">活動資訊</a></li>
          <li><a href="${base}contact.html">聯絡我們</a></li>
          <li><a href="${base}faq.html">常見問題</a></li>
          <li><a href="${base}terms.html">章程與條款</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>聯絡資訊</h4>
        <ul>
          <li>香港上環永樂街71-77號<br>Ovest 1001室</li>
          <li>+852 6080 6950</li>
          <li><a href="mailto:info@abia.network">info@abia.network</a></li>
          <li>WeChat: abianetwork</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© Copyright 2025 Asia-Pacific Business Innovation Association. All Rights Reserved.</p>
      <p><a href="${base}terms.html">章程與條款</a> &nbsp;|&nbsp; <a href="${base}contact.html">聯絡我們</a> &nbsp;|&nbsp; <a href="${base}faq.html">常見問題</a></p>
    </div>
  </div>
</footer>`;

  /* ── Inject ──────────────────────────────────────────────── */
  const headerPlaceholder = document.getElementById('site-header-placeholder');
  if (headerPlaceholder) headerPlaceholder.outerHTML = headerHTML;

  const footerPlaceholder = document.getElementById('site-footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;

})();
