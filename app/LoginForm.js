import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button} from 'react-native';
import { Button1, Card, CardItem,Input} from './common';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../image/home-icon.png')}
        style={[styles.icon]}
      />
    ),
  })
  _onLoginPressed(){
    this.props.navigation.navigate('Home')
  }
  render() {
    return(
      <View style={styles.view} >
       <View >
         <Icon 
  name='bars'
  type='evilicon'
  color='#517fa4'
  size = {40}
  style={{
    marginLeft:10,
    marginTop:20,
  }}
  onPress={() => this.props.navigation.openDrawer('')}
/>
</View>
<View style={styles.view1}>
         <Card>
         <CardItem>
          <Input
            label='Email'
            placeholder='Enter your email'
            secureTextEntry={false}
            onChangeText={(username) => this.setState({ username  }) }
          />
        </CardItem>

        <CardItem>
          <Input
            label='Password'
            placeholder='Enter your Password'
            secureTextEntry
            onChangeText={(password) => this.setState({ password }) }
          />
        </CardItem>
        <CardItem style={styles.button}>
        <Button1
        onPress={this._onLoginPressed.bind(this)}
        >Login</Button1>
        </CardItem>

          </Card>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    borderColor: '#ddd',
  },
  view1: {
    marginTop:100,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
