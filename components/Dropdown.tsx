import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Dropdown = () => {
  return (
    <View style={styles.dropdown}>
      <View style={[styles.view, styles.viewPosition1]}>
        <View style={styles.child} />
        <Image
          style={[styles.emojioneflagForAustraliaIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/emojioneflagforaustralia.png")}
        />
        <Text style={[styles.aud, styles.audTypo]}>AUD</Text>
        <Image
          style={styles.item}
          contentFit="cover"
          source={require("../assets/rectangle-26.png")}
        />
        <View style={styles.itemPosition2}>
          <Text style={[styles.mnt, styles.mntTypo]}>MNT</Text>
          <Image
            style={[styles.circleFlagsmnIcon, styles.circleIconPosition]}
            contentFit="cover"
            source={require("../assets/circleflagsmn.png")}
          />
        </View>
        <View style={[styles.item2, styles.itemPosition1]}>
          <Text style={[styles.usd, styles.mntTypo]}>USD</Text>
          <Image
            style={[styles.circleFlagsusIcon, styles.circleIconPosition]}
            contentFit="cover"
            source={require("../assets/circleflagsus.png")}
          />
        </View>
        <View style={[styles.item1, styles.itemPosition]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.groupIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <View style={styles.emojioneflagForAustralia} />
          <Text style={[styles.aud1, styles.mntTypo]}>AUD</Text>
        </View>
        <View style={styles.inner} />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.lineIcon, styles.childLayout1]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <Image
          style={[styles.child1, styles.childLayout1]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <Image
          style={[styles.child2, styles.childLayout1]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
      </View>
      <View style={[styles.view1, styles.viewPosition1]}>
        <View style={styles.child} />
        <Image
          style={[styles.emojioneflagForAustraliaIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/emojioneflagforaustralia.png")}
        />
        <Text style={[styles.aud, styles.audTypo]}>AUD</Text>
        <View style={[styles.item31, styles.itemPosition2]}>
          <Text style={[styles.mnt, styles.mntTypo]}>MNT</Text>
          <Image
            style={[styles.circleFlagsmnIcon, styles.circleIconPosition]}
            contentFit="cover"
            source={require("../assets/circleflagsmn.png")}
          />
        </View>
        <View style={styles.child3} />
        <View style={styles.itemPosition1}>
          <Text style={[styles.usd, styles.mntTypo]}>USD</Text>
          <Image
            style={[styles.circleFlagsusIcon, styles.circleIconPosition]}
            contentFit="cover"
            source={require("../assets/circleflagsus.png")}
          />
        </View>
        <View style={[styles.item1, styles.itemPosition]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.groupIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <View style={styles.emojioneflagForAustralia} />
          <Text style={[styles.aud1, styles.mntTypo]}>AUD</Text>
        </View>
        <View style={styles.inner} />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.lineIcon, styles.childLayout1]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <Image
          style={[styles.child1, styles.childLayout1]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <Image
          style={[styles.child2, styles.childLayout1]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
      </View>
      <View style={styles.view2}>
        <View style={styles.child} />
        <Image
          style={[styles.emojioneflagForAustraliaIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/emojioneflagforaustralia.png")}
        />
        <Text style={[styles.aud, styles.audTypo]}>AUD</Text>
        <View style={[styles.item31, styles.itemPosition2]}>
          <Text style={[styles.mnt, styles.mntTypo]}>MNT</Text>
          <Image
            style={[styles.circleFlagsmnIcon, styles.circleIconPosition]}
            contentFit="cover"
            source={require("../assets/circleflagsmn.png")}
          />
        </View>
        <View style={[styles.item2, styles.itemPosition1]}>
          <Text style={[styles.usd, styles.mntTypo]}>USD</Text>
          <Image
            style={[styles.circleFlagsusIcon, styles.circleIconPosition]}
            contentFit="cover"
            source={require("../assets/circleflagsus.png")}
          />
        </View>
        <View style={[styles.child9, styles.child9Position]} />
        <View style={styles.itemPosition}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.groupIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <View style={styles.emojioneflagForAustralia} />
          <Text style={[styles.aud1, styles.mntTypo]}>AUD</Text>
        </View>
        <View style={styles.inner} />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.lineIcon, styles.childLayout1]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <Image
          style={[styles.child1, styles.childLayout1]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <Image
          style={[styles.child2, styles.childLayout1]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
      </View>
      <View style={[styles.view3, styles.viewPosition]}>
        <View style={styles.child} />
        <Image
          style={[styles.emojioneflagForAustraliaIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/emojioneflagforaustralia.png")}
        />
        <Text style={[styles.aud, styles.audTypo]}>AUD</Text>
        <View style={[styles.item31, styles.itemPosition2]}>
          <Text style={[styles.mnt, styles.mntTypo]}>MNT</Text>
          <Image
            style={[styles.circleFlagsmnIcon, styles.circleIconPosition]}
            contentFit="cover"
            source={require("../assets/circleflagsmn.png")}
          />
        </View>
        <View style={[styles.item2, styles.itemPosition1]}>
          <Text style={[styles.usd, styles.mntTypo]}>USD</Text>
          <Image
            style={[styles.circleFlagsusIcon, styles.circleIconPosition]}
            contentFit="cover"
            source={require("../assets/circleflagsus.png")}
          />
        </View>
        <Image
          style={[styles.rectangleIcon, styles.child9Position]}
          contentFit="cover"
          source={require("../assets/rectangle-261.png")}
        />
        <View style={[styles.item1, styles.itemPosition]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.groupIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <View style={styles.emojioneflagForAustralia} />
          <Text style={[styles.aud1, styles.mntTypo]}>AUD</Text>
        </View>
        <View style={styles.inner} />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.lineIcon, styles.childLayout1]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <Image
          style={[styles.child17, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
        <Image
          style={[styles.child18, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/line-3.png")}
        />
      </View>
      <View style={[styles.view4, styles.viewPosition]}>
        <Image
          style={[styles.vectorIcon16, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={[styles.emojioneflagForAustraliaIcon4, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/emojioneflagforaustralia.png")}
        />
        <Text style={[styles.aud8, styles.audTypo]}>AUD</Text>
        <View style={styles.inner} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPosition1: {
    bottom: "10.87%",
    top: "11.96%",
    width: "19.74%",
    height: "77.17%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  audTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    left: "30.77%",
    position: "absolute",
  },
  mntTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  circleIconPosition: {
    left: "0%",
    height: "100%",
    top: "0%",
    bottom: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  itemPosition1: {
    bottom: "25.35%",
    right: "45.05%",
    top: "64.08%",
    width: "47.25%",
    left: "7.69%",
    height: "10.56%",
    position: "absolute",
  },
  itemPosition: {
    bottom: "45.07%",
    top: "39.44%",
    width: "54.95%",
    right: "45.05%",
    left: "0%",
    height: "15.49%",
    position: "absolute",
  },
  vectorIconLayout: {
    height: "31.82%",
    left: "14%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "76.92%",
    right: "6.59%",
    width: "16.48%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  childLayout1: {
    width: "98.9%",
    height: "0.7%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "1.1%",
    position: "absolute",
    overflow: "hidden",
  },
  itemPosition2: {
    left: "7.69%",
    bottom: "4.93%",
    right: "42.86%",
    top: "84.51%",
    width: "49.45%",
    height: "10.56%",
    position: "absolute",
  },
  child9Position: {
    bottom: "42.25%",
    height: "21.13%",
    left: "1.1%",
    right: "1.1%",
    top: "36.62%",
    width: "97.8%",
    position: "absolute",
  },
  viewPosition: {
    left: "4.34%",
    right: "75.92%",
    width: "19.74%",
    position: "absolute",
  },
  childLayout: {
    height: 0,
    width: "98.9%",
    right: "0%",
    maxWidth: "100%",
    left: "1.1%",
    position: "absolute",
    overflow: "hidden",
  },
  child: {
    height: "61.97%",
    bottom: "1.41%",
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    backgroundColor: Color.dayCard,
    left: "1.1%",
    right: "1.1%",
    width: "97.8%",
    top: "36.62%",
    position: "absolute",
  },
  emojioneflagForAustraliaIcon: {
    top: "10.56%",
    bottom: "73.94%",
    left: "4.4%",
    right: "71.43%",
    width: "24.18%",
    maxWidth: "100%",
    position: "absolute",
    height: "15.49%",
  },
  aud: {
    top: "12.68%",
  },
  item: {
    borderRadius: Border.br_9xs,
    bottom: "0%",
    top: "78.87%",
    height: "21.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "1.1%",
    right: "1.1%",
    width: "97.8%",
    position: "absolute",
    overflow: "hidden",
  },
  mnt: {
    left: "37.78%",
    top: "0%",
    fontSize: FontSize.size_xs,
  },
  circleFlagsmnIcon: {
    width: "33.33%",
    right: "66.67%",
  },
  usd: {
    left: "39.53%",
    top: "0%",
    fontSize: FontSize.size_xs,
  },
  circleFlagsusIcon: {
    width: "34.88%",
    right: "65.12%",
  },
  item2: {
    opacity: 0.6,
  },
  vectorIcon: {
    height: "68.18%",
    width: "30%",
    bottom: "13.64%",
    left: "14%",
    right: "56%",
    top: "18.18%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    width: "14%",
    right: "72%",
    bottom: "50%",
    top: "18.18%",
    height: "31.82%",
  },
  groupIcon: {
    height: "31.36%",
    width: "13.8%",
    top: "20.45%",
    right: "71.2%",
    bottom: "48.18%",
    left: "15%",
    position: "absolute",
    maxWidth: "100%",
  },
  vectorIcon2: {
    width: "26%",
    top: "36.36%",
    right: "60%",
    bottom: "31.82%",
  },
  emojioneflagForAustralia: {
    width: "44%",
    right: "56%",
    left: "0%",
    height: "100%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  aud1: {
    top: "13.64%",
    left: "48%",
  },
  item1: {
    opacity: 0.6,
  },
  inner: {
    width: "100%",
    borderRadius: Border.br_6xs,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    right: "0%",
    left: "0%",
    height: "100%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
    borderWidth: 1,
  },
  vectorIcon3: {
    height: "5.63%",
    top: "16.2%",
    bottom: "78.17%",
  },
  lineIcon: {
    bottom: "62.68%",
    top: "36.62%",
    height: "0.7%",
  },
  child1: {
    bottom: "41.55%",
    top: "57.75%",
  },
  child2: {
    bottom: "20.42%",
    top: "78.87%",
  },
  view: {
    right: "3.04%",
    left: "77.22%",
  },
  item31: {
    opacity: 0.6,
  },
  child3: {
    bottom: "21.13%",
    backgroundColor: Color.colorMediumturquoise_200,
    top: "57.75%",
    height: "21.13%",
    left: "1.1%",
    right: "1.1%",
    width: "97.8%",
    position: "absolute",
  },
  view1: {
    right: "27.98%",
    left: "52.28%",
  },
  child9: {
    backgroundColor: Color.colorMediumturquoise_200,
  },
  view2: {
    top: "12.5%",
    right: "52.93%",
    bottom: "10.33%",
    left: "27.33%",
    width: "19.74%",
    height: "77.17%",
    position: "absolute",
  },
  rectangleIcon: {
    opacity: 0.6,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  child17: {
    top: "57.75%",
  },
  child18: {
    top: "78.87%",
  },
  view3: {
    top: "57.07%",
    bottom: "-34.24%",
    left: "4.34%",
    right: "75.92%",
    height: "77.17%",
  },
  vectorIcon16: {
    height: "15.38%",
    top: "44.23%",
    bottom: "40.38%",
  },
  emojioneflagForAustraliaIcon4: {
    height: "42.31%",
    top: "28.85%",
    bottom: "28.85%",
    left: "4.4%",
    right: "71.43%",
    width: "24.18%",
    maxWidth: "100%",
    position: "absolute",
  },
  aud8: {
    top: "34.62%",
  },
  view4: {
    height: "28.26%",
    bottom: "59.78%",
    top: "11.96%",
    left: "4.34%",
    right: "75.92%",
  },
  dropdown: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    width: 461,
    height: 184,
    overflow: "hidden",
    borderWidth: 1,
  },
});

export default Dropdown;
