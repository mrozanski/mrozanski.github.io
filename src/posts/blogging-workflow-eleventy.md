---
layout: post.njk
title: "From Notes to Posts: My Blogging Workflow"
author: "Mariano Rozanski"
date: 2025-09-20
tags: ["blogging", "techstack", "workflow", "obsidian", "github-pages", "eleventy", "ai-tools"]
---

## TL;DR

I wanted a way to share experiments without drowning in CMS bloat or social media noise. My workflow now: jot notes in Obsidian, sync with iCloud, polish with an AI buddy, and publish via Eleventy + GitHub Pages. Jekyll was my first stop, but I bailed after wrestling with outdated layouts and brittle themes. Building my own design-first setup with Eleventy feels cleaner and future-proof.

## Why blog at all?

I finally decided I have enough half-baked experiments and thoughts worth sharing that it’s time to step out of my comfort zone. Not a huge leap, but enough to feel the nerves. Blogging felt like the right move: it leaves a footprint, the content is mine, and anyone curious about my work can find it in one place. Plus, it doubles as journaling.

## My first workflow attempt

I started by cobbling together a system that could grow with me:

1. **Capture ideas fast** in [Obsidian](https://obsidian.md). Each spark becomes a markdown file in my vault.
2. **Sync the vault** via iCloud Drive. I already pay for it, and it’s low-friction.
3. **Polish with AI.** Claude handles most of my day-to-day tasks, but for blogging I wanted a separate tool. I went with ChatGPT’s custom GPTs because they adapt to style and keep my blog writing sandboxed.
4. **Publish with GitHub Pages.** It’s free, simple, keeps history, and lets me stay in the environment where I already live: git + IDE. Push to publish felt like magic.

Everything seemed set. But then came the publishing tool.

### The Jekyll detour

Jekyll popped up in every search for static site generators. It looked perfect, so I dove in without exploring alternatives. That was a mistake.

The default theme, *minima*, uses outdated layout techniques (pixels everywhere, no flexbox). Switching themes was brittle—small customizations broke everything. I spent more time fighting Jekyll than writing. That’s when I knew it wasn’t the right fit.

### Recalculating: Eleventy

I still liked the idea of static sites and markdown, so I restarted my search. Hugo came up. Claude suggested Zola and Astro. But Eleventy (11ty) struck the right balance of flexibility and simplicity.

My plan with Eleventy is straightforward:

1. **Design first.** Build my dream blog in plain HTML/CSS—layout, typography, navigation. No theme hunting.
2. **AI-assisted conversion.** Hand the static page to an AI and say: *“Convert this to 11ty templates.”* It can split out includes, set up layouts, and generate the config for passthrough assets.
3. **GitHub Pages deploy.** Push to my repo, let a GitHub Action run `npx @11ty/eleventy`, and publish.
4. **Writing flow.** Draft in markdown, preview locally with `npx @11ty/eleventy --serve`, then commit and push to go live.

This approach gives me the design I want, avoids theme hell, and still keeps publishing one git push away.

### Why this works

- **Design-first.** I don’t compromise on look/feel.
- **AI handles the boilerplate.** No need to master Eleventy’s internals on day one.
- **Git-based publishing.** Write → preview → push → done.
- **Incremental.** Features like tags and pagination can come later.

### Lessons learned

- Don’t marry the first tool you meet.
- Define what “ideal” looks like before shopping tools.
- Static site generators + AI make a surprisingly good team.
- Publishing should feel as natural as writing notes.

### Next steps

I want to test adding tags and pagination, experiment with Claude vs GPT for template generation, and refine the design as I go. This workflow gives me full control, without the friction of CMSs or the chaos of social feeds. Let’s see how it evolves.
