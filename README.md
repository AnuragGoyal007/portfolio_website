# Anurag Goyal - Personal Portfolio

![Portfolio Preview](./public/favicon.ico) <!-- You can add a screenshot later, I used the favicon for now -->

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Gemini_AI-2.5_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)

A highly interactive, modern web portfolio built by **Anurag Goyal**, a 2nd-year Computer Science Engineering (AI Specialization) student at Chitkara University.

This application is designed not just to list projects and resume items, but to demonstrate high-level web engineering skills, API integrations, and modern UI/UX principles.

## 🌟 Key Features

- **Interactive AI Terminal (`/components/Terminal.tsx`)**: A fully functional command-line interface directly in the browser. It combines built-in mock commands (`ls`, `skills`) with a live integration using the **Google Gemini API** (`/api/chat`). Users can type natural language questions (e.g., *"What is your tech stack?"*) and receive factually restricted, structured responses.
- **Magnetic Custom Cursor (`/components/CustomCursor.tsx`)**: An advanced, Framer Motion-powered spring cursor that follows the user's mouse and dynamically "snaps" to interactive elements across the site, swapping out the native OS cursor.
- **Glassmorphism Design System**: Built seamlessly with Tailwind CSS, supporting elegant light and dark modes with responsive design perfectly implemented across all viewport sizes.
- **Infinite Marquee Animations**: A smooth, infinitely looping tech-stack marquee utilizing keyframe animations.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router format)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Core**: `@google/genai` (Gemini 2.5 Flash model)

## 🚀 Getting Started Locally

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AnuragGoyal007/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   - Create a file named `.env.local` in the root directory.
   - Add your Google Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 🔗 Connect with me

- **LinkedIn**: [in/anurag-goyal-885264304](https://www.linkedin.com/in/anurag-goyal-885264304)
- **X (Twitter)**: [@logicalmind0891](https://x.com/logicalmind0891)
- **GitHub**: [@AnuragGoyal007](https://github.com/AnuragGoyal007)
- **Email**: [goyalanurag678@gmail.com](mailto:goyalanurag678@gmail.com)

---
*If you find this repository interesting, feel free to give it a ⭐!*