import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import RenderHtml from "react-native-render-html";

const htmlContent = `
  <h1>Articles</h1>
  <div><h2>Title1</h2><p>sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext</p></div>
  <div><h2>Title2</h2><p>sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext-sometext</p></div>
`;

const RenderHTMLScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <RenderHtml
        contentWidth={Dimensions.get("window").width}
        source={{ html: htmlContent }}
        tagsStyles={tagsStyles}
      />
    </View>
  );
};

export default RenderHTMLScreen;

const tagsStyles = StyleSheet.create({
  h1: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "700",
    letterSpacing: 5,
  },
  h2: { fontSize: 30, fontWeight: "500" },
  div: {
    borderWidth: 2,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  p: {
    textAlign: "center",
    fontSize: 20,
  },
});
