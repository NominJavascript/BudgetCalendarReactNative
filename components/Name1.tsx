import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Name1 = () => {
  return (
    <View style={styles.name}>
      <View style={[styles.property1frame1, styles.property1frame1Layout]}>
        <View style={[styles.property1frame1Child, styles.childBorder]} />
        <Text style={styles.name1}>Name</Text>
        <Text style={[styles.husbandSalary, styles.name2Typo]}>
          Husband Salary
        </Text>
      </View>
      <View style={[styles.property1frame2, styles.property1frame2Layout]}>
        <View
          style={[styles.property1frame2Child, styles.property1frame2Layout]}
        />
        <Text style={[styles.name2, styles.name2Typo]}>Name</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1frame1Layout: {
    width: 333,
    position: "absolute",
  },
  childBorder: {
    height: 53,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_4xs,
    left: 0,
    borderWidth: 1,
  },
  name2Typo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    left: 17,
    top: "50%",
    textAlign: "left",
    position: "absolute",
  },
  property1frame2Layout: {
    width: 335,
    position: "absolute",
  },
  property1frame1Child: {
    top: 7,
    width: 333,
    position: "absolute",
  },
  name1: {
    top: 0,
    left: 16,
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  husbandSalary: {
    marginTop: -3,
  },
  property1frame1: {
    top: 102,
    height: 60,
    left: 20,
  },
  property1frame2Child: {
    bottom: 0,
    height: 53,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_4xs,
    left: 0,
    borderWidth: 1,
  },
  name2: {
    marginTop: -4.5,
  },
  property1frame2: {
    top: 19,
    height: 63,
    left: 20,
  },
  name: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 362,
    height: 177,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default Name1;
