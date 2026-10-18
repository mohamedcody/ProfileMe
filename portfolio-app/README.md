# 💻 Portfolio Client App (Frontend)

Interactive, high-performance personal portfolio and business showcase application built with modern web technologies.

## 🚀 Core Technologies

- **React 19**: Modern UI rendering with concurrency and functional hooks.
- **TypeScript**: Strict type-checking and clean developer ergonomics.
- **Vite 8**: Next-generation frontend tooling with lightning-fast HMR and bundling.
- **Framer Motion**: Smooth scroll-triggered animations and modal transitions.
- **i18next / react-i18next**: Complete bilingual localization (Arabic RTL & English LTR).
- **Lucide React**: Clean and lightweight iconography.

## 📁 Architecture & Structure

```text
src/
├── assets/          # Static SVGs, images, and brand assets
├── components/      # Modular components
│   ├── ui/          # Reusable design system (Button, Card, Modal, PageWrapper)
│   ├── Navbar.tsx   # Responsive navigation with language toggle
│   ├── Footer.tsx   # Social links, copyright, and status badge
│   └── Layout.tsx   # Main application wrapper
├── data/            # Static configuration datasets (Team, Services, Projects)
├── pages/           # Application views
│   ├── Home.tsx     # Hero banner, About section, Tech marquee, and Partners
│   ├── Projects.tsx # Case studies showcase with full-screen gallery modal
│   ├── Services.tsx # Client services catalog with live currency switcher
│   ├── Team.tsx     # Engineering team profiles and roles
│   └── Contact.tsx  # Direct WhatsApp and lead generation form
├── i18n.ts          # Localization resources (Arabic & English)
├── index.css        # Cyberpunk/dark mode design tokens & CSS variables
├── App.tsx          # Client-side router configuration
└── main.tsx         # React application bootstrap
```

## 🛠️ Development & Build Commands

```bash
# Run local development server with Hot Module Replacement (HMR)
npm run dev

# Compile TypeScript and build for production
npm run build

# Run fast code quality checks using Oxlint
npm run lint

# Preview the production build locally
npm run preview
```

## 🌐 Localization (i18n)

The application supports real-time bilingual switching between English and Arabic. When switching to Arabic:
- The document direction is automatically toggled to `dir="rtl"`.
- Layout elements and animations mirror naturally.
- All dynamic copy is loaded via namespaced translation keys in `src/i18n.ts`.
