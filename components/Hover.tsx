import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const Hover = () => {
  return (
    <View style={styles.hover}>
      <View style={[styles.property1b, styles.property1bLayout]}>
        <View style={styles.property1bChild} />
        <Text style={styles.text}>80$</Text>
        <Text style={[styles.electricityBill, styles.monthlyLayout]}>
          Electricity bill
        </Text>
        <Text style={[styles.monthly, styles.monthlyLayout]}>monthly</Text>
        <Image
          style={styles.property1bItem}
          contentFit="cover"
          source={require("../assets/rectangle-81.png")}
        />
      </View>
      <View style={[styles.property1a, styles.property1bLayout]}>
        <Text style={styles.text}>80$</Text>
        <Text style={[styles.electricityBill, styles.monthlyLayout]}>
          Electricity bill
        </Text>
        <Text style={[styles.monthly, styles.monthlyLayout]}>monthly</Text>
        <Image
          style={styles.property1bItem}
          contentFit="cover"
          source={require("../assets/rectangle-81.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1bLayout: {
    height: 42,
    width: 346,
    left: 20,
    position: "absolute",
  },
  monthlyLayout: {
    height: 20,
    width: 248,
    fontSize: FontSize.size_xs,
    left: 98,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  property1bChild: {
    top: -11,
    left: -8,
    borderRadius: Border.br_smi,
    backgroundColor: "#ebe8e8",
    width: 358,
    height: 62,
    position: "absolute",
  },
  text: {
    top: 9,
    left: 28,
    fontSize: FontSize.size_xl,
    width: 58,
    height: 17,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  electricityBill: {
    top: 2,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  monthly: {
    top: 22,
    opacity: 0.6,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    width: 248,
    fontSize: FontSize.size_xs,
    left: 98,
  },
  property1bItem: {
    top: 0,
    left: 0,
    borderRadius: Border.br_18xl,
    width: 8,
    height: 40,
    position: "absolute",
  },
  property1b: {
    top: 109,
  },
  property1a: {
    top: 20,
  },
  hover: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 386,
    height: 171,
    overflow: "hidden",
  },
});

export default Hover;
