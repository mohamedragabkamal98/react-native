import React, { Component } from 'react';
import { Platform, Dimensions, StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Slideshow from 'react-native-image-slider-show';
import Export from './Export'
import Exportv from './Exportv';
import FlatListTest from './FlatListTest';
import FlatListTest1D from './FlatListTest1D';
import { createStackNavigator, DrawerNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import LoginForm from './LoginForm';
import Icon from 'react-native-vector-icons/Entypo';
import Carousel from 'react-native-snap-carousel';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      position: 1,
      enableScrollViewScroll: true,
      interval: null,
      height: 50,
      entries: [
        { imageUri: require('../image/bottle1.jpg') },
        { imageUri: require('../image/bottle1.jpg') },
      ],
      counter: 0,
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: "عصير بيتي",
    headerStyle: { textAlign: 'center', elevation: 0,height:40 },
    headerTitleStyle: { flex: 1, marginLeft: 80, },
    headerRight: <Icon
      name='share'
      type='Entypo'
      color='black'
      size={25}
      style=
      {{
        marginRight: 20,
        marginTop: 5,
      }}
    />,


  })
  _renderItem({ item, index }) {
    return (
      <View style={{
        borderWidth: 0.1,
        borderBottomEndRadius: 5,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 2,
        elevation: 1,
        height: 250, width: 165, flex: 1, marginLeft: 10, marginTop: 5, padding: 10
      }}>
        <Image
          source={item.imageUri}
          style={{ width: 150, height: 200, marginTop: 10 }}
        />
      </View>
    );
  }
  increase_counter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }
  decrease_counter = () => {
    if (this.state.counter > 0) { this.setState({ counter: this.state.counter - 1 }) }

  }
  render() {
    return (
      <View style={styles.view}
        onStartShouldSetResponderCapture={() => {
          this.setState({ enableScrollViewScroll: true });
        }}
      >
        <ScrollView
          scrollEnabled={this.state.enableScrollViewScroll}
          ref={myScroll => (this._myScroll = myScroll)}
        >

          <View>

            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={370}
              itemWidth={200}
            />
            <Icon1
              name='heart'
              type='AntDesign'
              color='red'
              size={30}
              style=
              {{ position: 'absolute', flex: 1, marginLeft: 82, marginTop: 10 }}
            />
          </View>


          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', flex: 0.5 }}>

              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Icon
                  name='shopping-cart'
                  type='Feather'
                  color='#2E9AFE'
                  size={25}
                  style=
                  {{
                    marginLeft: 20,
                    marginTop: 10,
                  }}

                />
              </TouchableOpacity>
              <Text style=
                {{
                  marginTop: 10,
                  marginLeft: 220,
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 16
                }}> عصير بيتي</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style=
                {{
                  flex: 0.5,
                  marginRight: 20,
                  color: 'gray',
                  fontSize: 16
                }}
              >مشروبات غازية
            </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
                <TouchableOpacity onPress={() => this.increase_counter()}
                  style={{ height: 25, width: 20, borderWidth: 2, borderColor: 'black' }}
                >
                  <Icon2
                    name='plus'
                    type='Entypo'
                    color='black'
                    size={16}
                    style=
                    {{ top: 2 }}
                  />
                </TouchableOpacity>

                <Text style={{ fontSize: 16, paddingLeft: 3, paddingRight: 3, color: '#2E9AFE' }}>{this.state.counter}</Text>

                <TouchableOpacity onPress={() => this.decrease_counter()}
                  style={{ height: 25, width: 20, borderWidth: 2, borderColor: 'black' }}>
                  <Icon2
                    name='minus'
                    type='Entypo'
                    color='black'
                    size={16}
                    style=
                    {{ top: 2 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', paddingLeft: 145 }}>
                <Text style={{ paddingLeft: 40, color: '#E6E6E6', textDecorationLine: 'line-through' }}>ر.ي</Text><Text style={{ textDecorationLine: 'line-through', color: '#E6E6E6' }}>50</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ paddingLeft: 20, color: 'red' }}>ر.ي</Text><Text style={{ paddingLeft: 5, color: 'red' }}>30</Text>
              </View>
            </View>
          </View>


          <View style={{ flexDirection: 'row', paddingLeft: 2, paddingTop: 3 }}>

            <View style={{
              backgroundColor: '#E6E6E6', borderTopRightRadius: 20, borderBottomRightRadius: 20, flexDirection: 'row',
              paddingTop: 5, paddingLeft: 20, paddingRight: 20, paddingBottom: 10, marginRight: 10
            }}>
              <Text
                style={{
                  fontSize: 16, color: 'black',
                  paddingTop: 7, paddingLeft: 20, paddingRight: 15, paddingBottom: 5
                }}>التقييم</Text>
              <Text style={{ fontSize: 25, paddingLeft: 10, paddingRight: 0, color: 'black' }}>|</Text>
              <Icon2
                name='star'
                type='Entypo'
                color='yellow'
                size={16}
                style=
                {{ top: 10, left: 5 }}
              />
              <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 7, color: 'black', paddingRight: 15 }}>0</Text>
            </View>
            <View style={{
              backgroundColor: '#E6E6E6', borderTopLeftRadius: 20, borderBottomLeftRadius: 20, flexDirection: 'row',
              paddingTop: 5, paddingLeft: 5, paddingRight: 200, paddingBottom: 10, marginLeft: 10
            }}>
              <Text style={{ fontSize: 16, paddingLeft: 2, paddingTop: 7, color: '#2E9AFE', paddingRight: 15 }}>0</Text>
              <Text
                style={{
                  fontSize: 16, color: 'black',
                  paddingTop: 7, paddingLeft: 80, paddingRight: 5, paddingBottom: 5
                }}>العدد</Text>

            </View>
          </View>

          <View style={{ backgroundColor: '#E6E6E6', paddingLeft: 5,marginTop:10 }}>
            <Text style={{ fontSize: 16, paddingLeft: 2, paddingTop: 7, color: '#2E9AFE', paddingRight: 15 }}>الوصف</Text>
            <Text style=
                {{
                  paddingRight: 12,
                  color: 'black',
                  fontSize: 16,
                  paddingLeft: 2,
                  paddingBottom:10,
                }}> عصير بيتي</Text>
          </View>
          <View style={{ paddingLeft: 5,marginTop:10 }}>
           <Text
            style=
            {{
              paddingRight: 12,
              color: 'black',
              fontSize: 16,
              paddingLeft: 2,
              paddingBottom:10,
            }}
           >منتجات ذات صلة</Text>
          </View>
          <View style={{ }}
                
                onStartShouldSetResponderCapture={() => {
                    this.setState({ enableScrollViewScroll: false });
                    if (this._myScroll.contentOffset === 0
                      && this.state.enableScrollViewScroll === false) {
                      this.setState({ enableScrollViewScroll: true });
                    }
                  }}
                >
                    
                    <FlatListTest />
                </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    borderColor: '#ddd',
  },
  view1: {
    marginTop: 100,
  },
  icon: {
    width: 24,
    height: 24,
  },
  container: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
