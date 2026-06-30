/* MOLATTO, INC — site interactions */
(function () {
  'use strict';

  // ---- Mobile nav toggle ----
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Sticky header shadow on scroll ----
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- Reveal on scroll ----
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // ---- Count-up stats ----
  var counts = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counts.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, target = parseFloat(el.dataset.count),
            suffix = el.dataset.suffix || '', dur = 1400, start = null;
        var step = function (ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var val = (target * (1 - Math.pow(1 - p, 3)));
          el.textContent = (target % 1 ? val.toFixed(1) : Math.round(val)) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        co.unobserve(el);
      });
    }, { threshold: 0.5 });
    counts.forEach(function (el) { co.observe(el); });
  }

  // ---- Contact form -> compose email ----
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var f = form.elements;
      var name = (f.firstName.value + ' ' + f.lastName.value).trim();
      var subject = encodeURIComponent('Website inquiry from ' + name);
      var body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + f.email.value + '\n' +
        'Phone: ' + f.phone.value + '\n\n' +
        f.message.value
      );
      window.location.href = 'mailto:ali@molatto.org?subject=' + subject + '&body=' + body;
      var note = document.getElementById('formNote');
      if (note) note.textContent = 'Opening your email app to send this message to ali@molatto.org…';
    });
  }

  // ---- Footer year ----
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
