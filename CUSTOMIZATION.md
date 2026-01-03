# Quick Customization Checklist

Use this checklist to quickly customize the portfolio with your information.

## ✅ Step 1: Update Personal Information

### index.html
- [ ] Update page title (line 21)
- [ ] Update meta description (line 8)
- [ ] Update meta author (line 10)
- [ ] Update Open Graph title (line 14)
- [ ] Update Twitter title (line 19)

### src/components/Hero.jsx
- [ ] Update name (line 50)
- [ ] Update job title (line 56)
- [ ] Update introduction paragraph (line 62)

### src/components/About.jsx
- [ ] Update about paragraphs (lines 31-47)
- [ ] Update years of experience (line 51)
- [ ] Update projects completed count (line 55)

### src/components/Contact.jsx
- [ ] Update email address (line 183)
- [ ] Update GitHub URL (line 22)
- [ ] Update LinkedIn URL (line 23)
- [ ] Update Twitter URL (line 24)

### src/components/Footer.jsx
- [ ] Update copyright name (line 16)

## ✅ Step 2: Add Your Projects

### src/data/projects.js
Replace the sample projects with your own:

```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Brief description of what the project does",
  image: "https://your-image-url.com/image.jpg",
  tech: ["React", "Node.js", "MongoDB"], // Your tech stack
  liveUrl: "https://your-project-live-url.com",
  githubUrl: "https://github.com/yourusername/your-repo",
}
```

**Tips for project images:**
- Use high-quality screenshots (1200x800px recommended)
- Use services like [Unsplash](https://unsplash.com/) for placeholder images
- Or use your own project screenshots

## ✅ Step 3: Update Skills

### src/data/skills.js
- [ ] Review the skills categories (Frontend, Backend, Database & Tools)
- [ ] Add/remove skills based on your expertise
- [ ] Update skill colors if desired

**Available icon libraries:**
- FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython, FaDocker, FaFigma
- SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiTypescript, SiFirebase, SiPostgresql, SiRedis, SiGraphql

Find more icons at: https://react-icons.github.io/react-icons/

## ✅ Step 4: Customize Colors (Optional)

### tailwind.config.js
Update the color palette:

```javascript
colors: {
  primary: {
    500: '#8b5cf6', // Purple - change to your brand color
  },
  accent: {
    500: '#3b82f6', // Blue - change to your accent color
  },
}
```

**Color palette generators:**
- [Coolors](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)
- [Tailwind Color Generator](https://uicolors.app/create)

## ✅ Step 5: Change Fonts (Optional)

### src/index.css (line 1)
Update the Google Fonts import:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800;900&display=swap');
```

### tailwind.config.js
Update the font family:

```javascript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

**Recommended fonts:**
- Inter
- Poppins (current)
- Outfit
- Space Grotesk
- Manrope

Browse fonts: https://fonts.google.com/

## ✅ Step 6: Add Your Profile Image (Optional)

### src/components/About.jsx
Replace the emoji (line 82) with an actual image:

```jsx
<img 
  src="/path-to-your-image.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover rounded-xl"
/>
```

## ✅ Step 7: Configure Contact Form

The contact form currently simulates submission. To make it functional:

### Option 1: Use FormSpree
1. Sign up at [FormSpree](https://formspree.io/)
2. Get your form endpoint
3. Update `src/components/Contact.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  // Handle response
};
```

### Option 2: Use EmailJS
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Follow their React integration guide

## ✅ Step 8: Add Favicon

1. Create a favicon (use [Favicon.io](https://favicon.io/))
2. Replace `/public/vite.svg` with your favicon
3. Update `index.html` (line 5):

```html
<link rel="icon" type="image/png" href="/your-favicon.png" />
```

## ✅ Step 9: Test Responsiveness

- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1440px width)
- [ ] Test navigation menu on mobile
- [ ] Test all links and buttons
- [ ] Test form validation

## ✅ Step 10: Deploy

Choose a deployment platform:

### Vercel (Easiest)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to Netlify

### GitHub Pages
1. Install: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 🎉 You're Done!

Your portfolio is now customized and ready to impress!

## 📝 Final Checklist

- [ ] All personal information updated
- [ ] Projects showcase your best work
- [ ] Skills reflect your expertise
- [ ] Contact form is functional
- [ ] All links work correctly
- [ ] Tested on multiple devices
- [ ] Deployed and live
- [ ] Shared on social media!

---

**Need help?** Check the main README.md for detailed documentation.
