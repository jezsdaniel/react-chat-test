import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {appColors} from '../../theme';

export const TopBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: appColors.background,
    borderBottomColor: appColors.border,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: appColors.text,
  },
});
