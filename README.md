Chris O's Rental — Landing Page

Files:
- index.html — main landing page
- styles.css — styles
- script.js — minimal form handling

Preview:
- Open `index.html` in a browser, or use VS Code Live Server extension.

Images:
- Place the property images into the project `images/` folder so the site serves them locally:
	- images/map.png  (from OneDrive: 9046 Lakeview/Map_9046 Lakeview.png)
	- images/photo1.jpg  (from OneDrive: Pictures/Camera Roll/2025/06/20250622_223539046_iOS.jpg)
	- images/photo2.jpg  (from OneDrive: Pictures/Camera Roll/2025/01/20250124_025904637_iOS.jpg)

How to copy files from your OneDrive to the project (PowerShell):

```powershell
Copy-Item -Path "C:\Users\ukene\OneDrive\9046 Lakeview\Map_9046 Lakeview.png" -Destination "C:\Users\ukene\OneDrive\ChrisO-rental-landing\images\map.png"
Copy-Item -Path "C:\Users\ukene\OneDrive\Pictures\Camera Roll\2025\06\20250622_223539046_iOS.jpg" -Destination "C:\Users\ukene\OneDrive\ChrisO-rental-landing\images\photo1.jpg"
Copy-Item -Path "C:\Users\ukene\OneDrive\Pictures\Camera Roll\2025\01\20250124_025904637_iOS.jpg" -Destination "C:\Users\ukene\OneDrive\ChrisO-rental-landing\images\photo2.jpg"
```

Formspree (quick email wiring):

1. Sign in or sign up at https://formspree.io and create a new form. You'll get a form endpoint id such as `f/abcd1234`.
2. Replace the form `action` in `index.html` with your endpoint: `https://formspree.io/f/abcd1234`.
3. Optionally set a `_next` hidden field to redirect to a thank-you page after submit.

Preview the site:
- Open [ChrisO-rental-landing/index.html](ChrisO-rental-landing/index.html) in a browser or use VS Code Live Server to preview.

Next steps:
- Add availability calendar or pricing widget.
- Improve SEO or add a simple `thank-you` page for form submits.