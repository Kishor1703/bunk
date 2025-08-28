// Mobile nav toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

function closeNav() {
  nav.classList.remove('mobile-open');
  mobileBtn.classList.remove('open');
}

function toggleNav(e) {
  e.stopPropagation();
  const isOpen = nav.classList.toggle('mobile-open');
  mobileBtn.classList.toggle('open', isOpen);
}

if (mobileBtn) {
  mobileBtn.addEventListener('click', toggleNav);
}

// Close when clicking outside
document.addEventListener('click', (e) => {
  const isClickInside = nav.contains(e.target) || mobileBtn.contains(e.target);
  if (!isClickInside) closeNav();
});

// Close on resize (when switching to desktop)
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeNav();
});
