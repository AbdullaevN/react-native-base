/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, TextInput} from 'react-native';
import ExStyles from './style'

 
const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail]  = useState('')
  const [password, setPassword] = useState('')
  const [display, setDisplay] = useState(false)


  const resetFormData = () => {
    setDisplay(false);
    setName(''),
    setEmail(''),
    setPassword('')
  }
   
  return (
    <View>
      <Text style={{fontSize:30}}>name: {name}</Text>
      <TextInput
      style={styles.textInput}
      placeholder='enter your name'
      value={name}
      onChangeText={(text) => setName(text)}
      />

    <TextInput
      style={styles.textInput}
      placeholder='enter your email'
      value={email}
      onChangeText={(text) => setEmail(text)}
      />

    <TextInput
      style={styles.textInput}
      placeholder='enter your password'
      secureTextEntry={true}
      value={password}
      onChangeText={(text) => setPassword(text)}
      />

<View style={{marginBottom:10}}>
<Button title='print details' onPress={() => setDisplay(true)} ></Button>


</View>
<Button title='clear' onPress={resetFormData} ></Button>
  {
  display ? 
      <View>
        <Text style={{fontSize:15}}>user name is : {name}</Text>
        <Text style={{fontSize:15}}>user email is : {email}</Text>
        <Text style={{fontSize:15}}>user password is : {password}</Text>
      </View>
    : null
  }


      {/* <Button title='clear input' onPress={()=> setName('')}></Button> */}
      
    </View>
  );
};
 


const styles = StyleSheet.create({
  textInput: {
    fontSize:18, 
    color:'red',
    borderWidth:2,
    margin:10}
 })

export default App;
