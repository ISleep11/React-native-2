import { createDrawerNavigator } from "@react-navigation/drawer";
import { CopilotProvider } from "react-native-copilot";
import TutorialScreen from "../screens/TutorialScreen/TutorialScreen";
import WebViewScreen from "../screens/WebViewScreen/WebViewScreen";
import SectionScreen from "../screens/SectionScreen/SectionScreen";
import RenderHTMLScreen from "../screens/RenderHTMLScreen/RenderHTMLScreen";
import NotificationsScreen from "../screens/NotificationsScreen/NotificationsScreen";
import ContactsScreen from "../screens/ContactsScreen/ContactsScreen";
import DatePiclerScreen from "../screens/DatePickerScreen/DatePickerScreen";
import ShareScreen from "../screens/ShareScreen/ShareScreen";
import ClipboardScreen from "../screens/ClipboardScreen/ClipboardScreen";
import LocalizationScreen from "../screens/LocalizationScreen/LocalizationScreen";
import ReduxScreen from "../screens/ReduxScreen.tsx/ReduxScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <CopilotProvider>
      <Drawer.Navigator>
        <Drawer.Screen name="WebView" component={WebViewScreen} />
        <Drawer.Screen name="Tutorial" component={TutorialScreen} />
        <Drawer.Screen name="SectionList" component={SectionScreen} />
        <Drawer.Screen name="RenderHTML" component={RenderHTMLScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Contacts" component={ContactsScreen} />
        <Drawer.Screen name="DatePicker" component={DatePiclerScreen} />
        <Drawer.Screen name="Share" component={ShareScreen} />
        <Drawer.Screen name="Clipboard" component={ClipboardScreen} />
        <Drawer.Screen name="Localization" component={LocalizationScreen} />
        <Drawer.Screen name="Redux" component={ReduxScreen} />
      </Drawer.Navigator>
    </CopilotProvider>
  );
}
