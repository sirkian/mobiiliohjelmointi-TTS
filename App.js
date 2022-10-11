import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as Speech from "expo-speech";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const handleSpeak = () => {
    text.length === 0
      ? Speech.speak("Type something and try again")
      : Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Text..."
      />
      <Button title="PRESS TO HEAR" onPress={handleSpeak}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
