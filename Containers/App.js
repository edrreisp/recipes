/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { Button, View } from 'react-native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { NavigationContainer } from '@react-navigation/native';
 import TabBar from "../Components/TabBar";
 


const Stack = createStackNavigator();



 export default class App extends React.Component{


  render(){
    
    return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="TabBar" component={TabBar} options={{ headerMode:'none', }} />
      </Stack.Navigator>
    </NavigationContainer>
    


      
    );
  }
 }