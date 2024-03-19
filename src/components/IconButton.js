import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  return (
    <TouchableOpacity hitSlop={{ top: 15, bottom: 15 }} style={IconContainer}>
      <Ionicons name={props.name} size={24} color="black" />
    </TouchableOpacity>
  );
};

const IconContainer = {
  flexDirection: "row",
  paddingHorizontal: 6,
};

export default IconButton;
