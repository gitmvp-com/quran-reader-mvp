# Quran Reader MVP

A minimal, beautiful Quran reader application built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- 📖 Browse all 114 Surahs of the Holy Quran
- 🔤 Beautiful Arabic typography with Amiri font
- 🌍 English translations for every verse
- 📱 Fully responsive design
- 🎨 Modern glass-morphism UI
- ⚡ Fast and lightweight
- 🚀 No authentication required
- 🔌 No environment variables needed

## 🛠️ Tech Stack

- **React 18.3** - UI library
- **TypeScript 5.8** - Type safety
- **Vite 5.4** - Build tool
- **Tailwind CSS 3.4** - Styling
- **shadcn/ui** - UI components
- **React Router 6.30** - Routing
- **AlQuran.cloud API** - Quran data

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/gitmvp-com/quran-reader-mvp.git
cd quran-reader-mvp

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
quran-reader-mvp/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   └── Layout.tsx    # Main layout wrapper
│   ├── pages/
│   │   ├── Home.tsx      # Landing page
│   │   ├── Quran.tsx     # Surah list
│   │   └── SurahDetail.tsx # Surah reader
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── package.json
├── vite.config.ts
└── tailwind.config.ts
```

## 🎨 Features Overview

### Home Page
- Welcome section with app description
- Quick start button to browse Surahs
- Feature highlights

### Surah List
- All 114 Surahs displayed in cards
- Arabic and English names
- Number of verses and revelation type
- Responsive grid layout

### Surah Reader
- Arabic text with proper RTL support
- English translation side by side
- Verse numbers
- Clean, distraction-free reading experience

## 🌐 API

This app uses the [AlQuran.cloud API](https://alquran.cloud/api) for fetching Quran data:
- Arabic text: `ar.alafasy` edition
- English translation: `en.asad` edition

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Original inspiration: [Sirat](https://github.com/MAtiyaaa/sirat)
- AlQuran.cloud for the API
- shadcn/ui for the beautiful components

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

Made with ❤️ by GitMVP