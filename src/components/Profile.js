import { Image, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Margin from "./common/Margin";

const Profile = ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 50 : 40;

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    textContainer: {
      justifyContent: "center",
      marginLeft: 10,
    },
    nameStyle: {
      fontWeight: isMe ? "bold" : undefined,
      fontSize: isMe ? 16 : 14,
    },
    introductionStyle: {
      fontSize: isMe ? 12 : 10,
      color: "grey",
    },
  });

  return (
    <View style={styles.container}>
      <Image
        source={{ uri }}
        style={{ width: size, height: size, borderRadius: size * 0.4 }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nameStyle}>{name}</Text>
        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <Text style={styles.introductionStyle}>{introduction}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Profile;
