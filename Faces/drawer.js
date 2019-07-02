import React from 'react';
import { Text, View,StyleSheet,Image,Button } from 'react-native';
import { DrawerNavigator, createDrawerNavigator,createAppContainer } from 'react-navigation';
import Header from '../app/Header';
import LoginForm from '../app/LoginForm';

  /*
  class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../image/notif-icon.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      );
    }
  }
  */
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
  
  const MyDrawerNavigator = createDrawerNavigator({
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
  export default createAppContainer(MyDrawerNavigator);