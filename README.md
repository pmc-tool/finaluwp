# United Workers Party 2025 Manifesto - Digital Flipbook

This project displays the United Workers Party 2025 Manifesto as an interactive 3D flipbook using the Real3D Flipbook jQuery plugin.

## Features

- 📖 Interactive 3D page-flipping animation
- 🔍 Full-text search functionality
- 📥 Download PDF option
- 🖨️ Print support
- 📱 Responsive design (desktop, tablet, mobile)
- 🔗 Share functionality
- 📑 Table of contents navigation

## Quick Start

### 1. Start the local server

The server should already be running on port 8080. If not:

```bash
python3 -m http.server 8080
```

### 2. View the Manifesto

Open your browser and navigate to:

**http://localhost:8080/examples/manifesto.html**

## Project Structure

```
.
├── examples/
│   ├── manifesto.html          # Main flipbook page
│   └── pdf/
│       └── manifesto.pdf       # United Workers Party 2025 Manifesto
├── build/
│   ├── css/
│   │   └── flipbook.min.css   # Flipbook styles
│   └── js/
│       └── flipbook.min.js    # Flipbook functionality
├── .speckit/                   # SpecKit workflow files
│   ├── CONSTITUTION.md         # Project principles
│   ├── SPECIFICATION.md        # Requirements & specs
│   ├── PLAN.md                # Implementation plan
│   └── state.json             # Workflow state
└── README.md                  # This file
```

## Configuration

The flipbook is configured with the following options:

- **Background Color**: #2C3E50 (dark blue-gray)
- **PDF Source**: `pdf/manifesto.pdf` (43MB)
- **Enabled Features**:
  - Share button
  - Download PDF
  - Print
  - Table of Contents
  - Search

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS 12+, Android 8+)

## Controls

### Desktop
- **Mouse**: Click edges to flip pages or drag to turn
- **Keyboard**: Arrow keys (← →) to navigate
- **Toolbar**: Use buttons for zoom, search, download, etc.

### Mobile/Tablet
- **Touch**: Swipe to flip pages
- **Pinch**: Zoom in/out
- **Toolbar**: Tap buttons for features

## SpecKit Workflow

This project follows the SpecKit methodology:

1. ✅ **Constitute**: Project principles defined
2. ✅ **Specify**: Requirements documented
3. ✅ **Plan**: Implementation plan created
4. ✅ **Implement**: Flipbook configured and deployed
5. ⏳ **Verify**: Testing in progress

See `.speckit/` directory for detailed documentation.

## License

Real3D Flipbook jQuery Plugin - CodeCanyon License
United Workers Party 2025 Manifesto - All Rights Reserved

## Support

For issues with the flipbook plugin, refer to the official documentation in the `documentation/` directory.
