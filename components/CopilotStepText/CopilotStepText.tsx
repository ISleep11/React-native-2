import { Text } from "react-native";
import { CopilotStep, walkthroughable, useCopilot } from "react-native-copilot";
import { ICopilotStepTextProps } from "../../types/types";

const WalkthroughableText = walkthroughable(Text);

export default function CopilotStepText({
  text,
  tutorialText,
  order,
  name,
}: ICopilotStepTextProps) {
  return (
    <CopilotStep text={tutorialText} order={order} name={name}>
      <WalkthroughableText style={{ fontSize: 25, marginBottom: 20 }}>
        {text}
      </WalkthroughableText>
    </CopilotStep>
  );
}
