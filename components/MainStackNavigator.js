import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login.js";
import SignIn from "../screens/SignIn.js";
import App from "../App.js";
import Calendar from "../screens/Calendar.js";
import Interview from "../screens/Interview.js";
import Todolist from "../screens/Todolist.js";

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
        name="SignIn"
        component={SignIn}
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
      <Stack.Screen
        name="Interview"
        component={Interview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Todolist"
        component={Todolist}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
