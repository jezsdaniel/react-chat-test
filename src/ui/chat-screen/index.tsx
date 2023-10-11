import React, {useState, useCallback, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';

import {appColors} from '../../theme';

export function ChatScreen() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat
        renderAvatar={props => (
          <View style={styles.avatarContainer}>
            <Text>{props.currentMessage?.user.name?.at(0)}</Text>
          </View>
        )}
        messages={messages}
        onSend={messages => onSend(messages)}
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
