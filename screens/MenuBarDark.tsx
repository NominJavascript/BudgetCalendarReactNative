import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const MenuBarDark = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.menuBarDark}>
      <Image
        style={styles.backgroundIcon}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <View style={styles.menuBackground} />
      <View style={[styles.topSection, styles.topLayout]}>
        <Pressable
          style={[styles.avatar, styles.xLayout]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
        </Pressable>
        <View style={[styles.topSectionChild, styles.topLayout]} />
        <Pressable
          style={styles.name}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.nominErdeneIdertsog, styles.labelTypo]}>
            Nomin-Erdene Idertsog
          </Text>
        </Pressable>
        <Pressable
          style={[styles.x, styles.xLayout]}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/x.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.tableSection, styles.sectionPosition]}>
        <View style={styles.bill}>
          <Image
            style={styles.billChild}
            contentFit="cover"
            source={require("../assets/rectangle-29.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Text style={[styles.bill1, styles.gasTypo]}>Bill</Text>
          <Image
            style={[styles.tableIcon, styles.gasPosition]}
            contentFit="cover"
            source={require("../assets/table.png")}
          />
          <Image
            style={styles.btnIconPosition}
            contentFit="cover"
            source={require("../assets/btn.png")}
          />
          <View style={[styles.name1, styles.namePosition]}>
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
        <View style={[styles.dept, styles.deptSpaceBlock]}>
          <Image
            style={[styles.deptChild, styles.btnIconPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-16.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Text style={[styles.dept1, styles.gasTypo]}>Dept</Text>
          <View style={[styles.deptItem, styles.gasPosition]} />
        </View>
        <View style={[styles.income, styles.deptSpaceBlock]}>
          <Image
            style={styles.billChild}
            contentFit="cover"
            source={require("../assets/rectangle-29.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Text style={[styles.bill1, styles.gasTypo]}>Income</Text>
          <Image
            style={[styles.tableIcon, styles.gasPosition]}
            contentFit="cover"
            source={require("../assets/table.png")}
          />
          <Image
            style={styles.btnIconPosition}
            contentFit="cover"
            source={require("../assets/btn.png")}
          />
          <View style={[styles.name2, styles.namePosition]}>
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
      <Pressable
        style={[styles.middleSection, styles.middleLayout]}
        onPress={() => navigation.navigate("MenuBarLight")}
      >
        <Text style={[styles.dark, styles.darkTypo]}>Dark</Text>
        <Text style={[styles.light, styles.darkTypo]}>Light</Text>
        <Image
          style={styles.toggleDarkIcon}
          contentFit="cover"
          source={require("../assets/toggle-dark.png")}
        />
      </Pressable>
      <View style={[styles.middleSection1, styles.dark1Position]}>
        <Text style={[styles.dark1, styles.dark1Position]}>Month</Text>
        <Text style={[styles.light, styles.darkTypo]}>Year</Text>
        <Image
          style={styles.toggleDarkIcon}
          contentFit="cover"
          source={require("../assets/toggle-dark.png")}
        />
      </View>
      <Pressable
        style={[styles.iconLogOutParent, styles.iconPosition]}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.iconLogOut}
          contentFit="cover"
          source={require("../assets/icon--logout.png")}
        />
        <Text style={[styles.label, styles.labelTypo]}>Logout Account</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  topLayout: {
    height: 100,
    position: "absolute",
  },
  xLayout: {
    height: 50,
    width: 50,
    top: 21,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
  },
  sectionPosition: {
    left: 23,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  gasTypo: {
    color: Color.dayCard,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
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
  deptSpaceBlock: {
    marginTop: 11,
    width: 293,
  },
  btnIconPosition: {
    height: 34,
    width: 34,
    left: 249,
    top: 9,
    position: "absolute",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  middleLayout: {
    width: 289,
    height: 33,
  },
  darkTypo: {
    height: 19,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 7,
    color: Color.dayCard,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.body1Normal_size,
  },
  dark1Position: {
    left: 24,
    position: "absolute",
  },
  backgroundIcon: {
    top: 37,
    left: 16,
    width: 362,
    height: 627,
    position: "absolute",
  },
  menuBackground: {
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
    backgroundColor: "rgba(0, 0, 0, 0.93)",
    width: 420,
    top: 0,
    position: "absolute",
    height: 844,
  },
  icon: {
    borderRadius: 36,
  },
  avatar: {
    left: 0,
  },
  topSectionChild: {
    left: 65,
    width: 100,
    overflow: "hidden",
    top: 0,
  },
  nominErdeneIdertsog: {
    color: "rgba(255, 255, 255, 0.8)",
    width: 181,
    fontSize: FontSize.body1Normal_size,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 20,
  },
  name: {
    left: 98,
    top: 36,
    position: "absolute",
  },
  x: {
    left: 279,
  },
  topSection: {
    top: 31,
    width: 329,
    left: 21,
  },
  billChild: {
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
    left: "7.85%",
    maxHeight: "100%",
    position: "absolute",
  },
  bill1: {
    left: "18.43%",
    color: Color.dayCard,
    position: "absolute",
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
    color: Color.dayCard,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  internet: {
    top: "66.18%",
    color: Color.dayCard,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  electrivity: {
    top: "86.03%",
    color: Color.dayCard,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  gas: {
    top: "44.12%",
    color: Color.dayCard,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  water: {
    top: "22.06%",
    color: Color.dayCard,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  name1: {
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
  bill: {
    height: 199,
    width: 293,
  },
  deptChild: {
    opacity: 0.93,
  },
  vectorIcon1: {
    marginTop: -2,
    width: "5.12%",
    right: "6.48%",
    left: "88.4%",
    height: 8,
    maxWidth: "100%",
    top: "50%",
    overflow: "hidden",
  },
  vectorIcon2: {
    height: "38.46%",
    width: "6.14%",
    top: "30.77%",
    right: "86.01%",
    bottom: "30.77%",
    left: "7.85%",
    maxHeight: "100%",
    position: "absolute",
  },
  dept1: {
    top: "32.69%",
    left: "18.43%",
    color: Color.dayCard,
    position: "absolute",
  },
  deptItem: {
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
  dept: {
    height: 52,
  },
  vectorIcon3: {
    height: "10.8%",
    width: "7.34%",
    right: "84.81%",
    bottom: "80.65%",
    top: "8.54%",
    left: "7.85%",
    maxHeight: "100%",
    position: "absolute",
  },
  name2: {
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
  income: {
    height: 199,
  },
  tableSection: {
    top: 203,
    height: 573,
  },
  dark: {
    width: 52,
    height: 19,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 7,
    left: 23,
    position: "absolute",
  },
  light: {
    left: 135,
    width: 40,
    height: 19,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 7,
    position: "absolute",
  },
  toggleDarkIcon: {
    left: 114,
    width: 70,
    height: 33,
    top: 0,
    position: "absolute",
  },
  middleSection: {
    top: 115,
    height: 33,
    left: 23,
    position: "absolute",
  },
  dark1: {
    height: 19,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 7,
    color: Color.dayCard,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.body1Normal_size,
    width: 52,
  },
  middleSection1: {
    top: 155,
    height: 33,
    width: 289,
  },
  iconLogOut: {
    width: 30,
    height: 29,
    overflow: "hidden",
  },
  label: {
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    color: Color.colorMediumturquoise_100,
    width: 177,
    marginLeft: 66,
  },
  iconLogOutParent: {
    marginTop: 361,
    width: 282,
    flexDirection: "row",
    height: 29,
    left: 21,
  },
  menuBarDark: {
    borderRadius: Border.br_26xl,
    backgroundColor: Color.dayCard,
    flex: 1,
    height: 844,
    width: "100%",
  },
});

export default MenuBarDark;
