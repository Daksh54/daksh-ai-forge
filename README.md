# Portfolio: Daksh Sharma - MERN Stack Developer

A premium, high-performance portfolio website built with React, Vite, and Tailwind CSS. Showcasing projects, skills, and services with a "Cosmic" dark theme and glassmorphism aesthetics.

## 🚀 Technologies Used

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + `clsx` + `tailwind-merge`
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [EmailJS](https://www.emailjs.com/)
- **Key Libraries**:
  - `react-helmet-async` (SEO)
  - `next-themes` (Dark/Light mode)
  - `@radix-ui` (Accessible primitives)

## ✨ Features

- **Premium UI**: Custom "Cosmic" dark mode with glassmorphism and glow effects.
- **Animations**: Smooth scroll reveals, hover effects, and staggered animations.
- **Responsive**: Fully responsive design for all device sizes.
- **Theme Support**: Dark/Light mode toggle.
- **SEO Optimized**: Meta tags and structured content.
- **Contact Form**: Functional contact form powered by EmailJS.

## 🛠️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Daksh54/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/
│   ├── sections/       # Main page sections (Hero, About, etc.)
│   ├── ui/             # Reusable UI components (Button, Input, etc.)
│   ├── theme-provider.tsx
│   └── ThemeToggle.tsx
├── pages/              # Page layouts
├── assets/             # Images and static assets
├── index.css           # Global styles and Tailwind configuration
└── main.tsx            # App entry point with providers
```

## 📄 License

This project is licensed under the MIT License.
