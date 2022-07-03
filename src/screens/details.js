import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import React from "react";
import PlanetHeader from "../components/planet-header";
import Text from "../components/text/text";
import { colors } from "../theme/colors";

export default function Details({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <PlanetHeader backBtn={true} />
      <Text>Details</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
