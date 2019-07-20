import React, { Component } from 'react';
import { View, Text, FlatList,List,Dimensions,ScrollView } from 'react-native';
import Export from './Export';


export default class FlatListTest extends Component {
constructor(props){
    super(props)
    this.state = {
        data: [
            { imageUri:require('../image/bottle1.jpg'),nameofitem:"عصير بيتي",priceofitem:"10",ppriceofitem:"20"},
            { imageUri:require('../image/bottle1.jpg'),nameofitem:"عصير بيتي",priceofitem:"10",ppriceofitem:"20"},
            { imageUri:require('../image/bottle1.jpg'),nameofitem:"عصير بيتي",priceofitem:"10",ppriceofitem:"20"},
            { imageUri:require('../image/bottle1.jpg'),nameofitem:"عصير بيتي",priceofitem:"10",ppriceofitem:"20"},
            { imageUri:require('../image/bottle1.jpg'),nameofitem:"عصير بيتي",priceofitem:"10",ppriceofitem:"20"},
            
      


        ]
    }
}
    // _sendData(){
    //     this.setState({
    //         num : data.num
    //     })
    // }
    render() {
        let {height,width}=Dimensions.get('window');
        return (
                <FlatList
                showsHorizontalScrollIndicator={false}
                    horizontal
                    data={this.state.data}
                    
                    renderItem={({ item }) =>
                   {return (
                       
                    <Export
                    imageUri={item.imageUri}
                    nameofitem={item.nameofitem}
                    priceofitem={item.priceofitem}
                    ppriceofitem={item.ppriceofitem}
                />
                    );
                }
                    }
                    keyExtractor={(item, index) => index.toString()}

                />
        );
    }
}
