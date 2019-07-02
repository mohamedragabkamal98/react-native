import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Header from '../app/Header';
import LoginForm from '../app/LoginForm';
const Placeholder = ({ text }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{text}</Text>
    </View>
  );
const TabNavigator = createBottomTabNavigator({
    Login:
    {
     screen: LoginForm,
     navigationOptions:
     {
       title: 'Login',
       justifyContent:'center',
       alignItems:'center',
    tabBarOptions: {
        labelStyle: { fontSize: 30 },
        },
    
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
        tabBarOptions: {
            labelStyle: { fontSize: 30 },
            },
      }
    
    }
});

export default createAppContainer(TabNavigator);