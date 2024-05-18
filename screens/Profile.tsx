import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Padding, Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.profile}>
      <View style={[styles.walletBalanceParent, styles.parentPosition]}>
        <Text style={[styles.walletBalance, styles.masterCardTypo]}>
          Wallet Balance:
        </Text>
        <Text style={[styles.text, styles.textTypo]}>$5046.57</Text>
      </View>
      <View style={[styles.goalParent, styles.parentPosition]}>
        <Text style={[styles.walletBalance, styles.masterCardTypo]}>Goal:</Text>
        <Text style={[styles.text1, styles.textTypo]}>$25.000</Text>
      </View>
      <View style={styles.nominErdeneIParent}>
        <Text style={[styles.nominErdeneI, styles.feb2030Typo]}>
          NOMIN-ERDENE I.
        </Text>
        <Text style={[styles.feb2030, styles.feb2030Typo]}>Feb/2030</Text>
        <Text style={styles.xxXxxx}>59XX-XXXX</Text>
        <Text style={[styles.masterCard, styles.masterCardTypo]}>
          Master Card
        </Text>
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("MenuBarDark")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-14.png")}
        />
      </Pressable>
      <Image
        style={styles.unionIcon}
        contentFit="cover"
        source={require("../assets/union3.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.btn}>
          <Image
            style={styles.unionIcon1}
            contentFit="cover"
            source={require("../assets/union4.png")}
          />
          <View style={styles.frame1}>
            <View style={styles.frameChild} />
            <View style={styles.frameItem} />
            <Pressable
              style={[styles.logout, styles.logoutPosition]}
              onPress={() => navigation.navigate("Landing")}
            >
              <Text style={styles.logout1}>Logout</Text>
            </Pressable>
          </View>
          <Image
            style={styles.unionIcon}
            contentFit="cover"
            source={require("../assets/union5.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.frameIcon, styles.wrapperLayout]}
        contentFit="cover"
        source={require("../assets/avatar.png")}
      />
      <View style={[styles.frame2, styles.frameFlexBox]}>
        <Text style={styles.title}>Nomin-Erdene I.</Text>
      </View>
      <View style={[styles.frame3, styles.frameFlexBox]}>
        <Text style={[styles.phone0492914855, styles.phone0492914855Typo]}>
          Phone : 0492914855
        </Text>
      </View>
      <View style={[styles.frame4, styles.logoutPosition]}>
        <Text
          style={styles.phone0492914855Typo}
        >{`Address: Vitoria Rd, West Ryde,
NSW 2114`}</Text>
      </View>
      <View style={[styles.profileChild, styles.profileLayout]} />
      <View style={[styles.profileItem, styles.profileLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    paddingRight: 13,
    paddingTop: Padding.p_xs,
    paddingLeft: 18,
    justifyContent: "flex-end",
    width: 154,
    backgroundColor: Color.colorMediumturquoise_100,
    borderRadius: Border.br_2xs,
    left: "50%",
    position: "absolute",
  },
  masterCardTypo: {
    textAlign: "left",
    color: Color.dayCard,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  textTypo: {
    height: 16,
    width: 120,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lgi,
    textAlign: "left",
  },
  feb2030Typo: {
    width: 106,
    height: "10.69%",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  wrapperLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  logoutPosition: {
    top: 571,
    position: "absolute",
  },
  phone0492914855Typo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
  },
  profileLayout: {
    height: 1,
    width: 350,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  walletBalance: {
    width: 124,
    height: 10,
  },
  text: {
    marginTop: 15,
  },
  walletBalanceParent: {
    marginLeft: -163,
    paddingBottom: 21,
    top: 197,
    paddingTop: Padding.p_xs,
    paddingLeft: 18,
    justifyContent: "flex-end",
    width: 154,
  },
  text1: {
    marginTop: 7,
  },
  goalParent: {
    marginLeft: -161,
    top: 283,
    height: 74,
    paddingBottom: 29,
  },
  nominErdeneI: {
    marginLeft: -57.5,
    top: "56.25%",
  },
  feb2030: {
    marginLeft: 149.5,
    top: "78.75%",
  },
  xxXxxx: {
    marginLeft: -59.5,
    top: "39.38%",
    width: 119,
    height: "10.69%",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lgi,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  masterCard: {
    height: "6.69%",
    top: "13.31%",
    right: 41,
    width: 92,
    position: "absolute",
  },
  nominErdeneIParent: {
    marginLeft: 10,
    width: 151,
    height: 160,
    backgroundColor: Color.colorMediumturquoise_100,
    borderRadius: Border.br_2xs,
    left: "50%",
    top: 197,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 329,
    top: 15,
  },
  unionIcon: {
    width: 773,
    height: 809,
  },
  unionIcon1: {
    width: 661,
    height: 690,
  },
  frameChild: {
    left: 125,
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
    top: 563,
    position: "absolute",
    backgroundColor: Color.dayCard,
  },
  frameItem: {
    left: 109,
    borderColor: Color.dayCard,
    borderWidth: 1,
    width: 161,
    borderStyle: "solid",
    height: 53,
    borderRadius: Border.br_17xl,
    top: 563,
    backgroundColor: Color.colorMediumturquoise_100,
    position: "absolute",
  },
  logout1: {
    marginLeft: -9,
    fontSize: FontSize.size_13xl,
    textAlign: "center",
    width: 129,
    height: 37,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.dayCard,
  },
  logout: {
    left: "50%",
    top: 571,
  },
  frame1: {
    top: 365,
    left: 528,
    width: 268,
    height: 658,
    position: "absolute",
    overflow: "hidden",
  },
  btn: {
    width: 911,
    height: 1185,
  },
  frame: {
    top: 0,
    left: 0,
    width: 390,
    height: 837,
    position: "absolute",
  },
  frameIcon: {
    top: 82,
    left: 45,
    borderRadius: 36,
    overflow: "hidden",
  },
  title: {
    lineHeight: 20,
    width: 192,
    height: 42,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorBlack,
    textAlign: "left",
  },
  frame2: {
    top: 86,
    left: 116,
    width: 193,
    position: "absolute",
  },
  phone0492914855: {
    display: "flex",
    alignItems: "center",
    width: 333,
    height: 31,
  },
  frame3: {
    top: 422,
    width: 341,
    left: 24,
    position: "absolute",
  },
  frame4: {
    left: 34,
    width: 299,
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  profileChild: {
    top: 471,
    left: 24,
  },
  profileItem: {
    top: 644,
    left: 26,
  },
  profile: {
    borderRadius: Border.br_26xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.dayCard,
  },
});

export default Profile;
