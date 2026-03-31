const bouton = document.queryselector('.menu-btn');
const nav = document.queryselector('nav');

bouton.addEventListener('click', () => {
  nav.classList.toggle('is-open');
  const isOpen = nav.classList.contains('is-open');
  bouton.setAttribute('aria-expanded', isOpen);
});
