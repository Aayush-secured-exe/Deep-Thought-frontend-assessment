# 🧠 Deep Thought – Frontend Assessment

This repository contains the frontend implementation for the **Deep Thought Web Development Assessment**.  
The application is built using **React + Vite** and strictly follows the **Figma design** and **JSON-driven architecture** provided by the company.

---

## 🚀 Live Demo

🔗 **Vercel Deployment**  
https://deep-thought-frontend-assessment.vercel.app

---

## 📌 Project Description

The objective of this project is to build a **dynamic UI** where all the center content is rendered using **JSON data only**, without hardcoding UI cards.

The application includes:
- A fixed top navigation bar
- A collapsible **Journey Board** (left panel)
- A collapsible **Notice Board** (right panel)
- Dynamic **asset cards** rendered from JSON
- Floating action buttons fixed at the bottom-right

---

## 🛠️ Tech Stack

- **React** (Functional Components & Hooks)
- **Vite**
- **CSS (Custom, Figma-accurate styling)**
- **Vercel** (Deployment)

---

## 📂 Folder Structure

```text
DEEP_THOUGHT-FRONTEND-ASSESSMENT/
├── public/
│   ├── Arrow.png
│   ├── Bell.svg
│   ├── bulb.svg
│   ├── doubt.svg
│   ├── expand.png
│   ├── expand.svg
│   ├── flower.svg
│   ├── Home.png
│   ├── info.png
│   ├── left-arrow.svg
│   ├── LOGO.svg
│   ├── meeting.png
│   ├── msg.svg
│   ├── Profile.svg
│   ├── question-mark.png
│   ├── right-arrow.svg
│   ├── schedule.png
│   ├── Tools.svg
│   └── up-arrow.svg
│
├── src/
│   ├── components/
│   │   ├── FloatingButtons/
│   │   │   ├── FloatingButtons.css
│   │   │   └── FloatingButtons.jsx
│   │   │
│   │   ├── JourneyBoard/
│   │   │   ├── JourneyBoard.css
│   │   │   └── JourneyBoard.jsx
│   │   │
│   │   ├── MainContent/
│   │   │   ├── AssetCard.css
│   │   │   ├── AssetCard.jsx
│   │   │   ├── AssetGrid.css
│   │   │   ├── AssetGrid.jsx
│   │   │   ├── MainContent.css
│   │   │   └── MainContent.jsx
│   │   │
│   │   ├── TaskDescription/
│   │   │   ├── TaskDescription.css
│   │   │   └── TaskDescription.jsx
│   │   │
│   │   ├── NoticeBoard/
│   │   │   ├── NoticeBoard.css
│   │   │   └── NoticeBoard.jsx
│   │   │
│   │   ├── LastCard.css
│   │   ├── LastCard.jsx
│   │   ├── Layout.jsx
│   │   └── Navbar.jsx
│   │
│   ├── Data/
│   │   ├── projectData.js
│   │   └── projectData.json
│   │
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── navbar.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js

```

## 🧩 JSON-Driven Rendering

The entire center content is generated using a JSON file provided by the company.

### Rendering Logic

Each asset is rendered based on:
- `asset_type`
- `asset_content_type`

### Supported Asset Types

| asset_type      | asset_content_type | UI Rendered                          |
|-----------------|--------------------|--------------------------------------|
| display_asset   | video              | YouTube video card                   |
| input_asset     | threadbuilder      | Thread A input UI                    |
| input_asset     | article            | Structure Your Pointers editor       |
| display_asset   | article            | 4SA Method expandable card           |

---

## 🎨 UI Implementation Details

- Layout matches Figma **pixel-by-pixel**
- Cards have **dual drop shadows** (top & bottom)
- Headers are centered using **CSS Grid**
- Icons use **PNG/SVG placeholders**
- Expand / collapse arrows rotate using **CSS transforms**
- Side panels slide over content without shifting layout
- Floating buttons are fixed to the **bottom-right**

---

## 📦 Installation & Setup

### Clone the repository
```bash
git clone https://github.com/Aayush-secured-exe/Deep-Thought-frontend-assessment
cd Deep-Thought-frontend-assessment
```
### Install dependencies
```bash
npm install
```
### Run locally
```bash
npm run dev
```
### Open:
```bash
http://localhost:8888
```
### Build for Production
```bash
npm run build
```
---

## 🚀 Deployment

- Deployed using **Vercel**
- GitHub `main` branch is connected to Vercel
- Every push triggers an automatic production build
- JSON files are bundled correctly inside `src/`

---

## 🧠 Key Learnings

- Building UI fully driven by JSON
- Translating complex Figma designs into CSS
- Managing expandable panels and animations
- Handling Vite + Vercel build constraints
- Writing scalable and reusable React components

---
## 👤 Author

**Aayush**  
Web Developer  

GitHub: https://github.com/Aayush-secured-exe ↗

---

## 📄 License

This project is created strictly for assessment and learning purposes.
