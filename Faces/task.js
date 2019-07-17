import React from 'react';
import { Text, View,StyleSheet,Image,Button } from 'react-native';
import { DrawerNavigator, createDrawerNavigator,createAppContainer } from 'react-navigation';
import Home from '../app/Home';
import LoginForm from '../app/LoginForm';
import { Right } from 'native-base';

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
    Home:
    {
      screen: Home,
      navigationOptions:
      {
        title: 'Home',
        justifyContent:'center',
        alignItems:'center',
      },
    
    }
    
  },
  {
    drawerPosition: 'right',
  }
  );
  export default createAppContainer(MyDrawerNavigator);