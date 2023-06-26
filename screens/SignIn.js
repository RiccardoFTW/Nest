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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const PlaceholderImage = require("../assets/images/3.png");

  const navigation = useNavigation();

  const handleLogin = () => {
    // Implementa qui la logica di autenticazione
    console.log("Name", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("ConfirmPassword:", ConfirmPassword);
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToInterview = () => {
    navigation.navigate("Interview");
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
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity onPress={goToInterview} style={styles.buttonForm}>
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
    borderColor: "#fff",
    borderWidth: 3,
    marginBottom: 14,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  buttonForm: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "HaasGrotesk",
    textDecorationLine: "underline",
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
    top: 120,
    left: 24,
  },
  goBackButtonText: {
    color: "#fff",
    fontSize: 32,
  },
});
