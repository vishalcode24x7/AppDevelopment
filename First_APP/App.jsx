import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'


const App = () => {
  return (
    <ScrollView
      contentContainerStyle={{gap:10}}
      // horizontal
      style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </ScrollView>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    padding: 10,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'black'
  },
  box1: {
    width: 80,
    height: 80,
    backgroundColor: "red",
    borderRadius:"50%"
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: "yellow",
    borderRadius:"50%"
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: "green",
    borderRadius:"50%"
  }

})
