import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Image } from "expo-image";
import React, { useState, useContext, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import { themeColors } from "../theme";
import { FitnessItems } from "../Context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { fontSizes, height, iconSizes, width } from "../constants/DimensionFontSizes";
import { mediumShadow } from "../constants/Shadows";
import SlidingText from "../components/SlidingText";
import { AnimatedWrapper } from "../constants/AnimationEntering";

const ItemIconComponent = ({ name, icon }) => (
  <AnimatedWrapper>
  <View style={{flexDirection:'row', marginVertical:7,}}>
    <MaterialCommunityIcons name="check-decagram-outline"  color={themeColors.bgColor(0.9)} size={iconSizes.normal}  />
    <Text style={{fontSize:fontSizes.small, color:'white', marginLeft:10}}>{name}</Text>
  </View>
  </AnimatedWrapper>
)

const ExerciseScreen = ({ route, navigation }) => {
  const {
    completed,
    setCompleted,
    workout,
    setWorkout,
    calories,
    setCalories,
    minutes,
    setMinutes,
    currentExerciseIndex,
    setCurrentExerciseIndex,
  } = useContext(FitnessItems);

  const { exercises } = route.params;
  const [index, setIndex] = useState(currentExerciseIndex);
  const { currentIndex } = route.params;
  const current = exercises[currentExerciseIndex];

  const onSkip = () => {
    if (index < exercises.length - 2) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setIndex(index + 1);
    } else {
      setCurrentExerciseIndex(0);
      setIndex(0);
    }
  };
  const onReset = () => {
    if (index < exercises.length) {
      // setIndex(index * 0);
      const newArray = completed.filter((item) => item !== current.name);
      setCompleted(newArray);
      setMinutes(minutes - 2.5);
      setCalories(calories - 6.3);
      setWorkout(workout - 1);
    }
  };
  const onDone = (id) => {
    if (index < exercises.length) {
      if (index < exercises.length - 1) {
        setIndex(index + 1);
        setCurrentExerciseIndex(currentExerciseIndex + 1);
      }
      setMinutes(minutes + 2.5);
      setCalories(calories + 6.3);
      setWorkout(workout + 1);

      setCompleted((prevCompleted) => {
        if (!prevCompleted.includes(current.name)) {
          return [
            ...prevCompleted,
            { name: current.name, workout_id: id, day: 0 },
          ];
        }
        return prevCompleted;
      });
      // alert("Index:"+index+" completed.length: "+completed.length+" exercises.length: "+exercises.length)
      if (completed.length == exercises.length - 1) {
        // alert("Index:"+index)
        navigation.navigate("WellDone");
      } else {
        navigation.navigate("Rest");
      }
    } else if (index === exercises.length - 1) {
      if (completed.length == exercises.length) {
        navigation.navigate("WellDone");
      }
      // navigation.navigate('Exercise',{exercises})
    }
  };

  return (
    <ScrollView
      style={{
        height: height,
        width:width,
        flex: 1,
        backgroundColor: themeColors.bgColor2(0.8),
        
      }}
    >
      
      <View style={{ height: "100%", flex: 1, }}>
        <Image
          style={{ width: "100%", height: height * 0.6 }}
          source={{
            uri: current.image,
          }}
          />
          <View style={{position: "absolute", bottom: 70, right: -1, width:'100%'}}>
          <SlidingText data={current.health_benefits}/>
          </View>
        <Ionicons
          onPress={() => {
            navigation.goBack();
          }}
          name="arrow-back-outline"
          size={iconSizes.normal}
          color={themeColors.bgColor2(1)}
          style={[{ position: "absolute", top: 20, left: 20 },mediumShadow]}
        />
      </View>
     
      {/* Exercises */}
      <AnimatedWrapper>
      <View
        style={[
          styles.flexWithCenter,
          mediumShadow,
          {
            
            marginHorizontal: 15,
            marginVertical: -30,
            padding: 10,
            paddingVertical: 15,
            backgroundColor: themeColors.bgColor(1),
            borderRadius: 10,
          },
        ]}
      >
       <View style={{flexDirection:'row', alignItems:'center'}}>
       <MaterialCommunityIcons name="lightning-bolt" size={iconSizes.normal} 
      style={styles.cardIcon} color={themeColors.bgColor2(0.9)}
      />
        <Text
          style={[
            styles.headingB,
            { marginVertical: 5, fontSize: fontSizes.title+3, color: themeColors.homeText },
          ]}
        >
          {current.name}
        </Text>
        <MaterialCommunityIcons name="lightning-bolt" size={iconSizes.normal} 
      style={styles.cardIcon} color={themeColors.bgColor2(0.9)}
      />
       </View>
        <Text
          style={[
            styles.headingB,
            { marginVertical: 10, fontSize: fontSizes.title-7, color: themeColors.homeText },
          ]}
        >
          x{current.sets} Reps
        </Text>

        <View
          style={{
            width:'50%',
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          {
            //Done Button
            !completed.includes(current.name) ? (
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={()=>onDone(current.id)}
              >
                <MaterialCommunityIcons
                  name="checkbox-marked-circle-outline"
                  size={iconSizes.big0}
                  color={themeColors.homeText}
                />
              </TouchableOpacity>
            ) : (
              //Reset Button
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={onReset}
              >
                <MaterialCommunityIcons
                  name="restart"
                  size={iconSizes.big0}
                  color={themeColors.homeText}
                />
              </TouchableOpacity>
            )
          }
          {/* Skip Button */}
          <TouchableOpacity style={{ alignItems: "center" }} onPress={onSkip}>
            <MaterialCommunityIcons
              name="skip-next-circle"
              style={{ marginLeft: 15 }}
              size={iconSizes.big0}
              color={themeColors.homeText}
            />
          </TouchableOpacity>
      
        </View>
        <View>
       
           
        </View>
      </View>
      </AnimatedWrapper>
      <View style={{ marginTop:50, width:'90%', alignSelf:"center", paddingVertical: 10, 
            marginBottom:20,}}>
        <Text style={{color:themeColors.bgColor(1), fontSize:fontSizes.large, fontWeight:'700', marginVertical:7}}>How to do</Text>
      <FlatList
        data={current.process_description} 
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => (
          <ItemIconComponent name={item}/>
        )}
      />
      </View>
    </ScrollView>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  headingB: {
    fontWeight: "900",

    // fontFamily: 'Playfair Display',
    letterSpacing: 1,

    textTransform: "uppercase",
  },

  flexWithCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
