import { View } from "react-native";
import { environment } from "../config/environment";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../pages/HomeScreen";
import { HelpScreen } from "../pages/HelpScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export const Main = () => {

  const linking = {
    prefixes: [environment.prefixNative, environment.prefixWeb],
    config: {
      path: 'my-root',
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer linking={linking}>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="help" component={HelpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  );
}
