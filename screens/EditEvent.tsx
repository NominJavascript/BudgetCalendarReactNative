import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const EditEvent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.editEvent}>
      <View style={[styles.checkbox, styles.deptPosition]}>
        <Text style={[styles.dept, styles.audTypo]}>Dept</Text>
        <Image
          style={[styles.checkboxChild, styles.checkboxChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text style={[styles.bill, styles.billTransform]}>Bill</Text>
        <Image
          style={[styles.checkboxItem, styles.checkboxPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-31.png")}
        />
        <Text style={[styles.income, styles.billTransform]}>Income</Text>
        <Image
          style={[styles.checkboxInner, styles.checkboxPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-41.png")}
        />
      </View>
      <Text style={styles.editAnEvent}>Edit an event</Text>
      <Pressable
        style={styles.goBackBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/go-back-btn.png")}
        />
      </Pressable>
      <Pressable
        style={styles.goBackBtn1}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/go-back-btn1.png")}
        />
      </Pressable>
      <View style={[styles.eparrowUpBold, styles.billTransform]} />
      <Text style={[styles.text, styles.textTypo1]}>80</Text>
      <View style={[styles.editEventChild, styles.editBorder]} />
      <Text style={[styles.amount, styles.nameTypo]}>Amount</Text>
      <Text style={[styles.electricity, styles.textTypo1]}>electricity</Text>
      <View style={[styles.editEventItem, styles.editBorder]} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <View style={styles.dropdown}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={[styles.emojioneflagForAustraliaIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/emojioneflagforaustralia.png")}
        />
        <Text style={[styles.aud, styles.audTypo]}>AUD</Text>
        <View style={[styles.dropdownChild, styles.btnItemBorder]} />
      </View>
      <Pressable
        style={[styles.repeat0, styles.datePosition]}
        onPress={() => navigation.navigate("AddRepeat")}
      >
        <View style={styles.repeat0Child} />
        <Text style={styles.thisEventllBeContainer}>
          <Text
            style={styles.thisEvenWill}
          >{`This even will be repeated `}</Text>
          <Text style={styles.monthly}>monthly</Text>
        </Text>
        <Image
          style={[styles.uangleLeftBIcon, styles.uangleIconLayout]}
          contentFit="cover"
          source={require("../assets/uangleleftb3.png")}
        />
      </Pressable>
      <View style={[styles.date, styles.datePosition]}>
        <View style={styles.dateChild} />
        <View style={styles.datePickerHeader}>
          <Image
            style={styles.uangleIconLayout}
            contentFit="cover"
            source={require("../assets/uangleleftb4.png")}
          />
          <View style={styles.monthParent}>
            <Text style={styles.month}>May 2</Text>
            <Image
              style={[styles.uangleDownIcon, styles.checkboxChildLayout]}
              contentFit="cover"
              source={require("../assets/uangledown2.png")}
            />
          </View>
          <Image
            style={styles.uangleIconLayout}
            contentFit="cover"
            source={require("../assets/uanglerightb2.png")}
          />
        </View>
        <View style={styles.calendarmaster}>
          <View style={styles.content}>
            <View style={styles.datePickerWeekdays}>
              <View style={styles.datePickerWeekdays}>
                <Text style={[styles.mon, styles.contentFlexBox]}>Mon</Text>
                <Text style={[styles.mon, styles.contentFlexBox]}>Tue</Text>
                <Text style={[styles.mon, styles.contentFlexBox]}>Wed</Text>
                <Text style={[styles.mon, styles.contentFlexBox]}>Thu</Text>
                <Text style={[styles.mon, styles.contentFlexBox]}>Fri</Text>
                <Text style={[styles.mon, styles.contentFlexBox]}>Sat</Text>
                <Text style={[styles.mon, styles.contentFlexBox]}>Sun</Text>
              </View>
            </View>
            <View style={styles.datePickerWeekdays}>
              <View style={styles.content}>
                <View style={styles.content}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text1, styles.textFlexBox]}>27</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.content}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text1, styles.textFlexBox]}>28</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.content}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text1, styles.textFlexBox]}>29</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.content}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text1, styles.textFlexBox]}>30</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.datePickerDaySlot5}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text6, styles.textFlexBox]}>2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>3</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.datePickerWeekdays}>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>4</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>5</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>6</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>7</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>8</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>9</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>10</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.datePickerWeekdays}>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>11</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>12</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>13</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>14</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text19, styles.textTypo]}>15</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>16</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>17</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.datePickerRow3}>
              <View style={styles.datePickerDaySlot21}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>18</Text>
                  </View>
                </View>
              </View>
              <View style={styles.datePickerDaySlot21}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>19</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.datePickerDaySlot23, styles.contentFlexBox]}>
                <View
                  style={[styles.datePickerDayBase23, styles.contentFlexBox]}
                >
                  <View style={[styles.content25, styles.contentFlexBox]}>
                    <Text style={[styles.text24, styles.textTypo]}>20</Text>
                  </View>
                </View>
              </View>
              <View style={styles.datePickerDaySlot21}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>21</Text>
                  </View>
                </View>
              </View>
              <View style={styles.datePickerDaySlot21}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>22</Text>
                  </View>
                </View>
              </View>
              <View style={styles.datePickerDaySlot21}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>23</Text>
                  </View>
                </View>
              </View>
              <View style={styles.datePickerDaySlot21}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>24</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.datePickerWeekdays}>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>25</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>26</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>27</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>28</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>29</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>30</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.contentFlexBox]}>
                    <Text style={[styles.text5, styles.textFlexBox]}>31</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.btn, styles.btnLayout1]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.btnChild, styles.btnLayout]} />
        <View style={[styles.btnItem, styles.btnItemBg]} />
        <Text style={[styles.save, styles.saveTypo]}>Save</Text>
      </Pressable>
      <View style={[styles.editEventInner, styles.btnItemBg]} />
      <Pressable
        style={[styles.btn1, styles.btnLayout1]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.btnInner, styles.btnLayout]} />
        <View style={[styles.rectangleView, styles.btnLayout]} />
        <Text style={[styles.cancel, styles.saveTypo]}>Cancel</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  deptPosition: {
    left: 55,
    position: "absolute",
  },
  audTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    color: Color.colorBlack,
  },
  checkboxChildLayout: {
    height: 12,
    width: 12,
  },
  billTransform: {
    transform: [
      {
        rotate: "-0.7deg",
      },
    ],
    position: "absolute",
  },
  checkboxPosition: {
    top: 29,
    height: 12,
    width: 12,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo1: {
    color: Color.colorGray_100,
    left: 48,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    position: "absolute",
  },
  editBorder: {
    height: 53,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_4xs,
    left: 32,
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    position: "absolute",
  },
  nameTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 48,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  btnItemBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  datePosition: {
    width: 335,
    left: 31,
    position: "absolute",
  },
  uangleIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  contentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textFlexBox: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "stretch",
    lineHeight: 24,
    alignItems: "center",
    display: "flex",
    flex: 1,
  },
  textTypo: {
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 24,
    alignItems: "center",
    display: "flex",
  },
  btnLayout1: {
    width: 139,
    top: 753,
    height: 53,
    position: "absolute",
  },
  btnLayout: {
    borderRadius: Border.br_17xl,
    width: 139,
    top: 0,
    left: 0,
    height: 53,
  },
  btnItemBg: {
    backgroundColor: Color.colorMediumturquoise_100,
    position: "absolute",
  },
  saveTypo: {
    height: 19,
    top: 16,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  dept: {
    top: 1,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    left: 55,
    position: "absolute",
  },
  checkboxChild: {
    top: 41,
    left: 12,
    position: "absolute",
  },
  bill: {
    left: 116,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    color: Color.colorBlack,
    top: 1,
  },
  checkboxItem: {
    left: 134,
  },
  income: {
    left: 217,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    color: Color.colorBlack,
    top: 1,
  },
  checkboxInner: {
    left: 246,
  },
  checkbox: {
    top: 132,
    width: 280,
    height: 41,
  },
  editAnEvent: {
    marginLeft: -81,
    top: 51,
    left: "50%",
    width: 162,
    height: 27,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goBackBtn: {
    left: "5.9%",
    top: "5.69%",
    right: "85.9%",
    bottom: "90.52%",
    width: "8.21%",
    height: "3.79%",
    position: "absolute",
  },
  goBackBtn1: {
    left: "83.59%",
    top: "5.09%",
    right: "5.64%",
    bottom: "89.93%",
    width: "10.77%",
    height: "4.98%",
    position: "absolute",
  },
  eparrowUpBold: {
    height: "3.13%",
    width: "6.77%",
    top: "6.04%",
    right: "7.23%",
    bottom: "90.83%",
    left: "86%",
    backgroundColor: "rgba(255, 255, 255, 0)",
    overflow: "hidden",
  },
  text: {
    marginTop: -193,
  },
  editEventChild: {
    bottom: 580,
    width: 233,
  },
  amount: {
    top: 201,
  },
  electricity: {
    marginTop: -120,
  },
  editEventItem: {
    top: 283,
    width: 333,
  },
  name: {
    top: 276,
  },
  vectorIcon: {
    height: "15.38%",
    width: "16.48%",
    top: "44.23%",
    right: "6.59%",
    bottom: "40.38%",
    left: "76.92%",
    position: "absolute",
  },
  emojioneflagForAustraliaIcon: {
    height: "42.31%",
    width: "24.18%",
    top: "28.85%",
    right: "71.43%",
    bottom: "28.85%",
    left: "4.4%",
    position: "absolute",
  },
  aud: {
    top: "34.62%",
    left: "30.77%",
    position: "absolute",
  },
  dropdownChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_6xs,
    borderColor: Color.colorMediumturquoise_100,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  dropdown: {
    top: 212,
    left: 275,
    width: 91,
    height: 52,
    position: "absolute",
  },
  repeat0Child: {
    bottom: 0,
    left: 0,
    width: 335,
    height: 53,
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  thisEvenWill: {
    color: Color.colorBlack,
  },
  monthly: {
    color: Color.colorMediumturquoise_100,
  },
  thisEventllBeContainer: {
    marginTop: -4.5,
    left: 17,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    position: "absolute",
  },
  uangleLeftBIcon: {
    top: 25,
    left: 297,
    position: "absolute",
  },
  repeat0: {
    top: 349,
    height: 63,
  },
  dateChild: {
    top: 0,
    left: 0,
    width: 335,
    height: 53,
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_4xs,
    position: "absolute",
  },
  month: {
    color: Color.dayText,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  uangleDownIcon: {
    marginLeft: 2,
    overflow: "hidden",
  },
  monthParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  datePickerHeader: {
    top: 11,
    left: 13,
    width: 308,
    height: 31,
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  mon: {
    fontSize: FontSize.size_2xs,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.universal50Gray,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    display: "flex",
    flex: 1,
  },
  datePickerWeekdays: {
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  text1: {
    color: Color.dayBorder,
  },
  content2: {
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  content: {
    alignSelf: "stretch",
    flex: 1,
  },
  text5: {
    color: Color.daySubText,
  },
  datePickerDayBase4: {
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
    flex: 1,
  },
  text6: {
    color: Color.dayCard,
  },
  datePickerDaySlot5: {
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    flex: 1,
  },
  text19: {
    alignSelf: "stretch",
    flex: 1,
  },
  datePickerDaySlot21: {
    height: 32,
    flex: 1,
  },
  text24: {
    width: 32,
    height: 32,
  },
  content25: {
    borderRadius: Border.br_5xs,
    flexDirection: "row",
  },
  datePickerDayBase23: {
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.dayCard,
    justifyContent: "center",
  },
  datePickerDaySlot23: {
    height: 32,
    flex: 1,
  },
  datePickerRow3: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  calendarmaster: {
    top: 57,
    left: 22,
    width: 289,
    height: 216,
    position: "absolute",
  },
  date: {
    top: 435,
    height: 286,
  },
  btnChild: {
    shadowOpacity: 1,
    elevation: 23.6,
    shadowRadius: 23.6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#09c6ba",
    borderRadius: Border.br_17xl,
    position: "absolute",
    backgroundColor: Color.dayCard,
  },
  btnItem: {
    borderColor: Color.dayCard,
    borderRadius: Border.br_17xl,
    width: 139,
    top: 0,
    left: 0,
    height: 53,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorMediumturquoise_100,
  },
  save: {
    left: 37,
    width: 66,
    color: Color.dayCard,
  },
  btn: {
    left: 227,
  },
  editEventInner: {
    top: 748,
    left: 150,
    borderRadius: Border.br_2xs,
    width: 15,
    height: 14,
    display: "none",
  },
  btnInner: {
    shadowOpacity: 1,
    elevation: 23.6,
    shadowRadius: 23.6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#09c6ba",
    borderRadius: Border.br_17xl,
    position: "absolute",
    backgroundColor: Color.dayCard,
  },
  rectangleView: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    position: "absolute",
  },
  cancel: {
    left: 35,
    color: Color.colorDarkslategray_200,
    width: 70,
  },
  btn1: {
    left: 31,
    width: 139,
    top: 753,
  },
  editEvent: {
    borderRadius: Border.br_26xl,
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.dayCard,
  },
});

export default EditEvent;
