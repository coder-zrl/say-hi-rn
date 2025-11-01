import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { mockChats } from '@/mocks/chat-mock';
import SearchBar from './SearchBar';
import ChatItem from './ChatItem';

const Separator: React.FC = () => <View style={styles.separator} />;

const MessagesTab: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const sortedChats = mockChats.sort((a, b) => {
    // Sort by pin status first (pinned items first), then by priority, then by active time
    if (a.pin && !b.pin) return -1;
    if (!a.pin && b.pin) return 1;
    if (a.priority !== b.priority) return b.priority - a.priority;
    return b.activeTime - a.activeTime;
  });

  // Filter chats based on search text
  const filteredChats = sortedChats.filter(chat => 
    !searchText || 
    chat.chatTitle?.toString().toLowerCase().includes(searchText.toLowerCase()) ||
    chat.frontEndInfo?.toString().toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={setSearchText} />
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.chatId.toString()}
        renderItem={({ item, index }) => (
          <React.Fragment>
            <ChatItem chat={item} />
            {index < filteredChats.length - 1 && <Separator />}
          </React.Fragment>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

export default MessagesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#e0e0e0',
    marginLeft: 62, // Start from after the avatar (50px avatar + 12px margin)
    marginRight: 0,
    marginVertical: 0,
  },
});