import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Rectangle4 = () => {
  return <View style={styles.rectangle} />;
};

const styles = StyleSheet.create({
  rectangle: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: Color.colorAqua,
    borderWidth: 4.7,
    width: 340,
    height: 31,
  },
});

export default Rectangle4;
