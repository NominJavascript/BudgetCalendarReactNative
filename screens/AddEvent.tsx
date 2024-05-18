import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const AddEvent = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.addEvent}>
      <View style={styles.checkbox}>
        <Text style={[styles.dept, styles.audTypo]}>Dept</Text>
        <Image
          style={[styles.checkboxChild, styles.checkboxChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Text style={[styles.bill, styles.billTypo]}>Bill</Text>
        <Image
          style={[styles.checkboxItem, styles.checkboxPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Text style={[styles.income, styles.billTypo]}>Income</Text>
        <Image
          style={[styles.checkboxInner, styles.checkboxPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
      </View>
      <Pressable style={styles.btn} onPress={() => navigation.navigate("Home")}>
        <View style={[styles.btnChild, styles.btnLayout]} />
        <View style={[styles.btnItem, styles.btnItemBorder]} />
        <Text style={styles.done}>Done</Text>
        <View style={styles.mingcutecheckFill} />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
      <Text style={styles.createAnEvent}>Create an event</Text>
      <Pressable
        style={[styles.goBackBtn, styles.goBackBtnLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/go-back-btn.png")}
        />
      </Pressable>
      <View style={[styles.amount, styles.nameLayout]}>
        <View style={[styles.amountChild, styles.childBorder]} />
        <Text style={styles.amount1}>Amount</Text>
      </View>
      <View style={[styles.name, styles.nameChildLayout]}>
        <View style={[styles.nameChild, styles.nameChildLayout]} />
        <Text style={[styles.name1, styles.name1Position]}>Name</Text>
      </View>
      <View style={styles.dropdown}>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={[styles.emojioneflagForAustraliaIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/emojioneflagforaustralia.png")}
        />
        <Text style={[styles.aud, styles.audTypo]}>AUD</Text>
        <View style={[styles.dropdownChild, styles.iconLayout]} />
      </View>
      <Pressable
        style={[styles.repeat0, styles.nameChildLayout]}
        onPress={() => navigation.navigate("AddRepeat")}
      >
        <View style={[styles.nameChild, styles.nameChildLayout]} />
        <Text style={styles.name1Position}>
          <Text
            style={styles.thisEventllBe}
          >{`This event’ll be repeated every `}</Text>
          <Text style={styles.week}>week</Text>
        </Text>
        <Image
          style={[styles.uangleLeftBIcon, styles.uangleIconLayout]}
          contentFit="cover"
          source={require("../assets/uangleleftb3.png")}
        />
      </Pressable>
      <View style={[styles.date, styles.nameChildLayout]}>
        <View style={[styles.dateChild, styles.nameChildLayout]} />
        <View style={styles.datePickerHeader}>
          <Image
            style={styles.uangleIconLayout}
            contentFit="cover"
            source={require("../assets/uangleleftb4.png")}
          />
          <View style={styles.monthParent}>
            <Text style={styles.month}>May 20</Text>
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
                <Text style={[styles.mon, styles.monFlexBox]}>Mon</Text>
                <Text style={[styles.mon, styles.monFlexBox]}>Tue</Text>
                <Text style={[styles.mon, styles.monFlexBox]}>Wed</Text>
                <Text style={[styles.mon, styles.monFlexBox]}>Thu</Text>
                <Text style={[styles.mon, styles.monFlexBox]}>Fri</Text>
                <Text style={[styles.mon, styles.monFlexBox]}>Sat</Text>
                <Text style={[styles.mon, styles.monFlexBox]}>Sun</Text>
              </View>
            </View>
            <View style={styles.datePickerWeekdays}>
              <View style={styles.content}>
                <View style={styles.content}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text, styles.textFlexBox]}>27</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.content}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text, styles.textFlexBox]}>28</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.content}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text, styles.textFlexBox]}>29</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.content}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text, styles.textFlexBox]}>30</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>1</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>2</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>3</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.datePickerWeekdays}>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>4</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>5</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>6</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>7</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>8</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>9</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>10</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.datePickerWeekdays}>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>11</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>12</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>13</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>14</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text18, styles.textFlexBox]}>15</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>16</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>17</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.datePickerRow3}>
              <View style={styles.datePickerDaySlot21}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>18</Text>
                  </View>
                </View>
              </View>
              <View style={styles.datePickerDaySlot21}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>19</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.datePickerDaySlot23, styles.monFlexBox]}>
                <View
                  style={[styles.datePickerDayBase23, styles.content25FlexBox]}
                >
                  <View style={[styles.content25, styles.content25FlexBox]}>
                    <Text style={styles.text23}>20</Text>
                  </View>
                </View>
              </View>
              <View style={styles.datePickerDaySlot21}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>21</Text>
                  </View>
                </View>
              </View>
              <View style={styles.datePickerDaySlot21}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>22</Text>
                  </View>
                </View>
              </View>
              <View style={styles.datePickerDaySlot21}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>23</Text>
                  </View>
                </View>
              </View>
              <View style={styles.datePickerDaySlot21}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>24</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.datePickerWeekdays}>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>25</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>26</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>27</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>28</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>29</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>30</Text>
                  </View>
                </View>
              </View>
              <View style={styles.content}>
                <View style={styles.datePickerDayBase4}>
                  <View style={[styles.content2, styles.monFlexBox]}>
                    <Text style={[styles.text4, styles.textFlexBox]}>31</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  audTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    color: Color.colorBlack,
    position: "absolute",
  },
  checkboxChildLayout: {
    height: 12,
    width: 12,
  },
  billTypo: {
    transform: [
      {
        rotate: "-0.7deg",
      },
    ],
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    top: 1,
    position: "absolute",
  },
  checkboxPosition: {
    top: 29,
    height: 12,
    width: 12,
    position: "absolute",
  },
  btnLayout: {
    borderRadius: Border.br_17xl,
    left: 0,
    top: 0,
    height: 53,
    width: 139,
  },
  btnItemBorder: {
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  goBackBtnLayout: {
    height: "3.79%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  nameLayout: {
    height: 63,
    left: 31,
  },
  childBorder: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_4xs,
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    left: 0,
    height: 53,
  },
  nameChildLayout: {
    width: 335,
    position: "absolute",
  },
  name1Position: {
    top: "50%",
    marginTop: -4.5,
    left: 17,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    position: "absolute",
  },
  uangleIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  monFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
  content25FlexBox: {
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  dept: {
    top: 1,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    left: 55,
  },
  checkboxChild: {
    top: 41,
    left: 12,
    position: "absolute",
  },
  bill: {
    left: 116,
  },
  checkboxItem: {
    left: 134,
  },
  income: {
    left: 217,
  },
  checkboxInner: {
    left: 246,
  },
  checkbox: {
    top: 132,
    width: 280,
    height: 41,
    left: 55,
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
    position: "absolute",
    backgroundColor: Color.dayCard,
    left: 0,
  },
  btnItem: {
    borderRadius: Border.br_17xl,
    left: 0,
    top: 0,
    height: 53,
    width: 139,
  },
  done: {
    marginLeft: -26.7,
    top: 16,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkslategray_200,
    width: 54,
    height: 21,
    fontSize: FontSize.size_xl,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  mingcutecheckFill: {
    top: 10,
    left: 70,
    width: 8,
    overflow: "hidden",
    height: 32,
    position: "absolute",
  },
  btn: {
    top: 744,
    left: 131,
    height: 53,
    width: 139,
    position: "absolute",
  },
  vectorIcon: {
    width: "7.33%",
    top: "89.34%",
    right: "33.69%",
    bottom: "6.87%",
    left: "58.97%",
    height: "3.79%",
    position: "absolute",
  },
  createAnEvent: {
    marginLeft: -81,
    top: 51,
    width: 162,
    height: 27,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_xl,
    left: "50%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  goBackBtn: {
    left: "5.9%",
    top: "5.69%",
    right: "85.9%",
    bottom: "90.52%",
    width: "8.21%",
  },
  amountChild: {
    bottom: 0,
    borderRadius: Border.br_4xs,
    width: 233,
    position: "absolute",
  },
  amount1: {
    top: 27,
    color: Color.colorGray_100,
    left: 17,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    position: "absolute",
  },
  amount: {
    top: 202,
    width: 233,
    position: "absolute",
  },
  nameChild: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_4xs,
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    left: 0,
    height: 53,
    bottom: 0,
  },
  name1: {
    color: Color.colorGray_100,
  },
  name: {
    top: 275,
    height: 63,
    left: 31,
  },
  vectorIcon1: {
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
  },
  dropdownChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_6xs,
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    position: "absolute",
  },
  dropdown: {
    top: 212,
    left: 275,
    width: 91,
    height: 52,
    position: "absolute",
  },
  thisEventllBe: {
    color: Color.colorBlack,
  },
  week: {
    color: Color.colorMediumturquoise_100,
  },
  uangleLeftBIcon: {
    top: 25,
    left: 297,
    position: "absolute",
  },
  repeat0: {
    top: 349,
    height: 63,
    left: 31,
  },
  dateChild: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_4xs,
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    left: 0,
    height: 53,
    top: 0,
    width: 335,
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
    color: Color.universal50Gray,
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    alignSelf: "stretch",
    display: "flex",
  },
  datePickerWeekdays: {
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  text: {
    color: Color.dayBorder,
  },
  content2: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  content: {
    alignSelf: "stretch",
    flex: 1,
  },
  text4: {
    color: Color.daySubText,
  },
  datePickerDayBase4: {
    borderRadius: Border.br_81xl,
    alignSelf: "stretch",
    flex: 1,
  },
  text18: {
    color: Color.colorDarkslategray_100,
  },
  datePickerDaySlot21: {
    height: 32,
    flex: 1,
  },
  text23: {
    color: Color.dayCard,
    width: 32,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    alignItems: "center",
    display: "flex",
    height: 32,
  },
  content25: {
    flexDirection: "row",
  },
  datePickerDayBase23: {
    backgroundColor: Color.dayText,
    alignSelf: "stretch",
    flex: 1,
  },
  datePickerDaySlot23: {
    height: 32,
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
    left: 31,
    width: 335,
  },
  addEvent: {
    borderRadius: Border.br_26xl,
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.dayCard,
  },
});

export default AddEvent;
