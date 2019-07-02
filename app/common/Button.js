import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
      height: 45,
      borderRadius: 5,
      borderWidth:1,
      alignSelf:'stretch',
      marginHorizontal: 10,
      marginVertical: 10,
      borderColor:'blue',
      justifyContent: 'center',
      flex:1,
    },
    text:{
      fontSize:30,
      fontWeight:'bold',
      color: 'red',
      textAlign: 'center',
      justifyContent: 'center',
    }
});
export { Button };
