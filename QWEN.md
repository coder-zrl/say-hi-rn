# say-hi-rn - Expo React Native Application

## Project Overview

This is a React Native application built with Expo, created using `create-expo-app`. The app features a tab-based navigation structure with four main sections: 找搭子 (Da), 广场 (Square), 消息 (Messages), and 我 (Profile). The application supports both light and dark themes with a responsive design that works across Android, iOS, and web platforms.

### Key Technologies
- **Framework**: React Native with Expo
- **Navigation**: Expo Router with file-based routing
- **UI Components**: Custom themed components
- **State Management**: React hooks
- **Styling**: React Native StyleSheet
- **Type Safety**: TypeScript
- **Architecture**: New React Native Architecture enabled

### Project Structure
```
app/
├── _layout.tsx          # Root stack navigator with tab navigation
├── index.tsx            # Initial screen (not in a tab)
├── da/                  # "找搭子" (Find companion) tab
├── square/              # "广场" (Square) tab
├── messages/            # "消息" (Messages) tab
│   ├── _layout.tsx      # Messages tab layout
│   ├── index.tsx        # Main messages list screen
│   ├── ChatItem.tsx     # Component for individual chat items
│   └── SearchBar.tsx    # Search bar component for filtering chats
└── profile/             # "我" (Profile) tab
assets/                  # App assets (icons, images)
types/                   # TypeScript type definitions
├── chat.ts              # ChatInfo interface
mocks/                   # Mock data
├── chat-mock.ts         # Sample chat data for the messages tab
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
- Each tab represents a group with its own navigation
- The `_layout.tsx` files define the tab structure

### Component Architecture
- Custom components are organized by feature
- Components are located in their respective directories under the `app/` directory
- TypeScript interfaces define data structures in the `types/` directory
- Mock data is stored in the `mocks/` directory

### Internationalization
The app includes Chinese text in the tab labels and screen content, suggesting a Chinese-speaking target audience.

### TypeScript Usage
- Strict TypeScript configuration is enabled
- Type definitions are provided for chat data structures (`types/chat.ts`)

- Components use TypeScript props interfaces for type safety

## Key Features

### Tab Navigation
The app uses React Navigation with a bottom tab navigator featuring:
- 4 tabs: Find Companion (找搭子), Square (广场), Messages (消息), Profile (我)
- Messages tab includes a badge with a count of 9
- Native tab navigation for each platform

### Messages Tab Features
The messages tab includes specific functionality:
- Search bar component for filtering conversations
- Individual chat item components with avatars and details
- Support for pinned conversations with different styling
- Time formatting for last active messages
- Unread message counts
- Horizontal separators between chat items

### Chat Data Model
The `ChatInfo` interface includes:
- Basic chat information (ID, title, avatar)
- Message tracking (read and max sequence IDs)
- Last message preview (frontEndInfo)
- Active time tracking
- Unread count
- Priority level
- Pin status for ordering

### Cross-Platform Support
- Supports iOS, Android, and Web platforms
- Uses platform-appropriate UI components
- Responsive design for different screen sizes