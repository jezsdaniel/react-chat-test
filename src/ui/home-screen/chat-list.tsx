import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {ChatItem} from './chat-item';
import {appColors} from '../../theme';

const Separator = () => <View style={styles.separator} />;

interface Props {
  onChatPress: () => void;
}

export const ChatList = ({onChatPress}: Props) => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 8]}
      renderItem={() => <ChatItem onChatPress={onChatPress} />}
      keyExtractor={item => item.toString()}
      ItemSeparatorComponent={Separator}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {},
  separator: {
    marginLeft: 72,
    height: 1,
    backgroundColor: appColors.border,
  },
});
