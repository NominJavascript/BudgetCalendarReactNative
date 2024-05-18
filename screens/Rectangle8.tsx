import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Rectangle8 = () => {
  return <View style={styles.rectangle} />;
};

const styles = StyleSheet.create({
  rectangle: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: Color.colorAqua,
    borderWidth: 4.7,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default Rectangle8;
