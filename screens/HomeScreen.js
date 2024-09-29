import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from "react-native";
import FitnessCard from "../components/FitnessCard";
import fitnessData from "../data/fitness2";
import { themeColors } from "../theme";
import { FitnessItems } from "../Context";
import { fontSizes, iconSizes, width } from "../constants/DimensionFontSizes";
import { mediumShadow } from "../constants/Shadows";
import { Image } from "expo-image";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
 
} from "@expo/vector-icons";
import { AnimatedWrapper } from "../constants/AnimationEntering";
import AnnouncementModel from "../components/AnnouncementModel";
import NotificationBell from "../components/svgs/NotificationBell";

const InfoCard = ({ label, value, icon }) => {
  return (
    <View style={[styles.flexWithCenter, styles.homecardbanner, mediumShadow]}>
      <Text style={styles.textSemiHeading}>{value}</Text>
     <AnimatedWrapper >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {icon == 1 ? (
          <FontAwesome6
            name="dumbbell"
            size={iconSizes.normal - 3}
            color="black"
          />
        ) : icon == 2 ? (
          <FontAwesome6
            name="nutritionix"
            size={iconSizes.normal - 3}
            color="black"
          />
        ) : (
          <MaterialCommunityIcons
            name="timer-sand"
            size={iconSizes.normal - 3}
            color="black"
          />
        )}

        <Text style={[styles.text, { marginTop: 2, marginLeft:2 }]}>{label || 0}</Text>
      </View>
      </AnimatedWrapper>
    </View>
  );
};
const HomeScreen = () => {
  const { workout, calories, minutes } = useContext(FitnessItems);
  const data = [
    { label: "Workouts", value: workout, icon: 1 },
    { label: "Kcal", value: calories.toFixed(2), icon: 2 },
    { label: "Mins", value: minutes, icon: 3 },
  ];
  const [notificationModal, setNotificationModal] = useState(false);

  const handleNotification=() => {setNotificationModal(!notificationModal); };
  return (
    <ScrollView style={styles.container}>
      <View>
        <View
          style={{
            height: 220,
            width: "100%",
            backgroundColor: themeColors.bgColor(0.9),
            padding: 10,
          }}
        >
          {/* <AnimatedWrapper> */}
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <Text
            style={[styles.headingB, { marginTop: 15, marginHorizontal: 15 }]}
          >
            Home Workout <FontAwesome5 name="dumbbell" size={24} color="black" />
          </Text>
          <TouchableOpacity
        onPress={handleNotification}
        style={[mediumShadow, styles.notification]}
      >
        {/* <Text style={[styles.logoutText,{color:'white'}]}>Logout</Text> */}
        {/* <NotificationBellSVG width={width*0.075}  /> */}
        <NotificationBell/>
      </TouchableOpacity>
          </View>
          {/* </AnimatedWrapper> */}
          {/* 3 sections */}

          <View
            style={[
              styles.flexWithSpaceBetween,
              { marginTop: 15, marginHorizontal: 15 },
            ]}
          >
            {data.map((item, index) => (
              
              <InfoCard
                key={index}
                label={item.label}
                icon={item.icon}
                value={item.value}
              />
            
            ))}
          </View>
          {/* Image */}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={[
                {
                  width: "95%",
                  height: width * 0.35,
                  marginTop: 10,
                  borderRadius: 7,
                },
                mediumShadow,
              ]}
              source={{
                uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
              }}
            />
            <Text
              style={{
                position: "absolute",
                top: "50%",
                color: themeColors.bgColor(0.8),
                fontWeight: "900",
                fontSize: fontSizes.large2 + 5,
              }}
            >
              Workout Plans
            </Text>
          </View>
        </View>
        {/* FitnessCards */}
        <View style={{ marginTop: width * 0.15 }}>
          <View
            style={[
              {
                marginTop: width * 0.1,
                marginHorizontal: 10,
                marginBottom: 15,
              },
              mediumShadow,
            ]}
          >
            {fitnessData.map((item, index) => (
              <FitnessCard key={item.id} data={item} />
            ))}
          </View>
        </View>
      </View>

      <AnnouncementModel modalVisible={notificationModal} setModalVisible={setNotificationModal}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: themeColors.bgColor2(0.9) },
  homecardbanner: {
    width: "32%",
    backgroundColor: themeColors.bgColor2(0.2),
    padding: 10,
    paddingVertical: 15,
    marginBottom: 5,
    borderRadius: 10,
  },
  flexWithSpaceBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexWithCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headingB: {
    fontWeight: "900",
    fontSize: fontSizes.large2 + 3,
    fontFamily: "Playfair Display",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: themeColors.homeText,
  },
  textSemiHeading: {
    fontWeight: "800",
    fontSize: fontSizes.large2 + 5,
    color: themeColors.homeText,
  },
  text: {
    fontSize: fontSizes.small,
    fontWeight: "700",
    textTransform: "uppercase",
    color: themeColors.homeText,
  },
});

export default HomeScreen;
