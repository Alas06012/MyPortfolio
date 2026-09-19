# Diego Alas - Portfolio Web (Bento Grid)

Modern, asymmetric Bento Grid portfolio for a Software Engineer & Web Designer, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

Features full bilingual support (**English / Spanish**), parameterized **Light/Dark Mode** theming (Obsidian dark palette with indigo accents), and staggered transitions with **Framer Motion**.

---

## ✨ Features

- **Asymmetric Bento Grid**: Modular, high-impact layout engineered with Tailwind CSS and responsive column spans.
- **Component-Driven Architecture**: Fully isolated components in `components/sections/` ensuring zero monolithic files.
- **Instant Bilingual Support (EN / ES)**: Lightweight dictionary architecture managed through a global React Context (`LanguageContext`) with `localStorage` persistence.
- **Parameterized Theming (Light / Dark)**: Configured with HSL CSS variables in `globals.css` with native class-based switching (`ThemeToggle`) and an anti-FOUC script.
- **Featured Project Showcase**: Dedicated showcase card for **Hogareño** (Home & Property Management Platform) highlighting metrics, key features, and live links.
- **Staggered Animations**: Smooth entry and hover animations powered by `framer-motion` and subtle glow effects.
- **Error Handling**: Graceful runtime error boundaries (`app/error.tsx`) and custom 404 page (`app/not-found.tsx`).
- **Strict TypeScript**: 100% type-safe without `any` types.

---

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
├── app/
│   ├── error.tsx           # Global runtime error boundary
│   ├── globals.css         # HSL color variables & Bento glow styles
│   ├── layout.tsx          # Root layout with providers & theme script
│   ├── not-found.tsx       # Custom 404 page
│   └── page.tsx            # Server Component structural assembler
├── components/
│   ├── sections/           # Modular Bento Grid cards
│   │   ├── BentoGrid.tsx   # Asymmetric grid container & stagger motion
│   │   ├── ContactCard.tsx # Contact channels & copy email action
│   │   ├── ExperienceCard.tsx # Career path & accomplishments
│   │   ├── HeroCard.tsx    # High-impact introduction & CTAs
│   │   ├── ProfileCard.tsx # Bio, role & philosophy
│   │   ├── ProjectCard.tsx # Featured project card (Hogareño)
│   │   └── TechStackCard.tsx # Categorized tech stack & skill badges
│   └── ui/                 # Reusable UI controls
│       ├── Header.tsx      # Top bar with status & controls
│       ├── LanguageToggle.tsx # Instant EN/ES switch
│       └── ThemeToggle.tsx # Light/Dark mode switch
├── context/
│   ├── LanguageContext.tsx # Bilingual state & dictionary provider
│   └── ThemeContext.tsx    # Theme state & document class controller
├── dictionaries/
│   ├── en.json             # English translation dictionary
│   └── es.json             # Spanish translation dictionary
├── lib/
│   └── utils.ts            # Class merging utility (clsx + tailwind-merge)
├── types/
│   ├── dictionary.ts       # Strict dictionary interfaces
│   ├── project.ts          # Project schema definition
│   └── theme.ts            # Theme types definition
└── public/                 # Static assets
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Alas06012/MyPortfolio.git
cd MyPortfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 📄 License

MIT License. Designed and built by Diego Alas.
