# Anuradha Patil — Portfolio Website

A beginner-friendly, responsive 4-page portfolio built with plain HTML, CSS, and JavaScript. It is designed for free hosting on GitHub Pages.

## Pages

- `index.html` — Home
- `about.html` — About, education, and skills
- `projects.html` — Admission Management System and College Placement System
- `contact.html` — Contact details and email-draft form

## Run locally

1. Download or clone this repository.
2. Keep all four HTML files, `style.css`, `script.js`, and the `assets` folder together.
3. Double-click `index.html` to preview it in your browser.

No build step or framework is required.

## Personalize before publishing

Search the project files for these placeholders and replace them:

- `your.email@example.com` in `contact.html` and `script.js`
- `Add your LinkedIn URL` and the `href="#"` placeholder in `contact.html`
- Project repository links in `projects.html` — change each GitHub profile link to the exact repository URL when the project repositories are ready.
- Update education details, skills, project descriptions, and project status to reflect your actual experience.
- Replace the profile illustration in `index.html` with your own image if you want. For example, add `assets/profile.jpg` and replace the inline SVG with `<img class="profile-photo" src="assets/profile.jpg" alt="Anuradha Patil">`. Add this CSS: `.profile-photo { width: 180px; height: 180px; border-radius: 50%; object-fit: cover; }`
- `assets/resume.txt` is a simple placeholder. Replace it with your actual resume file and update the download link in `index.html`.

## Publish using GitHub Pages

1. Sign in to GitHub as `anuradhapatil734`.
2. Create a **new public repository** named exactly `anuradhapatil734.github.io` for the easiest personal-site URL.
3. Upload the files and folders from this project to the repository root. Make sure `index.html` is in the root, not inside another nested folder.
4. Open the repository's **Settings → Pages**.
5. Under the build/deployment source, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait a few minutes and open `https://anuradhapatil734.github.io/`.

If you instead use a repository with another name, such as `my-portfolio`, the site URL is usually `https://anuradhapatil734.github.io/my-portfolio/`. Select the branch and root folder under Settings → Pages.

## Contact form limitation

The form uses a `mailto:` link to open the visitor's email app. It does not send messages directly or store submissions. Replace the placeholder email before publishing. To receive messages without requiring the visitor to open an email app, connect a form service or add a backend later.

## Project structure

```text
anuradha-portfolio/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── resume.txt
```
