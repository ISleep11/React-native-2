import * as Contacts from "expo-contacts";
import { useEffect, useState } from "react";
import { Alert, SafeAreaView, StyleSheet, TextInput } from "react-native";
import Button from "../../components/Button/Button";

export default function ContactsScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const getContact = async (contactName: string) => {
    if (hasPermission) {
      const { data } = await Contacts.getContactsAsync({
        name: contactName,
      });
      if (
        data.length > 0 &&
        data[0].firstName?.toLowerCase() === contactName.toLowerCase()
      ) {
        Alert.alert("Success", `Contact ${contactName} was found!`);
      } else {
        Alert.alert("Error", `No contact ${contactName} was found`);
      }
    }
  };

  const getPermission = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      setHasPermission(true);
    } else {
      Alert.alert("Error", "Need permission to continue");
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        value={inputValue}
        onChangeText={(value) => setInputValue(value)}
        style={styles.textInput}
      />
      <Button
        buttonText="Check"
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onClick={() => {
          getContact(inputValue.trim());
          setInputValue("");
        }}
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
});
