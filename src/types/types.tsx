import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Chat: {
    user: {
      id: number;
      name: string;
    };
  };
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type ChatScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Chat'
>;
