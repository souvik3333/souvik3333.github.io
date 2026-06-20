# Souvik Mandal — Portfolio

A static personal portfolio site. No build step, no frameworks — just HTML, CSS,
and a little JavaScript. Built to be hosted on GitHub Pages.

## Files

| File         | What it's for                                                        |
|--------------|----------------------------------------------------------------------|
| `index.html` | Page skeleton (sections + containers). Rarely needs editing.         |
| `styles.css` | All styling. Edit only to change the look.                           |
| `data.js`    | **Your content** — name, bio, jobs, blogs, publications, links.      |
| `app.js`     | Renders `data.js` into the page. Edit only to change structure.      |
| `assets/`    | Images, CV, and other files you link to.                             |
| `.nojekyll`  | Tells GitHub Pages to serve files as-is (don't remove).              |

## Updating content

**Everything you'll normally change lives in `data.js`.** Open it, edit the text,
save, refresh the browser. Each section has comments explaining the fields.

Common edits:

- **Add your photo**: drop a square image into `assets/` (e.g. `assets/me.jpg`),
  then set `profile.photo: "assets/me.jpg"` in `data.js`.
- **Fill in social links**: set the `href` values in the `socials` list. Any link
  left as `""` is hidden automatically.
- **Add a job / blog / paper / project**: copy an existing `{ ... }` block in the
  relevant list and edit it. Delete a block to remove that item.
- **Hide the open-source section**: set `config.showOpenSource: false`.
- **Hide GitHub stars**: set `config.showStars: false`.
- **Change the accent color**: set `config.accent` (e.g. `"#e0533d"`).

A few fields accept inline links (marked "HTML ok" in `data.js`), e.g.
`<a href="https://example.com">label</a>`.

## Preview locally

Open `index.html` directly in your browser, or run a tiny local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages (username.github.io)

This site is set up for a **user site** served at the domain root.

1. Create a repo named exactly `your-username.github.io`.
2. Put these files in the repo root and push:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment**, set
   **Source = Deploy from a branch**, **Branch = `main` / `root`**, save.
4. Your site goes live at `https://your-username.github.io/` within a minute or two.

All asset paths are relative, so the site also works if you ever serve it from a
project repo subpath (`username.github.io/repo/`) instead.
