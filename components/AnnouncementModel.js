import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import {  getTextAlignment, height, width } from "../constants/DimensionFontSizes";
import { AntDesign } from "@expo/vector-icons";
// import MyButton from "../MyButton";
import { mediumShadow } from "../constants/Shadows";
import { themeColors } from "../theme";
import Button from "./Button";


const AnnouncementModel = ({
  handleSubmit,
  modalVisible,
  setModalVisible
}) => {

//   const [modalVisible, setModalVisible] = useState(visible);
  const [checked, setChecked] = useState(false);


  // State to track the current index of the announcement
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcementData = [
    {
      type: "Reminder",
      title: "Weight Loss Challenge Reminder",
      body: "Don't forget to track your progress and complete today's session in the weight loss challenge!",
      photo: "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: themeColors.bgColor(0.9),
    },
    {
      type: "Report",
      title: "Core Muscle Training Challange",
      body: "Your weekly report on the core muscle training challenge is ready! Check your stats and progress now.",
      photo: "https://plus.unsplash.com/premium_photo-1663050861006-5249d781336f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#e69f00",
    },
    {
      type: "Offer",
      title: "Special Offer for Core Muscle Training",
      body: "Unlock exclusive exercises and tips for core muscle training with a limited-time offer! Start today.",
      photo: "https://plus.unsplash.com/premium_photo-1726096576282-efb80d87c7b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "#d33e2e",
    },
  ];
  

  // Handler for the "Next" button
  const handleNext = () => {
    if (currentIndex < announcementData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
     
    }
  };
  const handlePrev= () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
     
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, mediumShadow, ]}>
            <TouchableOpacity style={styles.icon}>
              <AntDesign
                name="close"
                size={24}
                color={themeColors.bgColor(0.9)}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </TouchableOpacity>

            <ScrollView style={{}} showsVerticalScrollIndicator={false}>
              {/* Display the announcement data */}
            
        
             <View style={{flex:1}}>
             <Image
               source={{uri:announcementData[currentIndex].photo}}
                style={[{ height: width * 0.53,
                    width: "100%",
                    resizeMode: "contain",
                  
                    marginTop:  width * 0.12,
                    marginBottom: 15,
                    borderRadius: 10,
                    alignSelf: "center", }]}
              />
              <Text
                style={[
                   ,styles.heading,
                  { color: themeColors.bgColor(0.9) },
                ]}
              >
                {(announcementData[currentIndex].title)}
              </Text>
              <Text style={[,styles.modalText ]}>
                {(announcementData[currentIndex].body)}
              </Text>

              {/* Disable the button at the last index */}
              <View style={{flexDirection: "row", justifyContent:'space-between' }}>
               <View  style={{flex:0.5, marginHorizontal:10}}>
               {/* <MyButton
                  // disabled={!checked || currentIndex >= announcementData.length - 1}
                  onPress={handlePrev}
                  text={t("previous")}
                  color={announcementData[currentIndex].color}
                  textColor="white"
                  navigationIcon="previous"
                  /> */}
               <Button title="Previous"  onPress={handlePrev} color={themeColors.bgColor2(0.9)}></Button>
               </View>
               <View style={{flex:0.5, marginHorizontal:10}}>
                  <Button title="Next" color={themeColors.bgColor2(0.9)} onPress={handleNext}></Button>
               {/* <MyButton
                  // disabled={!checked || currentIndex >= announcementData.length - 1}
                  onPress={handleNext}
                  text={t("next")}
                  color={announcementData[currentIndex].color}
                  textColor="white"
                  navigationIcon="next"
                /> */}
                
               </View>
              </View>
             </View>
              <View style={{ marginTop: 10 }}></View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    // paddingTop: "10%",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    borderTopColor: themeColors.bgColor(0.9),
    borderTopWidth: height * 0.02,
    backgroundColor: themeColors.bgColor2(0.8),
    borderRadius: 20,
    paddingHorizontal: width * 0.05,
    paddingBottom:25,
    },
  icon: { position: "absolute", top: 10, right: 10 },
  modalText: {
    textAlign: "center",
    lineHeight: 24,
    fontFamily: "OpenSans-SemiBold",
    color:'white',
    fontSize: width * 0.035,
    marginVertical: 5,
  },
  heading: {
    marginVertical: 5,
    textAlign: "center",
    fontFamily: "OpenSans-Bold",
    lineHeight: 24,
    fontSize: width * 0.046,
    fontWeight: "bold",
    paddingBottom: 12,
  },
  imageIcon: {
    height: height * 0.13,
    width: "100%",
    resizeMode: "contain",
    marginVertical: width * 0.08,
    marginBottom: 15,
    alignSelf: "center",
  },
});

export default AnnouncementModel;
