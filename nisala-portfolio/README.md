# Nisala Bandara — Portfolio

A responsive portfolio inspired by the supplied dark navy/cyan reference. Pure HTML, CSS and JavaScript; no framework, API key, database, Docker or dependencies required.

## Run in VS Code
1. Open this folder in VS Code.
2. Install the Live Server extension.
3. Right-click `dist/index.html` and choose **Open with Live Server**.

Or run `python -m http.server 8000 --directory dist` from the project folder, then open http://localhost:8000. You can also open dist/index.html directly; clipboard access may require localhost/HTTPS, and a visible email fallback is supplied.

## Files
- dist/index.html — content, navigation and sections
- dist/styles.css — responsive styling
- dist/app.js — profile configuration, sequential typing animation, filters, mobile navigation and clipboard action
- dist/favicon.svg — site icon

## Personalise
Edit profile and projects at the top of dist/app.js. Update the email in both app.js and the mailto link in index.html. Change the biography and role in index.html. The four phrases rotate in the requested order. Visitors who request reduced motion receive static text.

The name, email and repository links were obtained from the connected nisala1997 GitHub account. Professional role content is based on information supplied in the conversation. Fraud detection is described as an interest; no unverified qualifications, years of experience or project results are claimed. Project descriptions are deliberately conservative and based on repository names. Review your skills and contact information before public launch.

## Hosting
Upload the contents of dist to any static hosting service. For GitHub Pages, copy dist contents into your selected Pages branch root and enable Pages in the repository settings. No GitHub credentials belong in this project. The downloadable source has no hosting identity or secrets.

## Functionality
- Sequential type/delete animation: data-driven solutions, intelligent systems, scalable software, fraud detection models
- Responsive mobile navigation with Escape-to-close
- Working anchor links and section tracking
- Project category filters with result announcements
- Direct links to six real GitHub repositories
- Email action opens the visitor's email client; it does not submit messages to a server
- Copy-email button with fallback display
- Current copyright year, keyboard focus and reduced-motion support

Verification: JavaScript syntax check and structural/link-target checks passed. Browser visual verification was unavailable in the execution environment.
