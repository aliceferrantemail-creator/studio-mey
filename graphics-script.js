/* ============================================================
   STUDIO MEY — Graphics Script
   ============================================================ */

const projects = [
  {
    title: "Free Mon Cheri — Album Cover Graphics",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/free1.JPG",
      "images/free2.jpg",
      "images/free3.jpg",
      "images/free4.jpg",
    ]
  },
  {
    title: "Semi Devine Newsletter Head Logo",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/semidevine1.jpg",
    ]
  },
  {
    title: "Menu Design Experiment for Dalston restaurant",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/menu1.jpg",
    ]
  },
  {
    title: "Furnistool Bali Furniture shop logo",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/furni1.jpg",
    ]
  },
  {
    title: "The Soul Maker Business Card design",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/sm1.jpg",
    ]
  },
  {
    title: "Poster",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/p1.jpg",
    ]
  },
  {
    title: "Logo ideas for Nira Surf Villas",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/niraexp1.jpg",
    ]
  },
  {
    title: "Poster",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/po2.jpg",
    ]
  },
  {
    title: "Mello Blocco Climbing festival poster",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/mb1.jpg",
    ]
  },
  {
    title: "Mello Blocco Climbing festival poster",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/melloblocco1.jpg",
    ]
  },
  {
    title: "Flying Lotus Inspired poster",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/fl1.jpg",
    ]
  },
  {
    title: "Logo for Kuno Antique",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/kunologo1.jpg",
    ]
  },
  {
    title: "Ideas for Nira Surf Villas",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/nirasurf1.jpg",
    ]
  },
  {
    title: "Nira Surf Villas Poster",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/scirraposter1.jpg",
    ]
  },
  {
    title: "Nira Business Card Design",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/niracard1.jpg",
      "images/niracard2.jpg",
    ]
  },
  {
    title: "Use Collectible Vintage Clothing Logo Design",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/usecollectible1.jpg",
    ]
  },
  {
    title: "Use Collectible poster design",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/usecollectibleposter.jpg",
    ]
  },
  {
    title: "Set Deck Intro design",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/deck1.jpg",
    ]
  },
  {
    title: "Graphic Experiment",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: [
      "images/graphic1.jpg",
    ]
  },
  {
    title: "Final Zine Dissertation, \"Live or Leave\"",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: ["images/zine1.jpg"]
  },
  {
    title: "Final Zine Dissertation, \"Live or Leave\"",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: ["images/z1.jpg"]
  },
  {
    title: "Final Zine Dissertation, \"Live or Leave\"",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: ["images/zi1.jpg"]
  },
  {
    title: "Final Zine Dissertation, \"Live or Leave\"",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: ["images/zin1.jpg"]
  },
  {
    title: "Final Zine Dissertation, \"Live or Leave\"",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: ["images/zinee.jpg"]
  },
  {
    title: "Final Zine Dissertation, \"Live or Leave\"",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: ["images/zzine1.jpg"]
  },
  {
    title: "Final Zine Dissertation, \"Live or Leave\"",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: ["images/zz1.jpg"]
  },
  {
    title: "Final Zine Dissertation, \"Live or Leave\"",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: ["images/zineee.jpg"]
  },
  {
    title: "Final Zine Dissertation, \"Live or Leave\"",
    description: "",
    credits: "Graphic Design: Alice Ferrante",
    images: ["images/lastzine.jpg"]
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
