# BeeVe Global — Website

A responsive, single-page marketing site for **BeeVe Global** (IoT · AI · GPS Tracking · Agriculture · Healthcare · Defence · Software · Smart Automation), built with plain HTML, CSS and JavaScript — no build step, no framework, no dependencies.

## 📁 Project Structure

```
beeve-site/
├── index.html        # All page content and sections
├── style.css          # Design system + responsive layout
├── script.js           # Nav toggle, tabs, data-driven grids, form, animations
├── assets/
│   ├── logo_cropped.png   # Full logo (used in hero)
│   └── logo_icon.png      # Icon-only mark (used in header, footer, favicon)
└── README.md
```

## ✨ Features

- Fully responsive (mobile, tablet, desktop)
- Sticky header with mobile hamburger menu
- Interactive service tabs (GPS & Fleet, EV & Battery, IoT & Software, Security, Engineering)
- Data-driven Products, Technology and Industries grids (edit one array in `script.js` to update content)
- Contact form with client-side validation and confirmation message
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- No external JS frameworks — loads instantly, easy to host anywhere

## 🚀 Local Setup / Installation

No installation or build tools are required. You only need a way to serve static files.

### Option A — Just open it
Double-click `index.html` to open it directly in a browser. (Some browsers restrict local file access slightly; Option B is more reliable.)

### Option B — Local server (recommended)
```bash
# Python 3
cd beeve-site
python3 -m http.server 8000
# then visit http://localhost:8000
```
```bash
# Node.js (npx, no install needed)
cd beeve-site
npx serve .
```
```bash
# VS Code
Install the "Live Server" extension → right-click index.html → "Open with Live Server"
```

## 🌐 Deployment

This is a static site, so it can be deployed to **any** static host. A few common options:

### Netlify / Vercel (drag-and-drop)
1. Go to netlify.com (or vercel.com) → New site → "Deploy manually"
2. Drag the `beeve-site` folder onto the upload area
3. Done — you'll get a live URL instantly (custom domain can be attached in settings)

### GitHub Pages
```bash
cd beeve-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/beeve-global-site.git
git push -u origin main
```
Then in the repo: **Settings → Pages → Source → Deploy from branch → main / root**.

### Traditional web hosting (cPanel / shared hosting)
Upload the contents of `beeve-site/` (not the folder itself) to `public_html/` via FTP/SFTP or the hosting file manager.

### Connecting your domain (www.beeveglobal.com)
Once deployed on any host above, point your domain's DNS:
- **A record** → host's IP address, or
- **CNAME record** → the host's provided URL (e.g. `your-site.netlify.app`)

Most hosts (Netlify, Vercel, GitHub Pages) provide the exact records to add under their "Domain settings" page.

## 🛠 Customising Content

| To change...                          | Edit...                                   |
|----------------------------------------|--------------------------------------------|
| Text, headings, contact details        | `index.html`                                |
| Colours, fonts, spacing, layout        | `style.css` (see `:root` variables at top) |
| Products / Technology / Industries lists | Arrays at the top of `script.js`          |
| Logo                                   | Replace files in `assets/` (keep filenames or update references in `index.html`) |

### Wiring up the contact form
The form currently shows a confirmation message but does not send data anywhere. To make it functional, either:
- Point the `<form>` at a form backend such as Formspree, Netlify Forms, or Getform (add a `action="..."` and `method="POST"`, plus their required hidden fields), **or**
- Replace the `fetch`-free submit handler in `script.js` with a `fetch()` call to your own backend/API endpoint.

## 🎨 Design System Reference

| Token        | Value      | Usage                        |
|--------------|-----------|-------------------------------|
| `--ink`      | `#0B0F14` | Page background                |
| `--panel`    | `#121821` | Alternating section background |
| `--red`      | `#C8202E` | Primary accent (from logo)      |
| `--gold`     | `#E3A73C` | Secondary accent / highlights   |
| `--green`    | `#4C8C4A` | Tertiary accent                 |
| `--white`    | `#F5F7FA` | Primary text                    |
| `--mist`     | `#93A1B0` | Secondary/body text             |

Fonts: **Rajdhani** (headings, technical/display) + **Inter** (body text), loaded from Google Fonts.

---
Built for BeeVe Global — *Empowering Businesses Through Intelligent Connectivity.*
