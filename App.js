import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Main from "./src/components/Main";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState(0);

  const onPressArrow = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <Main
              isActive={isActive}
              setIsActive={setIsActive}
              onPress={onPressArrow}
              isOpen={isOpen}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
