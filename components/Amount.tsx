import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Amount = () => {
  return (
    <View style={styles.amount}>
      <View style={[styles.property1frame1, styles.property1frameLayout]}>
        <View style={styles.property1frame1Child} />
        <Text style={[styles.amount1, styles.textFlexBox]}>Amount</Text>
        <Text style={[styles.text, styles.textFlexBox]}>2500</Text>
      </View>
      <View style={[styles.property1frame2, styles.property1frameLayout]}>
        <View style={styles.property1frame1Child} />
        <Text style={[styles.text, styles.textFlexBox]}>Amount</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1frameLayout: {
    height: 63,
    left: 20,
    width: 233,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  property1frame1Child: {
    bottom: 0,
    left: 0,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    height: 53,
    width: 233,
    position: "absolute",
    borderWidth: 1,
  },
  amount1: {
    top: 0,
    left: 16,
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
  },
  text: {
    top: 27,
    left: 17,
    fontSize: FontSize.body1Normal_size,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorGray_100,
  },
  property1frame1: {
    top: 93,
  },
  property1frame2: {
    top: 19,
  },
  amount: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 273,
    height: 177,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default Amount;
