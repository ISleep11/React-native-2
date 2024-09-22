import { WebView } from "react-native-webview";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CopilotProvider } from "react-native-copilot";

export default function WebViewScreen() {
  const webViewRef = useRef<WebView>(null);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  function calculateWidth(buttonText: string) {
    return buttonText.length * 20;
  }

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const firstLaunch = AsyncStorage.getItem("hasLaunched");
        if (firstLaunch === null) {
          setIsFirstLaunch(true);
          await AsyncStorage.setItem("hasLaunched", "true");
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkFirstLaunch();
  }, []);

  return (
    <CopilotProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Button
            buttonText="Back"
            onClick={() => webViewRef.current?.goBack()}
            buttonStyle={[
              styles.buttonStyle,
              { width: calculateWidth("Back") },
            ]}
            buttonTextStyle={styles.buttonTextStyle}
          />
          <Button
            buttonText="Forward"
            onClick={() => webViewRef.current?.goForward()}
            buttonStyle={[
              styles.buttonStyle,
              { width: calculateWidth("Forward"), marginLeft: 10 },
            ]}
            buttonTextStyle={styles.buttonTextStyle}
          />
        </View>
        <WebView
          ref={webViewRef}
          // style={styles.webView}
          source={{ uri: "https://example.com/" }}
        ></WebView>
      </SafeAreaView>
    </CopilotProvider>
  );
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
  buttonStyle: {
    height: 40,
    backgroundColor: "#a8caff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    letterSpacing: 5,
    textAlign: "center",
  },
});
