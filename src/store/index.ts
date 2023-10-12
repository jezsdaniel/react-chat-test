import {configureStore} from '@reduxjs/toolkit';

import appReducer from './app-slice';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['app/addMessages'],
        ignoredPaths: ['app.chats'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
