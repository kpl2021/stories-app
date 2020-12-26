import React from 'react';
import { View, StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import PostList from '../lists/PostList';
import Home from '../screens/Home';
import PostDetail from '../screens/PostDetail';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerTransparent: true, 
        headerTitle: '', 
        headerTintColor: 'white', 
        headerLeftContainerStyle: { 
          width: 40, 
          height: 40, 
          borderRadius: 20, 
          backgroundColor: 'rgba(20, 25, 35, 0.7)',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 10
        } 
      }}>
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
      <Stack.Screen name="PostList" component={PostList} />
    </Stack.Navigator>
  )
}

export default AppNavigator;