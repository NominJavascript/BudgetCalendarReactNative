const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import DatePicker from "./components/DatePicker";
import Dropdown from "./components/Dropdown";
import DarkMenu from "./components/DarkMenu";
import LightMenu from "./components/LightMenu";
import ToggleDark from "./components/ToggleDark";
import ToggleLight from "./components/ToggleLight";
import Hover from "./components/Hover";
import Rectangle from "./components/Rectangle";
import Rectangle1 from "./components/Rectangle1";
import Rectangle2 from "./components/Rectangle2";
import Rectangle3 from "./components/Rectangle3";
import Rectangle4 from "./components/Rectangle4";
import Rectangle5 from "./components/Rectangle5";
import Rectangle6 from "./components/Rectangle6";
import Rectangle7 from "./components/Rectangle7";
import Rectangle8 from "./screens/Rectangle8";
import Rectangle9 from "./components/Rectangle9";
import Date1 from "./components/Date1";
import Name1 from "./components/Name1";
import Amount from "./components/Amount";
import CalenderCarousel from "./components/CalenderCarousel";
import Landing from "./components/Landing";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import MenuBarDark from "./screens/MenuBarDark";
import Profile from "./screens/Profile";
import MenuBarLight from "./screens/MenuBarLight";
import AddEvent from "./screens/AddEvent";
import EditEvent from "./screens/EditEvent";
import AddRepeat from "./screens/AddRepeat";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Jost-Regular": require("./assets/fonts/Jost-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle8"
              component={Rectangle8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuBarDark"
              component={MenuBarDark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuBarLight"
              component={MenuBarLight}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddEvent"
              component={AddEvent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditEvent"
              component={EditEvent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddRepeat"
              component={AddRepeat}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
