import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Header from '../app/Header'
import LoginForm from '../app/LoginForm'
const AppNavigator = createStackNavigator({
  Login:
  {
   screen: LoginForm,
   navigationOptions:
   {
     title: 'Login',
     justifyContent:'center',
     alignItems:'center',
   }
  },
  Home:
  {
    screen: Header,
    navigationOptions:
    {
      title: 'Home',
      justifyContent:'center',
      alignItems:'center',

    }
  
  }
});


export default createAppContainer(AppNavigator);
