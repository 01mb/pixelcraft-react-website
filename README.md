# Pixelcraft Studios

A responsive, single-page website for a fictional digital agency. It presents the studio's services, selected client projects, testimonials, and a project inquiry form.

## Features

- Agency landing page with navigation and dedicated sections for services, work, testimonials, and contact
- Portfolio filtering by project category
- Project case-study modal with client, technology, and outcome details
- Contact form with required-field validation and a client-side confirmation state
- Responsive layouts styled with Tailwind CSS

## Tech Stack
- test
- React 19
- Vite
- Tailwind CSS 4
- ESLint

## Getting Started

### Requirements

- Node.js (version compatible with the installed Vite release)
- npm

### Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite to view the site.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## Project Structure

```text
src/
  components/   Page sections and the project modal
  data/         Agency services, projects, and testimonials
  assets/       Local application assets
  App.jsx       Single-page layout
  App.css       Application styles
  index.css     Global styles and Tailwind import
  main.jsx      React application entry point
```

## Notes

The contact form currently validates and displays a confirmation in the browser; it does not submit inquiries to a server. Portfolio images and testimonial avatars are loaded from Unsplash.
