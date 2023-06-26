import { StyleSheet, Text } from "react-native";

export default function Nest({}) {
  return <Text style={styles.nestWrapper}>Nest</Text>;
}

const styles = StyleSheet.create({
  nestWrapper: {
    position: "absolute",
    top: 80,
    left: 24,
    fontSize: 32,
    fontFamily: "HaasGrotesk", // Applica il nome del font personalizzato qui
    color: "#fff",
    fontWeight: "600",
  },
});
