import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GameProvider } from './context/gameContext';
import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Rock-Paper-Scissors Game">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Rock-Paper-Scissors' }}
          />
          <Stack.Screen
            name="Result"
            component={ResultScreen}
            options={{ title: 'Game Result' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
}
