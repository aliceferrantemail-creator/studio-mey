/* ============================================================
   STUDIO MEY — Script
   Handles: project overlay, gallery interactions, year
   ============================================================ */

// ============================================================
//  PROJECT DATA
//  This is where you fill in all your project information.
//  Each { } block = one project card on the gallery.
//  The order here matches the order of cards in index.html.
//
//  images: list the filenames of ALL photos for this project.
//          They will appear stacked in the overlay.
//          Put the images in your /images/ folder.
// ============================================================

const projects = [
  {
    title: "Columbia x Brandnation",
    description: "Columbia debut for Paris Fashion week 2026",
    credits: "Set Design: Alice Ferrante\nPhotography: Ian Robert Wilkinson",
    images: [
     "images/ColumbiaxBrandnation1.jpg",
      "images/ColumbiaxBrandnation2.jpg",
      "images/ColumbiaxBrandnation3.jpg",
      "images/ColumbiaxBrandnation4.jpg",
      "images/ColumbiaxBrandnation5.jpg",
      "images/ColumbiaxBrandnation6.jpg",
      "images/ColumbiaxBrandnation7.jpg",
      "images/ColumbiaxBrandnation8.jpg",
      "images/ColumbiaxBrandnation9.jpg",
      "images/ColumbiaxBrandnation10.jpg",
    ]
  },
  {
    title: "Hiking Patrol x Mammut",
    description: "Hiking Patrol with MAMMUT collaboration for Spring/Summer 2026, which was unveiled at the Paris Fashion Week.",
    credits: "Set Design: Alice Ferrante\nPhotography: Rory Griffin",
    images: [
      "images/HPxMammut1.jpg",
      "images/HPxMammut2.jpg",
      "images/HPxMammut3.jpg",
      "images/HPxMammut4.jpg",
      "images/HPxMammut5.jpg",
    ]
  },
  {
    title: "Glass Magazine",
    description: "Editorial for the Glass Magazine",
    credits: "Set Design: Alice Ferrante\nPhotography: Rory Griffin",
    images: [
      "images/GlassMag1.jpg",
      "images/GlassMag2.jpg",
      "images/GlassMag3.jpg",
      "images/GlassMag4.jpg",
      "images/GlassMag5.jpg",
      "images/GlassMag6.jpg",
      "images/GlassMag7.jpg",
      "images/GlassMag8.jpg",
          ]
  },
  {
    title: "Hiking Patrol - Renewal in Repose",
   description: "\"Renewal In Repose\" embodies the discreet yet vital processes of shedding the old and nurturing the new, a quiet assurance of growth even in dormant months. This philosophy informs Hiking Patrol\'s design ethos: technical garments that are simple yet carefully made, designed to last, and conceived to transcend fleeting trends while adapting to shifting conditions.",
    credits: "Set Design: Alice Ferrante\nPhotography: Rory Griffin",
    images: [
      "images/HikingPatrolCity1.jpg",
      "images/HikingPatrolCity2.jpg",
      "images/HikingPatrolCity3.jpg",
      "images/HikingPatrolCity4.jpg",
      "images/HikingPatrolCity5.jpg",
      "images/HikingPatrolCity6.jpg",
      "images/HikingPatrolCity7.jpg",
      "images/HikingPatrolCity8.jpg",
    ]
  },
  {
    title: "Hiking Patrol SS26",
    description: "Description of the fifth project.",
    credits: "Set Design: Alice Ferrante\nPhotography: Rory Griffin",
    images: [
     "images/HikingPatrolMoss1.jpg",
      "images/HikingPatrolMoss2.jpg",
      "images/HikingPatrolMoss3.jpg",
      "images/HikingPatrolMoss4.jpg",
      "images/HikingPatrolMoss5.jpg",
      "images/HikingPatrolMoss6.jpg",
      "images/HikingPatrolMoss7.jpg",
    ]
  },
  {
    title: "Purple Mountain Observatory",
    description: `Set within a constructed environment influenced by the idea of prospective engineered landscapes in space.
    Within the studio, natural forms are reconstructed using industrial materials; metallic structures stand in for trees, fabricated surfaces echo the environments we recognise.`,
    credits: "Set Design: Alice Ferrante\nPhotography: Rory Griffin",
    images: [
      "images/pmo1.jpg",
      "images/pmo2.jpg",
      "images/pmo3.jpg",
    ]
  },
  {
    title: "Cover for POP Magazine Issue 50",
    description: "Amelia Gray for POP Magazine issue 50, photograohed by Oliver Hadlee Pearch",
    credits: "Set Design: Alice Ferrante\nPhotography: Oliver Hadlee Pearch",
    images: [
      "images/pop1.jpg",
      "images/pop2.jpg",
      "images/pop3.jpg",
      "images/pop4.jpg",
      "images/pop5.jpg",
      "images/pop6.jpg",
    ]
  },
  {
    title: "Sky people",
    description: "New collection debut for Sky People",
    credits: "Set Design: Alice Ferrante\nPhotography: Graeme Gaughan",
    images: [
      "images/skypeople1.jpg",
      "images/skypeople2.jpg",
      "images/skypeople3.jpg",
      "images/skypeople4.jpg",
    ]
  },
   {
    title: "The Rakish Gent Magazine",
    description: "The Rakish Gent Magazine Issue 6 with Francisco Lachowski",
    credits: "Set Design: Alice Ferrante\nPhotography: Edward Cooke",
    images: [
      "images/therakishgent1.jpg",
      "images/therakishgent2.jpg",
    ]
  },
   {
    title: "WSJ Magazine Cover - Edie Campbell",
    description: "WSJ Cover Edition",
    credits: "Set Design: Alice Ferrante\nPhotography: Laura Jane Coulson",
    images: [
      "images/wsj1.jpg",
      "images/wsj2.jpg",
      "images/wsj3.jpg",
      "images/wsj4.jpg",
    ]
  },
  {
    title: "H.Moser & Cie - Pump edition x Reebok",
    description: "Streamline Pump collaboration between Moser Exploration LAB and Reebok",
    credits: "Set Design: Alice Ferrante\nPhotography: Studio Siebrecht",
    images: [
      "images/Hmoser1.jpg",
      "images/Hmoser2.jpg",
      "images/Hmoser3.jpg",
      "images/Hmoser4.jpg",
      "images/Hmoser5.jpg",
    ]
  },
  {
    title: "H.Moser & Cie - Streamline DNA Edition",
    description: " Moser Watches 34mm and 28mm of Streamliner DNA.",
    credits: "Set Design: Alice Ferrante\nPhotography: Studio Siebrecht",
    images: [
      "images/Hmoserb1.jpg",
      "images/Hmoserb2.jpg",
      "images/Hmoserb3.jpg",
      "images/Hmoserb4.jpg",
      "images/Hmoserb5.jpg",
    ]
  },
  {
    title: "Sports Direct - Nike Air Max - Heat Rises ",
    description: "Heat Rises. Nikesportswear x Sportsdirectuk back on the streets with a new lineup of trainers.",
    credits: "Set Design: Alice Ferrante\nPhotography: Daniel Alpernia",
    images: [
      "images/Sportsdirect1.jpg",
      "images/Sportsdirect2.jpg",
      "images/Sportsdirect3.jpg",
    ]
  },
  {
    title: "Decathlon x Orienteer Mapazine ",
    description: "Escape Production x Decathlon.",
    credits: "Set Design: Alice Ferrante\nPhotography: Rory Griffin",
    images: [
      "images/decathlon1.jpg",
      "images/decathlon2.jpg",
      "images/decathlon3.jpg",
      "images/decathlon4.jpg",
      "images/decathlon5.jpg",
      "images/decathlon6.jpg",
      "images/decathlon7.jpg",
      "images/decathlon8.jpg",
    ]
  },
  {
    title: "Russh Magazine",
    description: "Raffey in Loewe for @russhmagazine",
    credits: "Set Design: Alice Ferrante\nPhotography: Anna Victoria",
    images: [
      "images/russh1.jpg",
      "images/russh2.jpg",
    ]
  },
  {
    title: "Tom Grennan Music Video",
    description: "Shadowboxing by Tom Grennan",
    credits: "Set Design: Alice Ferrante\nPhotography: Charlie-Charlie",
    images: [
      "images/tom1.jpg",
      "images/tom2.jpg",
    ]
  },
    {
    title: "Jvck James - Easier Done than Said Music video ",
    description: "Jvcl James feat Stormzy - Easier Done than Said",
    credits: "Set Design: Alice Ferrante\nPhotography: Chris Chance",
    images: [
      "images/jvck1.jpg",
      "images/jvck2.jpg",
      "images/jvck3.jpg",
      "images/jvck4.jpg",
      "images/jvck5.jpg",
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
    title: "Jvck James - Easier Done than Said Music video ",
    description: "Jvcl James feat Stormzy - Easier Done than Said",
    credits: "Set Design: Alice Ferrante\nPhotography: Chris Chance",
    images: [
      "images/jvck1.jpg",
      "images/jvck2.jpg",
      "images/jvck3.jpg",
      "images/jvck4.jpg",
      "images/jvck5.jpg",
    ]
  },
     {
    title: "Jvck James - Easier Done than Said Music video ",
    description: "Jvcl James feat Stormzy - Easier Done than Said",
    credits: "Set Design: Alice Ferrante\nPhotography: Chris Chance",
    images: [
      "images/jvck1.jpg",
      "images/jvck2.jpg",
      "images/jvck3.jpg",
      "images/jvck4.jpg",
      "images/jvck5.jpg",
    ]
  },
];

// ============================================================
//  OVERLAY LOGIC — no need to touch anything below this line
// ============================================================

const overlay       = document.getElementById('overlay');
const overlayClose  = document.getElementById('overlayClose');
const overlayImages = document.getElementById('overlayImages');
const overlayNumber = document.getElementById('overlayNumber');
const overlayTitle  = document.getElementById('overlayTitle');
const overlayDescription = document.getElementById('overlayDescription');
const overlayCredits     = document.getElementById('overlayCredits');

function openProject(index) {
  const p = projects[index];

  // Populate images
  overlayImages.innerHTML = '';
  p.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = p.title;
    img.loading = 'lazy';
    overlayImages.appendChild(img);
  });

  // Populate info
  overlayNumber.textContent      = String(index + 1).padStart(2, '0');
  overlayTitle.textContent       = p.title;
  overlayDescription.textContent = p.description || '';
  overlayCredits.textContent     = p.credits || '';

  // Open
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

// Attach click to each card
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const index = parseInt(card.dataset.project, 10);
    openProject(index);
  });
  // Keyboard accessible
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

// Close overlay
overlayClose.addEventListener('click', closeOverlay);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeOverlay();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOverlay();
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
