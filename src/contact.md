---
layout: base.njk
title: Contact
---

<form
  id="contact-form"
  action="https://formspree.io/f/xreapabn"
  method="POST"
  class="contact-form"
>
  <label>
    Your email:
    <input type="email" name="email" required>
  </label>
  <label>
    Your message:
    <textarea name="message" rows="10" required></textarea>
  </label>
  <p id="form-status" class="form-status" aria-live="polite"></p>
  <button type="submit">Send</button>
</form>

<script>
(function() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form || !status) return;

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    status.textContent = 'Sending...';
    status.className = 'form-status form-status--sending';

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      const data = await response.json();

      if (response.ok) {
        status.textContent = 'Thanks for your message. I\'ll get back to you soon.';
        status.className = 'form-status form-status--success';
        form.reset();
      } else {
        if (data.errors) {
          status.textContent = data.errors.map(err => err.message).join(', ');
        } else {
          status.textContent = 'Something went wrong. Please try again.';
        }
        status.className = 'form-status form-status--error';
      }
    } catch (err) {
      status.textContent = 'Something went wrong. Please try again.';
      status.className = 'form-status form-status--error';
    }
  });
})();
</script>