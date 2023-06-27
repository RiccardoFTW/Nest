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
import Nest from "../components/Nest.js";
import Logo from "../components/Logo.js";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const PlaceholderImage = require("../assets/images/3.png");

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Name", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("ConfirmPassword:", confirmPassword);
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
        <Nest />
        <Logo />
        <Image source={PlaceholderImage} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#fff"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fff"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fff"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#fff"
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
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    marginBottom: 14,
    paddingHorizontal: 8,
    color: "#fff",
    backgroundColor: "transparent",
    fontFamily: "HaasGrotesk",
  },
  buttonForm: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  buttonText: {
    color: "#F1DC1C",
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
  goBackButton: {
    position: "absolute",
    top: 120,
    left: 24,
  },
  goBackButtonText: {
    color: "#F1DC1C",
    fontSize: 32,
  },
});
