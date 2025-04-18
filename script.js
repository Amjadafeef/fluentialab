// Language switcher
function changeLanguage(lang) {
    // Update active language button
    document.getElementById('en-toggle').classList.remove('active-lang');
    document.getElementById('ar-toggle').classList.remove('active-lang');
    document.getElementById(lang + '-toggle').classList.add('active-lang');
    
    // Show/hide content based on language
    document.getElementById('en-content').classList.remove('active');
    document.getElementById('ar-content').classList.remove('active');
    document.getElementById(lang + '-content').classList.add('active');
  }
  
  // Review carousel functions - English
  let currentReview = 0;
  const reviews = document.querySelectorAll('#review-list .review');
  
  function changeReview(step) {
    reviews[currentReview].classList.remove('active');
    currentReview = (currentReview + step + reviews.length) % reviews.length;
    reviews[currentReview].classList.add('active');
  }
  
  // Review carousel functions - Arabic
  let currentReviewAr = 0;
  const reviewsAr = document.querySelectorAll('#review-list-ar .review');
  
  function changeReviewAr(step) {
    reviewsAr[currentReviewAr].classList.remove('active');
    currentReviewAr = (currentReviewAr + step + reviewsAr.length) % reviewsAr.length;
    reviewsAr[currentReviewAr].classList.add('active');
  }
  
  // Star rating - English
  const starsInput = document.querySelectorAll('#star-input span');
  starsInput.forEach(star => {
    star.addEventListener('click', () => {
      document.getElementById('rating').value = star.dataset.value;
      starsInput.forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < star.dataset.value; i++) {
        starsInput[i].classList.add('selected');
      }
    });
  });
  
  // Star rating - Arabic
  const starsInputAr = document.querySelectorAll('#star-input-ar span');
  starsInputAr.forEach(star => {
    star.addEventListener('click', () => {
      document.getElementById('rating-ar').value = star.dataset.value;
      starsInputAr.forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < star.dataset.value; i++) {
        starsInputAr[i].classList.add('selected');
      }
    });
  });
  
  // Update average rating - English
  function updateAverageRating() {
    const stars = document.querySelectorAll('#review-list .stars');
    let total = 0;
    stars.forEach(s => {
      const starCount = (s.textContent.match(/★/g) || []).length;
      total += starCount;
    });
    const avg = (total / stars.length).toFixed(1);
    document.getElementById('average-rating').textContent = `Average Rating: ${'★'.repeat(Math.round(avg))} (${avg})`;
  }
  
  // Update average rating - Arabic
  function updateAverageRatingAr() {
    const stars = document.querySelectorAll('#review-list-ar .stars');
    let total = 0;
    stars.forEach(s => {
      const starCount = (s.textContent.match(/★/g) || []).length;
      total += starCount;
    });
    const avg = (total / stars.length).toFixed(1);
    document.getElementById('average-rating-ar').textContent = `متوسط التقييم: ${'★'.repeat(Math.round(avg))} (${avg.replace('.', '٫')})`;
  }
  
  // Add review - English
  function addReview(e) {
    e.preventDefault();
    const name = document.getElementById('reviewer').value;
    const location = document.getElementById('location').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;
    const stars = '★'.repeat(rating);
    
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `<div class="stars">${stars}</div><strong>${name}${location ? ' from ' + location : ''}</strong><p>${comment}</p>`;
    document.getElementById('review-list').appendChild(newReview);
    
    // Reset form
    document.getElementById('reviewer').value = '';
    document.getElementById('location').value = '';
    document.getElementById('rating').value = '5';
    document.getElementById('comment').value = '';
    starsInput.forEach(s => s.classList.remove('selected'));
    starsInput[4].classList.add('selected');
    
    updateAverageRating();
    
    // Show success message
    alert('Thank you for your review!');
  }
  
  // Add review - Arabic
  function addReviewAr(e) {
    e.preventDefault();
    const name = document.getElementById('reviewer-ar').value;
    const location = document.getElementById('location-ar').value;
    const rating = document.getElementById('rating-ar').value;
    const comment = document.getElementById('comment-ar').value;
    const stars = '★'.repeat(rating);
    
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `<div class="stars">${stars}</div><strong>${name}${location ? ' من ' + location : ''}</strong><p>${comment}</p>`;
    document.getElementById('review-list-ar').appendChild(newReview);
    
    // Reset form
    document.getElementById('reviewer-ar').value = '';
    document.getElementById('location-ar').value = '';
    document.getElementById('rating-ar').value = '5';
    document.getElementById('comment-ar').value = '';
    starsInputAr.forEach(s => s.classList.remove('selected'));
    starsInputAr[4].classList.add('selected');
    
    updateAverageRatingAr();
    
    // Show success message
    alert('شكراً لك على التقييم!');
  }
  
  // Shopping cart functionality
  let cart = [];
  
  function addToCart(product, price) {
    cart.push({product, price});
    alert(`${product} added to cart!`);
  }
  
  // Initialize ratings
  updateAverageRating();
  updateAverageRatingAr();
  
  document.addEventListener('DOMContentLoaded', function () {
    // English form submission
    const formEn = document.getElementById('whatsapp-form');
    if (formEn) {
      formEn.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = document.getElementById('name').value.trim();
        const address = document.getElementById('address').value.trim();
        const phone = document.getElementById('phone').value.trim();
  
        if (!name || !address || !phone) {
          alert("Please fill in all fields before submitting.");
          return;
        }
  
        const message =
          `🛒 *New Order Request*\n` +
          `----------------------------\n` +
          `👤 *Name:* ${name}\n` +
          `🏠 *Address:* ${address}\n` +
          `📞 *Phone:* ${phone}\n` +
          `----------------------------`;
  
        const whatsappURL = `https://wa.me/962772258084?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
      });
    }
  
    // Arabic form submission
    const formAr = document.getElementById('whatsapp-form-ar');
    if (formAr) {
      formAr.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = document.getElementById('name-ar').value.trim();
        const address = document.getElementById('address-ar').value.trim();
        const phone = document.getElementById('phone-ar').value.trim();
  
        if (!name || !address || !phone) {
          alert("يرجى تعبئة جميع الحقول قبل الإرسال.");
          return;
        }
  
        const message =
          `🛒 *طلب جديد*\n` +
          `----------------------------\n` +
          `👤 *الاسم:* ${name}\n` +
          `🏠 *العنوان:* ${address}\n` +
          `📞 *رقم الهاتف:* ${phone}\n` +
          `----------------------------`;
  
        const whatsappURL = `https://wa.me/962772258084?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
      });
    }
  });