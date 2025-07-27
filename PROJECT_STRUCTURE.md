# 📁 Project Structure

This document provides a detailed overview of the TenTwenty Movie App project structure, explaining the purpose and organization of each directory and key files.

## 🏗️ Overall Architecture

The project follows a **feature-based architecture** with clear separation of concerns, making it scalable and maintainable.

```
tentwenty-assignment/
├── src/                      # Main source code
├── android/                  # Android-specific files
├── ios/                      # iOS-specific files
├── assets/                   # Static assets
├── packages/                 # Local packages
├── scripts/                  # Build and utility scripts
└── config files             # Root configuration files
```

---

## 📂 Source Code Structure (`src/`)

### Core Application
```
src/
├── App.tsx                   # Main app component & providers
├── index.js                  # App entry point
```

### Components (`src/components/`)
Reusable UI components used across the application.

```
components/
├── AppHeader/
│   ├── AppHeader.tsx         # Main header component
│   ├── AppSearchHeader.tsx   # Search variant header
│   ├── types.ts             # Header prop types
│   └── index.ts             # Component exports
├── MoviesList/
│   ├── MoviesList.tsx        # Movie grid/list display
│   ├── components/
│   │   └── MovieCard.tsx     # Individual movie card
│   └── index.ts
├── ComingSoon/
│   ├── ComingSoon.tsx        # Coming soon placeholder
│   └── index.ts
├── AppStatusBar.tsx          # Custom status bar
└── index.ts                  # All component exports
```

### Screens (`src/screens/`)
Screen components organized by feature.

```
screens/
├── Watch/                    # Movie-related screens
│   ├── WatchDashboardScreen/
│   │   ├── WatchDashboardScreen.tsx     # Main movie list
│   │   ├── hooks/
│   │   │   └── useWatchDashboardScreen.ts # Dashboard logic
│   │   ├── components/
│   │   │   └── SearchResultScreen.tsx    # Search results
│   │   └── index.ts
│   ├── WatchSearchScreen/
│   │   ├── WatchSearchScreen.tsx        # Movie search interface
│   │   ├── hooks/
│   │   │   └── useWatchSearchScreen.ts  # Search logic
│   │   ├── components/
│   │   │   └── SearchedMoviesList.tsx   # Search results list
│   │   └── index.ts
│   ├── WatchMovieDetailScreen/
│   │   ├── WatchMovieDetailScreen.tsx   # Movie details view
│   │   ├── WatchMovieDetailScreen.styles.ts # Screen styles
│   │   ├── hooks/
│   │   │   ├── useWatchMovieDetail.ts   # Movie detail logic
│   │   │   └── useMovieVideos.ts        # Video/trailer logic
│   │   ├── components/
│   │   │   ├── GenreTag.tsx             # Genre display component
│   │   │   ├── MovieDetailBackgroundImage.tsx
│   │   │   └── index.ts
│   │   └── utils/
│   │       └── genresColors.ts          # Genre color mapping
│   ├── VideoPlayerScreen/
│   │   ├── VideoPlayerScreen.tsx        # YouTube trailer player
│   │   └── index.ts
│   ├── WatchSelectDateTimeScreen/
│   │   ├── WatchSelectDateTimeScreen.tsx # Showtime selection
│   │   ├── WatchSelectDateTimeScreen.styles.ts
│   │   └── index.ts
│   ├── WatchReserveSeatScreen/
│   │   ├── WatchReserveSeatScreen.tsx   # Seat booking interface
│   │   ├── WatchReserveSeatScreen.styles.ts
│   │   ├── components/
│   │   │   ├── CinemaHall/
│   │   │   │   ├── CinemaHall.tsx       # Cinema layout component
│   │   │   │   ├── CinemaHall.styles.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   └── seatColors.ts            # Seat color states
│   │   └── index.ts
│   ├── types.ts              # Screen navigation types
│   └── index.ts              # Screen exports
├── DashboardScreen.tsx       # Main dashboard
├── MediaLibraryScreen.tsx    # Media library placeholder
├── MoreScreen.tsx            # More options screen
└── index.ts                  # Screen exports
```

### Navigation (`src/navigation/`)
Navigation structure and configuration.

