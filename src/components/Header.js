import { Text, View, StyleSheet } from "react-native";
import IconButton from "./IconButton";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>친구</Text>
      <View style={styles.iconCotainer}>
        <IconButton name="search-outline" />
        <IconButton name="person-add-outline" />
        <IconButton name="musical-notes-outline" />
        <IconButton name="settings-outline" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  iconCotainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
