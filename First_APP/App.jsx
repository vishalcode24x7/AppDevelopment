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
} from 'react-native';

App = () => {
  return (
    <SafeAreaView>
      <Text> Hello </Text>

      <Image
        style={{ width: 200, height: 300 }}
        source={{
          uri: 'https://images.unsplash.com/photo-1787240663846-598e1033a919?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />

      <Button title="Press me"></Button>

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
      </TouchableHighlight>

      <Pressable style={{padding:10, backgroundColor:"yellow"}}>
        <Text>Press me</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;
