import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Nest from "../components/Nest.js";
import Logo from "../components/Logo.js";

import { useNavigation } from "@react-navigation/native";

const PlaceholderImage = require("../assets/images/4.png");

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

LocaleConfig.defaultLocale = "en";

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const navigation = useNavigation();

  const goToTodolist = () => {
    navigation.navigate("Todolist");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <Nest />
      <Logo />
      <View style={styles.content}>
        <Calendar
          style={styles.calendar}
          onDayPress={handleDateSelect}
          markedDates={{ [selectedDate]: { selected: true } }}
          theme={{
            calendarBackground: "#F1DC1C",
            textSectionTitleColor: "#000",
            selectedDayBackgroundColor: "#2A9CEE",
            selectedDayTextColor: "#fff",
            todayTextColor: "#2A9CEE",
            dayTextColor: "#000",
            textDisabledColor: "#fff",
            dotColor: "#2A9CEE",
            selectedDotColor: "#fff",
            arrowColor: "#000",
            monthTextColor: "#000",
            indicatorColor: "#2A9CEE",
            textDayFontFamily: "Arial",
            textMonthFontFamily: "Arial",
            textDayHeaderFontFamily: "Arial",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={goToTodolist}>
          <Text style={styles.buttonText}>Go to Todo List</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A9CEE",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  calendar: {
    width: "90%",
    aspectRatio: 1,
    borderRadius: 18,
    fontFamily: "HaasGrotesk",
  },
  footer: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#2A9CEE",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "#2A9CEE",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    paddingBottom: 10,
  },
  buttonText: {
    color: "#F1DC1C",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "HaasGrotesk",
    paddingBottom: 50,
    textDecorationLine: "underline",
  },
  imageContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  image: {
    width: 150,
    height: 220,
  },
});
