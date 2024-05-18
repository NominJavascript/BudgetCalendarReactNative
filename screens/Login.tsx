import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <View style={styles.btn}>
        <View style={styles.btnChild} />
        <View style={styles.btnItem} />
        <Pressable
          style={styles.login1}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.login2}>Login</Text>
        </Pressable>
      </View>
      <Image
        style={styles.frameIcon}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={styles.forgottenPasswordParent}>
        <Text style={[styles.forgottenPassword, styles.signUp1FlexBox]}>
          Forgotten Password?
        </Text>
        <Text
          style={[styles.dontHaveAn, styles.signUp1FlexBox]}
        >{`Don’t have an account? `}</Text>
      </View>
      <Text style={styles.title}>Welcome back !</Text>
      <Text style={styles.title1}>{`Enter Your Username & Password`}</Text>
      <Text style={[styles.username, styles.usernameTypo]}>
        <Text style={styles.usernameTxtContainer}>
          <Text style={styles.username1}>{`Username `}</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </Text>
      <Text style={[styles.password, styles.usernameTypo]}>
        <Text style={styles.usernameTxtContainer}>
          <Text style={styles.username1}>{`Password `}</Text>
          <Text style={styles.text}>*</Text>
        </Text>
      </Text>
      <View style={[styles.loginChild, styles.loginLayout]} />
      <View style={[styles.loginItem, styles.loginLayout]} />
      <Pressable
        style={styles.signUp}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={[styles.signUp1, styles.signUp1FlexBox]}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  signUp1FlexBox: {
    height: 31,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  usernameTypo: {
    width: 333,
    fontSize: FontSize.size_xl,
    height: 31,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  loginLayout: {
    height: 1,
    width: 350,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    left: 24,
    borderStyle: "solid",
    position: "absolute",
  },
  btnChild: {
    shadowColor: "#09c6ba",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 23.6,
    elevation: 23.6,
    shadowOpacity: 1,
    height: 53,
    width: 139,
    borderRadius: Border.br_17xl,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.dayCard,
  },
  btnItem: {
    backgroundColor: Color.colorMediumturquoise_100,
    borderColor: Color.dayCard,
    borderWidth: 1,
    borderStyle: "solid",
    height: 53,
    width: 139,
    borderRadius: Border.br_17xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  login2: {
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    width: 102,
    height: 37,
    color: Color.dayCard,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  login1: {
    left: 19,
    top: 8,
    position: "absolute",
  },
  btn: {
    marginLeft: -70,
    top: 752,
    width: 140,
    height: 54,
    left: "50%",
    position: "absolute",
  },
  frameIcon: {
    top: 35,
    left: -1,
    width: 390,
    height: 820,
    position: "absolute",
    overflow: "hidden",
  },
  forgottenPassword: {
    left: 153,
    width: 152,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
    position: "absolute",
    top: 0,
  },
  dontHaveAn: {
    marginLeft: -153,
    top: 56,
    width: 171,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interRegular,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
    position: "absolute",
    left: "50%",
  },
  forgottenPasswordParent: {
    top: 573,
    left: 67,
    width: 306,
    height: 87,
    position: "absolute",
  },
  title: {
    top: 130,
    left: 117,
    lineHeight: 20,
    color: Color.colorBlack,
    width: 156,
    height: 42,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  title1: {
    top: 161,
    left: 93,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorDimgray_200,
    width: 204,
    textAlign: "left",
    position: "absolute",
  },
  username1: {
    color: Color.colorDimgray_100,
  },
  text: {
    color: Color.colorMediumturquoise_100,
  },
  usernameTxtContainer: {
    width: "100%",
  },
  username: {
    top: 422,
    left: 32,
  },
  password: {
    top: 523,
    left: 34,
  },
  loginChild: {
    top: 471,
  },
  loginItem: {
    top: 564,
  },
  signUp1: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 59,
    textShadowColor: "#fff",
    textShadowOffset: {
      width: 1,
      height: 0,
    },
    textShadowRadius: 8.8,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
    color: Color.dayCard,
  },
  signUp: {
    left: 246,
    top: 629,
    position: "absolute",
  },
  login: {
    borderRadius: Border.br_26xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.dayCard,
  },
});

export default Login;
