// script.js

// Switch page language between English and Arabic
function changeLanguage(lang) {
  const html = document.documentElement;
  const enToggle = document.getElementById('en-toggle');
  const arToggle = document.getElementById('ar-toggle');
  const enContent = document.getElementById('en-content');
  const arContent = document.getElementById('ar-content');

  if (lang === 'en') {
    html.lang = 'en';
    html.dir = 'ltr';
    enToggle.classList.add('active-lang');
    arToggle.classList.remove('active-lang');
    enContent.classList.add('active');
    arContent.classList.remove('active');
  } else {
    html.lang = 'ar';
    html.dir = 'rtl';
    arToggle.classList.add('active-lang');
    enToggle.classList.remove('active-lang');
    arContent.classList.add('active');
    enContent.classList.remove('active');
  }
}

// Build the WhatsApp message and open chat
function submitWhatsApp(e) {
  e.preventDefault();
  const form = e.target;
  const name    = form.querySelector('input[name="name"]').value.trim();
  const address = form.querySelector('input[name="address"]').value.trim();
  const phone   = form.querySelector('input[name="phone"]').value.trim();

  const message =
    `🛒 *طلب جديد*\n` +
    `----------------------------\n` +
    `👤 *الاسم:* ${name}\n` +
    `🏠 *العنوان:* ${address}\n` +
    `📞 *رقم الهاتف:* ${phone}\n` +
    `----------------------------`;

  const waUrl = 'https://wa.me/962797875601?text='
              + encodeURIComponent(message);

  window.open(waUrl, '_blank');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // default to Arabic
  changeLanguage('ar');

  // attach submit handlers for both forms
  document
    .getElementById('whatsapp-form')
    .addEventListener('submit', submitWhatsApp);

  document
    .getElementById('whatsapp-form-ar')
    .addEventListener('submit', submitWhatsApp);
});
