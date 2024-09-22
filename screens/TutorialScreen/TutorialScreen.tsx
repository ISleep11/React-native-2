import { View, StyleSheet } from "react-native";
import { useCopilot } from "react-native-copilot";
import Button from "../../components/Button/Button";
import CopilotStepText from "../../components/CopilotStepText/CopilotStepText";

const TutorialScreen = () => {
  const { start } = useCopilot();

  return (
    <View style={styles.container}>
      <CopilotStepText
        text="This is a <Text> component"
        tutorialText="First Text"
        order={1}
        name="firstStep"
      />
      <CopilotStepText
        text="This is a <Text> component"
        tutorialText="Second Text"
        order={2}
        name="secondStep"
      />
      <CopilotStepText
        text="This is a <Text> component"
        tutorialText="Third Text"
        order={3}
        name="thirdStep"
      />
      <CopilotStepText
        text="This is a <Text> component"
        tutorialText="Fourth Text"
        order={4}
        name="fourthStep"
      />
      <CopilotStepText
        text="This is a <Text> component"
        tutorialText="Fifth Text"
        order={5}
        name="fifthStep"
      />
      <CopilotStepText
        text="This is a <Text> component"
        tutorialText="Sixth Text"
        order={6}
        name="sixthStep"
      />

      <Button
        buttonText="Start Tutorial"
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onClick={() => start()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    width: 200,
    height: 100,
    borderRadius: 20,
    backgroundColor: "#91fbff",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyle: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
});

export default TutorialScreen;
