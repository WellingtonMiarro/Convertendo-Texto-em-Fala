import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [text, setText] = useState(" ");
  function falar() {
    Speech.speak(text, {
      language: "pt-BR",
    });
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setText(e)}
        placeholder="Digite alguma coisa ...."
      />
      <Button title="Falar :)" onPress={falar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "90%",
    height: 50,
    borderEndWidth: 1,
    borderColor: "#121212",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    color: "#000",
    fontSize: 20,
  },
});
