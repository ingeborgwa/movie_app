// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/home';
import WatchList from './views/watchList';
import Search from './views/search'



const Stack = createStackNavigator()


const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Favoritter" component={WatchList} />
        <Stack.Screen name="Søk" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  )

};

export default App;
