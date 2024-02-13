
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HappyScreen from "./HappyScreen";
import SadScreen from "./SadScreen";
import {AntDesign, FontAwesome} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const showHappyIcon = (focused, color, size) => {
    if (focused)
      return <FontAwesome name="home" size={size} color={color}/>
    else
      return <AntDesign name="home" size={size} color={color} />
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Happy">
        <Tab.Screen name="Happy" component={HappyScreen}
                    options={{
                      tabBarLabel: "Main",
                      tabBarIcon: ({focused, color, size}) =>
                        showHappyIcon(focused, color, size)
                    }} />
        <Tab.Screen name="Sad" component={SadScreen}
                    options={{
                      tabBarLabel: "Settings",
                      tabBarIcon: ({focused, color, size}) =>
                        <FontAwesome name="gear" size={size} color={color}/>,
                    }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

