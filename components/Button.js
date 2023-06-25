import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ label, theme, pressFunction }) {
    return (
      <View
        style={[
          styles.buttonContainer,
          { 
            borderColor: theme === 'primary' ? "#000" : "#00ff00", 
            backgroundColor:  theme === 'primary' ? "#fff" : "#00ff00",
            color: "#fff"
          },
        ]}
      >
        <Pressable
          style={[styles.button, { alignItems: "center", padding: 10,}]}
          onPress={pressFunction}
        >
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 180,
    margin: 5,
    fontSize: 18,
    borderRadius: 30, 
    borderWidth: 1, 
    height: 40, 
  },
  buttonForm: {
    width: 180,
    margin: 5,
    fontSize: 18,
    borderRadius: 30, 
    borderWidth: 1, 
    height: 40,
  },
});
