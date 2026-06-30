# Molatto, Inc — Website

Marketing website for **Molatto, Inc**, a direct marketing & customer acquisition firm based in New Haven, CT.

Modern, responsive, static site built with plain HTML, CSS, and a little vanilla JavaScript — no build step required.

## Pages
- `index.html` — Home
- `services.html` — Services (Client Acquisition, Brand Development, Customer Retention)
- `about.html` — About / Our Story / Team
- `contact.html` — Contact form, info, hours, map
- `privacy-policy.html` — Privacy Policy
- `terms-conditions.html` — Terms & Conditions

## Stack & details
- **Fonts:** Space Grotesk (display) + Bai Jamjuree (body), via Google Fonts
- **Palette:** red / black / white
- **Images:** served as optimized `.webp`
- Shared footer injected via `footer.js`; interactions (mobile nav, scroll reveals, count-ups, contact form) in `script.js`

## Local preview
Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy
Any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages). No configuration needed.
