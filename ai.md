================================================================================
PORTFOLIO BLUEPRINT: BENTO GRID LAYOUT (BILINGUAL EN/ES, THEMING & CLEAN ARCHITECTURE)
================================================================================

1. PROJECT OVERVIEW & CORE RULES
--------------------------------------------------------------------------------
- Objective: High-impact, modern portfolio landing page for a Web Designer & Software Engineer.
- Style: Bento Grid (Asymmetric modular layout, high contrast, subtle glowing borders).
- Languages: English (EN) and Spanish (ES) with an instant state toggle.
- Theming: Fully parameterized color system using CSS Variables & HSL with native Light / Dark mode support.
- Tech Stack: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React.


2. ARCHITECTURAL RULE: COMPONENT-DRIVEN & ATOMIC DESIGN
--------------------------------------------------------------------------------
- CRITICAL RULE: Monolithic files are strictly forbidden. To prevent massive code files, every section, card, or reusable element must live in its own isolated component file inside `components/`.
- Separation of Concerns: `page.tsx` acts only as a structural assembler (Server Component layout), importing modular client/server components.
- Delegation: Logic, state (like i18n or theme toggling), and complex UI sub-elements must be delegated to dedicated components.
- Server vs Client Split: Keep components as Server Components by default. Use 'use client' strictly and exclusively where browser interactivity (state, effects, event listeners) is required.


3. PARAMETERIZED COLOR SYSTEM (globals.css)
--------------------------------------------------------------------------------
The color palette uses CSS custom properties to allow easy future re-theming from a single file:

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --card: 0 0% 96% / 1;
  --card-foreground: 240 10% 3.9%;
  --primary: 238 84% 67%;
  --border: 240 5.9% 90%;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 6% 10%;
  --card-foreground: 0 0% 98%;
  --primary: 238 84% 67%;
  --border: 240 3.7% 15.9%;
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  transition: background-color 0.3s ease, color 0.3s ease;
}


4. GLOBAL ENGINEERING & QUALITY RULES
--------------------------------------------------------------------------------
To ensure a senior-level standard, the implementation must adhere to the following best practices:

1. Security & Secrets Management:
   - Never hardcode API keys, tokens, or credentials into the source code.
   - Use environment variables (.env.local) and ensure they are added to .gitignore.

2. Clean Version Control & Commit Ownership:
   - CRITICAL RULE: The AI agent must NEVER execute `git commit` or `git push` commands under any circumstances. All commits are exclusively performed by the user after reviewing changes.
   - When suggesting commits, the AI may only recommend descriptive commit messages following the Conventional Commits specification (e.g., `feat: add bento grid layout`, `fix: resolve hydration mismatch`, `style: update theme variables`), leaving execution to the user.

3. Performance & Optimization:
   - Optimize all static assets and use Next.js native <Image /> components to prevent layout shifts and ensure fast loading speeds.
   - Avoid heavy third-party dependencies when native CSS or lightweight utilities can achieve the same result.

4. Error Handling & Resilience:
   - Implement Next.js convention files such as `error.tsx` (for graceful fallback UI on runtime errors) and `not-found.tsx` (for customized 404 pages).

5. Strict Type Safety & Code Quality:
   - Zero tolerance for `any` types in TypeScript. Define clear interfaces and types in a dedicated `types/` directory.
   - Enforce consistent code style using ESLint and Prettier.

6. Professional Documentation:
   - Maintain a detailed `README.md` at the root of the repository containing a clear description, tech stack, installation steps, and live demo links.


5. FOLDER STRUCTURE STANDARD
--------------------------------------------------------------------------------
- app/ -> Routing, layouts, page.tsx (Server Components), error.tsx, not-found.tsx.
- components/sections/ -> Modular Bento grid cards (HeroCard.tsx, ProjectCard.tsx, etc.).
- context/ -> Global state for internationalization (LanguageContext.tsx).
- dictionaries/ -> JSON files for en.json and es.json.
- types/ -> Strict TypeScript interfaces.
- public/ -> Static images and PDF resumes.