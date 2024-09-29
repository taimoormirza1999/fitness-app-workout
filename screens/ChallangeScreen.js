import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,

  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Image } from 'expo-image';
import WorkoutChallangeCard from "../components/WorkoutChallangeCard";
import Button from "../components/Button";
import { Ionicons } from "@expo/vector-icons";
import { themeColors } from "../theme";
import { AntDesign } from "@expo/vector-icons";
import { FitnessItems } from "../Context";
import { fontSizes, iconSizes, width } from "../constants/DimensionFontSizes";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ChallangeScreen = ({ route, navigation }) => {
  const { id, image, challanges, description, completedDays } = route.params;
  const [completeDays, setCompleteDays] = useState(completedDays);
  const onPress = () => {
    navigation.navigate("Exercise", {
      exercises: challanges[0].excersises,
    });
  };
  const { completed, setCompleted, currentChallange, setcurrentChallange } =
    useContext(FitnessItems);

//   setcurrentChallange((prevItem)=>{   if (!prevCompleted.includes(current.name)) {
//       return [...prevCompleted, {name:current.name,workout_id:id,day:0}];
//   }
//   return prevCompleted;})
//   setcurrenChallange([{challange_d:id,B:name,day_completed:0}])
//   const newArray=completed.filter((item)=>item.id!==id);
//   setcurrenChallange(newArray);
  return (
    <ScrollView
      style={{
        backgroundColor: themeColors.bgColor2(0.9),
        position: "relative",
      }}
    >
      <View>
      
        <Image
          style={{ width: "100%", height: width * 0.7 }}
          source={{
            uri: image,
          }}
        />
        <Ionicons
          onPress={() => {
            navigation.goBack();
          }}
          name="arrow-back-outline"
          size={28}
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            color: themeColors.bgColor(0.7),
          }}
        />
        <View style={{ position: "absolute", alignItems:'center',bottom: 15, left: 10,flexDirection:'row' }}>
        <View style={{flex:0.9, flexDirection:'row', alignItems:'center'}}>
        <MaterialCommunityIcons name="lightning-bolt" size={iconSizes.normal} 
                style={styles.cardIcon} color={themeColors.bgColor(0.9)}
                />
        <Text
            style={[
              styles.textSemiHeading,
              { color: themeColors.bgColor(0.8),},
            ]}
          >
            {description}
          </Text>
        </View>
          <TouchableOpacity
          style={{flex:0.2, paddingRight:5}}
          onPress={onPress}
        >
          <AntDesign
            name="playcircleo"
            size={iconSizes.big0}
            color={themeColors.bgColor(0.8)}
          />
        </TouchableOpacity>
        </View>
       
      </View>

      {/* Challanges */}
      <View style={{ marginHorizontal: 0, marginVertical: 5 }}>
        {challanges[0]?.excersises?.map((item) => (
            // <Text style={{color:'red', fontSize:fontSizes.title+7}}>{item.name}</Text>
          <WorkoutChallangeCard key={item.id} data={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ChallangeScreen;

const styles = StyleSheet.create({
  button: {},
  textSemiHeading: {
    fontWeight: "800",
    fontSize: fontSizes.title,
    color: themeColors.text,
  },
  playButton: {
    position: "absolute",
    bottom: 10,
    right: 15,
  },
});
