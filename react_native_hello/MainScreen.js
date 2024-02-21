import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HappyScreen from "./HappyScreen";
import {HelloScreen} from "./HelloScreen";

const Stack = createNativeStackNavigator();

export default function MainScreen({birthday, valentines}) {
  return (
    <Stack.Navigator initialRouteName="Happy">
      <Stack.Screen name="Happy">
        {(options) =>
          <HappyScreen {...options} birthday={birthday} valentines={valentines} />}
      </Stack.Screen>
      <Stack.Screen name="Hello" component={HelloScreen} />
    </Stack.Navigator>
  )
}