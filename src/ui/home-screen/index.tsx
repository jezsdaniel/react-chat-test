import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {ChatList} from './chat-list';
import {HomeScreenProps} from '../../types/types';

export function HomeScreen({navigation}: HomeScreenProps) {
  const handleChatPress = () => {
    navigation.navigate('Chat', {
      contactName: 'Juan Perez',
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
