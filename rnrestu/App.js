import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Judul from './Components/Judul';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Judul Judul="BIODATA"/>
      <Judul Judul="LOGIN"/>
      <Judul Judul="FORM"/>
        <Text>HELLO </Text>
        <Text>Nama:RESTU PAKERTI</Text>
        <Text>Kelas:XI RPL 1</Text>
        <Text>No.Absen : 28</Text>
        
        
        <Image 
        style={{width:300 , height:300}}
        source={require('./saya.jpg')}
        
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
