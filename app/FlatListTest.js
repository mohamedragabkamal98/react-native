import React, { Component } from 'react';
import { View, Text, FlatList,List,Dimensions,ScrollView } from 'react-native';
import Exportv from './Exportv';


export default class FlatListTest extends Component {
constructor(props){
    super(props)
    this.state = {
        data: [
            { name:"اوريو",type:"تسالي",price:"15",imageUri:require('../image/oreo.jpg')},
            { name:"اوريو",type:"تسالي",price:"15",imageUri:require('../image/oreo.jpg')},
            { name:"اوريو",type:"تسالي",price:"15",imageUri:require('../image/oreo.jpg')},
            { name:"اوريو",type:"تسالي",price:"15",imageUri:require('../image/oreo.jpg')},
            { name:"اوريو",type:"تسالي",price:"15",imageUri:require('../image/oreo.jpg')},
            { name:"اوريو",type:"تسالي",price:"15",imageUri:require('../image/oreo.jpg')},
            { name:"اوريو",type:"تسالي",price:"15",imageUri:require('../image/oreo.jpg')},
            { name:"اوريو",type:"تسالي",price:"15",imageUri:require('../image/oreo.jpg')},
            { name:"اوريو",type:"تسالي",price:"15",imageUri:require('../image/oreo.jpg')},
      


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
                showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    style={{height:height*0.40}}
                    renderItem={({ item }) =>
                   {return (
                       
                    <Exportv
                                name={item.name}
                                type={item.type}
                                price={item.price}
                                imageUri={item.imageUri}/>
                    );
                }
                    }
                    keyExtractor={(item, index) => index.toString()}

                />
        );
    }
}
