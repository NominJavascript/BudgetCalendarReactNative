import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const CalenderCarousel = () => {
  return (
    <View style={styles.calenderCarousel}>
      <View
        style={[styles.property1bigFrameApr, styles.property1bigFramePosition]}
      >
        <View style={[styles.frameMay, styles.frameLayout2]}>
          <View style={[styles.listMay, styles.listLayout1]}>
            <Text style={[styles.may2, styles.textTypo22]}>May 2</Text>
            <Text style={[styles.text, styles.textTypo21]}>80$</Text>
            <Text style={[styles.electricityBill, styles.monthlyLayout]}>
              Electricity bill
            </Text>
            <Text style={[styles.monthly, styles.monthlyTypo]}>monthly</Text>
            <Image
              style={[styles.listMayChild, styles.childItemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-81.png")}
            />
            <Text style={styles.text1}>470$</Text>
            <Text style={[styles.uberEatsSalary, styles.uberEatsSalaryTypo]}>
              Uber Eats salary
            </Text>
            <Text style={[styles.once, styles.onceTypo]}>once</Text>
            <Image
              style={[styles.listMayItem, styles.childItemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-10.png")}
            />
            <View style={[styles.listMayInner, styles.lineViewLayout]} />
            <View style={[styles.lineView, styles.lineViewLayout]} />
          </View>
          <View style={[styles.calendarMay, styles.textPosition1]}>
            <View
              style={[styles.calendarMayChild, styles.calendarItemLayout]}
            />
            <View style={[styles.calendarMayItem, styles.calendarItemLayout]} />
            <View
              style={[styles.calendarMayInner, styles.calendarItemLayout]}
            />
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
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
              style={[styles.calendarMayChild3, styles.calendarChildLayout3]}
              contentFit="cover"
              source={require("../assets/rectangle-8.png")}
            />
            <Image
              style={[styles.calendarMayChild4, styles.calendarItemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-8.png")}
            />
            <View
              style={[styles.calendarMayChild5, styles.calendarChildLayout3]}
            />
            <View style={[styles.selectedDate, styles.selectedLayout]} />
            <Text style={[styles.text2, styles.textTypo20]}>1</Text>
            <Text style={[styles.text3, styles.textTypo19]}>2</Text>
            <Text style={[styles.text4, styles.textTypo22]}>3</Text>
            <Text style={[styles.text5, styles.textTypo18]}>4</Text>
            <Text style={[styles.text6, styles.textTypo22]}>5</Text>
            <Text style={[styles.text7, styles.textTypo22]}>31</Text>
            <Text style={[styles.text8, styles.textTypo17]}>30</Text>
            <Text style={[styles.text9, styles.textTypo20]}>8</Text>
            <Text style={[styles.text10, styles.textTypo19]}>9</Text>
            <Text style={[styles.text11, styles.textLayout2]}>10</Text>
            <Text style={[styles.text12, styles.textLayout1]}>11</Text>
            <Text style={[styles.text13, styles.textTypo16]}>12</Text>
            <Text style={[styles.text14, styles.textTypo22]}>7</Text>
            <Text style={[styles.text15, styles.textTypo15]}>6</Text>
            <Text style={[styles.text16, styles.textTypo14]}>15</Text>
            <Text style={[styles.text17, styles.textTypo22]}>16</Text>
            <Text style={[styles.text18, styles.textTypo13]}>17</Text>
            <Text style={[styles.text19, styles.textTypo12]}>18</Text>
            <Text style={[styles.text20, styles.textLayout]}>19</Text>
            <Text style={[styles.text21, styles.textTypo17]}>14</Text>
            <Text style={[styles.text22, styles.textPosition1]}>13</Text>
            <Text style={[styles.text23, styles.textTypo22]}>21</Text>
            <Text style={[styles.text24, styles.textTypo14]}>22</Text>
            <Text style={[styles.text25, styles.textTypo22]}>23</Text>
            <Text style={[styles.text26, styles.textTypo22]}>24</Text>
            <Text style={[styles.text27, styles.textTypo12]}>25</Text>
            <Text style={[styles.text28, styles.textTypo11]}>20</Text>
            <Text style={[styles.text29, styles.textPosition]}>28</Text>
            <Text style={[styles.text30, styles.textPosition]}>29</Text>
            <Text style={[styles.text31, styles.textPosition1]}>29</Text>
            <Text style={[styles.text32, styles.textPosition]}>30</Text>
            <Text style={[styles.text33, styles.textPosition]}>1</Text>
            <Text style={[styles.text34, styles.textPosition]}>2</Text>
            <Text style={[styles.text35, styles.textTypo22]}>26</Text>
            <View style={[styles.todayBox, styles.textPosition]} />
            <Text style={[styles.text36, styles.textPosition]}>27</Text>
            <Image
              style={styles.fadedDays2}
              contentFit="cover"
              source={require("../assets/faded-days-2.png")}
            />
            <View style={[styles.fadedDays1, styles.fadedLayout]} />
            <View style={[styles.fadedDays3, styles.fadedLayout]} />
            <Text style={[styles.may, styles.mayTypo]}>MAY</Text>
          </View>
        </View>
        <View style={[styles.frameApr, styles.frameLayout3]}>
          <View style={[styles.listApr, styles.aprPosition]}>
            <Text style={[styles.apr16, styles.textTypo22]}>Apr 16</Text>
            <Text style={[styles.text37, styles.textTypo10]}>500$</Text>
            <Text style={[styles.rent, styles.rentLayout]}>Rent</Text>
            <Text style={[styles.weekly, styles.rentLayout]}>weekly</Text>
            <Image
              style={[styles.listAprChild, styles.childItemLayout]}
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
              style={[styles.listAprItem, styles.childItemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-82.png")}
            />
            <View style={[styles.listAprInner, styles.listLayout]} />
            <View style={[styles.listAprChild1, styles.listLayout]} />
          </View>
          <View style={[styles.calendarApr, styles.aprPosition]}>
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
            <View style={[styles.calendarAprItem, styles.calendarItemLayout]} />
            <View
              style={[styles.calendarAprInner, styles.calendarItemLayout]}
            />
            <View
              style={[styles.calendarAprChild1, styles.calendarChildLayout2]}
            />
            <View
              style={[styles.calendarAprChild2, styles.calendarChildLayout2]}
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
              style={[styles.calendarAprChild7, styles.calendarChildLayout1]}
            />
            <View
              style={[styles.calendarAprChild8, styles.calendarChildLayout1]}
            />
            <View
              style={[styles.calendarAprChild9, styles.calendarChildLayout]}
            />
            <View
              style={[styles.calendarAprChild10, styles.rectangleViewLayout]}
            />
            <Image
              style={[styles.calendarAprChild11, styles.calendarChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-20.png")}
            />
            <View
              style={[styles.calendarAprChild12, styles.calendarChildLayout]}
            />
            <View
              style={[styles.calendarAprChild13, styles.calendarChildLayout]}
            />
            <Text style={[styles.text67, styles.textTypo1]}>1</Text>
            <Text style={[styles.text68, styles.textTypo3]}>2</Text>
            <Text style={[styles.text69, styles.textTypo22]}>3</Text>
            <Text style={[styles.text70, styles.textTypo22]}>4</Text>
            <Text style={[styles.text71, styles.textTypo22]}>5</Text>
            <Text style={[styles.text72, styles.textTypo9]}>30</Text>
            <Text style={[styles.text73, styles.textTypo5]}>29</Text>
            <Image
              style={[styles.fadedDays31, styles.monthlyLayout]}
              contentFit="cover"
              source={require("../assets/faded-days-3.png")}
            />
            <Text style={[styles.apr, styles.mayTypo]}>APR</Text>
          </View>
          <Image
            style={[styles.frameAprChild, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/group-16.png")}
          />
          <Image
            style={[styles.frameAprItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/group-16.png")}
          />
        </View>
      </View>
      <View
        style={[styles.property1bigFrameMay, styles.property1bigFramePosition]}
      >
        <View style={[styles.frameMay1, styles.frameLayout2]}>
          <View style={[styles.listMay, styles.listLayout1]}>
            <Text style={[styles.may2, styles.textTypo22]}>May 2</Text>
            <Text style={styles.text1}>470$</Text>
            <Text style={[styles.uberEatsSalary, styles.uberEatsSalaryTypo]}>
              Uber Eats salary
            </Text>
            <Text style={[styles.once, styles.onceTypo]}>once</Text>
            <Image
              style={[styles.listAprItem, styles.childItemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-10.png")}
            />
            <View style={[styles.listMayInner, styles.lineViewLayout]} />
            <View style={[styles.lineView, styles.lineViewLayout]} />
          </View>
          <View style={[styles.calendarMay, styles.textPosition1]}>
            <View
              style={[styles.calendarMayChild, styles.calendarItemLayout]}
            />
            <View style={[styles.calendarMayItem, styles.calendarItemLayout]} />
            <View
              style={[styles.calendarMayInner, styles.calendarItemLayout]}
            />
            <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
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
              style={[styles.calendarMayChild3, styles.calendarChildLayout3]}
              contentFit="cover"
              source={require("../assets/rectangle-8.png")}
            />
            <Image
              style={[styles.calendarMayChild4, styles.calendarItemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-8.png")}
            />
            <View
              style={[styles.calendarMayChild5, styles.calendarChildLayout3]}
            />
            <View style={[styles.selectedDate, styles.selectedLayout]} />
            <Text style={[styles.text2, styles.textTypo20]}>1</Text>
            <Text style={[styles.text3, styles.textTypo19]}>2</Text>
            <Text style={[styles.text4, styles.textTypo22]}>3</Text>
            <Text style={[styles.text5, styles.textTypo18]}>4</Text>
            <Text style={[styles.text6, styles.textTypo22]}>5</Text>
            <Text style={[styles.text7, styles.textTypo22]}>31</Text>
            <Text style={[styles.text8, styles.textTypo17]}>30</Text>
            <Text style={[styles.text9, styles.textTypo20]}>8</Text>
            <Text style={[styles.text10, styles.textTypo19]}>9</Text>
            <Text style={[styles.text11, styles.textLayout2]}>10</Text>
            <Text style={[styles.text12, styles.textLayout1]}>11</Text>
            <Text style={[styles.text13, styles.textTypo16]}>12</Text>
            <Text style={[styles.text14, styles.textTypo22]}>7</Text>
            <Text style={[styles.text15, styles.textTypo15]}>6</Text>
            <Text style={[styles.text16, styles.textTypo14]}>15</Text>
            <Text style={[styles.text17, styles.textTypo22]}>16</Text>
            <Text style={[styles.text18, styles.textTypo13]}>17</Text>
            <Text style={[styles.text19, styles.textTypo12]}>18</Text>
            <Text style={[styles.text20, styles.textLayout]}>19</Text>
            <Text style={[styles.text21, styles.textTypo17]}>14</Text>
            <Text style={[styles.text22, styles.textPosition1]}>13</Text>
            <Text style={[styles.text23, styles.textTypo22]}>21</Text>
            <Text style={[styles.text24, styles.textTypo14]}>22</Text>
            <Text style={[styles.text25, styles.textTypo22]}>23</Text>
            <Text style={[styles.text26, styles.textTypo22]}>24</Text>
            <Text style={[styles.text27, styles.textTypo12]}>25</Text>
            <Text style={[styles.text28, styles.textTypo11]}>20</Text>
            <Text style={[styles.text29, styles.textPosition]}>28</Text>
            <Text style={[styles.text30, styles.textPosition]}>29</Text>
            <Text style={[styles.text31, styles.textPosition1]}>29</Text>
            <Text style={[styles.text32, styles.textPosition]}>30</Text>
            <Text style={[styles.text33, styles.textPosition]}>1</Text>
            <Text style={[styles.text34, styles.textPosition]}>2</Text>
            <Text style={[styles.text35, styles.textTypo22]}>26</Text>
            <View style={[styles.todayBox, styles.textPosition]} />
            <Text style={[styles.text36, styles.textPosition]}>27</Text>
            <Image
              style={styles.fadedDays2}
              contentFit="cover"
              source={require("../assets/faded-days-2.png")}
            />
            <View style={[styles.fadedDays1, styles.fadedLayout]} />
            <View style={[styles.fadedDays3, styles.fadedLayout]} />
            <Text style={[styles.may, styles.mayTypo]}>MAY</Text>
          </View>
          <View style={[styles.hover, styles.frameLayout]}>
            <Text style={[styles.text110, styles.textTypo21]}>80$</Text>
            <Text style={[styles.electricityBill1, styles.monthlyLayout]}>
              Electricity bill
            </Text>
            <Text style={[styles.monthly1, styles.monthlyTypo]}>monthly</Text>
            <Image
              style={[styles.hoverChild, styles.childItemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-81.png")}
            />
          </View>
        </View>
        <View style={[styles.frameApr1, styles.frameLayout3]}>
          <View style={[styles.listApr, styles.aprPosition]}>
            <Text style={[styles.apr16, styles.textTypo22]}>Apr 16</Text>
            <Text style={[styles.text37, styles.textTypo10]}>500$</Text>
            <Text style={[styles.rent, styles.rentLayout]}>Rent</Text>
            <Text style={[styles.weekly, styles.rentLayout]}>weekly</Text>
            <Image
              style={[styles.listMayChild, styles.childItemLayout]}
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
              style={[styles.listMayItem, styles.childItemLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-82.png")}
            />
            <View style={[styles.listAprInner, styles.listLayout]} />
            <View style={[styles.listAprChild1, styles.listLayout]} />
          </View>
          <View style={[styles.calendarApr, styles.aprPosition]}>
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
            <View style={[styles.calendarAprItem, styles.calendarItemLayout]} />
            <View
              style={[styles.calendarAprInner, styles.calendarItemLayout]}
            />
            <View
              style={[styles.calendarAprChild1, styles.calendarChildLayout2]}
            />
            <View
              style={[styles.calendarAprChild2, styles.calendarChildLayout2]}
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
              style={[styles.calendarAprChild7, styles.calendarChildLayout1]}
            />
            <View
              style={[styles.calendarAprChild8, styles.calendarChildLayout1]}
            />
            <View
              style={[styles.calendarAprChild9, styles.calendarChildLayout]}
            />
            <View
              style={[styles.calendarAprChild10, styles.rectangleViewLayout]}
            />
            <Image
              style={[styles.calendarAprChild11, styles.calendarChildLayout1]}
              contentFit="cover"
              source={require("../assets/rectangle-20.png")}
            />
            <View
              style={[styles.calendarAprChild12, styles.calendarChildLayout]}
            />
            <View
              style={[styles.calendarAprChild13, styles.calendarChildLayout]}
            />
            <Text style={[styles.text67, styles.textTypo1]}>1</Text>
            <Text style={[styles.text68, styles.textTypo3]}>2</Text>
            <Text style={[styles.text69, styles.textTypo22]}>3</Text>
            <Text style={[styles.text70, styles.textTypo22]}>4</Text>
            <Text style={[styles.text71, styles.textTypo22]}>5</Text>
            <Text style={[styles.text72, styles.textTypo9]}>30</Text>
            <Text style={[styles.text73, styles.textTypo5]}>29</Text>
            <Image
              style={[styles.fadedDays31, styles.monthlyLayout]}
              contentFit="cover"
              source={require("../assets/faded-days-3.png")}
            />
            <Text style={[styles.apr, styles.mayTypo]}>APR</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1bigFramePosition: {
    overflow: "hidden",
    top: 20,
    height: 544,
    width: 389,
    position: "absolute",
  },
  frameLayout2: {
    width: 390,
    top: 0,
    height: 544,
    position: "absolute",
  },
  listLayout1: {
    height: 185,
    top: 359,
  },
  textTypo22: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  textTypo21: {
    width: 58,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 28,
    height: 17,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  monthlyLayout: {
    width: 248,
    position: "absolute",
  },
  monthlyTypo: {
    opacity: 0.6,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  childItemLayout: {
    height: 40,
    borderRadius: Border.br_18xl,
    width: 8,
    left: 0,
    position: "absolute",
  },
  uberEatsSalaryTypo: {
    top: 133,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  onceTypo: {
    top: 153,
    opacity: 0.6,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  lineViewLayout: {
    height: 1,
    width: 348,
    borderTopWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    left: 0,
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
  calendarChildLayout3: {
    left: 157,
    height: 3,
    width: 47,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  selectedLayout: {
    height: 53,
    width: 51,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
    borderWidth: 1,
    borderRadius: Border.br_8xs,
  },
  textTypo20: {
    left: 126,
    width: 6,
    height: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo19: {
    left: 177,
    width: 6,
    height: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo18: {
    left: 279,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  textTypo17: {
    left: 69,
    width: 18,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
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
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo15: {
    height: 15,
    width: 8,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo14: {
    left: 122,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  textTypo13: {
    height: 8,
    top: 174,
    width: 15,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo12: {
    left: 276,
    height: 14,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textLayout: {
    width: 14,
    height: 12,
    top: 174,
  },
  textTypo11: {
    left: 19,
    height: 16,
    width: 18,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
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
    height: 19,
    left: "50%",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  frameLayout3: {
    height: 544,
    width: 389,
    top: 0,
    position: "absolute",
  },
  aprPosition: {
    left: 29,
    position: "absolute",
  },
  textTypo10: {
    width: 57,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 28,
    height: 17,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rentLayout: {
    width: 244,
    left: 96,
    height: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  listLayout: {
    width: 342,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGray_200,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  textTypo9: {
    left: 56,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo8: {
    left: 109,
    height: 14,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo7: {
    left: 213,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo6: {
    left: 264,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo5: {
    left: 6,
    width: 18,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
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
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo3: {
    left: 165,
    width: 6,
    height: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo2: {
    left: 214,
    height: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo1: {
    left: 114,
    width: 6,
    height: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  textTypo: {
    left: 313,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
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
  frameLayout: {
    height: 42,
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
    top: 50,
  },
  electricityBill: {
    height: 20,
    left: 98,
    width: 248,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    top: 43,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  monthly: {
    top: 63,
    height: 20,
    width: 248,
    position: "absolute",
    left: 98,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  listMayChild: {
    top: 81,
  },
  text1: {
    width: 63,
    top: 140,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: 28,
    height: 17,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  uberEatsSalary: {
    height: 20,
    width: 248,
    position: "absolute",
    left: 98,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  once: {
    height: 20,
    width: 248,
    position: "absolute",
    left: 98,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  listMayItem: {
    top: 171,
  },
  listMayInner: {
    top: 105,
  },
  lineView: {
    top: 185,
  },
  listMay: {
    width: 347,
    left: 30,
    position: "absolute",
  },
  calendarMayChild: {
    backgroundColor: Color.colorMediumturquoise_100,
    left: 106,
    width: 47,
    borderRadius: Border.br_11xs,
    top: 87,
  },
  calendarMayItem: {
    left: 259,
    backgroundColor: Color.colorMediumturquoise_100,
    top: 87,
  },
  calendarMayInner: {
    backgroundColor: Color.colorRed,
    top: 92,
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
  },
  calendarMayChild4: {
    top: 92,
    left: 106,
    width: 47,
    borderRadius: Border.br_11xs,
  },
  calendarMayChild5: {
    top: 92,
    backgroundColor: Color.colorMediumturquoise_100,
  },
  selectedDate: {
    left: 155,
    top: 63,
  },
  text2: {
    width: 6,
    top: 65,
  },
  text3: {
    top: 65,
  },
  text4: {
    left: 228,
    width: 6,
    top: 65,
    height: 20,
    position: "absolute",
  },
  text5: {
    width: 6,
    top: 65,
    height: 20,
    position: "absolute",
  },
  text6: {
    left: 330,
    width: 6,
    top: 65,
    height: 20,
    position: "absolute",
  },
  text7: {
    width: 15,
    left: 226,
    top: 283,
    height: 17,
    position: "absolute",
  },
  text8: {
    height: 16,
    width: 18,
    top: 65,
  },
  text9: {
    top: 121,
    width: 6,
  },
  text10: {
    top: 121,
  },
  text11: {
    left: 225,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text12: {
    left: 277,
    height: 20,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text13: {
    width: 16,
    top: 121,
    height: 20,
  },
  text14: {
    left: 74,
    top: 121,
    width: 6,
    height: 17,
    position: "absolute",
  },
  text15: {
    left: 23,
    top: 121,
  },
  text16: {
    top: 174,
    width: 15,
    height: 20,
    position: "absolute",
  },
  text17: {
    left: 175,
    height: 14,
    top: 174,
    width: 15,
    position: "absolute",
  },
  text18: {
    left: 226,
  },
  text19: {
    top: 174,
    width: 15,
  },
  text20: {
    height: 12,
    left: 327,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text21: {
    height: 14,
    top: 174,
    width: 18,
  },
  text22: {
    top: 174,
    height: 16,
    width: 18,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text23: {
    left: 72,
    top: 229,
    height: 14,
    width: 15,
    position: "absolute",
  },
  text24: {
    width: 17,
    top: 229,
    height: 17,
    position: "absolute",
  },
  text25: {
    left: 174,
    width: 17,
    top: 229,
    height: 12,
    position: "absolute",
  },
  text26: {
    width: 17,
    top: 229,
    height: 14,
    left: 226,
    position: "absolute",
  },
  text27: {
    width: 17,
    top: 229,
  },
  text28: {
    top: 229,
    color: Color.colorBlack,
    left: 19,
    position: "absolute",
  },
  text29: {
    left: 71,
    width: 17,
    height: 14,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text30: {
    width: 17,
    left: 122,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    height: 17,
  },
  text31: {
    width: 17,
    top: 65,
    height: 17,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text32: {
    left: 172,
    width: 19,
    height: 16,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  text33: {
    width: 7,
    height: 14,
    left: 279,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  text34: {
    left: 329,
    height: 14,
    width: 8,
    top: 282,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
  },
  text35: {
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
  text36: {
    color: Color.dayCard,
    left: 19,
    height: 16,
    width: 18,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
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
  frameMay: {
    left: 419,
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
    opacity: 0.6,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    top: 63,
  },
  listAprChild: {
    top: 41,
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
    top: 153,
    opacity: 0.6,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  listAprItem: {
    top: 131,
  },
  listAprInner: {
    top: 105,
  },
  listAprChild1: {
    top: 185,
  },
  listApr: {
    width: 341,
    height: 185,
    top: 359,
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
  },
  calendarAprItem: {
    left: 93,
    backgroundColor: Color.colorRed,
    top: 87,
  },
  calendarAprInner: {
    left: 93,
    backgroundColor: Color.colorRed,
    top: 92,
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
    height: 16,
    width: 18,
    top: 65,
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
    textAlign: "left",
    fontSize: FontSize.size_xs,
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
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  text58: {
    left: 9,
    top: 121,
    width: 6,
    height: 17,
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
    height: 16,
    width: 18,
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
    height: 16,
    top: 283,
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
    width: 343,
    height: 329,
    top: 0,
  },
  frameAprChild: {
    top: 400,
    width: 309,
    left: 53,
    height: 42,
  },
  frameAprItem: {
    top: 491,
    width: 309,
    left: 53,
    height: 42,
  },
  frameApr: {
    left: 0,
    top: 0,
  },
  property1bigFrameApr: {
    left: 439,
  },
  text110: {
    top: 9,
  },
  electricityBill1: {
    top: 2,
    height: 20,
    left: 98,
    width: 248,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  monthly1: {
    top: 22,
    height: 20,
    width: 248,
    position: "absolute",
    left: 98,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  hoverChild: {
    top: 0,
  },
  hover: {
    top: 407,
    width: 346,
    left: 30,
  },
  frameMay1: {
    left: -1,
  },
  frameApr1: {
    left: -420,
    top: 0,
  },
  property1bigFrameMay: {
    left: 20,
  },
  calenderCarousel: {
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 848,
    height: 584,
    borderWidth: 1,
    borderRadius: Border.br_8xs,
  },
});

export default CalenderCarousel;
