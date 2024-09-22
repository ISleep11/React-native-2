import { Text, View } from "react-native";
import { ISectionHeaderProps } from "../../types/types";

export default function SectionHeader({ title }: ISectionHeaderProps) {
  return (
    <View
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ fontSize: 25, fontWeight: "800" }}>{title}</Text>
    </View>
  );
}
