import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Rectangle7 = () => {
  return <View style={styles.rectangle} />;
};

const styles = StyleSheet.create({
  rectangle: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: Color.colorAqua,
    borderWidth: 4.7,
    width: 387,
    height: 654,
  },
});

export default Rectangle7;
