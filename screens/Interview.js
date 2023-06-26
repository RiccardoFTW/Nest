import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PlaceholderImage = require("../assets/images/5.png");
const logo = require("../assets/images/logoWhite.png");

export default function UserInfoScreen() {
  const [gender, setGender] = useState("");
  const [hasPets, setHasPets] = useState("");
  const [laundryFrequency, setLaundryFrequency] = useState("");
  const [dietType, setDietType] = useState("");

  const navigation = useNavigation();

  const goToSignIn = () => {
    navigation.navigate("SignIn");
  };

  const goToCalendar = () => {
    navigation.navigate("Calendar");
  };

  const handleGenderSelection = (value) => {
    setGender(value);
  };

  const handleHasPetsSelection = (value) => {
    setHasPets(value);
  };

  const handleLaundrySelection = (value) => {
    setLaundryFrequency(value);
  };

  const handleDietTypeSelection = (value) => {
    setDietType(value);
  };

  const submitUserInfo = () => {
    // Esegui qui la logica per salvare le informazioni dell'utente
    // Puoi utilizzare i valori delle variabili 'gender', 'hasPets', 'laundryFrequency' e 'dietType'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nestWrapper}>Nest</Text>
      <TouchableOpacity style={styles.goBackButton} onPress={goToSignIn}>
        <Text style={styles.goBackButtonText}>&larr;</Text>
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoImage} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Text style={styles.title}>Tell us something about yourself! 🫵</Text>

      <Text style={styles.label}>Gender:</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Male"
          onPress={() => handleGenderSelection("Male")}
          color={gender === "Male" ? "#F1DC1C" : "#fff"}
        />
        <Button
          title="Female"
          onPress={() => handleGenderSelection("Female")}
          color={gender === "Female" ? "#F1DC1C" : "#fff"}
        />
        <Button
          title="Other"
          onPress={() => handleGenderSelection("Other")}
          color={gender === "Other" ? "#F1DC1C" : "#fff"}
        />
      </View>

      <Text style={styles.label}>Do you have pets?</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Yes"
          onPress={() => handleHasPetsSelection(true)}
          color={hasPets ? "#F1DC1C" : "#fff"}
        />
        <Button
          title="No"
          onPress={() => handleHasPetsSelection(false)}
          color={!hasPets ? "#F1DC1C" : "#fff"}
        />
      </View>

      <Text style={styles.label}>How many times do you do laundry a week?</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="One"
          onPress={() => handleLaundrySelection("One")}
          color={laundryFrequency === "One" ? "#F1DC1C" : "#fff"}
        />
        <Button
          title="Three"
          onPress={() => handleLaundrySelection("Three")}
          color={laundryFrequency === "Three" ? "#F1DC1C" : "#fff"}
        />
        <Button
          title="Five"
          onPress={() => handleLaundrySelection("Five")}
          color={laundryFrequency === "Five" ? "#F1DC1C" : "#fff"}
        />
      </View>

      <Text style={styles.label}>What is your diet type?</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Omnivore"
          onPress={() => handleDietTypeSelection("Omnivore")}
          color={dietType === "Omnivore" ? "#F1DC1C" : "#fff"}
        />
        <Button
          title="Vegan"
          onPress={() => handleDietTypeSelection("Vegan")}
          color={dietType === "Vegan" ? "#F1DC1C" : "#fff"}
        />
        <Button
          title="Vegetarina"
          onPress={() => handleDietTypeSelection("Vegetarian")}
          color={dietType === "Vegetarian" ? "#F1DC1C" : "#fff"}
        />
      </View>

      <TouchableOpacity onPress={submitUserInfo} style={styles.submitButton}>
        <Text style={styles.submitButtonText} onPress={goToCalendar}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#2A9CEE",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "HaasGrotesk",
    color: "#fff",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "HaasGrotesk",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#2A9CEE",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "HaasGrotesk",
    textDecorationLine: "underline",
  },
  image: {
    width: 200,
    height: 200,
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
