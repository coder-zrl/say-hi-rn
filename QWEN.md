# say-hi-rn - Expo React Native Application

## Project Overview

This is a React Native application built with Expo, created using `create-expo-app`. The app features a tab-based navigation structure with four main sections: 搭 (Home), 广场 (Square), 消息 (Message), and 我 (Profile). The application supports both light and dark themes with a responsive design that works across Android, iOS, and web platforms.

### Key Technologies
- **Framework**: React Native with Expo
- **Navigation**: Expo Router with file-based routing
- **UI Components**: Custom themed components (ThemedText, ThemedView)
- **State Management**: React hooks
- **Styling**: React Native StyleSheet
- **Type Safety**: TypeScript
- **Architecture**: New React Native Architecture enabled

### Project Structure
```
app/
├── _layout.tsx          # Root stack navigator
├── (tabs)/
│   ├── _layout.tsx      # Tab navigator with themed UI
│   ├── settings.tsx        # Home tab (搭)
│   ├── square.tsx       # Square tab (广场)
│   ├── message.tsx      # Message tab (消息) with badge
│   └── index.tsx      # Profile tab (我)
components/
├── TabBarBackground.tsx # Custom tab bar background
├── ThemedText.tsx       # Themed text component
└── ThemedView.tsx       # Themed view component
constants/
└── theme.ts             # Theme color definitions
hooks/
├── useColorScheme.ts    # System color scheme hook
└── useThemeColor.ts     # Themed color hook
assets/                  # App assets (icons, images)
```

## Building and Running

### Prerequisites
- Node.js (version compatible with the project dependencies)
- Expo CLI or development environment set up

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

### Development Commands
- **Start development server**: `npm start` or `npx expo start`
- **Run on Android**: `npm run android` or `npx expo start --android`
- **Run on iOS**: `npm run ios` or `npx expo start --ios`
- **Run on Web**: `npm run web` or `npx expo start --web`
- **Lint code**: `npm run lint`

### Project Reset
To reset the project and start fresh with a blank app directory:
```bash
npm run reset-project
```

## Development Conventions

### File-Based Routing
The project uses Expo Router's file-based routing system:
- Files in the `app/` directory become routes
- `(tabs)` is a group that creates a tab navigator
- Each tab screen is represented by its own file

### Theming
The application implements a custom theming system:
- Theme colors are defined in `constants/theme.ts`
- Components use `ThemedText` and `ThemedView` to automatically adapt to light/dark mode
- Theme hooks (`useThemeColor`, `useColorScheme`) provide themed colors throughout the app

### Component Architecture
- Custom themed components are used for consistent styling
- Components are located in the `components/` directory
- Hooks are used for reusable logic and are located in the `hooks/` directory

### Internationalization
The app includes Chinese text in the tab labels and screen content, suggesting a Chinese-speaking target audience.

### TypeScript Usage
- Strict TypeScript configuration is enabled
- Type definitions are provided for theme colors
- Components use TypeScript props interfaces

## Key Features

### Tab Navigation
The app uses React Navigation with a bottom tab navigator featuring:
- 4 tabs: Home (搭), Square (广场), Message (消息), Profile (我)
- Message tab includes a badge with a count of 9
- Themed tab bar with custom background
- Absolute positioning for modern look

### Themed UI
- Automatic light/dark mode detection based on system preference
- Custom theme colors defined for both light and dark modes
- Consistent color application across all UI elements

### Cross-Platform Support
- Supports iOS, Android, and Web platforms
- Adaptive icons for Android
- Tablet support for iOS
- Edge-to-edge display enabled for Android