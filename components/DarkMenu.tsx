import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DarkMenu = () => {
  return (
    <View style={styles.darkMenu}>
      <View style={[styles.bill, styles.billBorder]}>
        <View style={[styles.view, styles.viewPosition1]}>
          <Image
            style={[styles.child, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-29.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Text style={[styles.bill1, styles.billTypo]}>Bill</Text>
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
          <View style={[styles.name, styles.namePosition]}>
            <Text style={[styles.rent, styles.gasPosition]}>rent</Text>
            <Text style={[styles.internet, styles.gasPosition]}>internet</Text>
            <Text style={[styles.electrivity, styles.gasPosition]}>
              electrivity
            </Text>
            <Text style={[styles.gas, styles.gasPosition]}>gas</Text>
            <Text style={[styles.water, styles.gasPosition]}>water</Text>
          </View>
          <View style={styles.view1}>
            <Text style={[styles.rent, styles.gasPosition]}>330$</Text>
            <Text style={[styles.internet, styles.gasPosition]}>79$</Text>
            <Text style={[styles.electrivity, styles.gasPosition]}>300$</Text>
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
        <View style={[styles.property11, styles.propertyLayout]}>
          <Image
            style={[styles.property11Child, styles.btnIconPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-16.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition2]}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Text style={[styles.bill2, styles.billTypo]}>Bill</Text>
          <View style={[styles.property11Item, styles.gasPosition]} />
        </View>
      </View>
      <View style={[styles.income, styles.billBorder]}>
        <View style={[styles.view2, styles.view2Layout]}>
          <Image
            style={[styles.child, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-29.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Text style={[styles.bill1, styles.billTypo]}>Income</Text>
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
          <View style={[styles.view3, styles.viewPosition]}>
            <Text style={[styles.rent, styles.gasPosition]}>1800$</Text>
            <Text style={[styles.internet, styles.gasPosition]}>50$</Text>
            <Text style={[styles.electrivity, styles.gasPosition]}>100$</Text>
            <Text style={[styles.gas, styles.gasPosition]}>420$</Text>
            <Text style={[styles.water, styles.gasPosition]}>950$</Text>
          </View>
          <View style={[styles.week2, styles.namePosition]}>
            <Text style={[styles.rent, styles.gasPosition]}>week</Text>
            <Text style={[styles.internet, styles.gasPosition]}>once</Text>
            <Text style={[styles.electrivity, styles.gasPosition]}>month</Text>
            <Text style={[styles.gas, styles.gasPosition]}>month</Text>
            <Text style={[styles.water, styles.gasPosition]}>week</Text>
          </View>
        </View>
        <View style={[styles.property111, styles.view2Layout]}>
          <Image
            style={[styles.property11Child, styles.btnIconPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-16.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Image
            style={[styles.vectorIcon5, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Text style={[styles.bill2, styles.billTypo]}>Income</Text>
          <View style={[styles.property11Item, styles.gasPosition]} />
        </View>
      </View>
      <View style={[styles.dept, styles.billBorder]}>
        <View style={[styles.view4, styles.viewPosition1]}>
          <Image
            style={[styles.inner, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-291.png")}
          />
          <Image
            style={[styles.vectorIcon6, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Text style={[styles.dept1, styles.billTypo]}>Dept</Text>
          <Image
            style={[styles.tableIcon, styles.gasPosition]}
            contentFit="cover"
            source={require("../assets/table1.png")}
          />
          <Image
            style={styles.btnIconPosition}
            contentFit="cover"
            source={require("../assets/btn.png")}
          />
          <View style={[styles.name2, styles.name2Position]}>
            <Text style={[styles.rent, styles.gasPosition]}>car</Text>
            <Text style={[styles.phone, styles.gasPosition]}>phone</Text>
            <Text style={[styles.tuitionFee, styles.gasPosition]}>
              tuition fee
            </Text>
          </View>
          <View style={[styles.view5, styles.name2Position]}>
            <Text style={[styles.rent, styles.gasPosition]}>300$</Text>
            <Text style={[styles.phone, styles.gasPosition]}>160$</Text>
            <Text style={[styles.tuitionFee, styles.gasPosition]}>1000$</Text>
          </View>
          <View style={[styles.week5, styles.name2Position]}>
            <Text style={[styles.rent, styles.gasPosition]}>fortnight</Text>
            <Text style={[styles.phone, styles.gasPosition]}>month</Text>
            <Text style={[styles.tuitionFee, styles.gasPosition]}>week</Text>
          </View>
        </View>
        <View style={[styles.property112, styles.propertyLayout]}>
          <Image
            style={[styles.property11Child, styles.btnIconPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-16.png")}
          />
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector4.png")}
          />
          <Image
            style={[styles.vectorIcon8, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector7.png")}
          />
          <Text style={[styles.bill2, styles.billTypo]}>Dept</Text>
          <View style={[styles.property11Item, styles.gasPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  billBorder: {
    overflow: "hidden",
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
    borderWidth: 1,
  },
  viewPosition1: {
    left: "6.01%",
    right: "6.01%",
  },
  childPosition: {
    width: 292,
    left: 1,
    top: 51,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  billTypo: {
    textAlign: "left",
    color: Color.dayCard,
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
    position: "absolute",
  },
  weekPosition: {
    right: "4.78%",
    width: "22.87%",
    left: "72.35%",
  },
  propertyLayout: {
    height: "16.3%",
    width: "87.99%",
    position: "absolute",
  },
  btnIconPosition: {
    height: 34,
    width: 34,
    left: 249,
    top: 9,
    position: "absolute",
  },
  vectorIconPosition2: {
    bottom: "30.77%",
    top: "30.77%",
    height: "38.46%",
  },
  view2Layout: {
    width: "86.94%",
    position: "absolute",
  },
  vectorIconPosition1: {
    right: "84.81%",
    width: "7.34%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "7.85%",
    overflow: "hidden",
    position: "absolute",
  },
  viewPosition: {
    right: "39.25%",
    width: "16.72%",
    left: "44.03%",
  },
  vectorIconPosition: {
    right: "86.01%",
    width: "6.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    left: "7.85%",
    overflow: "hidden",
    position: "absolute",
  },
  name2Position: {
    bottom: "4.23%",
    top: "40.14%",
    height: "55.63%",
    position: "absolute",
  },
  child: {
    height: 148,
  },
  vectorIcon: {
    height: "10.05%",
    top: "8.04%",
    bottom: "81.91%",
    left: "7.85%",
    right: "85.32%",
    width: "6.83%",
    maxHeight: "100%",
    position: "absolute",
  },
  bill1: {
    left: "18.43%",
    color: Color.dayCard,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    position: "absolute",
    top: "8.54%",
  },
  tableIcon: {
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rent: {
    top: "0%",
    left: "0%",
    textAlign: "left",
    color: Color.dayCard,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  internet: {
    top: "66.18%",
    textAlign: "left",
    color: Color.dayCard,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  electrivity: {
    top: "86.03%",
    textAlign: "left",
    color: Color.dayCard,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  gas: {
    top: "44.12%",
    textAlign: "left",
    color: Color.dayCard,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  water: {
    top: "22.06%",
    textAlign: "left",
    color: Color.dayCard,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  name: {
    width: "25.94%",
    right: "66.21%",
    left: "7.85%",
  },
  view1: {
    width: "14.33%",
    right: "41.64%",
    left: "44.03%",
    bottom: "3.02%",
    top: "28.64%",
    height: "68.34%",
    position: "absolute",
  },
  week: {
    left: "72.35%",
    bottom: "3.02%",
    top: "28.64%",
    height: "68.34%",
    position: "absolute",
  },
  view: {
    height: "62.38%",
    top: "5.02%",
    bottom: "32.6%",
    width: "87.99%",
    left: "6.01%",
    right: "6.01%",
    position: "absolute",
  },
  property11Child: {
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "7.85%",
    right: "85.32%",
    width: "6.83%",
    position: "absolute",
  },
  bill2: {
    top: "32.69%",
    left: "18.43%",
    color: Color.dayCard,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    position: "absolute",
  },
  property11Item: {
    borderRadius: Border.br_6xs,
    borderStyle: "solid",
    borderColor: Color.colorMediumturquoise_100,
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    left: "0%",
    top: "0%",
    borderWidth: 1,
  },
  property11: {
    top: "75.55%",
    right: "4.8%",
    bottom: "8.15%",
    left: "7.21%",
  },
  bill: {
    top: 0,
    height: 319,
    width: 333,
    left: 4,
    overflow: "hidden",
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  vectorIcon3: {
    height: "10.8%",
    bottom: "80.65%",
    top: "8.54%",
  },
  name1: {
    width: "30.72%",
    right: "61.43%",
    left: "7.85%",
  },
  view3: {
    bottom: "3.02%",
    top: "28.64%",
    height: "68.34%",
    position: "absolute",
  },
  week2: {
    width: "17.06%",
    right: "10.58%",
    left: "72.35%",
  },
  view2: {
    height: "62.78%",
    top: "6.31%",
    right: "7.12%",
    bottom: "30.91%",
    left: "5.93%",
  },
  vectorIcon5: {
    height: "41.35%",
    bottom: "25.96%",
    top: "32.69%",
  },
  property111: {
    height: "16.4%",
    top: "77.29%",
    right: "5.93%",
    bottom: "6.31%",
    left: "7.12%",
  },
  income: {
    top: 742,
    left: 0,
    height: 317,
    overflow: "hidden",
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
    width: 337,
  },
  inner: {
    height: 91,
  },
  vectorIcon6: {
    height: "14.08%",
    top: "11.27%",
    bottom: "74.65%",
  },
  dept1: {
    top: "11.97%",
    left: "18.43%",
    color: Color.dayCard,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
    position: "absolute",
  },
  phone: {
    top: "75.95%",
    textAlign: "left",
    color: Color.dayCard,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  tuitionFee: {
    top: "37.97%",
    textAlign: "left",
    color: Color.dayCard,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.body1Normal_size,
  },
  name2: {
    width: "26.62%",
    right: "65.53%",
    left: "7.85%",
  },
  view5: {
    right: "39.25%",
    width: "16.72%",
    left: "44.03%",
  },
  week5: {
    left: "72.35%",
    right: "4.78%",
    width: "22.87%",
  },
  view4: {
    height: "44.51%",
    top: "31.35%",
    bottom: "24.14%",
    width: "87.99%",
    left: "6.01%",
    right: "6.01%",
    position: "absolute",
  },
  vectorIcon8: {
    bottom: "30.77%",
    top: "30.77%",
    height: "38.46%",
  },
  property112: {
    top: "6.27%",
    bottom: "77.43%",
    left: "6.01%",
    right: "6.01%",
  },
  dept: {
    top: 361,
    height: 319,
    width: 333,
    left: 4,
    overflow: "hidden",
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  darkMenu: {
    height: 1059,
    width: 337,
  },
});

export default DarkMenu;
