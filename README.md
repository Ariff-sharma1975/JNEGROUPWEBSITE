# JNE Group corporate website

A static, responsive implementation of the JNE Group website with the improvements proposed in the original aesthetics review. The site preserves the public company information, service offerings, product specifications, contact details, logo and homepage photograph while introducing a more professional corporate presentation.

## Pages

The homepage, services overview, both company service pages, about page and contact page live in `public/`. Shared styles and a small accessible mobile-navigation script require no dependencies or build step. Netlify publishes `public/`, and `/home` redirects to `/`.

## Local preview

Run `netlify dev --port 8889` from the repository root and open `http://localhost:8889`. Edit the HTML pages directly, with shared appearance in `public/styles.css` and mobile-menu behavior in `public/script.js`.

## Download the website

Choose **Download website (ZIP)** in the footer to save the complete website source, including pages, styles, scripts, images and Netlify configuration. The archive is available at `/downloads/jne-group-website.zip`.

Extract the archive and run `python3 -m http.server 8000 --directory public` from the extracted `jne-group-website` directory, then open `http://localhost:8000`. A local server is required because links and assets use paths relative to the site root. Google Fonts require an internet connection; fallback fonts work offline.

After editing the website, run `python3 scripts/package-website.py` to refresh the downloadable ZIP. The archive excludes the downloads directory and private project files. For Netlify hosting, publish the included `public` directory.

## Content and enquiries

Content was based on the public pages at https://www.jnegroup.asia/. Copy was edited for clarity and consistency; new positioning and values language represent proposed editorial improvements. No new credentials, client endorsements or performance statistics were invented. Product availability and certification options must be confirmed with the company.

Contact and quote actions use the published email address and telephone numbers. Email actions open the visitor’s email application; the website does not collect or store submissions. The original JNE domain was not changed.

Fonts load from Google Fonts with local fallback fonts. The original public logo and homepage photograph are stored locally. The implementation summary and verification details are in `.netlify/results.md`.
