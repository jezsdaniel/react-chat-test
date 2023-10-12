import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';

import {appColors} from '../../theme';
import {ChatScreenProps} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addMessages} from '../../store/app-slice';

export function ChatScreen({route: {params}}: ChatScreenProps) {
  const chats = useAppSelector(state => state.app.chats);
  const dispatch = useAppDispatch();

  const [messages, setMessages] = useState<IMessage[]>(
    chats.find(chat => chat.user._id === params.user.id)?.messages ?? [],
  );

  useEffect(() => {
    const chat = chats.find(c => c.user._id === params.user.id);
    if (chat) {
      setMessages(chat.messages);
    }
  }, [chats, params.user.id]);

  const onSend = useCallback(
    (m: IMessage[] = []) => {
      dispatch(
        addMessages({
          userId: params.user.id,
          newMessages: m,
        }),
      );
    },
    [dispatch, params.user.id],
  );

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat
        renderAvatar={props => (
          <View style={styles.avatarContainer}>
            <Text>{props.currentMessage?.user.name?.at(0)}</Text>
          </View>
        )}
        messages={[...messages].reverse()}
        onSend={m => onSend(m)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    width: 36,
    height: 36,
    borderRadius: 36,
    backgroundColor: appColors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
