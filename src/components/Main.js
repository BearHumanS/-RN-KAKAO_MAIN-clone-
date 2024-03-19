import { View, FlatList } from "react-native";
import { friendProfiles, myProfile } from "../data";
import Header from "./Header";
import Margin from "./common/Margin";
import Profile from "./Profile";
import Division from "./common/Division";
import FriendSection from "./FriendSection";
import TabBar from "./TabBar";

const Main = (props) => {
  const { uri, name, introduction } = myProfile;
  const { isActive, setIsActive, onPress, isOpen } = props;
  const ItemSeparatorComponent = () => <Margin height={13} />;

  const renderItem = ({ item }) => {
    if (!isOpen) return null;
    return (
      <View>
        <Profile
          uri={item.uri}
          name={item.name}
          introduction={item.introduction}
          isMe={false}
        />
      </View>
    );
  };

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "#fff" }}>
      <Header />
      <Margin height={10} />
      <Profile uri={uri} name={name} introduction={introduction} isMe={true} />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLength={friendProfiles.length}
        onPress={onPress}
        isOpen={isOpen}
      />
      <Margin height={5} />
    </View>
  );

  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={friendProfiles}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        keyExtractor={(item) => item.name}
        stickyHeaderIndices={[0]}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
      />
      <TabBar isActive={isActive} setIsActive={setIsActive} />
    </View>
  );
};

export default Main;
