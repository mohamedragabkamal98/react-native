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
      <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        this.props.navigation.navigate('Details');

      }
}  
      >
        <View style={{backgroundColor:'white',height:200,width:120,marginLeft:2,borderWidth:2,borderColor:'red',borderRadius: 10,paddingTop:5,}}>
          <View style={{flex:2,paddingLeft:30}}>
              <Image
              source={this.props.imageUri}
              style={{flex:1,width:50,height:50}}
              />
              <Icon 
            name='heart-circle'
            type='MaterialCommunityIcons'
            color='red'
            size = {30}
            style=
            {{
              position: 'absolute',
                marginLeft:10,
            }}/>
          </View>
          <View style={{flex:0.5,paddingRight:30,paddingTop:5}}>
             <Text>{this.props.nameofitem}</Text>
          </View>
          <View style={{flex:0.5,flexDirection: 'row'}}>
          <Text style={{paddingLeft:40 , color:'red'}}>ر.ي</Text><Text style={{paddingLeft:5,color:'red'}}>{this.props.priceofitem}</Text>
          </View>
          <View style={{flex:0.5,flexDirection: 'row'}}>
          <Text style={{paddingLeft:40 , color:'#E6E6E6',textDecorationLine:'line-through'}}>ر.ي</Text><Text style={{textDecorationLine:'line-through',color:'#E6E6E6'}}>{this.props.ppriceofitem}</Text>
          </View>
        </View>
        </TouchableOpacity>
    );
  }
}

