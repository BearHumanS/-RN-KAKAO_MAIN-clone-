import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TabButton = (props) => {
  const { isActive, onPress, activeIcon, inActiveIcon } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Ionicons
        name={isActive ? activeIcon : inActiveIcon}
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default TabButton;
