import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TimeAgo from 'javascript-time-ago';
import es from 'javascript-time-ago/locale/es';

import {ChatItem} from './chat-item';
import {appColors} from '../../theme';
import {useAppSelector} from '../../store/hooks';
import {IChat} from '../../data/i-chat';

TimeAgo.addDefaultLocale(es);

const Separator = () => <View style={styles.separator} />;

interface Props {
  onChatPress: (chat: IChat) => void;
}

export const ChatList = ({onChatPress}: Props) => {
  const chats = useAppSelector(state => state.app.chats);

  return (
    <FlatList
      data={chats}
      renderItem={data => (
        <ChatItem onChatPress={onChatPress} chat={data.item} />
      )}
      keyExtractor={item => item.user._id.toString()}
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
