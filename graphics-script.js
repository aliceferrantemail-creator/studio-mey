/* ============================================================
   STUDIO MEY — Graphics Script
   ============================================================ */

const projects = [
  // Add entries here, matching the card order in graphics.html, e.g.:
  // {
  //   title: "Project Title",
  //   description: "Short description",
  //   credits: "Design: Alice Ferrante",
  //   images: [
  //     "images/example1.jpg",
  //     "images/example2.jpg",
  //   ]
  // },
];

// ============================================================
//  OVERLAY LOGIC — no need to touch anything below this line
// ============================================================

const overlay            = document.getElementById('overlay');
const overlayClose       = document.getElementById('overlayClose');
const overlayImages      = document.getElementById('overlayImages');
const overlayNumber      = document.getElementById('overlayNumber');
const overlayTitle       = document.getElementById('overlayTitle');
const overlayDescription = document.getElementById('overlayDescription');
const overlayCredits     = document.getElementById('overlayCredits');

function openProject(index) {
  const p = projects[index];

  overlayImages.innerHTML = '';
  p.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = p.title;
    img.loading = 'lazy';
    overlayImages.appendChild(img);
  });

  overlayNumber.textContent      = String(index + 1).padStart(2, '0');
  overlayTitle.textContent       = p.title;
  overlayDescription.textContent = p.description || '';
  overlayCredits.textContent     = p.credits || '';

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  overlayImages.scrollTop = 0;
  overlay.scrollTop = 0;
}

function closeOverlay() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const index = parseInt(card.dataset.project, 10);
    openProject(index);
  });
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const index = parseInt(card.dataset.project, 10);
      openProject(index);
    }
  });
});

overlayClose.addEventListener('click', closeOverlay);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeOverlay();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOverlay();
});

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
