# Guidewire AI Accelerators

A configuration-driven showcase site for Guidewire-focused AI accelerators.

## 🚀 Deploy to Vercel (3 steps)

### 1. Push to GitHub

```bash
# Create a new repo on github.com, then:
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/guidewire-accelerators.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Framework: **Vite** (auto-detected)
4. Click **Deploy** — done! ✅

### 3. Every future update

Edit `src/config.js`, commit and push — Vercel auto-redeploys.

---

## ✏️ Customising content

**All content lives in `src/config.js`.**

### Change site name / subtitle
```js
siteName: "My Site Name",
tagline: "My Tagline",
subtitle: "Description shown under the title.",
```

### Add a link to an existing segment
```js
{
  title: "My New Tool",
  description: "What this tool does.",
  url: "https://your-link.com",
  tag: "Category",
}
```

### Add a whole new segment
```js
{
  id: "analytics",           // unique slug
  label: "Analytics Focussed",
  icon: "◎",                 // any unicode symbol
  description: "Short segment description.",
  accent: "#A78BFA",         // hex accent color
  links: [ /* ...links */ ],
}
```

---

## 🛠 Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173
