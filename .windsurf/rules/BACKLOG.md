## WebCraft STUDIO Starter v2 — Sprint 1 (MVP Boilerplate)

This file is our **single source of truth** for what we build in Phase 1.
We follow it in order. After each task/subtask we create a commit.

### Stack (Sprint 1 decisions)
- **Next.js App Router** + **TypeScript (strict)**
- **Tailwind CSS** (Tailwind-first from day 0)
- **Server-first**: default to Server Components, minimal client JS
- **Content-as-code**: page/section content as typed + validated modules
- **Secure integrations**: contact form handled via **Server Actions** (no Route Handlers for MVP)
- **SEO-first**: Metadata API, canonical, OG, sitemap/robots from data

### Commit rules (use this every time)
- Format: **`type(scope): description`**
- Language: **English**
- Style: **lowercase**, imperative mood, **no period**
- Types: `feat`, `fix`, `refactor`, `chore`, `style`, `docs`
- Examples:
  - `chore(repo): initialize next.js starter`
  - `feat(seo): add metadata builder with canonical urls`
  - `feat(contact): add secure /api/contact with basic anti-spam`

### Definition of Done (Sprint 1)
- `npm run lint` passes
- `npm run typecheck` passes
- `npm run build` passes
- No secrets in client code, and `.env.example` exists
- Pages render server-first (no unnecessary `"use client"`)
- SEO: canonical + OG + sitemap + robots implemented

---

## EPIC A — Repo & project bootstrap (foundation)

### STORY A1 — Create GitHub repository (remote)
Goal: have a remote repo ready before real work starts.

#### TASK A1.1 — Create a new GitHub repo
- [✅] Create repo on GitHub (private/public as you prefer)
- [✅] Choose a name (suggestion): `wcs-starter-v2`
- [✅] Add `.gitignore`? (we can also rely on Next.js default later)

Suggested commit(s): *(none yet — GitHub creation is outside the codebase)*

#### TASK A1.2 — Initialize local git + connect remote
- [✅] `git init`
- [✅] Set default branch (`main`)
- [✅] Add remote `origin`
- [✅] First push once we have initial files (after A2)

Suggested commit after A2: `chore(repo): initial commit`

---

### STORY A2 — Initialize Next.js (App Router) + Tailwind + strict TS
Goal: create a clean baseline project we can trust.

#### TASK A2.1 — Create Next.js app (App Router)
- [✅] Run `create-next-app` with TypeScript + App Router
- [✅] Ensure Node version is compatible (use LTS)
- [✅] Verify dev server starts

Commit: `chore(repo): initialize next.js app router project`

#### TASK A2.2 — Add Tailwind CSS
- [✅] Install Tailwind toolchain
- [✅] Create `tailwind.config.*` and `postcss.config.*`
- [✅] Add Tailwind directives to `app/globals.css`
- [✅] Verify Tailwind works (quick test: a styled div on home page)

Commit: `chore(style): set up tailwind css`

#### TASK A2.3 — Enforce TypeScript strict + lint scripts
- [ ] Confirm `tsconfig.json` strict mode is enabled
- [ ] Add scripts:
  - [ ] `lint`
  - [ ] `typecheck`
  - [ ] `build`
- [ ] Run them once locally to confirm green

Commit: `chore(dx): add lint typecheck and build scripts`

---

## EPIC B — Architecture skeleton (server-first + content-as-code)

### STORY B1 — Folder structure (clean + scalable)
Goal: create the directories we will use across projects.

#### TASK B1.1 — Create baseline folders
- [ ] `app/` routes (App Router)
- [ ] `components/` split into:
  - [ ] `components/layout/`
  - [ ] `components/sections/`
  - [ ] `components/ui/`
  - [ ] `components/client/` (client islands only when needed)
- [ ] `content/` for content-as-code modules
- [ ] `lib/` for non-UI logic (seo, env, contact)

Commit: `chore(structure): add starter folder structure`

---

### STORY B2 — Content-as-code (typed + validated)
Goal: content lives in code as data, ready for future CMS.

