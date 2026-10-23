# Neo-Brutalist Developer Portfolio & Resume Template

A high-performance, neo-brutalist developer portfolio and interactive resume template built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

Featuring tactile 3D box-shadows, responsive dark/light mode, custom selection colors, an embedded resume viewer (`/resume`), and an automated **GitHub Pages** deployment pipeline.

---

## 🌟 Features

- 🎨 **Neo-Brutalist Aesthetics**: Bold borders, tactile button press micro-interactions, offset shadows, and curated typography.
- 🌓 **Light & Dark Mode**: Seamless theme switching with persistent localStorage state.
- 📄 **Interactive Resume Viewer (`/resume`)**: Built-in dual-mode viewer supporting embedded PDF preview and responsive web document view with one-click download.
- 📱 **Fully Responsive**: Optimized for all device sizes from mobile phones to wide desktop displays.
- ⚡ **Next.js Static Export**: Blazing-fast page loads with zero server dependencies (`output: 'export'`).
- 🚀 **Automated CI/CD Deployment**: Ready-to-use GitHub Actions workflow deploying directly to GitHub Pages with custom domain support.
- 🔍 **SEO & Social Cards**: Pre-configured OpenGraph metadata, Twitter cards, and sitemap generation.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`, `pnpm`, or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/jaisondavid-m/portfolio.git my-portfolio
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your site live.

---

## 🛠️ How to Customize for Your Own Portfolio

Follow these simple steps to replace the placeholder content with your own information:

### 1. Hero Section (`components/Hero.tsx`)
- Update your name, professional title, and tagline summary.
- Replace the avatar image (`public/images/`) or update the `imageSrc` property.
- Update the download button label or links.

### 2. About Section (`components/About.tsx`)
- Add your personal introduction, background, and engineering focus.
- Update the **Let's Connect** and **Download CV** action buttons.

### 3. Education (`components/Education.tsx`)
- Update your academic qualifications (College, Degree, High School, SSLC/Certificates).
- Adjust graduation dates, CGPA, marks, and academic honors.

### 4. Projects (`components/Projects.tsx`)
- Edit the `projects` array with your own projects:
  ```ts
  {
    name: "Project Name",
    description: "Brief overview of what you built and the impact.",
    icons: ["/icons/react.svg", "/icons/golang.svg", ...],
    github: "https://github.com/your-username/project",
    liveDemo: "https://your-demo-url.com" // optional
  }
  ```
- Add custom tech icons to `public/icons/` as SVGs.

### 5. Technical Skills (`components/Skills.tsx`)
- Customize the `tools` list with your preferred programming languages, frameworks, databases, and DevOps tools.

### 6. Connect & Socials (`components/LetsConnect.tsx`)
- Update social handles and links (LinkedIn, GitHub, LeetCode, X/Twitter, Email, WhatsApp).
- Set your current availability status banner (e.g., *"Open to Opportunities"*).

### 7. Resume Document (`public/` & `app/resume/`)
- Place your PDF resume in `public/resume.pdf` and `public/docs/your-resume.pdf`.
- Update the web version of the resume in `app/resume/ResumeViewer.tsx` to match your document details.

### 8. Custom Domain & Branding (`CNAME` & `app/globals.css`)
- **Custom Domain**: Update the `CNAME` file in the root with your domain (e.g., `yourdomain.com`), or remove the file if you are using `<username>.github.io`.
- **Colors**: Customize the primary accent color in `app/globals.css`:
  ```css
  :root {
    --primary-color: #97266d; /* Change to your desired accent color */
    --base-color: #97266d;
    --border-color: #97266d;
  }
  ```
- **SEO Metadata**: Update `title`, `description`, and author metadata in `app/layout.tsx`.

---

## 📦 Building for Production

To test the production static export build locally:

```bash
npm run build
```

This exports your static web bundle directly into the `out/` directory.

---

## 🌐 Deployment

### Deploy to GitHub Pages (Automatic)

This repository includes a pre-configured GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. Push your code to your GitHub repository on branch `main`.
2. In your repository on GitHub, navigate to:
   **Settings** &rarr; **Pages** &rarr; **Build and deployment**.
3. Under **Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build and deploy your portfolio!

### Deploy to Vercel

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your repository and click **Deploy**.

---

## 📂 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages CI/CD workflow
├── app/
│   ├── globals.css           # Neo-brutalist theme variables, selection & shadows
│   ├── layout.tsx            # Global metadata, fonts, and theme wrapper
│   ├── page.tsx              # Main portfolio page assembly
│   └── resume/
│       ├── page.tsx          # /resume route metadata
│       └── ResumeViewer.tsx  # Dual-mode PDF and Web resume viewer
├── components/
│   ├── Header.tsx            # Navigation header with dark/light mode toggle
│   ├── Hero.tsx              # Hero profile intro & primary action buttons
│   ├── About.tsx             # Professional biography & quick links
│   ├── Education.tsx         # Academic timeline and degree cards
│   ├── Projects.tsx          # Featured projects grid with live links
│   ├── Skills.tsx            # Interactive tech stack icon grid
│   ├── LetsConnect.tsx       # Contact methods, social links & status badge
│   └── Footer.tsx            # Copyright footer and floating scroll-to-top button
├── contexts/
│   └── ThemeContext.tsx      # Dark/light theme state provider
├── public/
│   ├── icons/                # Technology and skill SVG icons
│   ├── images/               # Profile and avatar media
│   ├── CNAME                 # Custom domain configuration
│   └── resume.pdf            # PDF resume asset
├── next.config.js            # Next.js static export settings
├── package.json
└── tsconfig.json
```

---

## 📄 License

This template is open-source and available under the [MIT License](LICENSE). Feel free to fork, customize, and use it for your personal portfolio!
