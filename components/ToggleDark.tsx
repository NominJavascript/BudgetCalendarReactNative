import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const ToggleDark = () => {
  return (
    <View style={styles.toggleDark}>
      <Image
        style={[styles.property1component1, styles.property1componentLayout]}
        contentFit="cover"
        source={require("../assets/property-1component-1.png")}
      />
      <Image
        style={[styles.property1component3, styles.property1componentLayout]}
        contentFit="cover"
        source={require("../assets/property-1component-3.png")}
      />
      <Image
        style={[styles.property1component6, styles.property1componentLayout]}
        contentFit="cover"
        source={require("../assets/property-1component-6.png")}
      />
      <Image
        style={[styles.property1component4, styles.property1componentLayout]}
        contentFit="cover"
        source={require("../assets/property-1component-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1componentLayout: {
    height: 188,
    width: 406,
    left: 20,
    position: "absolute",
  },
  property1component1: {
    top: 20,
  },
  property1component3: {
    top: 298,
  },
  property1component6: {
    top: 951,
  },
  property1component4: {
    top: 646,
  },
  toggleDark: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 446,
    height: 1159,
    overflow: "hidden",
  },
});

export default ToggleDark;
