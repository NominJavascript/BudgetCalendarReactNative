import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const Rectangle = () => {
  return <View style={styles.rectangleView} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    borderRadius: Border.br_smi,
    backgroundColor: Color.colorGainsboro_100,
    width: 370,
    height: 65,
  },
});

export default Rectangle;
