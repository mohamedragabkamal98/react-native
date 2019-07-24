import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button, TouchableOpacity} from 'react-native';
import { Button1, Card, CardItem,Input} from './common';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerNavigator, createDrawerNavigator,createAppContainer,createStackNavigator } from 'react-navigation';
import {Details} from './Details';
import LoginForm from './LoginForm';

export default class Export extends Component {
  _onLoginPressed(){
    this.props.navigation.navigate('LoginForm')
  }

  render() {
    const { navigation } = this.props;
    return(
  
        <View style={{backgroundColor:'white',height:200,width:120,marginLeft:2,borderWidth:2,borderColor:'red',borderRadius: 10,paddingTop:5,}}>
          <View style={{flex:2,paddingLeft:30}}>
              <Image
              source={this.props.imageUri}
              style={{flex:1,width:100,height:100}}
              />
              <Icon 
            name='heart-circle'
            type='MaterialCommunityIcons'
            color='red'
            size = {50}
            style=
            {{
              position: 'absolute',
                marginLeft:10,
            }}/>
        </View>
        </View>
    );
  }
}

