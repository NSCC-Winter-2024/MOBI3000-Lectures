import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {useContext, useEffect, useState} from "react";
import {SayingsContext} from "./SayingsProvider";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SadScreen() {

  const {birthday, setBirthday, valentines, setValentines} = useContext(SayingsContext);

  const handleSavePress = () => {
    AsyncStorage.setItem('birthday', birthday)
      .then()
      .catch((reason) => {
        alert(reason.message);
      });
    AsyncStorage.setItem('valentines', valentines)
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
        <TextInput style={styles.input} value={birthday} onChangeText={setBirthday} />
      </View>
      <View style={styles.container}>
        <Text>Valentines Saying</Text>
        <TextInput style={styles.input} value={valentines} onChangeText={setValentines} />
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