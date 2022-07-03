import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "./text/text";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";

export default function PlanetHeader() {
  return (
    <View>
      <Text preset="h2" style={styles.container}>
        THE PLANETS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
  },
});
