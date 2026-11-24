# YSSE Main Portal (React + Tailwind CSS)

A modern, responsive multi-page web portal built for the **Week 8 Assignment** (YSSE IT Department · Web Development & CMS Wing), upgrading the Week 7 React Router application with **Tailwind CSS**.

## Features
- Styled completely with **Tailwind CSS** utility classes, responsive breakpoints (`sm:`, `md:`, `lg:`), Flexbox, and CSS Grid.
- Multi-page client-side routing using **React Router DOM** (`Home`, `About`, `Notices`, `Programs`, `Program Details`, `Contact`, and `404 Not Found`).
- Upgraded **Home Page** including Hero, About Preview, Featured Programs, Latest Notices, and Upcoming Events sections.
- Reusable shared layout (`Navbar` with mobile menu & `Footer`) rendered via `<Outlet />`.
- Dynamic program details routing (`/programs/:id`) using `useParams()`.
- Interactive search, category filtering, and controlled Contact/Inquiry form with validation feedback.

## Technologies Used
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- JavaScript (ES6+)

## Installation & Running Locally
```bash
npm install
npm run dev