#### TASK B2.1 — Create `content/site` configuration (single source of truth)
- [ ] Add `content/site.ts` with:
  - [ ] brand name + short description
  - [ ] `siteUrl` (base URL)
  - [ ] default OpenGraph image path
  - [ ] navigation items (with stable slugs)
  - [ ] analytics config placeholder (GA id)

Commit: `feat(content): add site configuration module`

#### TASK B2.2 — Create page content modules
- [ ] `content/pages/home.ts`
- [ ] `content/pages/contact.ts`
- [ ] `content/pages/privacy.ts`
- [ ] Keep them as **RAW DATA only**
- [ ] **Hard rule: ZERO JSX IN DATA FILES** — `content/pages/*.ts` may contain only raw primitives (string, number, boolean) and plain objects/arrays built from them

Commit: `feat(content): add mvp page content modules`

#### TASK B2.3 — Validate content with Zod (fail-fast)
- [ ] Add Zod schemas for `site` and pages
- [ ] Ensure invalid content fails early (during import/build)

Commit: `feat(content): validate content modules with zod`

---

## EPIC C — SEO baseline (metadata, canonical, sitemap, robots)

### STORY C1 — Metadata builder (reusable)
Goal: stop repeating SEO logic and avoid inconsistent URLs.

#### TASK C1.1 — Add `lib/seo` helper
- [ ] Create `lib/seo.ts` that builds metadata from:
  - [ ] `siteUrl` (canonical base)
  - [ ] page title/description
  - [ ] OG/Twitter defaults + overrides
- [ ] Support canonical URLs for every page

Commit: `feat(seo): add metadata builder with canonical and og`

#### TASK C1.2 — Apply metadata to layout + pages
- [ ] Add global defaults in `app/(site)/layout.tsx`
- [ ] Add page-level metadata for:
  - [ ] Home
  - [ ] Kontakt
  - [ ] Polityka prywatności

Commit: `feat(seo): add metadata to layout and mvp pages`

---

### STORY C2 — Generated sitemap + robots
Goal: search engine configuration is correct and consistent.

#### TASK C2.1 — Add `app/sitemap.ts`
- [ ] Generate URLs from content modules (no hardcoded paths)
- [ ] Ensure correct `lastModified` strategy (simple is fine for MVP)

Commit: `feat(seo): add sitemap generated from content`

#### TASK C2.2 — Add `app/robots.ts`
- [ ] Production: allow indexing
- [ ] Dev/preview: noindex (safe default)

Commit: `feat(seo): add robots rules with env-aware indexing`

---

## EPIC D — Pages MVP (server-first UI with Tailwind)

### STORY D1 — Site shell (Header/Footer)
Goal: basic layout that will be reused in every client site.

#### TASK D1.1 — Build layout components (server components)
- [ ] `components/layout/Header.tsx`
- [ ] `components/layout/Nav.tsx`
- [ ] `components/layout/Footer.tsx`
- [ ] Use Tailwind classes, keep it accessible (semantic HTML)

Commit: `feat(ui): add header nav and footer layout components`

#### TASK D1.2 — Add small UI primitives
Goal: avoid repeating Tailwind class soup everywhere.
- [ ] `components/ui/Container.tsx` (max width + padding)
- [ ] `components/ui/Button.tsx` (base styles + variants)
- [ ] Add `cn()` helper (class merge) if needed for variants

Commit: `feat(ui): add container button and class merge helper`

---

### STORY D2 — Home page (sections from content)
Goal: Home built from content modules and sections.

#### TASK D2.1 — Implement Home route
- [ ] `app/(site)/page.tsx` reads `content/pages/home.ts`
- [ ] Render sections based on content structure

Commit: `feat(pages): add home page from content modules`

#### TASK D2.2 — Create Home sections
- [ ] `components/sections/Hero.tsx`
- [ ] `components/sections/Features.tsx`
- [ ] `components/sections/ContactCTA.tsx`
- [ ] Tailwind styling, keep layout simple and fast

Commit: `feat(sections): add hero features and cta sections`

---

