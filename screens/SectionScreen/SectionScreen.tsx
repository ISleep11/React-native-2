import { SafeAreaView, SectionList, View } from "react-native";
import actorsList from "../../grouped-data.json";
import ItemFromList from "../../components/ItemFromList/ItemFromList";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

export default function SectionScreen() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <SectionList
        sections={actorsList}
        renderItem={({ item }) => <ItemFromList item={item} />}
        renderSectionHeader={({ section }) => (
          <SectionHeader title={section.type} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
        SectionSeparatorComponent={() => <View style={{ height: 8 }}></View>}
        style={{ width: "100%" }}
      />
    </SafeAreaView>
  );
}
