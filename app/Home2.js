import React, { Component } from 'react';
import { Platform, Dimensions, StyleSheet, Text, View, Image, Button,FlatList ,TouchableOpacity, ScrollView } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Slideshow from 'react-native-image-slider-show';
import Icon from 'react-native-vector-icons/FontAwesome';
import Export from './Export'
import Exportv from './Exportv';
import FlatListTest from './FlatListTest';
import FlatListTest1 from './FlatListTest1';

export default class Home2 extends Component {

  render() {
    return(
        <View>
             <View style={{ flexDirection: 'row', paddingTop: 10 }}>

<TouchableOpacity style={{ marginLeft: 10 }}>
    <Text>
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
<FlatListTest1 />
</View>


<View style={{ flexDirection: 'row', paddingTop: 10 }}>

<TouchableOpacity style={{ marginLeft: 10 }}>
    <Text>
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
<FlatListTest />
</View>

        </View>
    );
  }
}
