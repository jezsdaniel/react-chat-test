import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import TimeAgo from 'javascript-time-ago';

// English.
import {appColors} from '../../theme';
import {IChat} from '../../data/i-chat';

interface Props {
  chat: IChat;
  onChatPress: (chat: IChat) => void;
}

export const ChatItem = ({onChatPress, chat}: Props) => {
  const timeAgo = new TimeAgo('es-ES');

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChatPress(chat)}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{chat.user.name.at(0)}</Text>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.nameText} numberOfLines={1} ellipsizeMode="tail">
            {chat.user.name}
          </Text>
          <Text style={styles.timeText}>
            {timeAgo.format(
              chat.messages.at(chat.messages.length - 1)?.createdAt ??
                new Date(),
            )}
          </Text>
          <FontAwesomeIcon
            icon={faChevronRight}
            size={8}
            style={styles.forwardIcon}
          />
        </View>
        <Text numberOfLines={2} ellipsizeMode="tail">
          {chat.messages.at(chat.messages.length - 1)?.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  avatarContainer: {
    width: 56,
    height: 56,
    borderRadius: 48,
    backgroundColor: appColors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 24,
  },
  textContainer: {
    marginLeft: 16,
    justifyContent: 'flex-start',
    flex: 1,
    height: '100%',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    color: appColors.text,
    flexGrow: 1,
    flexShrink: 1,
  },
  timeText: {
    marginLeft: 24,
    fontSize: 14,
    color: appColors.text,
  },
  forwardIcon: {
    marginLeft: 4,
  },
});
