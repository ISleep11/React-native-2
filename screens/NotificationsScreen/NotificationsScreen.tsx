import * as Notifications from "expo-notifications";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";

export default function NotificationsScreen() {
  const [token, setToken] = useState<string | null>(null);

  const sendPushNotification = async (token: string | null) => {
    if (token === null) return;

    const message = {
      to: token,
      sound: "default",
      title: "Notification title",
      body: "Notification text",
      data: { extraData: "Extra data" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  Notifications.addNotificationReceivedListener((notification) => {
    console.log("Уведомление получено:", notification);
  });

  Notifications.addNotificationResponseReceivedListener((response) => {
    console.log("Пользователь открыл уведомление:", response);
  });

  useEffect(() => {
    async function registerForPushNotificationsAsync() {
      let token;

      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }

      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }

      const projectId = "09088422-6ac6-43fc-a91f-950a95e13473"; 
      token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
      console.log("Push token:", token);

      setToken(token);
    }

    registerForPushNotificationsAsync();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Button
        buttonText="Send notification"
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={styles.buttonTextStyle}
        onClick={() =>
          setTimeout(() => {
            sendPushNotification(token);
          }, 5000)
        } // will only console the notification if the app is opened.
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 240,
    height: 120,
    backgroundColor: "#91fbff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextStyle: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
