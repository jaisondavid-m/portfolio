# Portfolio Website

A minimalist, black and white portfolio website built with Next.js, inspired by modern developer portfolios.

## Features

- 🎨 Minimalist black and white design
- 📱 Fully responsive
- ⚡ Built with Next.js 14
- 🔤 Monospaced typography
- ✨ Smooth animations and interactions

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, specialization, and languages
   - Replace profile image URL
   - Update social media links

2. **About Section** (`components/About.tsx`):
   - Add your professional description

3. **Technical Skills** (`components/TechnicalSkills.tsx`):
   - Update skills array with your skills and proficiency levels

4. **Tools** (`components/Tools.tsx`):
   - Update tools array with your preferred tools

5. **Work Experience** (`components/Work.tsx`):
   - Add your work experience details

6. **Preferences** (`components/AkashUses.tsx`):
   - Update preferences array with your personal preferences

7. **Social Links** (`components/LetsConnect.tsx`):
   - Update social media links and descriptions

8. **Footer** (`components/Footer.tsx`):
   - Update copyright name

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Use `next export` (static export)

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── TechnicalSkills.tsx
│   ├── Tools.tsx
│   ├── Work.tsx
│   ├── AkashUses.tsx
│   ├── LetsConnect.tsx
│   └── Footer.tsx
├── package.json
├── tsconfig.json
└── next.config.js
```

## License

MIT License - feel free to use this for your own portfolio!
