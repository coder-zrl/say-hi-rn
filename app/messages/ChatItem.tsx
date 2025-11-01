/**
 * ChatItem Component
 * 
 * A component representing a single chat session item in the messages list.
 * 
 * @component
 * @example
 *   <ChatItem chat={chatData} />
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ChatInfo } from '@/types/chat';

interface ChatItemProps {
  chat: ChatInfo;
}

const ChatItem: React.FC<ChatItemProps> = ({ chat }) => {
  // Format the active time to a readable format
  const formatTime = (timestamp: number): string => {
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diffInHours = (now.getTime() - date.getTime()) / (1000 * 3600);

      if (diffInHours < 24) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || '';
      } else if (diffInHours < 48) {
        return '昨天';
      } else {
        return date.toLocaleDateString([], { month: 'short', day: 'numeric' }) || '';
      }
    } catch (error) {
      console.error('Error formatting time:', error);
      return '';
    }
  };

  return (
    <TouchableOpacity style={[styles.container, chat.pin && styles.pinnedContainer]}>
      {chat.avatar ? (
        <Image source={typeof chat.avatar === 'string' ? { uri: chat.avatar } : chat.avatar} style={styles.avatar} />
      ) : (
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>{chat.chatTitle?.charAt(0)?.toString() || 'U'}</Text>
        </View>
      )}
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, chat.pin && styles.pinnedTitle]} numberOfLines={1}>
              {chat.chatTitle?.toString() || ''}
            </Text>
            {chat.pin && <Text style={styles.pinIndicator}>📌</Text>}
          </View>
          <Text style={styles.time}>{formatTime(chat.activeTime)}</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.message} numberOfLines={1}>
            {chat.frontEndInfo?.toString() || ''}
          </Text>
          {chat.unreadCount > 0 ? (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{chat.unreadCount}</Text>
              </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 0, // Remove border radius since the list extends to full width
    marginBottom: 0,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    alignItems: 'center', // Ensure content aligns properly
  },
  pinnedContainer: {
    backgroundColor: '#f0f0f0', // Darker background for pinned sessions
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007AFF',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10, // Add left margin to match the avatar spacing
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Changed from 'center' to 'flex-start for more flexibility
    flex: 1,
    minHeight: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  pinnedTitle: {
    fontWeight: '700',
  },
  pinIndicator: {
    fontSize: 12,
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginLeft: 8,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginTop: 2, // Add some top margin for better spacing
  },
  message: {
    fontSize: 14,
    color: '#555',
    flex: 1,
  },
  badge: {
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    paddingHorizontal: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});