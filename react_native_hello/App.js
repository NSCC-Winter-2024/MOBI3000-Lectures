
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import MainScreen from "./MainScreen";
import SadScreen from "./SadScreen";
import SayingsProvider from "./SayingsProvider";
import BrowserScreen from "./BrowserScreen";

const Tab = createBottomTabNavigator();

export default function App() {

  const showHappyIcon = (focused, color, size) => {
    if (focused)
      return <FontAwesome name="home" size={size} color={color}/>
    else
      return <AntDesign name="home" size={size} color={color} />
  }

  return (
    <SayingsProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Main">
          <Tab.Screen name="Main" component={MainScreen}
                      options={{
                        tabBarLabel: "Main",
                        tabBarIcon: ({focused, color, size}) =>
                          showHappyIcon(focused, color, size)
                      }}/>
          <Tab.Screen name="Browser" component={BrowserScreen} />
          <Tab.Screen name="Sad" component={SadScreen}
                      options={{
                        tabBarLabel: "Settings",
                        tabBarIcon: ({focused, color, size}) =>
                          <FontAwesome name="gear" size={size} color={color}/>,
                      }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SayingsProvider>
  )
}

