import * as Clipboard from "expo-clipboard";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../../components/Button/Button";
import { useState } from "react";

export default function ClipboardScreen() {
  const [inputValue, setInputValue] = useState("");

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync("You've copied me!");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={styles.text}>Copy me</Text>
      <Button
        buttonText="Copy Text"
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onClick={() => copyToClipboard()}
      />

      <TextInput
        value={inputValue}
        onChangeText={(value) => setInputValue(value)}
        style={styles.textInput}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 120,
    height: 60,
    backgroundColor: "#a3ffbc",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonTextStyle: { fontSize: 20, fontWeight: "700", color: "white" },
  textInput: {
    backgroundColor: "grey",
    width: "90%",
    marginBottom: 20,
    fontSize: 20,
    borderRadius: 3,
    color: "white",
  },
  text: {
    fontSize: 50,
    marginBottom: 20,
  },
});
