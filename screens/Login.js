import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

import Nest from "../components/Nest.js";
import Logo from "../components/Logo.js";

const PlaceholderImage = require("../assets/images/nestHome.png");

export default function Login({}) {
  const [fontsLoaded] = useFonts({
    HaasGrotesk: require("../assets/font/HaasGrotDisp-65Medium.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const navigation = useNavigation();

  const goToSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <>
      <View style={styles.container}>
        <Nest />
        <Logo />
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
        <Text style={styles.welcome}>Ehi👋, Welcome to Nest!</Text>
        <Text style={styles.loginText}>
          Join a new community to track your goals, organise your commitments &
          improve your life, thanks to a fantastic organization
        </Text>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.buttonForm}>
            <Text style={styles.buttonText}>Sign in with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonForm}>
            <Text
              style={{
                color: "#F1DC1C",
                fontSize: 24,
                fontFamily: "HaasGrotesk",
                textDecorationLine: "underline",
              }}
              onPress={goToSignIn}
            >
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1398F9",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    padding: 20,
    marginTop: 100,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    paddingBottom: 50,
    height: 100,
  },
  loginText: {
    fontSize: 24,
    fontFamily: "HaasGrotesk",
    fontStyle: "bold",
    padding: 10,
    paddingBottom: 30,
    color: "#2e2e2e",
  },
  welcome: {
    fontSize: 32,
    fontFamily: "HaasGrotesk",
    fontStyle: "bold",
    paddingBottom: 24,
    color: "white",
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  buttonLabel: {
    fontFamily: "HaasGrotesk",
  },
  buttonForm: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "HaasGrotesk",
    textDecorationLine: "underline",
  },
});
