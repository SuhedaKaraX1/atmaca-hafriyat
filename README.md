# Atmaca Hafriyat - Modern Website v2.0

Modern, responsive website for Atmaca Hafriyat construction and excavation company.

## Features

- 🎨 Modern design with professional color scheme
- 📱 Fully responsive mobile-first design
- ⚡ Fast performance with Next.js 14
- 🎯 Smooth scrolling navigation
- 🌙 Dark/light mode support
- 🔧 Built with TypeScript and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Extract the ZIP file
2. Navigate to the project directory:
   \`\`\`bash
   cd atmaca-hafriyat-v2
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Customization

- Update company information in the component files under `/components`
- Replace placeholder images with actual project photos
- Modify contact information in `components/contact-section.tsx`
- Adjust colors in `app/globals.css`

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **Typography:** DM Sans font
- **Icons:** Lucide React
- **Language:** TypeScript

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx           # Main homepage
│   └── globals.css        # Global styles and design tokens
├── components/
│   ├── ui/                # Reusable UI components
│   ├── navigation.tsx     # Header navigation
│   ├── hero-section.tsx   # Hero banner
│   ├── about-section.tsx  # About us section
│   ├── services-section.tsx # Services showcase
│   ├── gallery-section.tsx # Project gallery
│   ├── contact-section.tsx # Contact form
│   └── footer.tsx         # Footer
└── lib/
    └── utils.ts           # Utility functions
\`\`\`

## License

This project is private and proprietary to Atmaca Hafriyat.
