# Yael Chen Zion — Portfolio

Next.js (App Router) rebuild of yaelchenzion.com, moved off Wix so it can be edited
locally with Claude Code and deployed from a git repo.

## Design system

Borrows visual language from garment pattern-cutting (a nod to the Parsons BFA):
dashed "seam line" dividers, notched-corner "pattern piece" cards, and a mono
"spec sheet" label style for eyebrows and section tags. Full token list is at
the top of `app/globals.css` — colors, type, spacing all live there.

- **Display type:** Playfair Display
- **Body type:** Inter
- **Label/mono type:** Space Mono
- **Colors:** paper `#fbf9f5`, ink `#1a1a1a`, blue `#6d9eeb`, teal `#50a38c`,
  terracotta `#ad623b` — the same blue/teal/terracotta trio already used across
  your resume, so the site and application docs read as one system.

## Structure

```
app/
  layout.js         nav + footer wrapper, fonts, metadata
  globals.css        design tokens + all shared styles
  page.js             home
  about/page.js
  portfolio/page.js  project "collections" — has placeholder cards, see below
  contact/page.js
  components/         Nav, Footer, Grainline (icon)
```

## Getting started locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Edit any file in `app/` and it hot-reloads.

## What still needs your input

The **Portfolio** page (`app/portfolio/page.js`) has real, factual copy for the
three AI/automation case studies (Product Paula, CS knowledge base automation,
blog image pipeline) pulled from your career notes. The four "Brand Voice &
Creative Strategy" cards are placeholders — tagged with an "Add content" flag
in the UI — since I don't have the actual case study write-ups, screenshots,
or links yet. Swap in real content (and probably images) there before this
goes live.

Also worth doing before launch:
- Add real project images/screenshots (there's no image handling wired up yet —
  plain `<img>` or `next/image` both work fine)
- Double check the LinkedIn URL in `Nav`/`Footer`/`contact/page.js` — set to
  `linkedin.com/in/yaelchenzion`, update if that's not current
- Add a favicon (`app/icon.png` — Next.js picks it up automatically)

## Deploying

Easiest path: push this to a GitHub repo, then import it at vercel.com — it
auto-detects Next.js, builds, and deploys on every push. Point your domain
(yaelchenzion.com) at the Vercel project from your domain registrar's DNS
settings, and Vercel walks you through the rest.

## Working with Claude Code

Open this folder in Claude Code (`cd yael-portfolio && claude`) and you can
ask it directly to swap copy, add a new page, adjust the palette, or rework a
section — it can see and edit every file here. Good first prompts:

- "Add real content to the four placeholder portfolio cards using [paste case study]"
- "Add a project image to the Product Paula card"
- "Create a new /writing page for blog post links"
