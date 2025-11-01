# Project Context

## Purpose
A universal mobile and web application built with Expo and React Native, targeting iOS, Android, and web platforms. This appears to be a starter template application with modern Expo features including file-based routing, theming, and animation support.

## Tech Stack
- **Framework**: Expo SDK 54 with Expo Router for file-based routing
- **Language**: TypeScript 5.9.2
- **UI Library**: React 19.1.0 + React Native 0.81.5 (with New Architecture enabled)
- **Navigation**: React Navigation v7 (bottom tabs, native navigation)
- **Animation**: React Native Reanimated 4.1.1
- **Gesture Handling**: React Native Gesture Handler 2.28.0
- **Styling**: Platform-specific StyleSheet with themed components
- **Development**: ESLint (expo-config), TypeScript
- **Build Target**: iOS, Android, Web (universal app)

### Expo Modules Used
- expo-constants, expo-font, expo-haptics, expo-image, expo-linking
- expo-router, expo-splash-screen, expo-status-bar, expo-symbols
- expo-system-ui, expo-web-browser, @expo/vector-icons

## Project Conventions

### Code Style
- **File Structure**: File-based routing using Expo Router (app directory structure)
- **Naming**:
  - Components: PascalCase (e.g., `ThemedText.tsx`)
  - Functions/Hooks: camelCase (e.g., `useColorScheme`)
  - Files: kebab-case for pages (e.g., `index.tsx`, `explore.tsx`)
- **Imports**: Path aliases with `@/` prefix for src root
- **Linting**: ESLint with expo-config preset
- **TypeScript**: Strict mode enabled with typed routes
- **Theming**: Dark/light theme support with themed components pattern

### Architecture Patterns
- **Routing**: File-based routing with groups (app/(tabs)/_layout.tsx)
- **Component Organization**:
  - Shared components in `/components` directory
  - Themed wrapper components (ThemedText, ThemedView)
  - Platform-specific components with .web.ts extension support
- **State Management**: React hooks pattern (useColorScheme, useThemeColor)
- **UI Architecture**:
  - Parallax scrolling components
  - Haptic feedback integration
  - Platform-aware styling (Platform.select)
  - Animated components using Reanimated

### Testing Strategy
- No testing framework currently configured
- Testing approach to be determined for future features
- Consider Jest + Testing Library or Native Testing Library for React Native

### Git Workflow
- Standard git workflow (feature branches, PRs)
- Expo-managed development with development builds
- Commit conventions: Standard Conventional Commits (to be confirmed)
- Branching: Feature branches recommended

## Domain Context
This is a starter/template application showcasing:
- Universal app development (iOS/Android/Web)
- Modern React patterns with React 19
- Expo ecosystem integration
- Theming and dark mode support
- Navigation patterns with React Navigation
- Gesture and haptic feedback

## Important Constraints
- **Platform Support**: Must work on iOS, Android, and Web
- **Expo SDK**: Locked to Expo SDK 54
- **React Native Version**: 0.81.5 (with New Architecture)
- **TypeScript**: Strict mode with typed routes
- **Bundle Size**: Not currently constrained but should be mindful for web
- **Performance**: Using React Compiler and New Architecture for optimal performance

## External Dependencies
- **Expo Platform**: Expo managed workflow for building and deployment
- **Development Tools**:
  - Expo CLI for development and build
  - Metro bundler for JavaScript/TypeScript
  - TypeScript compiler for type checking
- **No backend dependencies**: This is a client-side only application at this time