### STORY D3 — Contact page (UI) + Privacy page
Goal: finish the 3 MVP routes.

#### TASK D3.1 — Contact page route
- [ ] `app/(site)/kontakt/page.tsx` reads `content/pages/contact.ts`
- [ ] Add contact form UI placeholder (submit will be wired in EPIC E)

Commit: `feat(pages): add contact page route`

#### TASK D3.2 — Privacy page route
- [ ] `app/(site)/polityka-prywatnosci/page.tsx` reads `content/pages/privacy.ts`
- [ ] Use semantic typography (headings, lists)

Commit: `feat(pages): add privacy policy page route`

---

## EPIC E — Secure contact form (internal API only)

### STORY E1 — `/api/contact` with validation + anti-spam
Goal: contact form is safe and uses server-only logic.

#### TASK E1.1 — Define contact payload schema (Zod)
- [ ] `name`, `email`, `message`
- [ ] Trim + length limits
- [ ] Friendly error messages (but safe)

Commit: `feat(contact): add zod schema for contact payload`

#### TASK E1.2 — Implement anti-spam baseline
- [ ] Honeypot field (hidden input)
- [ ] Minimum time to submit (basic bot filter)
- [ ] No in-memory rate limiting in MVP (unreliable on serverless); we only do honeypot + minimum time checks

Commit: `feat(contact): add basic anti-spam protections`

#### TASK E1.4 — Wire Contact page form to API
- [ ] Implement a **Server Action** (e.g. `lib/actions.ts` or `lib/actions/contact.ts`) that:
  - [ ] validates input with Zod
  - [ ] enforces honeypot + minimum time checks
  - [ ] returns a safe, typed result (`ok` + message / field errors)
- [ ] Use React 19 **`useActionState`** in the form component to submit and render status
- [ ] Keep UI "dumb":
  - [ ] component only renders state (idle / submitting / success / error)
  - [ ] no business logic in the UI layer

Commit: `feat(contact): connect contact form via server action`

---

## EPIC F — Cookie consent + conditional analytics (minimal client JS)

### STORY F1 — Cookie consent UI (client island)
Goal: user must consent before we load analytics.

#### TASK F1.1 — Implement CookieConsent component
- [ ] `components/client/CookieConsent.tsx`
- [ ] Save decision (cookie or localStorage)
- [ ] Provide accept / reject buttons

Commit: `feat(consent): add cookie consent component`

### STORY F2 — Conditional GA loading
Goal: analytics only after consent (performance + privacy).

#### TASK F2.1 — Analytics component
- [ ] `components/client/Analytics.tsx`
- [ ] Loads GA only if consent is granted
- [ ] Reads GA id from env/site config (no hardcode)

Commit: `feat(analytics): load google analytics only after consent`

---

## EPIC G — DX & quality gates (CI, env, final verification)

### STORY G1 — Env baseline + safety
Goal: env is documented and validated, secrets never go to client.

#### TASK G1.1 — Add `.env.example`
- [ ] List required variables (no real secrets)

Commit: `chore(env): add env example file`

#### TASK G1.2 — Add env validation
- [ ] `lib/env.ts` with Zod validation
- [ ] Fail early if critical env is missing

Commit: `feat(env): add runtime env validation`

---

### STORY G2 — CI workflow
Goal: every change is checked automatically.

#### TASK G2.1 — Add GitHub Actions CI
- [ ] Workflow runs:
  - [ ] install
  - [ ] lint
  - [ ] typecheck
  - [ ] build

Commit: `chore(ci): add github actions workflow`

---

### STORY G3 — Sprint 1 final pass
Goal: MVP boilerplate is truly ready for reuse.

#### TASK G3.1 — Final performance/SEO sanity checklist
- [ ] Confirm no unnecessary `"use client"` in layout/pages
- [ ] Confirm `sitemap` and `robots` work
- [ ] Confirm metadata + canonical are correct for each page
- [ ] Confirm contact API does not expose internals
- [ ] Confirm analytics does not load before consent

Commit: `chore(mvp): finalize sprint 1 mvp boilerplate`

