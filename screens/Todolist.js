import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import Logo from "../components/Logo.js";
import Nest from "../components/Nest.js";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Math.random().toString(), title: task.trim() },
      ]);
      setTask("");
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteTask(item.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Nest />
      <Logo />
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonLabel}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A9CEE",
    paddingTop: 150,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "HaasGrotesk",
    color: "#F1DC1C",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: "#0063AA",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonLabel: {
    color: "#fff",
    fontWeight: "bold",
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F1DC1C",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 10,
  },
  taskTitle: {
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: "#E74C3C",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
