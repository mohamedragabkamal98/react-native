import React, {Component} from 'react';import {Platform, StyleSheet, Text, View,Image,Button} from 'react-native';
import { Button1, Card, CardItem,Input} from './common';
export default class Header extends Component {
  _onLoginPressed(){
    this.props.navigation.navigate('Login')
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../image/notif-icon.png')}
        style={[styles.icon]}
      />
    ),
  })
  render() {
    return(
      <View >
        <Card>
      <CardItem >
        <Button1
        onPress={this._onLoginPressed.bind(this)}
        >Back to Login</Button1>
        </CardItem>

          </Card>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});