import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.signUp}>
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/union1.png")}
      />
      <Image
        style={styles.unionIcon1}
        contentFit="cover"
        source={require("../assets/union2.png")}
      />
      <View style={styles.forgottenPasswordParent}>
        <Text style={[styles.forgottenPassword, styles.login1Layout]}>
          Forgotten Password?
        </Text>
        <Text
          style={[styles.alreadyHaveAn, styles.title1Position]}
        >{`Already have an account? `}</Text>
      </View>
      <Text style={[styles.title, styles.titleTypo]}>Create Account :)</Text>
      <Text
        style={[styles.title1, styles.title1Position]}
      >{`Enter Your Username & Email & Password`}</Text>
      <Text style={[styles.email, styles.emailTypo]}>
        <Text style={styles.emailTxtContainer}>
          <Text style={styles.email1}>{`Email `}</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </Text>
      <Text style={[styles.password, styles.emailTypo]}>
        <Text style={styles.emailTxtContainer}>
          <Text style={styles.email1}>{`Password `}</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </Text>
      <View style={[styles.signUpChild, styles.signLayout]} />
      <Text style={[styles.username, styles.emailTypo]}>
        <Text style={styles.emailTxtContainer}>
          <Text style={styles.email1}>{`Username `}</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </Text>
      <View style={[styles.signUpItem, styles.signLayout]} />
      <View style={[styles.signUpInner, styles.signLayout]} />
      <Pressable
        style={styles.login}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.login1, styles.login1Layout]}>Login</Text>
      </Pressable>
      <Pressable
        style={[styles.btn, styles.btnLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.btnChild, styles.btnLayout]} />
        <View style={[styles.btnItem, styles.btnLayout]} />
        <Text style={[styles.signUp1, styles.titleTypo]}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  login1Layout: {
    height: 31,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
  },
  title1Position: {
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  emailTypo: {
    width: 333,
    fontSize: FontSize.size_xl,
    height: 31,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  signLayout: {
    height: 1,
    width: 350,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    left: 24,
    borderStyle: "solid",
    position: "absolute",
  },
  btnLayout: {
    height: 53,
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  unionIcon: {
    width: 710,
    height: 689,
  },
  unionIcon1: {
    width: 635,
    height: 668,
  },
  forgottenPassword: {
    left: 299,
    width: 152,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interRegular,
    top: 0,
    position: "absolute",
  },
  alreadyHaveAn: {
    marginLeft: -2.5,
    top: 56,
    width: 190,
    height: 31,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interRegular,
    left: "50%",
  },
  forgottenPasswordParent: {
    top: 573,
    left: -76,
    width: 299,
    height: 87,
    position: "absolute",
  },
  title: {
    marginLeft: -88,
    top: 128,
    color: Color.colorBlack,
    width: 176,
    height: 24,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  title1: {
    marginLeft: -122,
    top: 161,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDimgray_200,
    width: 244,
  },
  email1: {
    color: Color.colorDimgray_100,
  },
  text: {
    color: Color.colorMediumturquoise_100,
  },
  emailTxtContainer: {
    width: "100%",
  },
  email: {
    top: 422,
    left: 32,
    width: 333,
  },
  password: {
    top: 523,
    left: 34,
  },
  signUpChild: {
    top: 471,
  },
  username: {
    top: 332,
    left: 32,
    width: 333,
  },
  signUpItem: {
    top: 381,
  },
  signUpInner: {
    top: 564,
  },
  login1: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 45,
    textShadowColor: "#09c6ba",
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 12,
    color: Color.dayCard,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
  },
  login: {
    left: 264,
    top: 629,
    position: "absolute",
  },
  btnChild: {
    left: 13,
    shadowColor: "#09c6ba",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 23.6,
    elevation: 23.6,
    shadowOpacity: 1,
    width: 139,
    height: 53,
    borderRadius: Border.br_17xl,
    top: 0,
    backgroundColor: Color.dayCard,
  },
  btnItem: {
    marginLeft: -78,
    backgroundColor: Color.colorMediumturquoise_100,
    borderColor: Color.dayCard,
    borderWidth: 1,
    width: 156,
    height: 53,
    borderRadius: Border.br_17xl,
    borderStyle: "solid",
    left: "50%",
    top: 0,
  },
  signUp1: {
    marginLeft: -60,
    top: 7,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    width: 129,
    height: 37,
    color: Color.dayCard,
  },
  btn: {
    top: 753,
    left: 112,
    width: 156,
    height: 53,
    borderRadius: Border.br_17xl,
  },
  signUp: {
    borderRadius: Border.br_26xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.dayCard,
  },
});

export default SignUp;
