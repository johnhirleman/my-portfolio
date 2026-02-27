# John Hirleman — Portfolio

Personal portfolio and case study site for John Hirleman, Senior UX/UI Designer. Built with Jekyll and deployed to GitHub Pages at [johnhirleman.com](https://johnhirleman.com).

## Tech Stack

- **Jekyll 4.3** — Static site generator
- **SASS/SCSS** — Modular stylesheet architecture
- **Vanilla JavaScript** — Carousel, mobile menu, sidebar interactions
- **FontAwesome 6** — Icons
- **GitHub Actions** — CI/CD pipeline
- **GitHub Pages** — Hosting

## Project Structure

```
portfolio/
├── _layouts/          # Page templates (default, home, project)
├── _includes/         # Reusable components (navigation, sidebar, footer)
├── _projects/         # Project case study collection
├── _sass/             # Modular SCSS (variables, layout, components)
├── assets/
│   ├── css/           # Compiled stylesheets
│   ├── js/            # main.js (carousel, menu, sidebar)
│   ├── fonts/         # FontAwesome woff2 files
│   └── images/        # Project thumbnails and hero images
├── index.html         # Homepage
├── projects.html      # All projects index
├── _config.yml        # Jekyll configuration
└── Gemfile            # Ruby dependencies
```

## Local Development

**Prerequisites:** Ruby 3.3+, Bundler

```bash
# Install dependencies
bundle install

# Start dev server at http://localhost:4000
bundle exec jekyll serve

# Build for production
bundle exec jekyll build
```

## Adding a Project

1. Copy `_projects/project-template.html` and rename it.
2. Update the front matter (title, subtitle, featured, skills, etc.).
3. Add project images to `assets/images/<project-name>/`.
4. Set `featured: true` to include it in the homepage carousel (max 4).

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow (`.github/workflows/jekyll.yml`), which builds the site and deploys it to GitHub Pages.
