import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMessage} from 'react-native-gifted-chat';

import initialChats from '../data/initialData';
import {IChat} from '../data/i-chat';

export interface AppState {
  chats: IChat[];
}

const initialState: AppState = {
  chats: initialChats,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addMessages: (
      state,
      action: PayloadAction<{userId: number; newMessages: IMessage[]}>,
    ) => {
      const {payload} = action;
      const chatIndex = state.chats.findIndex(
        chat => chat.user._id === payload.userId,
      );
      state.chats[chatIndex].messages.push(...payload.newMessages);
    },
  },
});

export const {addMessages} = appSlice.actions;

export default appSlice.reducer;
