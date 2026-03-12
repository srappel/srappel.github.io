# AGENTS.md

## Project Overview

This repository hosts a personal academic website built with Jekyll using the Academic Pages template.
The site is a static site deployed via GitHub Pages.

Primary goals of this repository:
- Maintain a professional academic website.
- Publish publications, teaching, talks, and projects.
- Keep the site clean, accessible, and maintainable.
- Minimize divergence from the upstream Academic Pages template.

Agents should prefer small, safe modifications over structural rewrites.

## Development Environment

Install dependencies:

```sh
bundle install
```

Run locally:

```sh
bundle exec jekyll serve -l -H localhost
```

Site will be available at:

`http://localhost:4000`

Jekyll automatically rebuilds on file changes.

## Repository Structure

Key directories:

```
_config.yml          # global site configuration
_pages/              # main site pages
_posts/              # blog posts
_publications/       # publication entries
_talks/              # talks and presentations
_teaching/           # teaching materials
_portfolio/          # projects and portfolio items

_includes/           # reusable HTML fragments
_layouts/            # page layouts
_sass/               # Sass partials used by the theme
assets/              # JS, CSS
images/              # site images and graphics
files/               # downloadable files (PDFs etc)
```

Agents should understand existing patterns before creating new ones.

## Editing Guidelines

Prefer configuration over code. Before editing layouts or includes:
1. Check `_config.yml`.
2. Check existing page front matter.
3. Check `_includes`.

Many behaviors are configurable.

## Styling

Custom CSS should go in:

`_sass/custom.scss`

Avoid editing theme Sass files unless absolutely necessary.

## Markdown Content

Pages use Markdown with YAML front matter. Example:

```yaml
---
title: "Example Page"
layout: single
author_profile: true
permalink: /example/
---
```

Rules:
- Maintain valid YAML.
- Preserve existing fields.
- Follow existing formatting conventions.

## Accessibility Requirements

Accessibility is a priority. Agents must ensure:
- Images include alt attributes.
- Decorative images use `alt=""`.
- Links have readable text.
- Buttons/icons include accessible labels.
- Avoid empty anchors.

## JavaScript

JS is bundled via `package.json`.

Build command:

```sh
npm run build:js
```

Do not modify minified files directly: `assets/js/main.min.js`.
Modify source files instead.

## Safe Editing Zones

Agents can safely modify:
- `_pages/`
- `_posts/`
- `_publications/`
- `_talks/`
- `_teaching/`
- `_portfolio/`
- `_sass/custom.scss`
- `assets/css/main.scss`
- `_config.yml`
- `images/`

Agents should be cautious editing:
- `_layouts/`
- `_includes/`
- `assets/js/`

Avoid modifying upstream theme logic unless required.

## Commit Guidelines

Commits should be:
- Small.
- Focused.
- Descriptive.

Example commit messages:

```
update about page content
improve accessibility of embedded map
add custom styles for homepage iframe
fix broken link in teaching page
```

Avoid mixing unrelated changes.

## Design Philosophy

The site should be:
- Clean.
- Professional.
- Fast.
- Accessible.
- Minimalist.

Avoid:
- Heavy JavaScript.
- Complex layouts.
- Overly decorative styling.

## When Unsure

Agents should:
1. Inspect how existing pages solve the problem.
2. Prefer consistency with the current structure.
3. Avoid introducing new frameworks or dependencies.

## Optional: Guardrail Version

If you’d like, I can also generate a stronger “Codex guardrail” version (about 150 lines) that:
- Prevents agents from touching fragile theme files.
- Defines exact allowed edit zones.
- Dramatically reduces AI-generated layout breakage.

It tends to save a lot of headaches once Codex starts editing Jekyll themes.
