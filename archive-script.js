/* ============================================================
   STUDIO MEY — Archive Script
   Fill in your archive projects below exactly like script.js
   ============================================================ */

const projects = [
  {
    title: "Laser cut wooden pieces - personal experiment",
    description: "Graphics laser cut ideas",
    images: [
      "images/laser1.jpg",
      "images/laser2.bmp",
    ]
  },
   {
    title: "Mongolia Article for Orenteer Mapazine Issue 9th - Carcadian Rhythm",
    description: "Report about my trip to Mongolia in 2023, photograohed and written by me for Orienteer Mapazine Isue 9th",
    credits: "Author: Alice Ferrante\nMgazine: Orienteer Mapazine",
    images: [
      "images/orienteer1.jpg",
      "images/orienteer2.jpg",
      "images/orienteer3.jpg",
      "images/orienteer4.jpg",
      "images/orienteer5.jpg",
      "images/orienteer6.jpg",
      "images/orienteer7.jpg",
    ]
  },
   {
    title: "Mongolia article for Peak Magazine - Volume 5 ",
    description: "In the Altai Mountains, Time Moves Differently. I arrived in Mongolia chasing a festival, but what I found was a different rhythm of life, one where time stretches wide like the snow-covered steppes. In the far west, near the Kazakh borderlands, my days were defined by thick silence, warm tea, and the crackling of fires inside gers. What began as a mission to document the Golden Eagle Festival quickly unravelled into something far more personal: a quiet immersion into a nomadic culture that thrives on simplicity, resilience, and a deep connection to nature.",
    credits: "Author: Alice Ferrante\nMgazine: Peak Magazine",
    images: [
      "images/peak1.jpg",
      "images/peak2.jpg",
      "images/peak3.jpg",
      "images/peak4.jpg",
    ]
  },
  
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
