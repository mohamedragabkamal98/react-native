import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Button, TouchableOpacity} from 'react-native';
import { Button1, Card, CardItem,Input} from './common';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
export default class Exportv extends Component {

  render() {
    return(
        <View style={{
            borderWidth: 0.1,
            borderBottomEndRadius:5,
            borderRadius: 10,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 2,
            shadowRadius: 2,
            elevation: 1,
            
            flexDirection: 'row', height: 110, width: 340, marginLeft: 10,marginTop:5, padding: 10 }}>
        <View >
            <Icon
                name='shopping-cart'
                type='evilicon'
                color='#2E9AFE'
                size={30}
                style=
                {{
                    marginLeft: 10,
                    marginTop: 30,
                }}

            />
        </View>
        <View style={{ flex: 0.5, paddingTop: 10 }} >
            <View style={{ flex: 0.5 }}>
                <Text>{this.props.name}</Text>
            </View>
            <View style={{ flex: 0.5 }}>
                <Text style={{ color: '#BDBDBD' }} >{this.props.type}</Text>
            </View>
            <View style={{ flex: 0.5, flexDirection: 'row' }}>
                <Text style={{ paddingLeft: 70, color: 'red' }}>ر.ي</Text><Text style={{ paddingLeft: 5, color: 'red' }}>{this.props.price}</Text>
            </View>
        </View>
        <View style={{ flex: 0.70, paddingLeft: 30 }}>
            
            <Image
                source={this.props.imageUri}
                style={{ flex: 1, width: 150, height: 150 }}
            />
            <Icon1
                name='heart'
                type='AntDesign'
                color='red'
                size={25}
                style=
                {{position: 'absolute', flex: 1, marginLeft:120,top: 5, left: 20 }} 
            />
        </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  
});
