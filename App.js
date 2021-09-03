import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

const Inputs = () =>{
  return (
  <View style = {styles.containerInputs}>
    <Text style = {styles.labelInput}>
      Usuario
    </Text>

    <View style = {styles.containerInput}>
      <TextInput
        style={styles.Input}
      />
      <Image
        style={styles.Icon}
        source={require('./assets/close.png')}
      />
      
    </View>

    {<Text style = {styles.labelInput}>
      Contraseña
    </Text>}

    <View style = {styles.containerInput}>
      <TextInput
        style = {styles.Input}
      />
      <Image
        style = {styles.Icon}
        source={require('./assets/close.png')}
      />
    </View>

    <View style = {styles.containerButton}>
      <TouchableOpacity style = {styles.button}>
        <Text style = {styles.textButton}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.button}>
        <Text style = {styles.textButton}>
          Sign in
        </Text>
      </TouchableOpacity>
    </View>
    
  </View>
  );
}

const App = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.containerImg}>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/adaptive-icon.png')}
        />
        <Text style = {styles.title}> 
          Your Company 
        </Text>
      </View>
      
      <Inputs />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
  },
  title: {
    fontSize: 30,
    marginBottom: 50
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  labelInput:{
    fontSize: 15,
    color: `#8a2be2`, 
    textAlign: 'left',
    marginBottom: 3,
  },
  containerInputs: {
    flex: 1,
    paddingHorizontal: 40,
  }, 
  containerImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }, 
  Input: {
    height: 55,
    flex: 1,
  }, 
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 8,
    borderColor: '#8a2be2',
    borderWidth: 2,
    marginBottom: 20,
  },
  Icon: {
    height: 20,
    width: 20,
    marginEnd: 10,
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
  }, 
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    backgroundColor: "coral",
  }, 
  textButton: {
    fontSize: 18, 
    color: 'white',
  }
});

export default App;