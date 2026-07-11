document.getElementById('year').textContent = new Date().getFullYear();
const burger = document.getElementById('burger'), menu = document.getElementById('menu');
burger.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
const io = new IntersectionObserver((es) => {
  es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 3 * 70) + 'ms';
  io.observe(el);
});
