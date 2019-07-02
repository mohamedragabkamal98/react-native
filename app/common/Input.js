import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems : 'center',
    height: 40,
    margin:1,
    

  },
  label: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 1,
    color:'#FA5858',
  },
  input: {
    backgroundColor:'#F2F2F2',
    fontSize: 16,
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    flex: 2,
  }

});

const Input = (props) => {
  return (
    <View style={styles.inputContainer}>

      <Text style={styles.label}>{props.label}</Text>

      <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        autoCapitalize='none'
        onChangeText={props.onChangeText}
        style={styles.input} />
    </View>
  );
};


export { Input }