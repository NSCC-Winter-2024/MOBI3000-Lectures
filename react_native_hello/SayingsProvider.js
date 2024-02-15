import {createContext, useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SayingsContext = createContext(null);

export const defaultSayings = {
  birthday: "Happy Birthday!",
  valentines: "Happy Valentines!"
}

export default function SayingsProvider({children}) {

  const [sayings, setSayings] = useState(defaultSayings);

  useEffect(() => {
    AsyncStorage.getItem('sayings')
      .then((json) => {
        if (json !== null) {
          console.log(`json: ${json}`);
          const obj = JSON.parse(json);
          console.log(`obj: ${obj}`);
          setSayings(obj);
        }
      });
  }, []);

  return (
    <SayingsContext.Provider value={{sayings, setSayings}}>
      {children}
    </SayingsContext.Provider>
  )
}