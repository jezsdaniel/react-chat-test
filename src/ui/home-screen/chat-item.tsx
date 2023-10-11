import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

import {appColors} from '../../theme';

interface Props {
  onChatPress: () => void;
}

export const ChatItem = ({onChatPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onChatPress}>
      <View style={styles.avatarContainer}>
        <Text>TN</Text>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.nameText} numberOfLines={1} ellipsizeMode="tail">
            Test
          </Text>
          <Text style={styles.timeText}>10:09 am</Text>
          <FontAwesomeIcon
            icon={faChevronRight}
            size={8}
            style={styles.forwardIcon}
          />
        </View>
        <Text numberOfLines={2} ellipsizeMode="tail">
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
          dolor sit amet, qwer wqr wr
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
