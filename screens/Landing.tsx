import React, { useState } from 'react';
    import  from "./Component";
import {Image} from "expo-image";
import {StyleSheet, View, Text, Pressable} from "react-native";
import { Border, FontFamily, Color } from "../GlobalStyles";
    

export type LandingType = {
  state?: any;
  navigation?: any;
}

const Landing = ({ state, navigation } : LandingType) => {
const [drawerItemsNormal] = useState([< />, < />, < />, < />]);
const [drawerItemsActive] = useState([< />, < />, < />, < />]);
const stateIndex = !state ? 0 : state.index - 1;

  return (
    <View style={styles.landing}>
      <Image style={styles.unionIcon} contentFit="cover" source={require("../assets/union.png")} />
      <Image style={styles.unionIcon} contentFit="cover" source={require("../assets/union.png")} />
      <Text style={styles.letsGetStarted}>{`Let’s Get
Started`}</Text>
    </View>);
};

const styles = StyleSheet.create({
  btnLayout: {
    height: 53,
    borderRadius: Border.br_17xl,
    left: 0,
    top: 0,
    position: "absolute",
    width: 139
  },
  unionIcon: {
    width: 643,
    height: 713
  },
  letsGetStarted: {
    top: 552,
    left: 24,
    fontSize: 75,
    lineHeight: 75,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 342,
    height: 151,
    position: "absolute"
  },
  landing: {
    borderRadius: Border.br_26xl,
    width: 390,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.dayCard
  }
});

export default Landing;
