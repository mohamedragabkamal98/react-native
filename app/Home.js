import React, { Component } from 'react';
import { Platform,Dimensions, StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Slideshow from 'react-native-image-slider-show';
import Icon from 'react-native-vector-icons/FontAwesome';
import Export from './Export'
import Exportv from './Exportv';
import FlatListTest from './FlatListTest';
import FlatListTest1 from './FlatListTest1';
export default class LoginForm extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Home",
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../image/home-icon.png')}
                style={[styles.icon]}
            />
        ),
    })
    _onLoginPressed() {
        this.props.navigation.navigate('Home')
    }
    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            height: 50,
            dataSource: [
                {
                    url: require('../image/bags.jpg'),
                }, {
                    url: require('../image/clothes1.jpg'),
                }, {
                    url: require('../image/drinks.jpg'),
                },
            ],
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <View style={styles.view} >
                
                    <View style={{ flexDirection: 'row', }}>
                        <Icon
                            name='shopping-cart'
                            type='Feather'
                            color='#517fa4'
                            size={30}
                            style=
                            {{
                                marginLeft: 10,
                                marginTop: 10,
                            }}

                        />
                        <Text
                            style={{
                                color: '#517fa4',
                                fontSize: 30,
                                fontWeight: 'bold',
                                marginTop: 5,
                                marginLeft: 95,
                            }}>
                            Market
                   </Text>

                        <Icon
                            name='bars'
                            type='evilicon'
                            color='#517fa4'
                            size={30}
                            style=
                            {{
                                marginLeft: 85,
                                marginTop: 10,
                            }}
                            onPress={() => this.props.navigation.openDrawer('')}
                        />

                    </View>
                    <View>
                        <Slideshow
                            dataSource={this.state.dataSource}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({ position })}
                            height={120}
                            arrowSize={0}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>

                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <Text style={styles.btnText}>
                                عرض الكل &gt;&gt;
                    </Text>
                        </TouchableOpacity>
                        <Text style=
                            {{
                                marginLeft: 160,
                                fontWeight: 'bold',
                                color: 'red'
                            }}> احدث العروض</Text>
                        <Text style=
                            {{
                                marginLeft: 10,
                            }}>

                            <Icon
                                name='star-o'
                                type='FontAwesome'
                                color='red'
                                size={20}
                                style=
                                {{
                                    marginLeft: 20,
                                    marginTop: 20,
                                }}
                                onPress={() => this.props.navigation.openDrawer('')}
                            />

                        </Text>
                    </View>
                    <View style={{ padding: 10, backgroundColor: '#E6E6E6', paddingRight: 0 }}>
                        <FlatListTest1/>
{/*                       <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <Export
                                imageUri={require('../image/bottle1.jpg')}
                                nameofitem="عصير بيتي"
                                priceofitem="10"
                                ppriceofitem="20"
                            />
                            <Export
                                imageUri={require('../image/bottle1.jpg')}
                                nameofitem="عصير بيتي"
                                priceofitem="10"
                                ppriceofitem="20"
                            />
                            <Export
                                imageUri={require('../image/bottle1.jpg')}
                                nameofitem="عصير بيتي"
                                priceofitem="10"
                                ppriceofitem="20"
                            />
                            <Export
                                imageUri={require('../image/bottle1.jpg')}
                                nameofitem="عصير بيتي"
                                priceofitem="10"
                                ppriceofitem="20"
                            />
                            <Export
                                imageUri={require('../image/bottle1.jpg')}
                                nameofitem="عصير بيتي"
                                priceofitem="10"
                                ppriceofitem="20"
                            />
                            <Export
                                imageUri={require('../image/bottle1.jpg')}
                                nameofitem="عصير بيتي"
                                priceofitem="10"
                                ppriceofitem="20"
                            />
                        </ScrollView> */}
 
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>

                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <Text style={styles.btnText}>
                                عرض الكل &gt;&gt;
                        </Text>
                        </TouchableOpacity>
                        <Text style=
                            {{
                                marginLeft: 180,
                                fontWeight: 'bold',
                                color: '#2E9AFE'
                            }}> الأكثر مبيعا</Text>
                        <Text style=
                            {{
                                marginLeft: 10,
                            }}>

                            <Icon
                                name='star-o'
                                type='FontAwesome'
                                color='#2E9AFE'
                                size={20}
                                style=
                                {{
                                    marginLeft: 20,
                                    marginTop: 20,
                                }}
                                onPress={() => this.props.navigation.openDrawer('')}
                            />

                        </Text>
                    </View>
                    <View style={{ paddingTop: 5 }}>
                       {/*
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            alwaysBounceVertical={true}
                        >
                            <Exportv
                                name="اوريو"
                                type="تسالي"
                                price="15"
                                imageUri={require('../image/oreo.jpg')}
                            />
                            <Exportv
                                name="اوريو"
                                type="تسالي"
                                price="15"
                                imageUri={require('../image/oreo.jpg')}
                            />
                            <Exportv
                                name="اوريو"
                                type="تسالي"
                                price="15"
                                imageUri={require('../image/oreo.jpg')}
                            />
                            <Exportv
                                name="اوريو"
                                type="تسالي"
                                price="15"
                                imageUri={require('../image/oreo.jpg')}
                            />
                        </ScrollView>*/ }
                        <FlatListTest />
                    </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
      },
    bags: {
        width: 370,
        height: 150,
    },
});
