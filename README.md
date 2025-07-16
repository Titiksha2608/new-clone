# React + Vite YouTube Clone

This project is a YouTube-inspired web application built with React and Vite. It features a modern UI, responsive design, and modular component structure. The project demonstrates best practices in React development, including component-based architecture, CSS modularization, and efficient asset management.

## Features

- ⚡️ **Vite** for fast development and hot module replacement
- ⚛️ **React** functional components and hooks
- 🎨 **Custom CSS** for styling (no frameworks)
- 📁 Modular folder structure for scalability
- 📺 Sidebar, Navbar, Feed, Video Player, and Recommendations
- 📱 Responsive design (sidebar hides on small screens)
- 🖼️ Asset management for images and videos

## Project Structure

```
new-clone/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, icons, and videos
│   ├── components/        # Reusable UI components
│   │   ├── Feed/
│   │   ├── Navbar/
│   │   ├── PlayVideo/
│   │   ├── Recommended/
│   │   └── sidebar/
│   ├── pages/             # Page-level components (Home, Video)
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── data.js            # Sample data
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Titiksha2608/new-clone.git
   cd new-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Customization

- Update images and videos in `src/assets/`
- Modify or add components in `src/components/`
- Adjust styles in the respective `.css` files

## License

This project is for educational purposes. Feel free to use, modify, and share!
