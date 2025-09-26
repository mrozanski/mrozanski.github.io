---
layout: post.njk
author: "Mariano Rozanski"
title: "Creating Professional Landing Pages: AI-to-HTML Process"
date: 2025-09-26
tags: [ai, design, workflow, coding, landing-page, semantic-html, css]
---

# Creating Professional Landing Pages: AI-to-HTML Process

## Overview
This process creates professional landing pages by leveraging AI for content creation, visual design tools for mockups, and semantic HTML for final implementation. The result is clean, lightweight, server-side rendered HTML without React bloat.

## Prerequisites
- Access to Claude (or similar AI with project history/context)
- Design generation tool (Lovable, Bolt, v0, etc.)
- Chrome browser for screenshots
- Basic HTML/CSS knowledge for final styling

---

## Step 1: Content Generation with AI

### Setup Context
**Goal:** Provide maximum context to your AI assistant for better results.

**What to include:**
- Resume/LinkedIn profile
- Previous project descriptions
- Target audience details
- Business goals and constraints
- Any existing brand materials

### Content Creation Prompt Template

```
I need to create a landing page for [COMPANY/SERVICE NAME]. Here's the context:

**Purpose:** [Why you're creating this page - personal branding, lead generation, etc.]

**Target Audience:** [Primary audience - founders, CTOs, investors, etc.]

**Current Situation:** [Brief description of your business/service state]

**Key Differentiators:** [What sets you apart - experience, approach, specialties]

**Constraints:** [Budget, timeline, technical limitations]

**Goals:** [What success looks like - inquiries, credibility, partnerships]

Based on this context, I need:
1. A compelling tagline (under 10 words)
2. An "About" section that positions me strategically
3. Service/offering descriptions
4. Any other essential page elements

Ask me any clarifying questions you need to create the most effective content for my specific situation and goals.
```

### Follow-up Clarification
When the AI asks follow-up questions, answer thoroughly. Good AIs will ask about:
- Tone and positioning preferences
- Technical depth vs. accessibility
- Geographic/market focus
- Service emphasis priorities
- Brand personality

---

## Step 2: Visual Design Generation

### Design Tool Prompt Template

```
Create a [STYLE DESCRIPTION] landing page for a [BUSINESS TYPE] that conveys [KEY ATTRIBUTES].

**Design Requirements:**
- Layout: [minimalist/modern/professional/etc.]
- Positioning: [boutique firm/enterprise service/startup/etc.]
- Color scheme: [monochrome/brand colors/specific palette]
- Typography: [clean/bold/professional/etc.]
- Key sections: [hero/about/services/contact/etc.]

**Brand Guidelines:**
- Primary color: [HEX CODE if available]
- Logo: [attach or describe]
- Style references: [attach inspiration images]

**Content Structure:**
[Paste the content from Step 1]

**Technical Notes:**
- Responsive design required
- [Any specific technical requirements]
```

### Example Values for Common Use Cases

**Technology Consultancy:**
- Style: "clean, modern landing page"
- Business Type: "premium technology consultancy"
- Key Attributes: "trust and innovation"
- Positioning: "boutique consulting firm rather than traditional software development company"

**SaaS Product:**
- Style: "conversion-focused landing page"
- Business Type: "B2B SaaS platform"
- Key Attributes: "efficiency and results"
- Positioning: "enterprise-grade solution with startup agility"

---

## Step 3: Screenshot Capture

### Chrome Full-Page Screenshot Process
1. Open the generated design in Chrome
2. Open Developer Tools (F12 or Cmd+Option+I)
3. Press Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows)
4. Type "screenshot"
5. Select "Capture full size screenshot"
6. Save the image

**Pro tip:** If the design tool provides a live preview URL, use that for the screenshot to get the most accurate representation.

---

## Step 4: Semantic HTML Creation

### HTML Conversion Prompt Template

```
I have a screenshot of a landing page design that I want to convert to clean, semantic HTML.

**Requirements:**
- Semantic HTML5 structure (header, main, section, article, footer, etc.)
- Proper heading hierarchy (h1, h2, h3, etc.)
- No inline styles or presentation attributes
- Accessible markup with appropriate ARIA labels where needed
- Clean class names that reflect content purpose, not appearance
- Ready for CSS styling with modern techniques (Grid, Flexbox)

**Content to include:**
[Describe the key sections and content from your screenshot]

Please analyze the attached screenshot and create the HTML structure that best represents the visual hierarchy and content organization shown.
```

---

## Step 5: CSS Layout Generation

### AI-Assisted CSS Creation
**Goal:** Generate layout CSS that matches your design screenshot using an AI coding assistant.

**Tools:** Cursor, GitHub Copilot, CodeWhisperer, or any AI-enabled IDE

### CSS Generation Prompt Template

