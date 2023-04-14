import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navbar from "./src/components/Navbar";
import NewInvestment from "./src/screens/NewInvestment";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <NewInvestment />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
