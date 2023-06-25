import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";

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

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={handleDateSelect}
        markedDates={{ [selectedDate]: { selected: true } }}
        theme={{
          calendarBackground: "#fff",
          textSectionTitleColor: "#000",
          selectedDayBackgroundColor: "#2A9CEE",
          selectedDayTextColor: "#fff",
          todayTextColor: "#2A9CEE",
          dayTextColor: "#000",
          textDisabledColor: "#ccc",
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2A9CEE",
    paddingBottom: 180,
  },
  calendar: {
    width: "90%",
    aspectRatio: 1,
    borderRadius: 18,
  },
});