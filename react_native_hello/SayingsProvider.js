import {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SayingsContext = createContext(null);

export default function SayingsProvider({children}) {

  const [birthday, setBirthday] = useState("Happy Birthday!");
  const [valentines, setValentines] = useState("Happy Valentines!");

  useEffect(() => {
    AsyncStorage.getItem('birthday')
      .then((value) => setBirthday(value));
    AsyncStorage.getItem('valentines')
      .then((value) => setValentines(value));
  }, []);

  return (
    <SayingsContext.Provider value={{birthday, setBirthday, valentines, setValentines}}>
      {children}
    </SayingsContext.Provider>
  )
}