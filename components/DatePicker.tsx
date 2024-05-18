import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const DatePicker = () => {
  return (
    <View style={styles.datePicker}>
      <View style={styles.datePickerHeader}>
        <Image
          style={styles.uangleLeftBIcon}
          contentFit="cover"
          source={require("../assets/uangleleftb.png")}
        />
        <View style={styles.monthParent}>
          <Text style={[styles.month, styles.monthClr]}>Jun 2022</Text>
          <Image
            style={styles.uangleDownIcon}
            contentFit="cover"
            source={require("../assets/uangledown.png")}
          />
        </View>
        <Image
          style={styles.uangleLeftBIcon}
          contentFit="cover"
          source={require("../assets/uanglerightb.png")}
        />
      </View>
      <View style={[styles.calendarmaster, styles.contentFlexBox]}>
        <View style={styles.contentFlexBox}>
          <View style={[styles.datePickerWeekdays, styles.contentFlexBox]}>
            <View style={[styles.datePickerWeekdays, styles.contentFlexBox]}>
              <Text style={[styles.mon, styles.textFlexBox1]}>Mon</Text>
              <Text style={[styles.mon, styles.textFlexBox1]}>Tue</Text>
              <Text style={[styles.mon, styles.textFlexBox1]}>Wed</Text>
              <Text style={[styles.mon, styles.textFlexBox1]}>Thu</Text>
              <Text style={[styles.mon, styles.textFlexBox1]}>Fri</Text>
              <Text style={[styles.mon, styles.textFlexBox1]}>Sat</Text>
              <Text style={[styles.mon, styles.textFlexBox1]}>Sun</Text>
            </View>
          </View>
          <View style={[styles.datePickerWeekdays, styles.contentFlexBox]}>
            <View style={styles.contentFlexBox}>
              <View style={styles.contentFlexBox}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text, styles.textFlexBox]}>27</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={styles.contentFlexBox}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text, styles.textFlexBox]}>28</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={styles.contentFlexBox}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text, styles.textFlexBox]}>29</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={styles.contentFlexBox}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text, styles.textFlexBox]}>30</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>1</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>2</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>3</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.datePickerWeekdays, styles.contentFlexBox]}>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>4</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>5</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>6</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>7</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>8</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>9</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>10</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.datePickerWeekdays, styles.contentFlexBox]}>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>11</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>12</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>13</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>14</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text18, styles.textFlexBox1]}>15</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>16</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>17</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.datePickerWeekdays, styles.contentFlexBox]}>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>18</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>19</Text>
                </View>
              </View>
            </View>
            <View style={[styles.datePickerDaySlot23, styles.textFlexBox1]}>
              <View
                style={[styles.datePickerDayBase23, styles.content25FlexBox]}
              >
                <View style={[styles.content25, styles.content25FlexBox]}>
                  <Text style={[styles.text23, styles.textFlexBox1]}>20</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>21</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>22</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>23</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>24</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.datePickerWeekdays, styles.contentFlexBox]}>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>25</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>26</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>27</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>28</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>29</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>30</Text>
                </View>
              </View>
            </View>
            <View style={styles.contentFlexBox}>
              <View style={[styles.datePickerDayBase4, styles.contentFlexBox]}>
                <View style={[styles.content2, styles.textFlexBox1]}>
                  <Text style={[styles.text4, styles.textFlexBox]}>31</Text>
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
  monthClr: {
    color: Color.dayText,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
  },
  contentFlexBox: {
    flex: 1,
    alignSelf: "stretch",
  },
  textFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  textFlexBox: {
    fontFamily: FontFamily.interRegular,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    flex: 1,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
    alignItems: "center",
    alignSelf: "stretch",
  },
  content25FlexBox: {
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  uangleLeftBIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  month: {
    textAlign: "left",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.dayText,
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
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  mon: {
    fontSize: FontSize.size_2xs,
    lineHeight: 14,
    color: Color.universal50Gray,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    flex: 1,
    alignSelf: "stretch",
  },
  datePickerWeekdays: {
    flexDirection: "row",
  },
  text: {
    color: Color.dayBorder,
  },
  content2: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  text4: {
    color: Color.daySubText,
  },
  datePickerDayBase4: {
    borderRadius: Border.br_81xl,
  },
  text18: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    flex: 1,
    alignSelf: "stretch",
    color: Color.dayText,
    lineHeight: 24,
    fontSize: FontSize.size_mini,
  },
  text23: {
    color: Color.dayCard,
    width: 32,
    height: 32,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.size_mini,
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
    flex: 1,
    alignSelf: "stretch",
  },
  calendarmaster: {
    marginTop: 12,
  },
  datePicker: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: Border.br_base,
    backgroundColor: Color.dayCard,
    width: 284,
    height: 276,
    padding: Padding.p_base,
  },
});

export default DatePicker;
