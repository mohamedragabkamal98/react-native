import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
        entries: [
            { imageUri:require('../image/oreo.jpg')},
            { imageUri:require('../image/oreo.jpg')},
          ]
    }
  }
  _renderItem ({item, index}) {
    return (
      <View style={styles.slide}>
          <Image
              source={item.imageUri}
              style={{width:200,height:200}}
              />
      </View>
  );}

  render () {
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={370}
        itemWidth={200}
      />
 ); 
}}
const styles = StyleSheet.create({
    container: {
     
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
  }});