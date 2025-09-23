# mrozanski.github.com

A personal blog website built with [Eleventy (11ty)](https://www.11ty.dev/), featuring a clean minimalist design based on the ZenHabits template. The site focuses on software experiments, automation notes, and insights into software quirks and design lessons.

## Requirements

- Node.js (version 14 or higher)
- npm

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/mrozanski/mrozanski.github.com.git
   cd mrozanski.github.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run serve
   ```
   Site will be available at `http://localhost:8080/`

4. **Build for production**
   ```bash
   npm run build
   ```
   Built site will be in the `public/` directory

## Folder Structure

```
├── src/                    # Source files
│   ├── _includes/         # Layout templates
│   │   ├── base.njk      # Main site layout
│   │   └── post.njk      # Blog post layout
│   ├── posts/            # Blog posts
│   │   ├── index.html    # Posts listing page
│   │   ├── *.md          # Markdown blog posts
│   │   └── *.html        # HTML blog posts
│   ├── index.html        # Homepage
│   ├── style.css         # Site stylesheet
│   ├── 2025.jpg          # Author avatar
│   └── favicon.ico       # Site favicon
├── public/               # Generated site (after build)
├── .eleventy.js          # Eleventy configuration
└── package.json          # Node.js dependencies and scripts
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run build` | Build the site for production |
| `npm run serve` | Start development server with live reload |

## Adding Content

### Creating a New Blog Post

#### Option 1: Markdown Post
Create a new `.md` file in `src/posts/`:

```markdown
---
layout: post.njk
title: "Your Post Title"
author: "Mariano Rozanski"
date: 2025-09-23
tags: ["tag1", "tag2"]
---

Your post content here using **Markdown** syntax.

## Headings work
- Lists work
- Code blocks work

```javascript
console.log("Code highlighting works too!");
```
```

#### Option 2: HTML Post
Create a new `.html` file in `src/posts/`:

```html
---
layout: post.njk
title: "Your Post Title"
author: "Mariano Rozanski"
date: 2025-09-23
tags: ["tag1", "tag2"]
---

<p>Your post content here using <strong>HTML</strong>.</p>

<h2>Full control over markup</h2>
<p>Use this when you need custom HTML elements or classes.</p>
```

### Adding New Pages

Create new `.html` or `.md` files in `src/` with front matter:

```html
---
layout: base.njk
title: "Page Title"
---

<h1>Page Content</h1>
<p>Your page content here.</p>
```

### Customizing Layouts

- **Main layout**: Edit `src/_includes/base.njk`
- **Post layout**: Edit `src/_includes/post.njk`
- **Styling**: Edit `src/style.css`

## GitHub Pages Deployment

This site is configured to work with GitHub Pages:

1. Push your changes to the `main` branch
2. In your repository settings, enable GitHub Pages
3. Set the source to GitHub Actions
4. Create `.github/workflows/eleventy.yml`:

```yaml
name: Eleventy Build
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v1
        with:
          path: ./public
  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v1
        id: deployment
```

## Features

- **Static Site Generation**: Fast, secure, and SEO-friendly
- **Responsive Design**: Works on all device sizes
- **Clean URLs**: Pretty permalinks for all pages
- **Live Reload**: Automatic browser refresh during development
- **Markdown Support**: Write posts in Markdown or HTML
- **Template Inheritance**: Reusable layouts and components
- **Asset Processing**: Automatic copying of CSS, images, and other assets
- **No External Dependencies**: Self-contained with no third-party scripts

## Customization

### Changing Site Information
- Update site title and tagline in `src/_includes/base.njk`
- Modify author information in `src/_includes/post.njk`
- Update contact links in the footer section of `src/_includes/base.njk`

### Styling
- All styles are in `src/style.css`
- The design uses CSS custom properties for easy color customization
- Mobile-first responsive design approach

### Adding New Sections
- Create new directories in `src/` for different content types
- Add corresponding navigation links in `src/_includes/base.njk`
- Create index pages to list content in each section

## License

This project is open source and available under the [MIT License](LICENSE).