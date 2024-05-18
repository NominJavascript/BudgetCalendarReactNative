import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const MenuBarLight = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.menuBarLight}>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.menuBarLightChild} />
      <Pressable
        style={styles.iconLogOutParent}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.iconLogOut}
          contentFit="cover"
          source={require("../assets/icon--logout.png")}
        />
        <Text style={styles.label}>Logout Account</Text>
      </Pressable>
      <View style={styles.avatarParent}>
        <Pressable
          style={[styles.avatar, styles.avatarLayout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
        </Pressable>
        <Pressable
          style={styles.title}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.nominErdeneIdertsog, styles.gasTypo]}>
            Nomin-Erdene Idertsog
          </Text>
        </Pressable>
        <Pressable
          style={[styles.wrapper, styles.avatarLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/ellipse-162.png")}
          />
        </Pressable>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector11.png")}
          />
        </Pressable>
      </View>
      <View style={styles.billLightParent}>
        <View style={styles.billLight}>
          <Image
            style={styles.billLightChild}
            contentFit="cover"
            source={require("../assets/rectangle-292.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
          <Text style={[styles.bill, styles.billTypo]}>Bill</Text>
          <Image
            style={[styles.tableIcon, styles.gasPosition]}
            contentFit="cover"
            source={require("../assets/table2.png")}
          />
          <Image
            style={styles.btnIconPosition}
            contentFit="cover"
            source={require("../assets/btn1.png")}
          />
          <View style={[styles.name, styles.namePosition]}>
            <Text style={[styles.rent, styles.gasPosition]}>rent</Text>
            <Text style={[styles.internet, styles.gasPosition]}>internet</Text>
            <Text style={[styles.electrivity, styles.gasPosition]}>
              electricity
            </Text>
            <Text style={[styles.gas, styles.gasPosition]}>gas</Text>
            <Text style={[styles.water, styles.gasPosition]}>water</Text>
          </View>
          <View style={[styles.view, styles.viewPosition]}>
            <Text style={[styles.rent, styles.gasPosition]}>330$</Text>
            <Text style={[styles.internet, styles.gasPosition]}>79$</Text>
            <Text style={[styles.electrivity, styles.gasPosition]}>80$</Text>
            <Text style={[styles.gas, styles.gasPosition]}>80$</Text>
            <Text style={[styles.water, styles.gasPosition]}>200$</Text>
          </View>
          <View style={[styles.week, styles.weekPosition]}>
            <Text style={[styles.rent, styles.gasPosition]}>week</Text>
            <Text style={[styles.internet, styles.gasPosition]}>month</Text>
            <Text style={[styles.electrivity, styles.gasPosition]}>month</Text>
            <Text style={[styles.gas, styles.gasPosition]}>fortnight</Text>
            <Text style={[styles.water, styles.gasPosition]}>2 month</Text>
          </View>
        </View>
        <View style={[styles.deptLight, styles.lightSpaceBlock]}>
          <Image
            style={[styles.deptLightChild, styles.btnIconPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-161.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
          <Text style={[styles.dept, styles.billTypo]}>Dept</Text>
          <View style={[styles.deptLightItem, styles.gasPosition]} />
        </View>
        <View style={[styles.incomeLight, styles.lightSpaceBlock]}>
          <Image
            style={styles.billLightChild}
            contentFit="cover"
            source={require("../assets/rectangle-292.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
          <Text style={[styles.bill, styles.billTypo]}>Income</Text>
          <Image
            style={[styles.tableIcon, styles.gasPosition]}
            contentFit="cover"
            source={require("../assets/table2.png")}
          />
          <Image
            style={styles.btnIconPosition}
            contentFit="cover"
            source={require("../assets/btn1.png")}
          />
          <View style={[styles.name1, styles.namePosition]}>
            <Text style={[styles.rent, styles.gasPosition]}>salary 1</Text>
            <Text style={[styles.internet, styles.gasPosition]}>
              rental car
            </Text>
            <Text style={[styles.electrivity, styles.gasPosition]}>
              online class
            </Text>
            <Text style={[styles.gas, styles.gasPosition]}>side hustle</Text>
            <Text style={[styles.water, styles.gasPosition]}>salary 2</Text>
          </View>
          <View style={[styles.view1, styles.viewPosition]}>
            <Text style={[styles.rent, styles.gasPosition]}>1800$</Text>
            <Text style={[styles.internet, styles.gasPosition]}>50$</Text>
            <Text style={[styles.electrivity, styles.gasPosition]}>100$</Text>
            <Text style={[styles.gas, styles.gasPosition]}>420$</Text>
            <Text style={[styles.water, styles.gasPosition]}>950$</Text>
          </View>
          <View style={[styles.week2, styles.weekPosition]}>
            <Text style={[styles.rent, styles.gasPosition]}>week</Text>
            <Text style={[styles.internet, styles.gasPosition]}>once</Text>
            <Text style={[styles.electrivity, styles.gasPosition]}>month</Text>
            <Text style={[styles.gas, styles.gasPosition]}>month</Text>
            <Text style={[styles.water, styles.gasPosition]}>week</Text>
          </View>
        </View>
      </View>
      <View style={styles.titleParent}>
        <Text style={[styles.title1, styles.titleTypo]}>Dark</Text>
        <Text style={[styles.title2, styles.titleTypo]}>Light</Text>
        <Image
          style={[styles.toggleLightIcon, styles.toggleIconLayout]}
          contentFit="cover"
          source={require("../assets/toggle-light.png")}
        />
        <View style={[styles.middleSection, styles.toggleIconLayout]}>
          <Text style={[styles.dark, styles.titleTypo]}>Month</Text>
          <Text style={[styles.light, styles.titleTypo]}>Year</Text>
          <Image
            style={[styles.toggleDarkIcon, styles.toggleIconLayout]}
            contentFit="cover"
            source={require("../assets/toggle-dark.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarLayout: {
    width: 50,
    height: 50,
    top: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  gasTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.body1Normal_size,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "7.85%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  billTypo: {
    left: "18.43%",
    color: Color.colorBlack,
    fontSize: FontSize.body1Normal_size,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  gasPosition: {
    left: "0%",
    position: "absolute",
  },
  namePosition: {
    bottom: "3.02%",
    top: "28.64%",
    height: "68.34%",
    left: "7.85%",
    position: "absolute",
  },
  viewPosition: {
    left: "44.03%",
    bottom: "3.02%",
    top: "28.64%",
    height: "68.34%",
    position: "absolute",
  },
  weekPosition: {
    left: "72.35%",
    bottom: "3.02%",
    top: "28.64%",
    height: "68.34%",
    position: "absolute",
  },
  lightSpaceBlock: {
    marginTop: 11,
    width: 293,
  },
  btnIconPosition: {
    height: 34,
    width: 34,
    top: 9,
    left: 249,
    position: "absolute",
  },
  titleTypo: {
    height: 19,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 7,
    color: Color.colorBlack,
    fontSize: FontSize.body1Normal_size,
    textAlign: "left",
    lineHeight: 20,
    position: "absolute",
  },
  toggleIconLayout: {
    height: 33,
    position: "absolute",
  },
  image1Icon: {
    top: 37,
    left: 16,
    width: 362,
    height: 627,
    position: "absolute",
  },
  menuBarLightChild: {
    left: -87,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderTopRightRadius: Border.br_26xl,
    borderBottomRightRadius: Border.br_26xl,
    backgroundColor: "rgba(255, 255, 255, 0.93)",
    width: 420,
    top: 0,
    position: "absolute",
    height: 844,
  },
  iconLogOut: {
    width: 30,
    overflow: "hidden",
    left: 0,
    height: 29,
    top: 0,
    position: "absolute",
  },
  label: {
    top: 4,
    left: 38,
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    color: Color.colorMediumturquoise_100,
    width: 174,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
    position: "absolute",
  },
  iconLogOutParent: {
    top: 788,
    left: 58,
    width: 212,
    height: 29,
    position: "absolute",
  },
  icon: {
    borderRadius: 36,
  },
  avatar: {
    left: 0,
  },
  nominErdeneIdertsog: {
    width: 183,
    lineHeight: 20,
    fontSize: FontSize.body1Normal_size,
  },
  title: {
    left: 78,
    top: 15,
    position: "absolute",
  },
  icon1: {
    opacity: 0.93,
  },
  wrapper: {
    left: 280,
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.48%",
    top: "16%",
    right: "5.76%",
    bottom: "16%",
    width: "5.76%",
    height: "68%",
    position: "absolute",
  },
  avatarParent: {
    top: 53,
    width: 330,
    height: 50,
    left: 22,
    position: "absolute",
  },
  billLightChild: {
    top: 51,
    left: 1,
    width: 292,
    height: 148,
    position: "absolute",
  },
  vectorIcon: {
    height: "10.05%",
    width: "6.83%",
    top: "8.04%",
    right: "85.32%",
    bottom: "81.91%",
  },
  bill: {
    top: "8.54%",
  },
  tableIcon: {
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rent: {
    top: "0%",
    left: "0%",
    color: Color.colorBlack,
    fontSize: FontSize.body1Normal_size,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  internet: {
    top: "66.18%",
    color: Color.colorBlack,
    fontSize: FontSize.body1Normal_size,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  electrivity: {
    top: "86.03%",
    color: Color.colorBlack,
    fontSize: FontSize.body1Normal_size,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  gas: {
    top: "44.12%",
    color: Color.colorBlack,
    fontSize: FontSize.body1Normal_size,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  water: {
    top: "22.06%",
    color: Color.colorBlack,
    fontSize: FontSize.body1Normal_size,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  name: {
    width: "25.94%",
    right: "66.21%",
  },
  view: {
    width: "14.33%",
    right: "41.64%",
  },
  week: {
    width: "22.87%",
    right: "4.78%",
  },
  billLight: {
    height: 199,
    width: 293,
  },
  deptLightChild: {
    opacity: 0.93,
  },
  vectorIcon1: {
    marginTop: -2,
    width: "5.12%",
    top: "50%",
    right: "6.48%",
    left: "88.4%",
    height: 8,
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  vectorIcon2: {
    height: "38.46%",
    width: "6.14%",
    top: "30.77%",
    right: "86.01%",
    bottom: "30.77%",
  },
  dept: {
    top: "32.69%",
  },
  deptLightItem: {
    borderRadius: Border.br_6xs,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    bottom: "0%",
    right: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  deptLight: {
    height: 52,
  },
  vectorIcon3: {
    height: "10.8%",
    width: "7.34%",
    right: "84.81%",
    bottom: "80.65%",
    top: "8.54%",
  },
  name1: {
    width: "30.72%",
    right: "61.43%",
  },
  view1: {
    width: "16.72%",
    right: "39.25%",
  },
  week2: {
    width: "17.06%",
    right: "10.58%",
  },
  incomeLight: {
    height: 199,
  },
  billLightParent: {
    top: 207,
    left: 24,
    position: "absolute",
  },
  title1: {
    width: 53,
    left: 0,
  },
  title2: {
    left: 248,
    width: 45,
  },
  toggleLightIcon: {
    left: 112,
    width: 71,
    top: 0,
  },
  dark: {
    width: 52,
    left: 0,
  },
  light: {
    width: 40,
    left: 249,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 7,
  },
  toggleDarkIcon: {
    left: 114,
    width: 70,
    top: 0,
  },
  middleSection: {
    top: 45,
    width: 289,
    left: 0,
  },
  titleParent: {
    top: 116,
    height: 78,
    width: 293,
    left: 22,
    position: "absolute",
  },
  menuBarLight: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.dayCard,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default MenuBarLight;
