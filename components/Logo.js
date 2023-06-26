import { Image, StyleSheet, View } from "react-native";
const logo = require("../assets/images/logoWhite.png");

export default function Nest({}) {
  return (
    <View style={styles.logoContainer}>
      <Image source={logo} style={styles.logoImage} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
