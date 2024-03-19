import { View } from "react-native";
import TabButton from "./TabButton";

const TabBar = (props) => {
  const { isActive, setIsActive } = props;

  const onPress = () => {};
  return (
    <View
      style={{
        width: "100%",
        paddingVertical: 10,
        flexDirection: "row",
        borderTopWidth: 0.7,
        borderTopColor: "grey",
      }}
    >
      <TabButton
        isActive={isActive === 0}
        onPress={() => setIsActive(0)}
        activeIcon={"person-sharp"}
        inActiveIcon={"person-outline"}
      />
      <TabButton
        isActive={isActive === 1}
        onPress={() => setIsActive(1)}
        activeIcon={"chatbubble-sharp"}
        inActiveIcon={"chatbubble-outline"}
      />
      <TabButton
        isActive={isActive === 2}
        onPress={() => setIsActive(2)}
        activeIcon={"at-circle-sharp"}
        inActiveIcon={"at-circle-outline"}
      />
      <TabButton
        isActive={isActive === 3}
        onPress={() => setIsActive(3)}
        activeIcon={"ellipsis-horizontal-circle-sharp"}
        inActiveIcon={"ellipsis-horizontal-circle-outline"}
      />
    </View>
  );
};

export default TabBar;
