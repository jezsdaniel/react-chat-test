import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {ChatList} from './chat-list';
import {HomeScreenProps} from '../../types/types';
import {IChat} from '../../data/i-chat';

export function HomeScreen({navigation}: HomeScreenProps) {
  const handleChatPress = (chat: IChat) => {
    navigation.navigate('Chat', {
      user: {
        id: chat.user._id,
        name: chat.user.name,
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ChatList onChatPress={handleChatPress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
