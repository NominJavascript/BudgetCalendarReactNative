import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.home}>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("AddEvent")}
      >
        <View style={styles.btnChild} />
        <View style={styles.btnItem} />
        <Text style={styles.addNew}>{`Add New `}</Text>
      </Pressable>
      <View style={styles.frame}>
        <View style={styles.menu}>
          <Pressable
            style={styles.menuIcon}
            onPress={() => navigation.navigate("MenuBarDark")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/menu-icon.png")}
            />
          </Pressable>
          <Image
            style={styles.searchIcon}
            contentFit="cover"
            source={require("../assets/search-icon.png")}
          />
          <View style={styles.frame1}>
            <Text style={styles.today}>Today</Text>
          </View>
        </View>
        <View style={styles.frame2}>
          <View style={styles.week}>
            <Text style={[styles.m, styles.mTypo]}>M</Text>
            <Text style={[styles.s, styles.mTypo]}>S</Text>
            <Text style={[styles.s1, styles.mTypo]}>S</Text>
            <Text style={[styles.f, styles.mTypo]}>F</Text>
            <Text style={[styles.t, styles.mTypo]}>T</Text>
            <Text style={[styles.w, styles.mTypo]}>W</Text>
            <Text style={[styles.t1, styles.mTypo]}>T</Text>
          </View>
          <View style={[styles.calenderCarousel, styles.frameAprLayout]}>
            <View style={styles.frameMay}>
              <View style={styles.listMay}>
                <Text style={[styles.may2, styles.textTypo22]}>May 2</Text>
                <Text style={[styles.text, styles.textTypo21]}>470$</Text>
                <Text style={[styles.uberEatsSalary, styles.onceLayout]}>
                  Uber Eats salary
                </Text>
                <Text style={[styles.once, styles.onceTypo]}>once</Text>
                <Image
                  style={[styles.listMayChild, styles.childLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-10.png")}
                />
                <View style={[styles.listMayItem, styles.itemBorder]} />
                <View style={[styles.listMayInner, styles.itemBorder]} />
              </View>
              <View style={[styles.calendarMay, styles.textPosition1]}>
                <View
                  style={[styles.calendarMayChild, styles.calendarItemLayout]}
                />
                <View
                  style={[styles.calendarMayItem, styles.calendarItemLayout]}
                />
                <View
                  style={[styles.calendarMayInner, styles.calendarInnerLayout]}
                />
                <View
                  style={[styles.rectangleView, styles.rectangleViewLayout]}
                />
                <Image
                  style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-101.png")}
                />
                <View
                  style={[styles.calendarMayChild1, styles.rectangleIconLayout]}
                />
                <Image
                  style={[styles.calendarMayChild2, styles.calendarItemLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-101.png")}
                />
                <Image
                  style={[styles.calendarMayChild3, styles.calendarItemLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-8.png")}
                />
                <Image
                  style={[styles.calendarMayChild4, styles.calendarInnerLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-8.png")}
                />
                <View
                  style={[styles.calendarMayChild5, styles.calendarInnerLayout]}
                />
                <View style={[styles.selectedDate, styles.selectedLayout]} />
                <Text style={[styles.text1, styles.textTypo20]}>1</Text>
                <Text style={[styles.text2, styles.textTypo19]}>2</Text>
                <Text style={[styles.text3, styles.textTypo22]}>3</Text>
                <Text style={[styles.text4, styles.textTypo18]}>4</Text>
                <Text style={[styles.text5, styles.textTypo22]}>5</Text>
                <Text style={[styles.text6, styles.textTypo22]}>31</Text>
                <Text style={[styles.text7, styles.textTypo17]}>30</Text>
                <Text style={[styles.text8, styles.textTypo20]}>8</Text>
                <Text style={[styles.text9, styles.textTypo19]}>9</Text>
                <Text style={[styles.text10, styles.textLayout2]}>10</Text>
                <Text style={[styles.text11, styles.textLayout1]}>11</Text>
                <Text style={[styles.text12, styles.textTypo16]}>12</Text>
                <Text style={[styles.text13, styles.textTypo22]}>7</Text>
                <Text style={[styles.text14, styles.textTypo15]}>6</Text>
                <Text style={[styles.text15, styles.textTypo14]}>15</Text>
                <Text style={[styles.text16, styles.textTypo22]}>16</Text>
                <Text style={[styles.text17, styles.textTypo13]}>17</Text>
                <Text style={[styles.text18, styles.textTypo12]}>18</Text>
                <Text style={[styles.text19, styles.textLayout]}>19</Text>
                <Text style={[styles.text20, styles.textTypo17]}>14</Text>
                <Text style={[styles.text21, styles.textPosition1]}>13</Text>
                <Text style={[styles.text22, styles.textTypo22]}>21</Text>
                <Text style={[styles.text23, styles.textTypo14]}>22</Text>
                <Text style={[styles.text24, styles.textTypo22]}>23</Text>
                <Text style={[styles.text25, styles.textTypo22]}>24</Text>
                <Text style={[styles.text26, styles.textTypo12]}>25</Text>
                <Text style={[styles.text27, styles.textTypo11]}>20</Text>
                <Text style={[styles.text28, styles.textPosition]}>28</Text>
                <Text style={[styles.text29, styles.textPosition]}>29</Text>
                <Text style={[styles.text30, styles.textPosition1]}>29</Text>
                <Text style={[styles.text31, styles.textPosition]}>30</Text>
                <Text style={[styles.text32, styles.textPosition]}>1</Text>
                <Text style={[styles.text33, styles.textPosition]}>2</Text>
                <Text style={[styles.text34, styles.textTypo22]}>26</Text>
                <View style={[styles.todayBox, styles.textPosition]} />
                <Text style={[styles.text35, styles.textPosition]}>27</Text>
                <Image
                  style={styles.fadedDays2}
                  contentFit="cover"
                  source={require("../assets/faded-days-2.png")}
                />
                <View style={[styles.fadedDays1, styles.fadedLayout]} />
                <View style={[styles.fadedDays3, styles.fadedLayout]} />
                <Text style={[styles.may, styles.mayTypo]}>MAY</Text>
              </View>
              <View style={styles.hover}>
                <Text style={[styles.text36, styles.textTypo21]}>80$</Text>
                <Text style={[styles.electricityBill, styles.onceLayout]}>
                  Electricity bill
                </Text>
                <Text style={[styles.monthly, styles.onceTypo]}>monthly</Text>
                <Image
                  style={[styles.hoverChild, styles.childLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-81.png")}
                />
              </View>
            </View>
            <View style={[styles.frameApr, styles.frameAprLayout]}>
              <View style={styles.listApr}>
                <Text style={[styles.apr16, styles.textTypo22]}>Apr 16</Text>
                <Text style={[styles.text37, styles.textTypo10]}>500$</Text>
                <Text style={[styles.rent, styles.rentLayout]}>Rent</Text>
                <Text style={[styles.weekly, styles.rentLayout]}>weekly</Text>
                <Image
                  style={[styles.listAprChild, styles.childLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-82.png")}
                />
                <Text style={[styles.text38, styles.textTypo10]}>350$</Text>
                <Text style={[styles.carLoanPayment, styles.rentLayout]}>
                  Car loan payment
                </Text>
                <Text style={[styles.fortnightly, styles.rentLayout]}>
                  fortnightly
                </Text>
                <Image
                  style={[styles.listAprItem, styles.childLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-82.png")}
                />
                <View style={[styles.listAprInner, styles.lineViewLayout]} />
                <View style={[styles.lineView, styles.lineViewLayout]} />
              </View>
              <View style={[styles.calendarApr, styles.frameChildPosition]}>
                <Text style={[styles.text39, styles.textTypo15]}>6</Text>
                <Text style={[styles.text40, styles.textTypo9]}>15</Text>
                <Text style={[styles.text41, styles.textTypo8]}>16</Text>
                <Text style={[styles.text42, styles.textTypo13]}>17</Text>
                <Text style={[styles.text43, styles.textTypo7]}>18</Text>
                <Text style={[styles.text44, styles.textTypo6]}>19</Text>
                <Text style={[styles.text45, styles.textTypo5]}>14</Text>
                <View
                  style={[styles.calendarAprChild, styles.calendarItemLayout]}
                />
                <View
                  style={[styles.calendarAprItem, styles.calendarItemLayout]}
                />
                <View
                  style={[styles.calendarAprInner, styles.calendarInnerLayout]}
                />
                <View
                  style={[
                    styles.calendarAprChild1,
                    styles.calendarChildLayout2,
                  ]}
                />
                <View
                  style={[
                    styles.calendarAprChild2,
                    styles.calendarChildLayout2,
                  ]}
                />
                <Image
                  style={[styles.calendarAprChild3, styles.calendarItemLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-83.png")}
                />
                <View
                  style={[styles.calendarAprChild4, styles.calendarItemLayout]}
                />
                <View
                  style={[styles.calendarAprChild5, styles.calendarItemLayout]}
                />
                <Image
                  style={[styles.calendarAprChild6, styles.calendarItemLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle-15.png")}
                />
                <View style={[styles.selectedDate1, styles.selectedLayout]} />
                <Text style={[styles.text46, styles.textTypo4]}>1</Text>
                <Text style={[styles.text47, styles.textTypo22]}>2</Text>
                <Text style={[styles.text48, styles.textTypo3]}>3</Text>
                <Text style={[styles.text49, styles.textTypo2]}>4</Text>
                <Text style={[styles.text50, styles.textTypo22]}>5</Text>
                <Text style={[styles.text51, styles.textTypo22]}>30</Text>
                <Text style={[styles.text52, styles.textTypo4]}>8</Text>
                <Text style={[styles.text53, styles.textTypo1]}>9</Text>
                <Text style={[styles.text54, styles.textLayout2]}>10</Text>
                <Text style={[styles.text55, styles.textTypo2]}>11</Text>
                <Text style={[styles.text56, styles.textTypo6]}>12</Text>
                <Text style={[styles.text57, styles.textLayout2]}>13</Text>
                <Text style={[styles.text58, styles.textTypo22]}>7</Text>
                <Text style={[styles.text59, styles.textTypo]}>20</Text>
                <Text style={[styles.text60, styles.textTypo8]}>23</Text>
                <Text style={[styles.text61, styles.textTypo22]}>24</Text>
                <Text style={[styles.text62, styles.textTypo7]}>26</Text>
                <Text style={[styles.text63, styles.textTypo6]}>27</Text>
                <Text style={[styles.text64, styles.textTypo]}>28</Text>
                <Text style={[styles.text65, styles.textTypo9]}>22</Text>
                <Text style={[styles.text66, styles.textTypo22]}>21</Text>
                <View style={styles.fadedDays11} />
                <View
                  style={[
                    styles.calendarAprChild7,
                    styles.calendarChildLayout1,
                  ]}
                />
                <View
                  style={[
                    styles.calendarAprChild8,
                    styles.calendarChildLayout1,
                  ]}
                />
                <View
                  style={[styles.calendarAprChild9, styles.calendarChildLayout]}
                />
                <View
                  style={[
                    styles.calendarAprChild10,
                    styles.rectangleViewLayout,
                  ]}
                />
                <Image
                  style={[
                    styles.calendarAprChild11,
                    styles.calendarChildLayout1,
                  ]}
                  contentFit="cover"
                  source={require("../assets/rectangle-20.png")}
                />
                <View
                  style={[
                    styles.calendarAprChild12,
                    styles.calendarChildLayout,
                  ]}
                />
                <View
                  style={[
                    styles.calendarAprChild13,
                    styles.calendarChildLayout,
                  ]}
                />
                <Text style={[styles.text67, styles.textTypo1]}>1</Text>
                <Text style={[styles.text68, styles.textTypo3]}>2</Text>
                <Text style={[styles.text69, styles.textTypo22]}>3</Text>
                <Text style={[styles.text70, styles.textTypo22]}>4</Text>
                <Text style={[styles.text71, styles.textTypo22]}>5</Text>
                <Text style={[styles.text72, styles.textTypo9]}>30</Text>
                <Text style={[styles.text73, styles.textTypo5]}>29</Text>
                <Image
                  style={[styles.fadedDays31, styles.onceLayout]}
                  contentFit="cover"
                  source={require("../assets/faded-days-3.png")}
                />
                <Text style={[styles.apr, styles.mayTypo]}>APR</Text>
              </View>
            </View>
          </View>
          <Pressable
            style={[styles.frameChild, styles.frameChildPosition]}
            onPress={() => navigation.navigate("EditEvent")}
          />
          <View style={[styles.frameItem, styles.itemBorder]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mTypo: {
    width: 12,
    fontSize: FontSize.size_xs,
    height: 17,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  frameAprLayout: {
    width: 389,
    height: 544,
    top: 0,
    position: "absolute",
  },
  textTypo22: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  textTypo21: {
    left: 28,
    height: 17,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  onceLayout: {
    width: 248,
    position: "absolute",
  },
  onceTypo: {
    opacity: 0.6,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  childLayout: {
    height: 40,
    borderRadius: Border.br_18xl,
    width: 8,
    left: 0,
    position: "absolute",
  },
  itemBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    position: "absolute",
  },
  textPosition1: {
    left: 18,
    position: "absolute",
  },
  calendarItemLayout: {
    height: 3,
    width: 47,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  calendarInnerLayout: {
    top: 92,
    height: 3,
    width: 47,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  rectangleViewLayout: {
    backgroundColor: Color.colorSteelblue,
    height: 3,
    width: 47,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  rectangleIconLayout: {
    top: 304,
    height: 3,
    width: 47,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  selectedLayout: {
    width: 51,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
    height: 53,
    position: "absolute",
  },
  textTypo20: {
    left: 126,
    width: 6,
    height: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo19: {
    left: 177,
    width: 6,
    height: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo18: {
    left: 279,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  textTypo17: {
    left: 69,
    width: 18,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textLayout2: {
    width: 16,
    top: 121,
    height: 20,
  },
  textLayout1: {
    width: 13,
    top: 121,
  },
  textTypo16: {
    left: 327,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo15: {
    height: 15,
    width: 8,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo14: {
    left: 122,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  textTypo13: {
    height: 8,
    top: 174,
    width: 15,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo12: {
    left: 276,
    height: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textLayout: {
    width: 14,
    height: 12,
    top: 174,
  },
  textTypo11: {
    left: 19,
    width: 18,
    fontSize: FontSize.size_xs,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  textPosition: {
    top: 282,
    position: "absolute",
  },
  fadedLayout: {
    height: 43,
    backgroundColor: Color.white07,
    width: 98,
    position: "absolute",
  },
  mayTypo: {
    left: "50%",
    textAlign: "left",
    color: Color.colorBlack,
    height: 19,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: 0,
    position: "absolute",
  },
  textTypo10: {
    width: 57,
    left: 28,
    height: 17,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rentLayout: {
    width: 244,
    left: 96,
    height: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  lineViewLayout: {
    width: 342,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  frameChildPosition: {
    width: 343,
    left: 29,
    position: "absolute",
  },
  textTypo9: {
    left: 56,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo8: {
    left: 109,
    height: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo7: {
    left: 213,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo6: {
    left: 264,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo5: {
    left: 6,
    width: 18,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  calendarChildLayout2: {
    top: 143,
    backgroundColor: Color.colorRed,
    height: 3,
    width: 47,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  textTypo4: {
    left: 60,
    width: 6,
    height: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo3: {
    left: 165,
    width: 6,
    height: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo2: {
    left: 214,
    height: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo1: {
    left: 114,
    width: 6,
    height: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo: {
    left: 313,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  calendarChildLayout1: {
    top: 305,
    height: 3,
    width: 47,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  calendarChildLayout: {
    top: 310,
    height: 3,
    width: 47,
    borderRadius: Border.br_11xs,
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
    borderRadius: Border.br_17xl,
    left: 0,
    top: 0,
    height: 53,
    width: 139,
    position: "absolute",
    backgroundColor: Color.dayCard,
  },
  btnItem: {
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_17xl,
    left: 0,
    top: 0,
    height: 53,
    width: 139,
    position: "absolute",
  },
  addNew: {
    top: 17,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    width: 127,
    height: 19,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 9,
    position: "absolute",
  },
  btn: {
    top: 737,
    left: 123,
    height: 53,
    width: 139,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  menuIcon: {
    width: 26,
    height: 26,
    left: 0,
    top: 0,
    position: "absolute",
  },
  searchIcon: {
    height: "69.23%",
    width: "5.23%",
    top: "15.38%",
    right: "18.54%",
    bottom: "15.38%",
    left: "76.23%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  today: {
    fontSize: 13,
    width: 39,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  frame1: {
    height: "92.31%",
    width: "13.43%",
    top: "7.69%",
    right: "0%",
    bottom: "0%",
    left: "86.57%",
    paddingHorizontal: 0,
    paddingVertical: 3,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  menu: {
    width: 350,
    height: 26,
  },
  m: {
    color: Color.colorBlack,
    left: 0,
  },
  s: {
    left: 310,
    color: "#ee5a58",
  },
  s1: {
    left: 259,
    color: Color.colorBlack,
  },
  f: {
    left: 209,
    color: Color.colorBlack,
  },
  t: {
    left: 157,
    color: Color.colorBlack,
  },
  w: {
    left: 103,
    color: Color.colorBlack,
  },
  t1: {
    left: 52,
    color: Color.colorBlack,
  },
  week: {
    left: 37,
    width: 322,
    height: 17,
    top: 43,
    position: "absolute",
  },
  may2: {
    width: 66,
    height: 17,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text: {
    width: 63,
    top: 140,
  },
  uberEatsSalary: {
    height: 20,
    left: 98,
    width: 248,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    top: 133,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  once: {
    top: 153,
    opacity: 0.6,
    height: 20,
    width: 248,
    position: "absolute",
    left: 98,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  listMayChild: {
    top: 131,
  },
  listMayItem: {
    width: 348,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_200,
    left: 0,
    top: 105,
  },
  listMayInner: {
    top: 185,
    width: 348,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_200,
    left: 0,
  },
  listMay: {
    width: 347,
    height: 185,
    top: 359,
    left: 30,
    position: "absolute",
  },
  calendarMayChild: {
    backgroundColor: Color.colorMediumturquoise_100,
    left: 106,
    top: 87,
    width: 47,
    borderRadius: Border.br_11xs,
  },
  calendarMayItem: {
    backgroundColor: Color.colorMediumturquoise_100,
    top: 87,
    width: 47,
    borderRadius: Border.br_11xs,
    left: 259,
  },
  calendarMayInner: {
    backgroundColor: Color.colorRed,
    left: 259,
  },
  rectangleView: {
    top: 97,
    left: 259,
  },
  rectangleIcon: {
    left: 259,
  },
  calendarMayChild1: {
    left: 260,
    backgroundColor: Color.colorRed,
  },
  calendarMayChild2: {
    top: 314,
    left: 259,
  },
  calendarMayChild3: {
    top: 87,
    width: 47,
    borderRadius: Border.br_11xs,
    left: 157,
  },
  calendarMayChild4: {
    left: 106,
  },
  calendarMayChild5: {
    backgroundColor: Color.colorMediumturquoise_100,
    left: 157,
  },
  selectedDate: {
    left: 155,
    top: 63,
  },
  text1: {
    width: 6,
    top: 65,
  },
  text2: {
    top: 65,
  },
  text3: {
    left: 228,
    width: 6,
    top: 65,
    height: 20,
    position: "absolute",
  },
  text4: {
    width: 6,
    top: 65,
    height: 20,
    position: "absolute",
  },
  text5: {
    left: 330,
    width: 6,
    top: 65,
    height: 20,
    position: "absolute",
  },
  text6: {
    width: 15,
    left: 226,
    top: 283,
    height: 17,
    position: "absolute",
  },
  text7: {
    width: 18,
    top: 65,
    height: 16,
  },
  text8: {
    top: 121,
    width: 6,
  },
  text9: {
    top: 121,
  },
  text10: {
    left: 225,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text11: {
    left: 277,
    height: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text12: {
    width: 16,
    top: 121,
    height: 20,
  },
  text13: {
    left: 74,
    top: 121,
    width: 6,
    height: 17,
    position: "absolute",
  },
  text14: {
    left: 23,
    top: 121,
  },
  text15: {
    top: 174,
    width: 15,
    height: 20,
    position: "absolute",
  },
  text16: {
    left: 175,
    height: 14,
    top: 174,
    width: 15,
    position: "absolute",
  },
  text17: {
    left: 226,
  },
  text18: {
    top: 174,
    width: 15,
  },
  text19: {
    height: 12,
    left: 327,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text20: {
    height: 14,
    top: 174,
    width: 18,
  },
  text21: {
    top: 174,
    width: 18,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 16,
  },
  text22: {
    left: 72,
    top: 229,
    height: 14,
    width: 15,
    position: "absolute",
  },
  text23: {
    width: 17,
    top: 229,
    height: 17,
    position: "absolute",
  },
  text24: {
    left: 174,
    width: 17,
    top: 229,
    height: 12,
    position: "absolute",
  },
  text25: {
    width: 17,
    top: 229,
    height: 14,
    left: 226,
    position: "absolute",
  },
  text26: {
    width: 17,
    top: 229,
  },
  text27: {
    top: 229,
    color: Color.colorBlack,
    position: "absolute",
  },
  text28: {
    left: 71,
    width: 17,
    height: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text29: {
    width: 17,
    left: 122,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 17,
  },
  text30: {
    width: 17,
    top: 65,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 17,
  },
  text31: {
    left: 172,
    width: 19,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 16,
  },
  text32: {
    width: 7,
    height: 14,
    left: 279,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text33: {
    left: 329,
    height: 14,
    width: 8,
    top: 282,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text34: {
    left: 326,
    width: 17,
    top: 229,
    height: 16,
    position: "absolute",
  },
  todayBox: {
    left: 16,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorBlack,
    width: 20,
    height: 16,
  },
  text35: {
    color: Color.dayCard,
    left: 19,
    width: 18,
    fontSize: FontSize.size_xs,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  fadedDays2: {
    left: 257,
    height: 38,
    display: "none",
    width: 98,
    top: 282,
    position: "absolute",
  },
  fadedDays1: {
    top: 56,
    left: 0,
  },
  fadedDays3: {
    top: 275,
    left: 256,
  },
  may: {
    marginLeft: -21,
    width: 48,
  },
  calendarMay: {
    width: 354,
    height: 318,
    top: 0,
  },
  text36: {
    top: 9,
    width: 58,
  },
  electricityBill: {
    top: 2,
    height: 20,
    left: 98,
    width: 248,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  monthly: {
    top: 22,
    height: 20,
    width: 248,
    position: "absolute",
    left: 98,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
  },
  hoverChild: {
    top: 0,
  },
  hover: {
    top: 407,
    width: 346,
    height: 42,
    left: 30,
    position: "absolute",
  },
  frameMay: {
    width: 390,
    height: 544,
    left: -1,
    top: 0,
    position: "absolute",
  },
  apr16: {
    width: 65,
    height: 17,
    left: 0,
    top: 0,
    position: "absolute",
  },
  text37: {
    top: 50,
  },
  rent: {
    top: 43,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  weekly: {
    top: 63,
    opacity: 0.6,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  listAprChild: {
    top: 81,
  },
  text38: {
    top: 140,
  },
  carLoanPayment: {
    top: 133,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  fortnightly: {
    opacity: 0.6,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 153,
  },
  listAprItem: {
    top: 171,
  },
  listAprInner: {
    top: 105,
  },
  lineView: {
    top: 185,
  },
  listApr: {
    width: 341,
    left: 29,
    height: 185,
    top: 359,
    position: "absolute",
  },
  text39: {
    left: 317,
    top: 65,
  },
  text40: {
    top: 174,
    width: 15,
    height: 20,
  },
  text41: {
    top: 174,
    width: 15,
  },
  text42: {
    left: 161,
  },
  text43: {
    height: 14,
    top: 174,
    width: 15,
  },
  text44: {
    height: 12,
    width: 14,
    top: 174,
  },
  text45: {
    height: 14,
    top: 174,
  },
  calendarAprChild: {
    left: 144,
    backgroundColor: Color.colorMediumturquoise_100,
    top: 87,
    width: 47,
    borderRadius: Border.br_11xs,
  },
  calendarAprItem: {
    left: 93,
    backgroundColor: Color.colorRed,
    top: 87,
    width: 47,
    borderRadius: Border.br_11xs,
  },
  calendarAprInner: {
    left: 93,
    backgroundColor: Color.colorRed,
  },
  calendarAprChild1: {
    left: 247,
  },
  calendarAprChild2: {
    left: 93,
  },
  calendarAprChild3: {
    top: 202,
    left: 93,
  },
  calendarAprChild4: {
    top: 198,
    left: 296,
    backgroundColor: Color.colorRed,
  },
  calendarAprChild5: {
    top: 197,
    left: 93,
    backgroundColor: Color.colorRed,
  },
  calendarAprChild6: {
    top: 251,
    left: 93,
  },
  selectedDate1: {
    top: 167,
    left: 91,
  },
  text46: {
    top: 65,
  },
  text47: {
    left: 112,
    width: 6,
    top: 65,
    height: 20,
    position: "absolute",
  },
  text48: {
    top: 65,
  },
  text49: {
    width: 6,
    top: 65,
  },
  text50: {
    left: 265,
    width: 6,
    top: 65,
    height: 20,
    position: "absolute",
  },
  text51: {
    left: 4,
    width: 18,
    top: 65,
    height: 16,
    position: "absolute",
  },
  text52: {
    top: 121,
  },
  text53: {
    top: 121,
  },
  text54: {
    left: 162,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text55: {
    width: 13,
    top: 121,
  },
  text56: {
    width: 16,
    top: 121,
    height: 20,
  },
  text57: {
    left: 314,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text58: {
    top: 121,
    width: 6,
    height: 17,
    left: 9,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text59: {
    top: 174,
    width: 18,
    height: 20,
  },
  text60: {
    width: 24,
    top: 229,
  },
  text61: {
    left: 160,
    width: 17,
    top: 229,
    height: 17,
    position: "absolute",
  },
  text62: {
    width: 17,
    top: 229,
    height: 12,
  },
  text63: {
    width: 17,
    top: 229,
    height: 14,
  },
  text64: {
    width: 17,
    top: 229,
    height: 14,
  },
  text65: {
    top: 229,
    width: 18,
    height: 16,
  },
  text66: {
    left: 7,
    top: 229,
    width: 15,
    height: 17,
    position: "absolute",
  },
  fadedDays11: {
    top: 59,
    width: 45,
    height: 33,
    backgroundColor: Color.white07,
    left: 0,
    position: "absolute",
  },
  calendarAprChild7: {
    left: 93,
    backgroundColor: Color.colorMediumturquoise_100,
  },
  calendarAprChild8: {
    left: 247,
    backgroundColor: Color.colorMediumturquoise_100,
  },
  calendarAprChild9: {
    left: 247,
    backgroundColor: Color.colorRed,
  },
  calendarAprChild10: {
    top: 315,
    left: 247,
  },
  calendarAprChild11: {
    left: 144,
  },
  calendarAprChild12: {
    left: 144,
    backgroundColor: Color.colorMediumturquoise_100,
  },
  calendarAprChild13: {
    left: 93,
    backgroundColor: Color.colorRed,
  },
  text67: {
    top: 283,
  },
  text68: {
    top: 283,
  },
  text69: {
    left: 218,
    top: 283,
    width: 6,
    height: 20,
    position: "absolute",
  },
  text70: {
    left: 267,
    top: 283,
    width: 6,
    height: 20,
    position: "absolute",
  },
  text71: {
    left: 318,
    top: 283,
    width: 6,
    height: 20,
    position: "absolute",
  },
  text72: {
    width: 17,
    top: 283,
    height: 17,
  },
  text73: {
    top: 283,
    height: 16,
  },
  fadedDays31: {
    top: 284,
    left: 88,
    height: 45,
  },
  apr: {
    marginLeft: -22.5,
    width: 44,
  },
  calendarApr: {
    height: 329,
    top: 0,
  },
  frameApr: {
    left: -420,
  },
  calenderCarousel: {
    overflow: "hidden",
    left: 0,
  },
  frameChild: {
    top: 371,
    height: 93,
  },
  frameItem: {
    top: 346,
    left: 1,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_200,
    width: 391,
  },
  frame2: {
    marginTop: 18,
    height: 544,
    overflow: "hidden",
    width: 391,
  },
  frame: {
    top: 47,
    height: 588,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 391,
    left: -1,
    position: "absolute",
  },
  home: {
    borderRadius: Border.br_26xl,
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.dayCard,
  },
});

export default Home;
