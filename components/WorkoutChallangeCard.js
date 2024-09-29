import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from "react-native";
import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";
import { FitnessItems } from "../Context";
import { fontSizes, iconSizes, width } from "../constants/DimensionFontSizes";
import { AnimatedWrapper } from "../constants/AnimationEntering";

const WorkoutChallangeCard = ({ data }) => {
  const { completed, setCompleted } = useContext(FitnessItems);
  const navigation = useNavigation();
  const onPress = () => {
    alert("");
    // navigation.navigate('Exercise', {
    //     id: data.id,
    //     name: data.name,
    //     sets: data.sets,
    //     image:data.image,
    // }
    // );
  };

  return (
    //     <ImageBackground   source={{ uri: 'https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' }}
    //     style={{  flex: 1,
    //   resizeMode: 'cover', }} >
    <AnimatedWrapper>
    <TouchableOpacity onPress={onPress} key={data.id} style={{ flex: 1 }}>
      <View 
        style={[
          { display: "flex", flexDirection: "row", alignItems: "center" },
          styles.cardContainer,
        ]}
      >
        <Image
          style={[
            shadowStyle,
            { width: width*0.27, height: width*0.24, margin: 10, borderRadius: 5 },
          ]}
          source={{
            uri: data.image,
          }}
        />

        <View style={{ marginLeft: 10 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ width: width * 0.5 }}>
              <Text style={styles.textSemiHeading}>{data.name}</Text>
            </View>
            {completed.includes(data.name) && (
              <MaterialCommunityIcons
                name="check-circle-outline"
                style={{ marginLeft: 10 }}
                size={24}
                color={themeColors.bgColor(0.8)}
              />
            )}
          </View>
          <View style={{flexDirection:'row',marginTop:20,}}>
          <MaterialCommunityIcons name="dumbbell" style={{marginRight:10}} size={iconSizes.normal} color={themeColors.bgColor(1)} />

<Text style={[styles.text, {}]}>
  x{data.sets}</Text>
          </View>
          
        </View>
      </View>
    </TouchableOpacity>
    </AnimatedWrapper>
    // </ImageBackground>
  );
};

export default WorkoutChallangeCard;
const shadowStyle = Platform.select({
  ios: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  android: {
    elevation: 4,
  },
});
const styles = StyleSheet.create({
  textSemiHeading: {
    fontWeight: "600",
    fontSize: fontSizes.title - 6.5,
    color: themeColors.bgColor(0.8),
    // maxWidth: '99%' ,
    fontWeight: "700",
  },
  text: {
    fontSize: fontSizes.large2,
    textTransform: "uppercase",
    // fontFamily: 'PlayfiarDisplay-Regular',
    color: themeColors.bgColor(0.9),
    fontWeight:'700'
  },
  cardContainer: {
    width: "95%",
    alignSelf: "center",
    borderColor: themeColors.bgColor(0.8),
    borderWidth: 0.9,
    borderRadius: 5,
    paddingHorizontal: width * 0.02,
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
