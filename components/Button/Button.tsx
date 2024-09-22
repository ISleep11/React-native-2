import { Text, View, Pressable } from "react-native";
import { IButton } from "../../types/types";

export default function Button({
  buttonText,
  buttonStyle,
  buttonTextStyle,
  onClick,
  ref,
}: IButton) {
  return (
    <Pressable onPress={onClick}>
      <View ref={ref} style={buttonStyle}>
        <Text style={buttonTextStyle}>{buttonText}</Text>
      </View>
    </Pressable>
  );
}
