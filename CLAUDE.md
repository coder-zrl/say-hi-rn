# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

## Project Overview

**say-hi-rn** is a universal Expo/React Native application targeting iOS, Android, and Web platforms. It's a modern starter template featuring:

- Expo SDK 54 with Expo Router for file-based routing
- React 19 with React Native 0.81.5 (New Architecture enabled)
- TypeScript 5.9 with typed routes
- React Native Reanimated 4.1 for animations
- Dark/Light theme support with themed components
- Haptic feedback and gesture handling

## Common Development Commands

```bash
# Start development server
npm start

# Platform-specific commands
npm run ios          # iOS simulator
npm run android      # Android emulator
npm run web          # Web browser

# Code quality
npm run lint         # Run ESLint
npx expo lint        # Expo lint (alternative)

# Project management
npm run reset-project  # Reset to fresh app directory

# Build for production
npx expo export          # Export for all platforms
npx expo export:ios      # iOS only
npx expo export:android  # Android only
npx expo export:web      # Web only
```

## High-Level Architecture

### Navigation Structure
- **Root Layout** (`app/_layout.tsx`): Sets up React Navigation theme provider, Stack navigator with tabs and modal route
- **Tab Layout** (`app/(tabs)/_layout.tsx`): Bottom tab navigation with haptic feedback on tab press
- **Tab Screens**:
  - `index.tsx` - Home screen with parallax header and React logo
  - `explore.tsx` - Explore screen showing other components

### Theming System
- **Theme Provider**: React Navigation's `ThemeProvider` wrapping the app
- **Hooks**: `use-color-scheme.ts` detects system dark/light mode
- **Themed Components**: `ThemedText`, `ThemedView` wrap native components with theme-aware colors
- **Theme Colors**: `constants/theme.ts` defines color palette for light/dark modes
- **Custom Colors**: Component-specific colors via `useThemeColor` hook

### Component Architecture
- **Shared Components** (`/components`): Reusable UI elements
  - `ThemedText`, `ThemedView`: Theme-aware wrappers
  - `HelloWave`: Animated wave emoji using Reanimated
  - `ParallaxScrollView`: Scrollable view with header image
  - `External Link`: Styled external URL handler
- **UI Components** (`/components/ui`): Platform-specific symbols and UI primitives
  - `icon-symbol.ios.tsx`: SF Symbols icons for iOS
  - `icon-symbol.tsx`: Fallback icon implementation
  - `collapsible.tsx`: Expandable content section
- **Haptic Feedback**: `haptic-tab.tsx` provides touch feedback on navigation

### Platform Support
- **iOS**: SF Symbols icons, haptic feedback, adaptive icons
- **Android**: Adaptive icons with monochrome support, edge-to-edge display
- **Web**: Static output with favicon, React Native Web
- **Shared**: File extensions `.web.ts` for platform-specific implementations

### Key Files
- `app.json`: Expo configuration (app name, slug, plugins, experiments)
- `package.json`: Dependencies and scripts (Expo SDK 54, React 19, RN 0.81.5)
- `tsconfig.json`: TypeScript configuration (strict mode, path aliases)
- `eslint.config.js`: ESLint configuration (Expo preset)
- `metro.config.js`: Metro bundler configuration (if customized)

## Project Structure

```
app/                          # File-based routing (Expo Router)
├── _layout.tsx              # Root layout with Stack + ThemeProvider
├── (tabs)/                  # Tab group
│   ├── _layout.tsx         # Tab navigation config
│   ├── index.tsx           # Home screen
│   ├── explore.tsx         # Explore screen
│   └── modal.tsx           # Modal screen
components/                   # Shared UI components
├── ui/                      # UI primitives
├── external-link.tsx        # External link handler
├── hello-wave.tsx           # Animated emoji
├── parallax-scroll-view.tsx # Scrollable with header
├── themed-text.tsx          # Themed text wrapper
└── themed-view.tsx          # Themed view wrapper
hooks/                        # Custom React hooks
├── use-color-scheme.ts      # System theme detection
└── use-theme-color.ts       # Theme color resolution
constants/                    # App constants
└── theme.ts                 # Color palette definitions
assets/                       # Static assets
├── images/                  # Icons, splash screens, logos
└── fonts/                   # Custom fonts (if any)
```

## Important Technical Details

### React Native New Architecture
- **Enabled**: `newArchEnabled: true` in `app.json`
- **React Compiler**: Enabled for automatic memoization
- **Typed Routes**: `typedRoutes: true` for type-safe navigation

### Expo Router Patterns
- **Layout Files**: Use `_layout.tsx` for navigation containers
- **Route Groups**: `(tabs)` group creates logical navigation structure
- **Dynamic Routes**: Use `[id]` for parameters, `[...slug]` for catch-alls
- **Link Component**: Use `<Link>` for navigation, `<Link.Trigger>` for actions

### Theming Implementation
- All color values use `useThemeColor` hook with light/dark overrides
- Text components use themed types: `default`, `title`, `defaultSemiBold`, `subtitle`, `link`
- Custom colors defined in `theme.ts` under light/dark keys

### Dependencies
**Core**: Expo SDK 54, React 19.1.0, React Native 0.81.5
**Navigation**: @react-navigation/native 7.1.8, bottom-tabs 7.4.0, elements 2.6.3
**Animation**: react-native-reanimated 4.1.1, react-native-gesture-handler 2.28.0
**Expo Modules**: 18+ modules for fonts, haptics, images, linking, status-bar, etc.
**Dev**: TypeScript 5.9.2, ESLint 9.25.0, @types/react 19.1.0

## OpenSpec Workflow Integration

This project uses **OpenSpec** for specification-driven development:

- **Specs Location**: `openspec/specs/` contains current capabilities
- **Changes Location**: `openspec/changes/` contains proposed changes
- **Validation**: Always run `openspec validate [change-id] --strict` before implementing
- **Approval**: Do not start coding until proposal is reviewed and approved

See `openspec/AGENTS.md` for complete workflow details.