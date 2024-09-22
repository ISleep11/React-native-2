import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text } from "react-native";
import Button from "../../components/Button/Button";

export default function DatePiclerScreen() {
  const [date, setDate] = useState<undefined | Date>(new Date());
  const [pickerOpened, setPickerOpened] = useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={styles.text}>{date?.toString()}</Text>
      <Button
        buttonText="Change Date"
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onClick={() => setPickerOpened(true)}
      />
      {pickerOpened && (
        <RNDateTimePicker
          value={date ? date : new Date()}
          mode="date"
          display={Platform.OS === "android" ? "default" : "calendar"}
          onChange={(_, selectedDate) => {
            setDate(selectedDate);
            setPickerOpened(false);
          }}
          style={{ marginTop: 20 }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 150,
    height: 75,
    backgroundColor: "#fbbbfc",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextStyle: { fontSize: 22, fontWeight: "700", color: "white" },
  text: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
  },
});
