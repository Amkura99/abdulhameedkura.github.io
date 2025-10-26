// script.js - small interactivity
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Contact form basic client validation (prevents default if missing)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        e.preventDefault();
        alert('Please fill all fields before sending.');
      } else {
        // Let mailto form submit; for better UX consider using serverless form or GitHub Actions
        // After submit you may show a message or clear fields, but mailto will open user's email client.
      }
    });
  }
});
