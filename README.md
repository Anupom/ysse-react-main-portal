# YSSE Main Portal (Multi-Page React Application)

A structured, responsive multi-page web portal built for the **Week 7 React Assignment** (YSSE IT Department · Web Development & CMS Wing).

## Features
- Multi-page navigation using **React Router DOM** (`Home`, `About`, `Notices`, `Programs`, `Program Details`, `Contact`, and a custom `404 Not Found` page).
- Shared reusable layout (`Navbar` and `Footer`) rendered via `<Outlet />`.
- Dynamic program details routing (`/programs/:id`) using `useParams()`.
- Interactive search & category filtering on Notices and Programs pages.
- Controlled Contact/Inquiry form with real-time field validation and submission feedback.

## Technologies Used
- React.js (Vite)
- React Router DOM
- JavaScript (ES6+)
- CSS3 (Responsive Grid & Flexbox)

## Installation & Running Locally
```bash
npm install
npm run dev