import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStaffManager from '../screens/HomeStaffManager';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{headerShown : false }} />
            <Stack.Screen name="HomeStaffManager" component={HomeStaffManager} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
