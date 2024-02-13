import { StatusBar } from 'expo-status-bar';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import { useFonts } from 'expo-font';
import {useState} from "react";
import { AntDesign } from '@expo/vector-icons';
import {Hello} from "./Hello";

export default function HappyScreen({navigation}) {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });
  const [text, setText] = useState("Happy Birthday!");
  const buttonPress = () => {
    navigation.navigate('Sad');
  };
  const squarePress = () => {
    setText("Happy Valentines!");
  };

  const showText = () => {
    if (fontsLoaded)
      return <Text style={styles.text}>{text}</Text>
    else
      return <Text>{text}</Text>
  }

  return (
    <View style={styles.container}>
      <Hello></Hello>
      {showText()}
      <Pressable onPress={squarePress}>
        <View style={styles.square}>
          <AntDesign name="frown" size={96} color="purple" />
        </View>
      </Pressable>
      <Button title={"Press Me"} onPress={buttonPress}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    width: 200,
    height: 200,
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Inter-Black',
    fontSize: 20,
  }
});
