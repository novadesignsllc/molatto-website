/* Shared footer — injected into #footer on every page */
(function () {
  var html = '\
  <footer class="site-footer">\
    <div class="container">\
      <div class="footer-grid">\
        <div class="footer-brand">\
          <a class="brand" href="index.html" aria-label="Molatto, Inc home">\
            <img src="assets/logo-icon.webp" alt="Molatto logo" style="width:36px" />\
            <span class="wordmark">MOLATTO<span style="color:var(--red)">.</span></span>\
          </a>\
          <p>A New Haven-based direct marketing &amp; customer acquisition firm. We put your brand face to face with the people who matter most, your customers.</p>\
          <div class="socials">\
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.3.2-.5.5-.5z"/></svg></a>\
            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3l-6.6 7.5L21.5 21h-5.9l-4.1-5.4L6.7 21H3.6l7-8L3 3h6l3.7 4.9zM16.4 19h1.6L8 5H6.3z"/></svg></a>\
            <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8.5v9h-3v-9zM5 7a1.7 1.7 0 1 1 0-3.5A1.7 1.7 0 0 1 5 7zm15.5 4.8V17.5h-3v-5c0-1.3-.5-2-1.6-2-1 0-1.6.7-1.6 2v5h-3v-9h2.9v1.2c.5-.8 1.4-1.5 2.9-1.5 2.2 0 3.4 1.4 3.4 4.3z"/></svg></a>\
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>\
          </div>\
        </div>\
        <div class="footer-col">\
          <h4>Company</h4>\
          <ul>\
            <li><a href="index.html">Home</a></li>\
            <li><a href="services.html">Services</a></li>\
            <li><a href="about.html">About</a></li>\
            <li><a href="contact.html">Contact</a></li>\
          </ul>\
        </div>\
        <div class="footer-col">\
          <h4>Legal</h4>\
          <ul>\
            <li><a href="privacy-policy.html">Privacy Policy</a></li>\
            <li><a href="terms-conditions.html">Terms &amp; Conditions</a></li>\
          </ul>\
        </div>\
        <div class="footer-col">\
          <h4>Get in Touch</h4>\
          <ul>\
            <li class="line">171 Orange St.<br>New Haven, CT 06510</li>\
            <li><a href="tel:8602693173">860-269-3173</a></li>\
            <li><a href="mailto:ali@molatto.org">ali@molatto.org</a></li>\
          </ul>\
        </div>\
      </div>\
      <div class="footer-bottom">\
        <span>&copy; <span id="year">2026</span> Molatto, Inc. All rights reserved.</span>\
        <span><a href="privacy-policy.html">Privacy</a> &nbsp;·&nbsp; <a href="terms-conditions.html">Terms</a></span>\
      </div>\
    </div>\
  </footer>';
  var mount = document.getElementById('footer');
  if (mount) mount.outerHTML = html;
})();
