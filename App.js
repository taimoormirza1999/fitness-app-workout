import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import { FitnessContext } from "./Context";
import { themeColors } from "./theme";

export default function App() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor: themeColors.bgColor(0.9)}}>
<StatusBar  barStyle="dark-content" />
    <FitnessContext>
      <Navigation />
    </FitnessContext>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
