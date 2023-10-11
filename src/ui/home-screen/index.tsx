import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {TopBar} from './top-bar';
import {ChatList} from './chat-list';

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <ChatList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
