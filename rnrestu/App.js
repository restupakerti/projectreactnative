import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WELCOME HOREYYY!</Text>
        <Text>Nama : RESTU PAKERTI</Text>
        <Text>Kelas : XI RPL 1</Text>
        <Text>No.Absen : 28 </Text>
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
