# InAtelier — House of Designer

## Update package (November 2026)

This package updates the original InAtelier website you were given earlier. It keeps the existing collection, product pages, Product B placeholder, and Tally Product A preorder integration.

### Changes in this version

- The **top-left header** now uses a tightly cropped white InAtelier logo with the original blue horse, on a dark header for contrast. The same logo appears in the footer.
- The **homepage hero has a four-slide gallery**: existing Polaroid Frame imagery, your burgundy-and-blue InAtelier logo, your black-background InAtelier logo artwork, and another Polaroid Frame picture. Use arrows, dots, keyboard arrows, swipe on phones; slides also advance every 6 seconds (unless reduced motion is enabled or the user is interacting with the gallery).
- A dedicated **House of Designer** brand section appears below the homepage image gallery.
- **Our Story** displays the third supplied creative-work photo and explains the meaning of *atelier* and the designers, planners and creative minds behind the brand.
- The signature **House of Designer** now appears throughout the site.

### How to publish on Netlify

1. Extract this ZIP. You should see **index.html**, **style.css**, **app.js**, **site-config.js**, **assets/** and the other HTML pages in the same folder.
2. In your **existing Netlify project**, go to **Deploys** and upload the extracted site folder to create a new production deployment. Depending on your interface, you may be able to upload the ZIP directly. The important part is that **index.html must be at the root of the published site**.
3. Visit the existing Netlify website URL, refresh, and test **Home**, **Our Story**, **The collection**, and **Pre-order**.

You do **not** need to create a second Netlify site. Combine edits into one production deployment to minimize deploy credits.

### Editing your content

- Text/headings: edit `index.html` (homepage) and `about.html` (Our Story).
- Homepage sliding images: edit the `<figure class="hero-slide">` entries in `index.html`. To change the number of slides, update the visible slide captions and dot buttons to match. The slideshow logic in `app.js` reads the list of slides dynamically.
- Header logo: replace `assets/inatelier-logo-white.png` with your preferred transparent logo, retaining the filename.
- Logo shown on homepage: `assets/inatelier-logo-original.jpg` and `assets/inatelier-logo-dark.jpg`.
- Our Story photo: `assets/inatelier-our-story.jpg`.
- Colours, dimensions, typography: `style.css`.
- Product B name, description, photo, and Tally link: `site-config.js`.

### Product forms

- Product A remains connected to **https://tally.so/r/jeokEQ**.
- Product B is not yet connected to a preorder form. When ready, add its form URL to `site-config.js`.
- Existing Polaroid product photographs are loaded from the previously used Tally-hosted URLs; built-in SVG fallback illustrations display if those images cannot be loaded.

### Notes

This ZIP contains standalone static files suitable for Netlify or Cloudflare. It does not automatically modify your live Netlify project; uploading the update is the final publishing step.
