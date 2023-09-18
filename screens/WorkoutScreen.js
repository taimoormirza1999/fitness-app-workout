import React,{useContext} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar, TouchableOpacity } from 'react-native';
import WorkoutExerciseCard from '../components/WorkoutExerciseCard';
import Button from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import { themeColors } from '../theme';
import { AntDesign } from '@expo/vector-icons';
import { FitnessItems } from "../Context";

const WorkoutScreen = ({ route, navigation }) => {
  
    const { id, image, exercises, description } = route.params;
    const onPress = () => {
        navigation.navigate('Exercise', {
            exercises: exercises,
        });
    };
    const {  completed, setCompleted,currentChallange, setcurrentChallange }=
    useContext(FitnessItems);

    // setcurrenChallange((prevItem)=>{   if (!prevCompleted.includes(current.name)) {
    //     return [...prevCompleted, {name:current.name,workout_id:id,day:0}];
    // }
    // return prevCompleted;})
    setcurrenChallange([{challange_d:id,B:name,day_completed:0}])
    // const newArray=completed.filter((item)=>item.id!==id);
    // setcurrenChallange(newArray);
    return (
        <ScrollView style={{ backgroundColor: themeColors.bgColor2(0.8), position: 'relative' }}>
            <View>
                <StatusBar
                    backgroundColor={themeColors.bgColor(0.7)}
                    barStyle="light-content"
                />
                <Image
                    style={{ width: "100%", height: 220 }}
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
                    style={{ position: 'absolute', top: 20, left: 20, color: themeColors.bgColor(0.7) }}
                />
                <View style={{ position: 'absolute', bottom: 10, left: 20, }}>
                <Text style={[styles.textSemiHeading, {  color: themeColors.bgColor(0.8) }]}>Day :</Text>
                    <Text style={[styles.textSemiHeading, {  color: themeColors.bgColor(0.8) }]}>{description}</Text>
                </View>
                <TouchableOpacity style={{  position: 'absolute',
    bottom: 10,
    right: 15, }} onPress={onPress}>
          {/* Wrap the AntDesign icon in a View with position: 'absolute' */}
          
            <AntDesign name="playcircleo" size={45} color={themeColors.bgColor(0.8)} />
          
        </TouchableOpacity>
            </View>

            {/* Exercises */}
            <View style={{ marginHorizontal: 0, marginVertical: 5 }}>
                {exercises.map((item) => (
                    <WorkoutExerciseCard key={item.id} data={item} />
                ))}

            </View>
        </ScrollView>
    );
}

export default WorkoutScreen;

const styles = StyleSheet.create({
    button: {},
    textSemiHeading: {
        fontWeight: '800',
        fontSize: 25,
        color: themeColors.text,
    },
    playButton: {
        position: 'absolute',
        bottom: 10,
        right: 15,
    },
});
