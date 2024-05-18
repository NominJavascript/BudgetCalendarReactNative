import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const AddRepeat = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.addRepeat}>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("AddEvent")}
      >
        <View style={[styles.btnChild, styles.btnLayout]} />
        <View style={[styles.btnItem, styles.buttonBorder]} />
        <LinearGradient
          style={[styles.button, styles.buttonBorder]}
          locations={[0, 1]}
          colors={["rgba(9, 198, 186, 0.46)", "rgba(197, 255, 251, 0.46)"]}
        />
        <Text style={styles.save}>Save</Text>
        <Image
          style={styles.mingcutecheckFillIcon}
          contentFit="cover"
          source={require("../assets/mingcutecheckfill.png")}
        />
      </Pressable>
      <View style={[styles.checkboxGroupParent, styles.checkboxGroupPosition]}>
        <View style={[styles.checkboxGroup, styles.checkboxGroupShadowBox]}>
          <View style={styles.itemFlexBox}>
            <View style={styles.radioWrapperFlexBox}>
              <Image
                style={styles.controllerIconLayout}
                contentFit="cover"
                source={require("../assets/controller1.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Never</Text>
            </View>
          </View>
          <View style={styles.itemFlexBox}>
            <View style={styles.radioWrapperFlexBox}>
              <Image
                style={styles.controllerIconLayout}
                contentFit="cover"
                source={require("../assets/controller.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>
                <Text style={styles.text}>15</Text>
                <Text style={styles.times}> times</Text>
              </Text>
            </View>
          </View>
          <View style={styles.itemFlexBox}>
            <View style={styles.radioWrapperFlexBox}>
              <Image
                style={styles.controllerIconLayout}
                contentFit="cover"
                source={require("../assets/controller.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>
                <Text style={styles.times}>{`Until `}</Text>
                <Text style={styles.text}>Jun 6th</Text>
              </Text>
            </View>
          </View>
          <View style={styles.itemFlexBox}>
            <View style={styles.radioWrapperFlexBox}>
              <Image
                style={styles.controllerIconLayout}
                contentFit="cover"
                source={require("../assets/controller.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Every month</Text>
            </View>
          </View>
          <View style={styles.itemFlexBox}>
            <View style={styles.radioWrapperFlexBox}>
              <Image
                style={styles.controllerIconLayout}
                contentFit="cover"
                source={require("../assets/controller.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Forever</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameChild, styles.frameChildBorder]} />
        <Image
          style={[styles.groupIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
        <View style={[styles.frameItem, styles.frameChildBorder]} />
      </View>
      <Text style={[styles.duration, styles.repeatTypo]}>{`Duration `}</Text>
      <View style={[styles.checkboxGroupGroup, styles.checkboxGroupPosition]}>
        <View style={[styles.checkboxGroup1, styles.checkboxGroupShadowBox]}>
          <View style={styles.itemFlexBox}>
            <View style={styles.radioWrapperFlexBox}>
              <Image
                style={styles.controllerIconLayout}
                contentFit="cover"
                source={require("../assets/controller.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>
                <Text style={styles.times}>{`Every `}</Text>
                <Text style={styles.text}>3</Text>
                <Text style={styles.times}> day</Text>
              </Text>
            </View>
          </View>
          <View style={styles.itemFlexBox}>
            <View style={styles.radioWrapperFlexBox}>
              <Image
                style={styles.controllerIconLayout}
                contentFit="cover"
                source={require("../assets/controller2.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>
                <Text style={styles.times}>{`Every `}</Text>
                <Text style={styles.text}>1</Text>
                <Text style={styles.times}> week</Text>
              </Text>
            </View>
          </View>
          <View style={styles.itemFlexBox}>
            <View style={styles.radioWrapperFlexBox}>
              <Image
                style={styles.controllerIconLayout}
                contentFit="cover"
                source={require("../assets/controller.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Every month</Text>
            </View>
          </View>
          <View style={styles.itemFlexBox}>
            <View style={styles.radioWrapperFlexBox}>
              <Image
                style={styles.controllerIconLayout}
                contentFit="cover"
                source={require("../assets/controller.png")}
              />
              <Text style={[styles.label, styles.labelTypo]}>Every year</Text>
            </View>
          </View>
          <View style={[styles.item41, styles.itemFlexBox]}>
            <View style={[styles.radioWrapper9, styles.radioWrapperFlexBox]}>
              <Image
                style={styles.controllerIconLayout}
                contentFit="cover"
                source={require("../assets/controller.png")}
              />
              <Text style={[styles.label9, styles.labelTypo]}>Item 5</Text>
            </View>
          </View>
        </View>
        <View style={[styles.item02, styles.itemFlexBox]}>
          <View style={styles.radioWrapperFlexBox}>
            <Image
              style={styles.controllerIconLayout}
              contentFit="cover"
              source={require("../assets/controller3.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Do not repeat</Text>
          </View>
        </View>
        <Image
          style={[styles.groupIcon1, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group1.png")}
        />
        <View style={[styles.frameInner, styles.frameInnerLayout]} />
      </View>
      <Image
        style={[styles.controllerIcon11, styles.controllerIconLayout]}
        contentFit="cover"
        source={require("../assets/controller.png")}
      />
      <Text style={[styles.thisEventWillContainer, styles.repeatTypo]}>
        <Text
          style={styles.thisEventWill}
        >{`This event will be repeated every `}</Text>
        <Text style={styles.text}>week</Text>
      </Text>
      <Pressable
        style={styles.goBackBtn}
        onPress={() => navigation.navigate("AddEvent")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/go-back-btn.png")}
        />
      </Pressable>
      <Text style={[styles.repeat, styles.repeatTypo]}>Repeat</Text>
      <View style={[styles.addRepeatChild, styles.frameChildBorder]} />
      <View style={[styles.addRepeatItem, styles.frameInnerLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  btnLayout: {
    borderRadius: Border.br_17xl,
    left: 0,
    top: 0,
    height: 53,
    width: 139,
  },
  buttonBorder: {
    borderWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    position: "absolute",
  },
  checkboxGroupPosition: {
    width: 196,
    left: 43,
    position: "absolute",
  },
  checkboxGroupShadowBox: {
    padding: Padding.p_5xs,
    borderColor: Color.white07,
    borderRadius: Border.br_base,
    elevation: 32,
    shadowRadius: 32,
    shadowColor: "rgba(9, 198, 186, 0.1)",
    top: "50%",
    marginLeft: -55,
    overflow: "hidden",
    left: "50%",
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
  },
  labelTypo: {
    marginLeft: 8,
    lineHeight: 24,
    fontSize: FontSize.body1Normal_size,
    textAlign: "left",
    flex: 1,
  },
  frameChildBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  repeatTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  itemFlexBox: {
    justifyContent: "center",
    width: 180,
    alignItems: "center",
    overflow: "hidden",
  },
  radioWrapperFlexBox: {
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_5xs,
    overflow: "hidden",
  },
  frameInnerLayout: {
    width: 11,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorMediumturquoise_100,
    borderStyle: "solid",
    position: "absolute",
  },
  controllerIconLayout: {
    height: 24,
    width: 24,
  },
  btnChild: {
    shadowColor: "#09c6ba",
    shadowRadius: 23.6,
    elevation: 23.6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    position: "absolute",
    backgroundColor: Color.dayCard,
    borderRadius: Border.br_17xl,
  },
  btnItem: {
    borderRadius: Border.br_17xl,
    left: 0,
    top: 0,
    height: 53,
    width: 139,
  },
  button: {
    top: 7,
    left: 58,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowRadius: 6,
    elevation: 6,
    borderRadius: 31,
    width: 255,
    height: 39,
    opacity: 0.86,
    backgroundColor: "transparent",
    display: "none",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  save: {
    marginLeft: -23.7,
    top: 14,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    left: "50%",
    position: "absolute",
  },
  mingcutecheckFillIcon: {
    top: 10,
    left: 103,
    width: 28,
    height: 32,
    overflow: "hidden",
    position: "absolute",
  },
  btn: {
    top: 744,
    left: 120,
    height: 53,
    width: 139,
    position: "absolute",
  },
  label: {
    color: Color.gray700,
    fontFamily: FontFamily.interRegular,
    marginLeft: 8,
    lineHeight: 24,
    fontSize: FontSize.body1Normal_size,
  },
  text: {
    color: Color.colorMediumturquoise_100,
  },
  times: {
    color: Color.gray700,
  },
  label1: {
    fontFamily: FontFamily.interRegular,
    marginLeft: 8,
    lineHeight: 24,
    fontSize: FontSize.body1Normal_size,
  },
  checkboxGroup: {
    marginTop: -108,
  },
  frameChild: {
    top: 76,
    left: 51,
    width: 19,
  },
  groupIcon: {
    height: "11.11%",
    top: "7.87%",
    right: "79.59%",
    bottom: "81.02%",
    left: "8.16%",
    width: "12.24%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameItem: {
    top: 116,
    left: 86,
    width: 60,
  },
  checkboxGroupParent: {
    top: 405,
    height: 216,
  },
  duration: {
    top: 391,
    color: Color.colorBlack,
    left: 38,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  label9: {
    fontFamily: FontFamily.body1Normal,
    color: Color.gray700,
    marginLeft: 8,
    lineHeight: 24,
    fontSize: FontSize.body1Normal_size,
    display: "none",
  },
  radioWrapper9: {
    opacity: 0.3,
    display: "none",
  },
  item41: {
    height: 40,
    display: "none",
  },
  checkboxGroup1: {
    marginTop: -74,
  },
  item02: {
    left: 0,
    top: 0,
    justifyContent: "center",
    width: 180,
    position: "absolute",
  },
  groupIcon1: {
    height: "11.76%",
    top: "40.69%",
    right: "80.1%",
    bottom: "47.55%",
    left: "7.65%",
    width: "12.24%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameInner: {
    top: 104,
    left: 95,
  },
  checkboxGroupGroup: {
    top: 174,
    height: 204,
  },
  controllerIcon11: {
    top: 182,
    left: 59,
    position: "absolute",
  },
  thisEventWill: {
    color: Color.colorBlack,
  },
  thisEventWillContainer: {
    top: 143,
    left: 38,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
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
  repeat: {
    marginLeft: -81,
    top: 51,
    display: "flex",
    width: 162,
    height: 27,
    color: Color.colorBlack,
    fontWeight: "500",
    alignItems: "center",
    fontSize: FontSize.size_xl,
    left: "50%",
  },
  addRepeatChild: {
    top: 160,
    left: 295,
    width: 43,
  },
  addRepeatItem: {
    top: 238,
    left: 138,
  },
  addRepeat: {
    borderRadius: Border.br_26xl,
    height: 844,
    width: "100%",
    flex: 1,
    backgroundColor: Color.dayCard,
  },
});

export default AddRepeat;
