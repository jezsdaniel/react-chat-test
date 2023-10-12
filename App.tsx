import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import {HomeScreen} from './src/ui/home-screen';
import {ChatScreen} from './src/ui/chat-screen';
import {RootStackParamList} from './src/types/types';
import store from './src/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Mensajes'}}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={({route}) => ({title: route.params.user.name})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
