import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const PlaceholderImage = require("../assets/images/3.png");

  const navigation = useNavigation();

  const handleLogin = () => {
    // Implementa qui la logica di autenticazione
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const goToLogin = () => {
    navigation.navigate("Login"); // Naviga indietro alla pagina di login
  };

  const goToCalendar = () => {
    navigation.navigate("Calendar"); // Naviga alla pagina Calendar
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.goBackButton} onPress={goToLogin}>
          <Text style={styles.goBackButtonText}>&larr;</Text>
        </TouchableOpacity>
        <Text style={styles.nestWrapper}>Nest</Text>
        <Image source={PlaceholderImage} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.buttonForm} onPress={goToCalendar}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: "#1398F9",
  },
  input: {
    height: 40,
    width: 280,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 14,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  buttonForm: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    width: 60,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 200,
  },
  nestWrapper: {
    position: "absolute",
    top: 80,
    left: 24,
    fontSize: 32,
    color: "#fff",
    fontWeight: "600",
  },
  goBackButton: {
    position: "absolute",
    top: 140,
    left: 24,
  },
  goBackButtonText: {
    color: "#fff",
    fontSize: 32,
  },
});
