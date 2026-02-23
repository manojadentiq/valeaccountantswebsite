# Vale Accountants - Modern Website

A modern, responsive website for Vale Accountants built with React, Vite, and Tailwind CSS featuring glassmorphism UI effects.

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Glassmorphism** - Modern UI design with glass effects

## Features

- ✨ Modern glassmorphism UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎨 Beautiful gradient backgrounds
- 🖼️ All original images and logos preserved
- 📄 Complete pages: Home, About, Services, Portfolio, Blog, Contact

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd vale-accountants-modern
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
vale-accountants-modern/
├── public/
│   └── assets/          # Images, fonts, and other assets from original site
├── src/
│   ├── components/      # Reusable components (Navbar, Footer)
│   ├── pages/          # Page components (Home, About, Services, etc.)
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles with Tailwind
├── index.html
├── tailwind.config.js
└── package.json
```

## Pages

- **Home** - Hero section, services preview, about preview, client logos
- **About** - Company information, mission, vision, values, certifications
- **Services** - Detailed service offerings with features
- **Portfolio** - Project showcase and statistics
- **Blog** - Latest articles and newsletter subscription
- **Contact** - Contact form and business information

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
theme: {
  extend: {
    colors: {
      primary: '#1e40af',
      secondary: '#3b82f6',
    },
  },
}
```

### Glassmorphism Effects
Modify glass effects in `src/index.css`:
```css
.glass {
  @apply bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl;
}
```

## Backend Integration (Future)

To complete the MERN stack:
1. Create a Node.js/Express backend
2. Set up MongoDB database
3. Implement API endpoints for contact form, blog posts, etc.
4. Add authentication for admin panel

## License

All rights reserved - Vale Accountants

## Support

For support, email info@valeaccountants.com
