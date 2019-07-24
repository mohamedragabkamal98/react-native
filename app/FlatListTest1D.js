import React, { Component } from 'react';
import { View, Text, FlatList,List,Dimensions,ScrollView ,TouchableHighlight} from 'react-native';
import ExportD from './ExportD';


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
    render =() => {
        let {height,width}=Dimensions.get('window');
        return (
                <FlatList
                showsHorizontalScrollIndicator={false}
                    horizontal
                    data={this.state.data}
                    style={{paddingLeft:50}}
                    renderItem={({ item }) =>
                   {return (
                    <ExportD
                    imageUri={item.imageUri}
                />
                    );
                }
                    }
                    keyExtractor={(item, index) => index.toString()}

                />
        );
    }
}
