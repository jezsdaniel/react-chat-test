import {IMessage} from 'react-native-gifted-chat';

export interface IChat {
  user: {
    _id: number;
    name: string;
  };
  messages: IMessage[];
}