```
Based on the attached screenshot of a landing page design, generate CSS for the file [FILENAME].css that will style the existing HTML markup to match the visual layout shown.

The HTML already has semantic structure with these key elements and class names:
[LIST YOUR MAIN SECTIONS AND CLASS NAMES - e.g.:
- header > nav with .logo and navigation ul
- main > .hero section with h1, p, and .cta-buttons
- .about section with .highlights and .about-content
- .services section with .services-grid
- footer with .footer-content and .footer-bottom]

Requirements for the CSS:
1. Match the spacing, typography hierarchy, and layout from the screenshot
2. Use CSS Grid for main layout sections ([LIST GRID SECTIONS])
3. Use Flexbox for navigation, buttons, and smaller components
4. Implement the color scheme: [YOUR BRAND COLORS]
5. Font families: [HEADING FONT] for headings, [BODY FONT] for body text
6. Responsive design - should work on mobile and desktop
7. Match the button styles and interactive elements from the design
8. Proper spacing between sections and elements as shown
9. [SPECIFIC ALIGNMENT REQUIREMENTS - e.g., center-aligned hero, left-aligned body]
10. Include hover states for interactive elements

Focus on layout positioning, spacing, typography scales, and the overall visual hierarchy shown in the screenshot. Don't worry about exact pixel measurements - aim for the proportional relationships and general feel of the design.
```

### Tips for Better Results
- **Attach your screenshot** to the AI coding tool if supported
- **Include your HTML file** in the workspace for context
- **Specify your existing CSS file name** so it knows where to write
- **Mention responsive breakpoints** if you have specific requirements
- **Ask for CSS custom properties** if you want maintainable code

### Example for Technology Consultancy
```
Based on the attached screenshot, generate CSS for dotsur.css that styles the semantic HTML to match this design.

Key sections: header nav, .hero, .about with .highlights grid, .services with .services-grid, footer with three columns.

Requirements:
- CSS Grid for .highlights (3 columns), .services-grid (3x2), .footer-content (3 columns)
- Flexbox for nav, buttons, smaller components  
- Colors: primary blue #5EA9DA, grays for text, white background
- Fonts: Ubuntu headings, Inter body text
- Responsive design
- Button styles: primary filled blue, secondary outlined
- Center-aligned hero, left-aligned content sections
- Proper spacing matching the screenshot proportions
```

---

## Step 6: Styling Refinement and Polish

### CSS Development Approach
1. **Start with a CSS reset/normalize**
2. **Define CSS custom properties for colors, fonts, spacing**
3. **Build mobile-first responsive layout**
4. **Add progressive enhancements**

### Recommended CSS Structure
```css
/* 1. Custom Properties */
:root { /* colors, fonts, spacing */ }

/* 2. Reset/Base Styles */
*, *::before, *::after { /* reset */ }

/* 3. Typography */
body, h1, h2, h3 { /* font stacks, sizes */ }

/* 4. Layout */
.container, header, main, footer { /* structure */ }

/* 5. Components */
.btn, .card, .hero { /* reusable components */ }

/* 6. Utilities */
.sr-only, .text-center { /* helper classes */ }
```

---

## Process Benefits

**Speed:** Complete professional landing page in 1-2 hours
**Quality:** AI-generated content + human-refined design + semantic code
**Performance:** Lightweight HTML/CSS without framework overhead
**Maintainability:** Clean, semantic code that's easy to modify
**Accessibility:** Proper HTML structure supports screen readers and SEO

---

## Alternative Tools

**Content Generation:**
- Claude (best for context-aware conversations)
- ChatGPT (good alternative)
- Notion AI (if working within Notion)

**Design Generation:**
- Lovable (React-based, good for complex layouts)
- v0 (Vercel's tool, excellent for modern designs)
- Bolt (good for rapid prototyping)
- Framer AI (if you plan to use Framer for hosting)

**Screenshot Tools:**
- Chrome DevTools (most reliable)
- Full Page Screen Capture extension
- Fireshot extension

---

## Common Pitfalls

1. **Insufficient context in Step 1** - Results in generic, ineffective content
2. **Vague design prompts in Step 2** - Leads to off-brand or inappropriate designs
3. **Skipping the screenshot step** - Trying to extract HTML directly from React code is messy
4. **Over-complex HTML in Step 4** - Ask for truly semantic structure, not div soup
5. **Rushing the CSS** - Take time to build a maintainable stylesheet

---

## Success Metrics

- **Load time under 2 seconds** (lightweight HTML/CSS)
- **Perfect Lighthouse accessibility score** (semantic markup)
- **Mobile-responsive design** (CSS Grid/Flexbox)
- **Clear conversion path** (effective content and CTAs)
- **Easy to maintain** (clean, documented code)