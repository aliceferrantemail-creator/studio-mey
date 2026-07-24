/* ============================================================
   STUDIO MEY — Events Script
   Same as script.js but for the Events page.
   Add your event projects here exactly the same way.
   ============================================================ */

const projects = [
  {
    title: "Cote & Ciel Launch Event",
    description: "Art Direction and Production by Alice Ferrante",
    credits: "Set Design: Alice Ferrante\n",
    images: [
      "images/Coteciel1.jpg",
      "images/Coteciel2.jpg",
      "images/Coteciel3.jpg",
      "images/Coteciel4.jpg",
      "images/Coteciel5.jpg",
      "images/Coteciel6.jpg",
      "images/Coteciel7.jpg",
    ]
  },
  {
    title: "Merrell x Unsactioned Atheletics Event at Netil360 - London",
    description: "Nothing but the run - After party event set up",
    credits: "Set Design: Alice Ferrante\nGraphics: Tom Roche",
    images: [
      "images/Merrellevent1.jpg",
      "images/Merrellevent2.jpg",
      "images/Merrellevent3.jpg",
      "images/Merrellevent4.jpg",
      "images/Merrellevent5.jpg",
      "images/Merrellevent6.jpg",
    ]
  },
 {
    title: "Columbia - Hike Society event at Barbican Centre - London",
    description: "Dirt Bags - Hiking event lead by Columbia ",
    credits: "Set Design: Alice Ferrante\nGraphics: Tom Roche",
    images: [
      "images/columbiaevent1.jpg",
      "images/columbiaevent2.jpg",
      "images/columbiaevent3.jpg",
      "images/columbiaevent4.jpg",
      "images/columbiaevent5.jpg",
      "images/columbiaevent6.jpg",
      "images/columbiaevent7.jpg",
    ]
  },
      {
    title: "Atmos x Mezzanine Event set - Awaykin Studio",
    description: "Art dircection for Mezzanine studio x Atmos event",
    credits: "Set Design: Alice Ferrante\nSet Decorator: Aurora Ulian",
    images: [
      "images/ATMOS1.jpg",
      "images/ATMOS2.jpg",
      "images/ATMOS3.jpg",
      "images/ATMOS4.jpg",
      "images/ATMOS5.jpg",
      "images/ATMOS6.jpg",
      "images/ATMOS7.jpg",
    ]
  },
      {
    title: "Purple Mountain Observatory Paris SFW2026",
    description: "Art dircection for PMO Paris Fashion week 2026 Showrooom ",
    credits: "Set Design: Alice Ferrante\nSet Decorator: Aurora Ulian",
    images: [
      "images/PMOsummer1.jpg",
      "images/PMOsummer2.jpg",
      "images/PMOsummer3.jpg",
      "images/PMOsummer4.jpg",
      "images/PMOsummer5.jpg",
      "images/PMOsummer6.jpg",
      "images/PMOsummer7.jpg",
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
