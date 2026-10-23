# Jaison David M &mdash; Portfolio & Resume

A modern, high-performance neo-brutalist portfolio and interactive resume website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

🌐 **Live Website**: [https://jaisondavid.in](https://jaisondavid.in)  
📄 **Interactive Resume**: [https://jaisondavid.in/resume](https://jaisondavid.in/resume)

---

## 👨‍💻 About Me

Full-Stack &amp; Backend Engineer specializing in building scalable, high-throughput distributed systems and production platforms currently serving 5,700+ students. Experienced in Go (Gin), Apache Kafka, Redis, Docker, and MySQL, with a strong focus on concurrency control, low-latency API design, and containerized microservices.

---

## ✨ Features & Architecture

- **Neo-Brutalist Tactile Design**: Custom brutalist box-shadows, responsive light and dark theme engine, and brand pink/magenta text selection highlights (`#97266d`).
- **Interactive Online Resume (`/resume`)**: Dual-mode resume viewer allowing visitors to toggle between an embedded single-page PDF document and a clean web view, with instant one-click download.
- **Featured Projects Showcase**: Detailed overviews with architecture bullets, technology badges, GitHub source links, and production live demos.
- **Education Section**: Clean academic background highlighting B.E. in Computer Science & Engineering at Bannari Amman Institute of Technology (CGPA: 9.28 / 10) and Holy Children Matriculation HSS.
- **Automated CI/CD Pipeline**: GitHub Actions workflow that statically exports Next.js into production bundles and deploys directly to GitHub Pages on custom domain `jaisondavid.in`.
- **Search Engine & AI Discovery**: Comprehensive SEO optimizations including structured Schema.org JSON-LD, OpenGraph tags, Twitter cards, dynamic metadata, and XML sitemaps.

---

## 🚀 Featured Projects

### 1. [BitCentral](https://bitcentral.bitsathy.in) &mdash; Full-Stack Institutional Data Platform
- **Stack**: React, Go (Gin), MySQL, Docker, Linux
- Engineered a full-stack platform currently serving **5,700+ students** across 20+ academic departments.
- Designed a thread-safe in-memory caching layer with `sync.RWMutex` and deep-copy buffers, cutting external API latency.
- [GitHub Repository](https://github.com/jaisondavid-m/bitcentral-v2) &bull; [Live Demo](https://bitcentral.bitsathy.in)

### 2. [iTrigger](https://github.com/jaisondavid-m/iTrigger) &mdash; Continuous Deployment & Webhook Automation Server
- **Stack**: React, Go (Gin), Docker, Caddy, GitHub Webhooks, MySQL
- Lightweight CD platform in Go automating server deployments by mapping GitHub repositories and branches to shell workflows.
- Implemented HMAC-SHA256 webhook signature validation to securely authenticate deployment triggers.
- [GitHub Repository](https://github.com/jaisondavid-m/iTrigger)

### 3. [ZeroProxyAttendance](https://github.com/jaisondavid-m/ZeroProxyAttendance) &mdash; Anti-Proxy QR Attendance System
- **Stack**: React, Go, MySQL, Docker, REST APIs
- Anti-proxy attendance platform eliminating manipulation via time-sensitive dynamic QR cryptographic handshakes.
- Integrated dual-factor physical verification combining GPS geofencing and campus network IP validation.
- [GitHub Repository](https://github.com/jaisondavid-m/ZeroProxyAttendance)

### 4. [Ticket Booking System](https://github.com/jaisondavid-m/Ticket-Booking-System) &mdash; Distributed High-Throughput Architecture
- **Stack**: Go (Gin), Apache Kafka, Redis, MySQL, Docker, Nginx
- High-concurrency backend engineered to handle **100,000+ requests/sec** with strict consistency guarantees.
- Implemented atomic Redis Lua availability gates to prevent overselling and eliminate race conditions under heavy load.
- Asynchronous event-driven booking pipeline using Apache Kafka (12 partitions, 32 worker consumers).
- [GitHub Repository](https://github.com/jaisondavid-m/Ticket-Booking-System)

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Languages** | Go (Golang), Java, JavaScript, TypeScript, C, SQL, Bash |
| **Backend & Distributed** | Go (Gin), Node.js, Express, REST APIs, Apache Kafka, Redis |
| **Frontend** | React, Next.js, HTML5, CSS3, Tailwind CSS |
| **Databases** | MySQL (transactions, indexing, connection pooling), PostgreSQL |
| **DevOps & Cloud** | Docker, Docker Compose, Caddy, Nginx, Linux, Git, GitHub Actions |
| **Typography** | Space Mono, EB Garamond, Archivo Black |

---

## 📁 Repository Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions automated Pages deployment
├── app/
│   ├── globals.css           # Neo-brutalist theme tokens, selection & shadows
│   ├── layout.tsx            # Global metadata, fonts, and theme wrapper
│   ├── page.tsx              # Single-page portfolio assembly
│   ├── resume/
│   │   ├── page.tsx          # /resume route metadata
│   │   └── ResumeViewer.tsx  # Dual-mode PDF and Web resume viewer
├── components/
│   ├── Header.tsx            # Sticky navigation with theme toggle & mobile drawer
│   ├── Hero.tsx              # Introduction, avatar, CV download & view resume CTA
│   ├── About.tsx             # Professional biography and contact triggers
│   ├── Education.tsx         # College and Higher Secondary academic cards
│   ├── Projects.tsx          # Responsive grid of featured systems projects
│   ├── Skills.tsx            # Auto-fill icon grid of technical tools
│   ├── LetsConnect.tsx       # Social links, email triggers, and status badge
│   └── Footer.tsx            # Copyright notice and scroll-to-top floating button
├── contexts/
│   └── ThemeContext.tsx      # Persistent light/dark mode state manager
├── public/
│   ├── docs/
│   │   └── jaisondavid-resume.pdf  # Downloadable resume document
│   ├── icons/                # Tech stack SVGs
│   ├── images/               # High-res profile and banner assets
│   ├── CNAME                 # Custom domain configuration (jaisondavid.in)
│   ├── resume.pdf            # Root resume asset
│   ├── robots.txt            # Search engine crawler policies
│   └── sitemap.xml           # SEO sitemap index
├── next.config.js            # Static export configuration (`output: 'export'`)
├── package.json
└── tsconfig.json
```

---

## 💻 Local Development

### Prerequisites
- **Node.js**: v18 or higher
- **npm** or **yarn**

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/jaisondavid-m/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Generate static export into /out
npm run build
```

---

## 🚀 Deployment

The site is automatically deployed to [jaisondavid.in](https://jaisondavid.in) on every push to the `main` branch via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)):

1. Runs `npm ci`
2. Executes `npm run build` with `output: 'export'`
3. Uploads static bundle (`/out`)
4. Deploys to GitHub Pages with SSL on custom domain `jaisondavid.in`

---

## 📬 Connect With Me

- **Website**: [jaisondavid.in](https://jaisondavid.in)
- **LinkedIn**: [linkedin.com/in/jaison-david-m-a14072360](https://linkedin.com/in/jaison-david-m-a14072360)
- **GitHub**: [github.com/jaisondavid-m](https://github.com/jaisondavid-m)
- **Email**: [jaison7373@gmail.com](mailto:jaison7373@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
