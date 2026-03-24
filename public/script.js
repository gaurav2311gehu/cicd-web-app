// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Slider
let slides = document.querySelectorAll('.slide');
let index = 0;
setInterval(() => {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}, 3000);

// Contact form submit
const form =document.getElementById('contactForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message);
  });