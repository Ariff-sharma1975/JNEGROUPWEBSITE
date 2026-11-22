const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('open', expanded);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu();
});
window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
const revealTargets = document.querySelectorAll(
  '.section-heading > *, .company-card, .about-photo, .about-copy > *, ' +
  '.principles article, .contact-band .container > *, .service-details > *, ' +
  '.products article, .contact-grid > *, .note, .location-box'
);

if ('IntersectionObserver' in window) {
  revealTargets.forEach(el => {
    const index = [...el.parentElement.children].indexOf(el);
    el.style.setProperty('--d', Math.min(index, 4) * 0.12 + 's'); // stagger
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('in');
      obs.unobserve(el);
      // clean up afterwards so hover effects aren't delayed
      setTimeout(() => {
        el.classList.remove('reveal', 'in');
        el.style.removeProperty('--d');
      }, 1500);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

  revealTargets.forEach(el => observer.observe(el));
}