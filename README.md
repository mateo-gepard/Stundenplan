# Stundenplan

A sleek, Apple-inspired class schedule viewer built with React and TypeScript.

## Features

- Clean, minimalist design inspired by Apple's aesthetics
- Weekly view showing Monday through Friday
- Color-coded class cards for easy recognition
- Displays class details including:
  - Subject name
  - Teacher name and course code
  - Room number
  - Time slot
- Responsive layout
- CSV schedule import support

## Technology Stack

- React 18
- TypeScript
- Vite
- Emotion (for styled components)
- date-fns (for date formatting)

## Getting Started

1. Clone the repository
```bash
git clone [repository-url]
cd stundenplan
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## CSV Format

The application expects a CSV file with the following columns:
```
Day,Start,End,Subject,Teacher,Course,Room,Notes
```

Example:
```
Monday,09:35,10:20,Deutsch,Dab,D2,405,OK
```

## License

MIT
