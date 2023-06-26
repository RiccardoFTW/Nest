import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image } from "react-native";
import { useFonts } from "expo-font";
import Button from "../components/Button";

const PlaceholderImage = require("../assets/images/nestHome.png");
const logo = require("../assets/images/logoWhite.png");

export default function App({ navigation }) {
  const [fontsLoaded] = useFonts({
    HaasGrotesk: require("../assets/font/HaasGrotDisp-65Medium.otf"), // Sostituisci il percorso al font effettivo
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.nestWrapper}>Nest</Text>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoImage} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
        <Text style={styles.welcome}>Ehi👋, Welcome to Nest!</Text>
        <Text style={styles.loginText}>
          Join a new community to track your goals, organise your commitments &
          improve your life, thanks to a fantastic organization
        </Text>
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Sign in with Apple" />
          <Button
            theme="primary"
            label="Sign in"
            pressFunction={() => {
              navigation.navigate("SignIn");
            }}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A9CEE",
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
    fontFamily: "HaasGrotesk", // Applica il nome del font personalizzato qui
    fontStyle: "bold",
    padding: 10,
    paddingBottom: 40,
    color: "#2e2e2e",
  },
  welcome: {
    fontSize: 32,
    fontFamily: "HaasGrotesk", // Applica il nome del font personalizzato qui
    fontStyle: "bold",
    paddingBottom: 24,
    color: "white",
  },
  nestWrapper: {
    position: "absolute",
    top: 80,
    left: 24,
    fontSize: 32,
    fontFamily: "HaasGrotesk", // Applica il nome del font personalizzato qui
    color: "#fff",
    fontWeight: "600",
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    right: 24,
  },
  logoImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  buttonLabel: {
    fontFamily: "HaasGrotesk",
  },
});
