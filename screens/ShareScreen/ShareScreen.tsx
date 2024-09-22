import React from "react";
import { View, Share, StyleSheet } from "react-native";
import Button from "../../components/Button/Button";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

export default function ShareScreen() {
  const shareFile = async () => {
    const fileUri = FileSystem.documentDirectory + "example.txt";

    await FileSystem.writeAsStringAsync(fileUri, "some content", {
      encoding: FileSystem.EncodingType.UTF8,
    });

    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(fileUri);
    } else {
      alert("Sharing is not available on your device");
    }
  };

  const shareMessage = async () => {
    try {
      const result = await Share.share({
        message: "Check out this cool content!",
      });

      if (result.action === Share.sharedAction) {
        console.log("Content shared successfully");
      }
    } catch (error) {
      console.error("Error while sharing:", error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        buttonText="Share File"
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onClick={() => shareFile()}
      />
      <Button
        buttonText="Share Message"
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onClick={() => shareMessage()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
    height: 100,
    backgroundColor: "#d8b1fc",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonTextStyle: {
    fontSize: 30,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
  },
});
