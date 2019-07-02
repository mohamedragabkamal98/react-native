import React from 'react';
import { StyleSheet,View } from 'react-native';
import{Button,Icon} from 'native-base';
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import getDirections from 'react-native-google-maps-directions';
import MapViewDirections from 'react-native-maps-directions';
export default class Example extends React.Component
 {
    async getDirections(startLoc, destinationLoc) {

        try {
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }
            &destination=${ destinationLoc }&mode=walking&key=AIzaSyAYXf4_YiJ5jadkQHy6vEXZtGAEdvsDOKI`)
            let respJson = await resp.json();
            let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
            let coords = points.map((point,index) => {
                return  {
                    latitude : point[0],
                    longitude : point[1]
                };
            });
            const newCoords=[...this.state.coordinates,coords];
            this.setState({coordinates: newCoords});
            return coords;
        } catch(error) {
            alert(error);
            return error;
        }
    }
    handleGetDirections =()=>{
        const data = {
          source :{
            latitude: 40.7308,
            longitude: -73.9973,
          },
          destination :{
            latitude: 40.7359,
            longitude: -73.9911,
          },
          params:[
            {
             key:"travelmode",
             value:"walking"
            },
            {
                key:"dir_action",
                value:"navigate"
            },
          ]
        }
        getDirections(data)
      }
      
    constructor(){
        super()
        this.state={
            coordinates:[]
        }
        this.getDirections = this.getDirections.bind(this);
        this.handleGetDirections = this.handleGetDirections.bind(this);
        }
        componentDidMount(){
            this.getDirections("40.7308,-73.9973","40.7359,-73.9911");
        }
        
        render() {
            return (
              <View style={styles.container}>
                <MapView
                  style={styles.map}
                  initialRegion={{
                    latitude: 40.7308,
                    longitude: -73.9973,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                >
                    <MapView.Marker
                     coordinate={{
                         latitude: 40.7308,
                        longitude: -73.9973,
                        }}
                     />
               <Button transparent>
                   <Icon
                   size={30}
                   color={'#fff'}
                   name={"ios-man"}
                   onPress={this.handleGetDirections}
                   />
               </Button>
               {this.state.coordinates.map((coords,index)=>(
                   <MapView.Polyline
                   key={index}
                   index={index}
                   coordinates={coords}
                   strokeWidth={2}
                   strokeColor="blue"
                   />
               ))}     
                </MapView>
              </View>
            );
          }
 }
         
    const styles = StyleSheet.create({
        container: {
          position:'absolute',
          top:0,
          left:0,
          right:0,
          bottom:0,
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
        map: {
          position:'absolute',
          top:0,
          left:0,
          right:0,
          bottom:0,
        },
      });