import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {useContext, useEffect, useState} from "react";
import {defaultSayings, SayingsContext} from "./SayingsProvider";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SadScreen() {

  const {sayings, setSayings} = useContext(SayingsContext);

  const handleSavePress = () => {
    AsyncStorage.setItem('sayings', JSON.stringify(sayings))
      .then()
      .catch((reason) => {
        alert(reason.message);
      });
    alert("Saved Successfully!");
  }

  return (
    <View>
      <View style={styles.container}>
        <Text>Birthday Saying</Text>
        <TextInput style={styles.input} value={sayings.birthday ?? defaultSayings.birthday}
                   onChangeText={(text) => setSayings({...sayings, birthday: text})} />
      </View>
      <View style={styles.container}>
        <Text>Valentines Saying</Text>
        <TextInput style={styles.input} value={sayings.valentines ?? defaultSayings.valentines }
                   onChangeText={(text) => setSayings({...sayings, valentines: text})} />
      </View>
      <View style={styles.button}>
        <Button title="Save" onPress={handleSavePress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    margin: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    padding: 5,
  },
  button: {
    alignItems: 'center',
  }
});