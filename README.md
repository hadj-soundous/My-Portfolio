# Portfolio Website

A personal portfolio site featuring a premium dark-luxury aesthetic with crimson/red accents, built with vanilla HTML/CSS/JS on the frontend and a Node.js/Express API on the backend for handling contact form submissions.



---

## ✨ Features

- **Three.js animated backgrounds** — wireframe shards, dust particles, star field, and mouse parallax effects
- **Dark / Light mode** — theme toggle synced across pages via `localStorage`, with theme-aware Three.js color swapping
- **Responsive multi-page navigation** — sticky nav bar with a hamburger menu for mobile
- **Scroll-triggered reveal animations** for a polished, dynamic feel
- **Glassmorphism UI** styling throughout
- **Contact form backend** — submissions handled and stored via an Express API with SQLite

---

## 🗂️ Project Structure

```
portfolio/
├── backend/
│   ├── config/            # App/database configuration
│   ├── middleware/         # Express middleware
│   ├── routes/
│   │   ├── adminRoutes.js     # Admin-facing endpoints
│   │   └── contactRoutes.js   # Contact form submission endpoint
│   ├── services/           # Business logic / helper services
│   ├── .env                # Environment variables (not committed)
│   ├── package.json
│   ├── portfolio.db        # SQLite database
│   └── server.js           # Express app entry point
│
└── frontend/
    ├── hdr/                 # HDR/environment assets for Three.js
    ├── images/              # Site images and assets
    ├── js/                  # JavaScript (Three.js scenes, theme toggle, nav, animations)
    ├── models/              # 3D models used in Three.js scenes
    ├── index.html           # Home page
    ├── about.html           # About page
    ├── skills.html          # Skills page
    ├── projects.html        # Projects showcase
    ├── contact.html         # Contact form
    └── fun.html             # Extras / playground page
```

---

## 🛠️ Tech Stack

**Frontend**
- HTML5, CSS3, vanilla JavaScript
- [Three.js](https://threejs.org/) for animated 3D backgrounds

**Backend**
- Node.js + Express
- SQLite (via `portfolio.db`)
- dotenv for environment configuration

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in `backend/` with the required variables:
   ```env
   PORT=5000
   # add any other environment variables your services need
   ```

4. Start the backend server
   ```bash
   node server.js
   ```

5. Serve the frontend
   - Open `frontend/index.html` directly in your browser, or
   - Serve it with a local static server (e.g. `npx serve frontend`) for correct relative paths

---

## 📄 Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page with hero section and Three.js background |
| `about.html` | Background, education, and story |
| `skills.html` | Technical skills and tools |
| `projects.html` | Showcase of featured projects |
| `contact.html` | Contact form (submits to backend API) |
| `fun.html` | Extra/experimental page |


---

## 👤 About Me

I'm an AI Engineering student (ENSTA Alger) working across AI, security, databases, and networking, alongside freelance work as a UI/UX designer, web developer, and presentation designer.


---

## 📝 License

This project is open source. Feel free to reference it, but please don't copy the design/content directly. © 2026 HADJ Soundous
