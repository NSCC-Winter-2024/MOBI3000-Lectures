import { StatusBar } from 'expo-status-bar';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import { useFonts } from 'expo-font';
import {useContext, useEffect, useState} from "react";
import { AntDesign } from '@expo/vector-icons';
import {HelloScreen} from "./HelloScreen";
import {SayingsContext} from "./SayingsProvider";
import axios from "axios";

export default function HappyScreen({navigation}) {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });
  const {sayings} = useContext(SayingsContext);

  const [text, setText] = useState(sayings.birthday);

  const buttonPress = () => {
    //navigation.navigate('Hello');
    axios.get("http://172.16.136.102/gpio/26/on")
      .then((res) => {
        setText(`LED: ${res.data.cmd}`);
      });
  };
  const squarePress = () => {
    setText(sayings.valentines);
  };

  useEffect(() => {
    setText(sayings.birthday);
  }, [sayings]);

  const showText = () => {
    if (fontsLoaded)
      return <Text style={styles.text}>{text}</Text>
    else
      return <Text>{text}</Text>
  }

  return (
    <View style={styles.container}>
      <HelloScreen></HelloScreen>
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
