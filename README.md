# Modern Portfolio Website

A stunning, fully responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. This portfolio features a dark theme, glassmorphism effects, smooth animations, and a professional design that will wow visitors.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80)

## ✨ Features

- **Modern Dark Theme** - Sleek black background with vibrant purple and blue gradients
- **Fully Responsive** - Perfect display on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Powered by Framer Motion for professional transitions
- **Glassmorphism Effects** - Modern UI with frosted glass aesthetics
- **SEO Optimized** - Comprehensive meta tags for better search engine visibility
- **Accessibility** - Built with semantic HTML and ARIA labels
- **Clean Code** - Well-organized, production-ready codebase

## 🎨 Sections

1. **Hero Section** - Eye-catching introduction with gradient text and CTA buttons
2. **About Section** - Professional bio with stats and floating animations
3. **Skills Section** - Categorized skills with icons and hover effects
4. **Projects Section** - Portfolio showcase with image overlays and tech stacks
5. **Contact Section** - Functional form with validation and social links
6. **Footer** - Minimal footer with copyright and tech stack info

## 🚀 Tech Stack

- **React** - UI library for building components
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portflio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 📝 Customization Guide

### 1. Personal Information

Update the following files with your information:

**`index.html`** - Update meta tags and title:
```html
<title>Your Name | Frontend Developer & UI/UX Designer</title>
<meta name="description" content="Your custom description" />
```

**`src/components/Hero.jsx`** - Update name and bio:
```jsx
<h1>Hi, I'm <span className="gradient-text">Your Name</span></h1>
<h2>Frontend Developer & UI/UX Designer</h2>
<p>Your custom introduction text...</p>
```

**`src/components/About.jsx`** - Update about text and stats

**`src/components/Contact.jsx`** - Update email and social links

**`src/components/Footer.jsx`** - Update copyright name

### 2. Projects

Edit `src/data/projects.js` to add your projects:
```javascript
{
  id: 1,
  title: "Your Project",
  description: "Project description",
  image: "https://your-image-url.com",
  tech: ["React", "Node.js", "MongoDB"],
  liveUrl: "https://your-live-url.com",
  githubUrl: "https://github.com/your-repo",
}
```

### 3. Skills

Edit `src/data/skills.js` to customize your skills. Icons are from `react-icons`.

### 4. Colors

Customize colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#8b5cf6', // Your primary color
  },
  accent: {
    500: '#3b82f6', // Your accent color
  },
}
```

### 5. Fonts

Change fonts in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

## 🎯 Project Structure

```
portflio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Skills.jsx       # Skills section
│   │   ├── Projects.jsx     # Projects section
│   │   ├── Contact.jsx      # Contact section
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   ├── projects.js      # Projects data
│   │   └── skills.js        # Skills data
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies
```

## 🎨 Design Features

### Glassmorphism
Cards and navigation use a frosted glass effect:
```css
.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Gradient Text
Vibrant gradient text for emphasis:
```css
.gradient-text {
  background: linear-gradient(to right, #8b5cf6, #a78bfa, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Smooth Animations
All sections use Framer Motion for scroll-triggered animations:
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## 📱 Responsive Design

- **Mobile**: Single column layout, hamburger menu
- **Tablet**: Two column layout for some sections
- **Desktop**: Full multi-column layout with all features

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag and drop `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run `npm run deploy`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💖 Acknowledgments

- Design inspiration from modern developer portfolios
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Images from [Unsplash](https://unsplash.com/)

---

**Made with ❤️ using React, Tailwind CSS, and Framer Motion**
