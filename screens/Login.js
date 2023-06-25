import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import ImageViewer from "../components/ImageViewer";

const PlaceholderImage = require("../assets/images/nestHome.png");

export default function App({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} />
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
              navigation.navigate("Form");
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
    padding: 50,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    paddingBottom: 16,
  },
  loginText: {
    fontSize: 24,
    fontStyle: "bold",
    padding: 10,
    paddingBottom: 32,
    color: "#2e2e2e",
  },
  welcome: {
    fontSize: 32,
    fontStyle: "bold",
    paddingBottom: 32,
    color: "white",
  },
});
