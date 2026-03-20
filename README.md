# ASF WebApp

This is a modern, responsive React web application built with Vite and Tailwind CSS. It serves as a corporate/business website featuring various informative pages, a product/service catalog, and contact capabilities. It emphasizes performance and dynamic design.

## Features

- **Blazing Fast Development:** Powered by Vite for near-instant hot module replacement (HMR), keeping your dev loop tight.
- **Responsive Design:** Styled comprehensively with Tailwind CSS 4 to ensure the interface looks great on any screen size.
- **Dynamic Animations:** Uses AOS (Animate On Scroll) for engaging, smooth enter animations as users scroll through the pages.
- **Interactive Carousels:** Integrates Swiper for powerful, touch-friendly image and content sliders.
- **Declarative Routing:** Managed by React Router DOM, efficiently routing between pages without complete full page reloads.
- **Rich Iconography:** Access to numerous icon packs visually via the popular `react-icons` library.

## Project Structure

- `src/components/`: Reusable, structural UI components.
  - `Nav`: The top navigation bar.
  - `Footer`: The bottom site footer.
  - `Preloader`: An elegant loading indicator before the content finishes initialization.
- `src/pages/`: Route-level components mapping directly to specific pages on the site:
  - `Home`: Main landing page introducing the business.
  - `About`: Detailed company background and information.
  - `Catalog`: Products or services listing.
  - `Career`: Job opportunities and culture.
  - `License`: Licensing and legal information.
  - `Value`: Core values of the business structure.
  - `Special`: Special offers or distinct business features.
  - `Contact`: Detailed contact form and information.
  - `NotFound`: Informational 404 page for unmatched routes.

## Scripts & Usage

From the project root directory, run these standard NPM scripts:

- `npm run dev`: Starts the local development server on your machine so you can preview the app.
- `npm run build`: Bundles your React code into highly optimized static files for production in a `dist` folder.
- `npm run preview`: Locally previews the production build created by `npm run build` so you can verify the optimized bundle works.
- `npm run lint`: Runs ESLint to find and fix syntactic or organizational problems in your code.

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Routing:** React Router v7
- **Animations:** AOS 2.3
- **Sliders:** Swiper 11
- **Icons:** React Icons 5
