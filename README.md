# 🎬 TenTwenty Movie App

A modern React Native app for discovering upcoming movies, watching trailers, and booking cinema seats. Built as a assignment to showcase clean architecture, modular code, and a great user experience.

---

## 🚀 Features

- Browse upcoming movies (from The Movie DB API)
- Search movies by title
- View detailed movie info (genres, release date, overview)
- Watch trailers in-app (YouTube integration)
- Select showtime (date & time picker)
- Reserve seats with interactive cinema hall layout
- Clean, modern UI with custom theming
- Smooth navigation and responsive design

---

## 🛠️ Tech Stack

- **React Native** (0.80+)
- **TypeScript**
- **React Navigation** (v6)
- **React Native Paper** (Material Design 3)
- **Axios** for API calls

---

## 📁 Project Structure

For a detailed breakdown of the project architecture and file organization, see our [Project Structure Documentation](PROJECT_STRUCTURE.md).

**Quick Overview:**
```
src/
├── components/          # Reusable UI components
├── screens/            # Screen components (Watch, Dashboard, etc.)
├── navigation/         # Tab & stack navigation
├── config/            # API & environment configuration
└── hooks/             # Custom React hooks
```

---

## 🏁 Getting Started

### 1. Clone the repo
```sh
git clone https://github.com/noumansakhawat-dev/tentwenty-assignment
cd tentwenty-assignment
```

### 2. Install dependencies
```sh
yarn install
```

### 3. Set up environment variables
Create a `.env` file in the root:
```
THE_MOVIE_DB_API_KEY=your_api_key_here
```

### 4. Run the app
Start Metro:
```sh
yarn start --reset-cache
```

In a new terminal, run on your device/emulator:
```sh
yarn start:android   # for Android
yarn start:ios       # for iOS
```

---

## 🤝 Contributing

PRs and suggestions welcome! Please open an issue or contact the author.

---

## 👤 Author

- [Nouman Sakhawat](mailto:rnouman28@gmail.com)

---

## 📄 License

This project is for assignment/demo purposes only.
