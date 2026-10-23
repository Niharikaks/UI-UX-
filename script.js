// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight the nav link of the section you are viewing
const links = document.querySelectorAll('nav a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => s && observer.observe(s));
