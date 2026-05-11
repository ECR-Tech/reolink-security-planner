# 🎥 ReoLink Security Planner by Ecoradinmalin

A 100% front-end (serverless) web application designed to plan the installation of Reolink cameras on an interactive map. This tool allows users to accurately simulate viewing angles, motion detection ranges (PIR), and floodlight zones before purchasing or installing hardware.

## ✨ Features
* **100% Client-Side:** No data is sent to a server (pure HTML/JS/CSS).
* **Bilingual:** Automatic FR/EN detection with a manual toggle button.
* **Trigonometric Engine:** Dynamic drawing of vision cones based on the exact specifications of each camera.
* **Interactive Controls:** Drag-and-drop placement and rotation handles to aim the cameras.
* **Project Cart:** Automatically generates a shopping list based on the cameras placed on the map.

## 🛠️ Setup & Configuration
The project runs on just two files: `index.html` and `config.js`.
You can host these files for free on any platform (GitHub Pages, Vercel, Netlify) or open them locally directly in your browser.

To add new cameras or modify specifications, simply edit the catalog object inside the `config.js` file. The application will automatically generate the UI.

## ⚖️ License and Terms of Use (IMPORTANT)
The source code for this application is open and free. You are allowed to download, host, and modify it to suit your personal or professional needs.

**However, one strict and mandatory condition applies:**
The affiliate engine integrated into the code (`applyAffiliate` in `index.html`) and the tracking suffixes for Amazon (`&tag=ecoradinmalin-21...`) and Reolink (`?aff=974`) **must not be removed, modified, or altered under any circumstances**.

This tool represents many hours of work and is provided to the community completely for free. Maintaining these commission-generating affiliate links is the absolute condition for this free access. They are essential to support partnership research, content creation, and the funding of future hardware reviews on the **Ecoradinmalin** YouTube channel.

By using or cloning this code, you formally accept this condition.