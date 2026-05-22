# STUDIO MEY — Your Website Guide
### Written just for you, Alice 🌿

---

## What's in this folder

```
studio-mey/
├── index.html      ← Your main gallery page
├── info.html       ← Your about/bio page
├── style.css       ← All the visual design
├── script.js       ← The click behaviour + your project info
├── images/         ← PUT ALL YOUR IMAGES HERE
│   ├── bg.jpg          ← The background image (low opacity)
│   ├── portrait.jpg    ← Your photo for the Info page
│   ├── project1.jpg    ← Gallery image 1
│   ├── project2.jpg    ← Gallery image 2
│   └── ...
└── README.md       ← This file
```

---

## STEP 1 — Add your images

1. Create a folder called `images` inside the studio-mey folder
2. Copy your photos into it
3. Rename them: `project1.jpg`, `project2.jpg`, etc.
4. Pick one nice set photo and name it `bg.jpg` — this becomes the subtle background
5. Add a portrait photo and name it `portrait.jpg`

**Tip:** Make images reasonably sized (under 1MB each ideally) using a free tool like squoosh.app — it makes the site load faster.

---

## STEP 2 — Fill in your project info

Open `script.js` in VS Code (or even Notepad).

Find the section at the top called `const projects = [...]`.

For each project, fill in:
- `title:` — the project name
- `year:` — e.g. "2024"
- `director:` — or put "—" if not applicable
- `photographer:` — who shot it
- `client:` — brand or production company
- `description:` — a short evocative text about the project
- `images:` — list ALL the image files for this project (they stack in the overlay when someone clicks)

---

## STEP 3 — Add more projects (optional)

In `index.html`, copy one of the `<article class="project-card">` blocks and paste it after the last one. Change the image src and the `data-project` number.

In `script.js`, add a new `{ }` block to the `projects` array with the same index number.

---

## STEP 4 — Customise the look

Open `style.css`. At the very top, inside `:root { }`, you can change:
- `--cream`: the background colour (currently a warm off-white)
- `--ink`: the text colour
- `--accent`: the subtle gold/brown accent colour

To make the background photo more or less visible, find `.bg-image` and change `opacity: 0.07` — higher = more visible (max 1.0).

---

## STEP 5 — Put it online (free, using GitHub Pages)

### One-time setup:
1. Go to github.com and create a free account
2. Click "New repository" — name it `studio-mey`
3. Upload all your files (index.html, info.html, style.css, script.js, and the images folder)
4. Go to Settings → Pages → Source → select "main" branch → Save
5. GitHub gives you a free URL like: `yourusername.github.io/studio-mey`

### Connect your GoDaddy domain:
1. In GitHub Pages settings, add your custom domain (e.g. `studiomey.com`)
2. In GoDaddy DNS settings, add these records:
   - Type A → 185.199.108.153
   - Type A → 185.199.109.153
   - Type A → 185.199.110.153
   - Type A → 185.199.111.153
   - Type CNAME → `yourusername.github.io`
3. Wait 10-30 minutes for it to propagate
4. Done — your domain points to your site!

GitHub Pages is completely free. You only pay for your GoDaddy domain (which you already have).

---

## Need help?

Just paste any error message or describe what you want to change to Claude, and it'll update the code for you. Think of it as your on-call developer. 🙂