```
navigation/
├── NavigationContainer.tsx   # Root navigation wrapper
├── tabNavigator/
│   ├── TabNavigator.tsx      # Bottom tab navigation
│   ├── BottomTabBar.tsx      # Custom tab bar
│   ├── types.ts              # Tab navigation types
│   └── index.ts
├── stack/
│   ├── WatchStack/
│   │   ├── WatchStack.tsx    # Movie feature stack
│   │   ├── types.ts          # Stack navigation types
│   │   └── index.ts
│   └── index.ts
└── index.ts                  # Navigation exports
```

### Configuration (`src/config/`)
App configuration and setup files.

```
config/
├── Axios.ts                  # API client configuration
├── envConfig.ts              # Environment variables
├── fonts.ts                  # Font configuration
└── environment/
    ├── dev/
    │   └── devEnv.ts         # Development environment
    └── types.ts              # Environment types
```

### Hooks (`src/hooks/`)
Custom React hooks for shared logic.

```
hooks/
└── useTheme.ts               # Theme hook with design tokens
```

---

## 📱 Platform-Specific Files

### Android (`android/`)
```
android/
├── app/
│   ├── build.gradle          # App build configuration
│   ├── src/main/
│   │   ├── AndroidManifest.xml
│   │   ├── java/com/tentwenty_assignment/
│   │   │   ├── MainActivity.kt
│   │   │   └── MainApplication.kt
│   │   └── res/              # Android resources
│   └── debug.keystore
├── build.gradle              # Project build configuration
├── gradle.properties
├── settings.gradle
└── keystore.properties.example # Release signing template
```

### iOS (`ios/`)
```
ios/
├── tentwenty_assignment.xcodeproj/
├── tentwenty_assignment.xcworkspace/
├── tentwenty_assignment/
│   ├── AppDelegate.swift
│   ├── Info.plist
│   ├── LaunchScreen.storyboard
│   ├── BootSplash.storyboard
│   └── Images.xcassets/
├── Podfile
└── link-assets-manifest.json
```

---

## 🎨 Assets (`assets/`)
Static resources used throughout the app.

```
assets/
├── fonts/                    # Custom font files (Poppins family)
│   ├── Poppins-Regular.ttf
│   ├── Poppins-Bold.ttf
│   └── ...
└── bootsplash/              # Splash screen assets
    ├── logo.png
    ├── logo@2x.png
    └── manifest.json
```

---

## 📦 Local Packages (`packages/`)
Custom packages for reusable functionality.

```
packages/
└── icons/
    ├── index.tsx             # Icon component
    ├── props.ts              # Icon prop types
    ├── svgs/                 # SVG icon files
    │   ├── dashboard.svg
    │   ├── watch.svg
    │   └── ...
    ├── types/
    │   └── index.d.ts        # Type definitions
    └── utils/
        └── getSize.ts        # Icon sizing utility
```

---

## 🛠️ Scripts & Configuration

### Root Configuration Files
```
├── .env.template             # Environment variables template
├── .eslintrc.js             # ESLint configuration
├── .gitignore               # Git ignore rules
├── app.json                 # React Native app config
├── babel.config.js          # Babel configuration
├── jest.config.js           # Jest testing config
├── metro.config.js          # Metro bundler config
├── package.json             # Dependencies and scripts
├── react-native.config.js   # React Native configuration
├── tsconfig.json            # TypeScript configuration
└── yarn.lock                # Dependency lock file
```

### Build Scripts (`scripts/`)
```
scripts/
├── build-icons.sh           # Icon generation script
└── lint-format.sh           # Linting and formatting script
```

---

## 🏛️ Architecture Principles

### 1. **Feature-Based Organization**
- Related functionality is grouped together
- Each feature has its own components, hooks, and types
- Easy to locate and modify specific features

### 2. **Separation of Concerns**
- UI components are separate from business logic
- Navigation is centralized and typed
- Configuration is environment-aware

### 3. **Type Safety**
- TypeScript throughout the codebase
- Strict typing for navigation, API responses, and props
- Custom type definitions for better IDE support

### 4. **Reusability**
- Common components in shared directories
- Custom hooks for shared logic
- Utility functions and constants

### 5. **Scalability**
- Clear patterns for adding new features
- Modular architecture supports growth
- Platform-specific code is isolated

---

## 🔗 Key Relationships

1. **Navigation Flow**: `TabNavigator` → `WatchStack` → Individual Screens
2. **Data Flow**: API calls in hooks → Components → UI updates
3. **Styling**: Theme hook provides design tokens → Components use consistent styling
4. **State Management**: Screen-level hooks manage local state

This structure ensures maintainability, testability, and scalability as the application grows. 
