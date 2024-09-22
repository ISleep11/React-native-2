import en from "../../locales/en";
import ru from "../../locales/ru";
import { I18n } from "i18n-js";
import { useState } from "react";
import { Platform, SafeAreaView, Switch, Text } from "react-native";

const i18n = new I18n({ en, ru });
i18n.locale = "ru";

export default function LocalizationScreen() {
  const [isRussian, setIsRussian] = useState(!(i18n.locale === "ru"));

  const toggleLanguage = () => {
    const newLocale = !isRussian ? "en" : "ru";
    i18n.locale = newLocale;
    setIsRussian(!isRussian);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text
        style={{
          fontSize: 40,
          marginBottom: Platform.OS === "android" ? 0 : 20,
        }}
      >
        {i18n.t("text")}
      </Text>
      <Switch value={isRussian} onValueChange={toggleLanguage} />
    </SafeAreaView>
  );
}
