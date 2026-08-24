import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello</Text>

      <Image
        style={{ width: 200, height: 300 }}
        source={{
          uri: 'https://images.unsplash.com/photo-1787240663846-598e1033a919?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />

      {/* <Button title="Press me"></Button>

      <TouchableOpacity
        style={{ padding: 10, backgroundColor: 'green' }}
        onPress={() => Alert.alert('Pressed !!')}
      >
        <Text>Button</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={{ padding: 10, backgroundColor: 'red' }}
        onPress={() => Alert.alert('Pressed !!')}
      >
        <Text>Hello</Text>
      </TouchableHighlight> */}

      <Pressable style={styles.button}>
        <Text style={styles.btnText}>Press me</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '10',
    paddingTop: '35',
    backgroundColor: 'black',
    gap:10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    backgroundColor: 'yellow',
    width: '150',
    margin: '20',
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    borderWidth:2,
    borderBottomColor:"red"
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
