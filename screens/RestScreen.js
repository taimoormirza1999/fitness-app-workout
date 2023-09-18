import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from '../theme'
import { Ionicons } from '@expo/vector-icons';
const RestScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(1);
// alert(currentIndex)
  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };
  useEffect(() => {
    startTime();
    //clean up
    return () => clearTimeout(timer);
  });
  return (
    <SafeAreaView style={{flex:1, backgroundColor:themeColors.bgColor2(0.8), }}>
      <Image
        // resizeMode="contain"
        source={{
          uri: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        }}
        style={{ width: "100%", height: 420 }}
      />

      <Text
        style={[styles.textcolor,{
          fontSize: 30,
          fontWeight: "900",
          marginTop: 30,
          textAlign: "center",
        }]}
      >
        TAKE A BREAK!
      </Text>

      <Text
        style={[styles.textcolor,{
          fontSize: 45,
          fontWeight: "800",
          marginTop: 20,
          textAlign: "center",
        }]}
      >
       <Ionicons name="hourglass-outline" size={45} color={themeColors.bgColor(0.8)} /> {timeLeft}
      </Text>
    </SafeAreaView>
  );
};

export default RestScreen;

const styles = StyleSheet.create({
    textcolor:{color: themeColors.bgColor(0.8),}
});