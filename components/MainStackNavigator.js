import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login.js";
import Form from "../screens/Form.js";
import App from "../App.js";
import Calendar from "../screens/Calendar.js";

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Form"
        component={Form}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="App"
        component={App}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Calendar"
        component={Calendar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
