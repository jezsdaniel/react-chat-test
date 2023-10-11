import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from './src/ui/home-screen';
import {ChatScreen} from './src/ui/chat-screen';
import {RootStackParamList} from './src/types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
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
          options={({route}) => ({title: route.params.contactName})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
