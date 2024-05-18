import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Date1 = () => {
  return (
    <View style={styles.date}>
      <View style={[styles.property1variant3, styles.property1variant3Layout]}>
        <View
          style={[
            styles.property1variant3Child,
            styles.property1variant3Layout,
          ]}
        />
        <View style={styles.datePickerHeader}>
          <Image
            style={styles.uangleLeftBIcon}
            contentFit="cover"
            source={require("../assets/uangleleftb4.png")}
          />
          <View style={styles.monthParent}>
            <Text style={styles.month}>May 20</Text>
            <Image
              style={styles.uangleDownIcon}
              contentFit="cover"
              source={require("../assets/uangledown2.png")}
            />
          </View>
          <Image
            style={styles.uangleLeftBIcon}
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
  property1variant3Layout: {
    width: 335,
    position: "absolute",
  },
  monFlexBox: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  textFlexBox: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    flex: 1,
    alignSelf: "stretch",
    lineHeight: 24,
    alignItems: "center",
  },
  content25FlexBox: {
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  property1variant3Child: {
    top: 0,
    left: 0,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    height: 53,
    borderWidth: 1,
  },
  uangleLeftBIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  month: {
    fontSize: FontSize.body1Normal_size,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.dayText,
    textAlign: "left",
    lineHeight: 24,
  },
  uangleDownIcon: {
    width: 12,
    height: 12,
    marginLeft: 2,
    overflow: "hidden",
  },
  monthParent: {
    alignItems: "center",
    flexDirection: "row",
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
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  datePickerWeekdays: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  text: {
    color: Color.dayBorder,
  },
  content2: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  content: {
    flex: 1,
    alignSelf: "stretch",
  },
  text4: {
    color: Color.daySubText,
  },
  datePickerDayBase4: {
    borderRadius: Border.br_81xl,
    flex: 1,
    alignSelf: "stretch",
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
    height: 32,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    alignItems: "center",
  },
  content25: {
    flexDirection: "row",
  },
  datePickerDayBase23: {
    backgroundColor: Color.dayText,
    flex: 1,
    alignSelf: "stretch",
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
  property1variant3: {
    top: 20,
    left: 20,
    height: 286,
  },
  date: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 375,
    height: 326,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default Date1;
