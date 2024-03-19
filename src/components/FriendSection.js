import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FriendSection = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: "grey" }}>친구 {props.friendProfileLength}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <MaterialIcons
          name={props.isOpen ? "keyboard-arrow-down" : "keyboard-arrow-up"}
          size={24}
          color="lightgrey"
        />
      </TouchableOpacity>
    </View>
  );
};

export default FriendSection;
