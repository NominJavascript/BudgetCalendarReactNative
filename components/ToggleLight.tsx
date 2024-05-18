import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const ToggleLight = () => {
  return (
    <View style={styles.toggleLight}>
      <Image
        style={styles.property1component1}
        contentFit="cover"
        source={require("../assets/property-1component-11.png")}
      />
      <Image
        style={[styles.property1component3, styles.property1componentPosition]}
        contentFit="cover"
        source={require("../assets/property-1component-31.png")}
      />
      <Image
        style={[styles.property1component6, styles.property1componentPosition]}
        contentFit="cover"
        source={require("../assets/property-1component-61.png")}
      />
      <Image
        style={[styles.property1component4, styles.property1componentPosition]}
        contentFit="cover"
        source={require("../assets/property-1component-41.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1componentPosition: {
    left: 20,
    height: 188,
    width: 406,
    position: "absolute",
  },
  property1component1: {
    top: 595,
    left: 0,
    height: 188,
    width: 406,
    position: "absolute",
  },
  property1component3: {
    top: 890,
  },
  property1component6: {
    top: 310,
  },
  property1component4: {
    top: 25,
  },
  toggleLight: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 446,
    height: 1159,
    overflow: "hidden",
  },
});

export default ToggleLight;
