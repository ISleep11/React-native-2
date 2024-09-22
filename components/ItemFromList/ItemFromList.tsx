import { StyleSheet, Text, View } from "react-native";
import { IItemFromListProps } from "../../types/types";

export default function ItemFromList({ item }: IItemFromListProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  cardText: { fontSize: 20, fontWeight: "600", letterSpacing: 5 },
});
