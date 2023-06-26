import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default function TabBar() {
  const [activeTab, setActiveTab] = useState("expo");

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.tabButton,
          styles.tab,
          activeTab === "expo" && styles.activeTabButton,
        ]}
        onPress={() => handleTabPress("expo")}
      >
        <Text
          style={[
            styles.tabButtonText,
            activeTab === "expo" && styles.activeTabButtonText,
          ]}
        >
          Expo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabButton,
          styles.tab,
          activeTab === "app1" && styles.activeTabButton,
        ]}
        onPress={() => handleTabPress("app1")}
      >
        <Text
          style={[
            styles.tabButtonText,
            activeTab === "app1" && styles.activeTabButtonText,
          ]}
        >
          App 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.tabButton,
          styles.tab,
          activeTab === "app2" && styles.activeTabButton,
        ]}
        onPress={() => handleTabPress("app2")}
      >
        <Text
          style={[
            styles.tabButtonText,
            activeTab === "app2" && styles.activeTabButtonText,
          ]}
        >
          App 2
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#ccc",
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTabButton: {
    backgroundColor: "#FFF",
  },
  tabButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTabButtonText: {
    color: "#2A9CEE",
  },
  tab: {
    width: 20, // Modifica la larghezza desiderata per ciascuna voce della TapBar
    height: 40, // Modifica l'altezza desiderata per ciascuna voce della TapBar
    justifyContent: "center",
    alignItems: "center",
  },
});
