import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState, useContext } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import { themeColors } from '../theme'
import { FitnessItems } from "../Context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ExerciseScreen = ({ route, navigation }) => {
    const { completed, setCompleted, workout,
        setWorkout, calories, setCalories, minutes, setMinutes, currentExerciseIndex, setCurrentExerciseIndex } =
        useContext(FitnessItems);

    const { exercises } = route.params;
    const [index, setIndex] = useState(currentExerciseIndex);
    const { currentIndex } = route.params;
    const current = exercises[currentExerciseIndex];

    const onSkip = () => {
        if (index < exercises.length - 2) {
            setCurrentExerciseIndex(currentExerciseIndex + 1);
            setIndex(index + 1)
        } else {
            setCurrentExerciseIndex(0);
            setIndex(0);
        }
    }
    const onReset = () => {
        if (index < exercises.length) {
            // setIndex(index * 0);
            const newArray = completed.filter((item) => item !== current.name);
            setCompleted(newArray)
            setMinutes(minutes - 2.5);
            setCalories(calories - 6.30);
            setWorkout(workout - 1);

        }
    }
    const onDone = () => {
        if (index < exercises.length) {
            if (index < exercises.length - 1) {
                setIndex(index + 1);
                setCurrentExerciseIndex(currentExerciseIndex + 1);
            }
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.30);
            setWorkout(workout + 1);


            setCompleted((prevCompleted) => {
                if (!prevCompleted.includes(current.name)) {
                    return [...prevCompleted, {name:current.name,workout_id:id,day:0}];
                }
                return prevCompleted;
            });
            // alert("Index:"+index+" completed.length: "+completed.length+" exercises.length: "+exercises.length)
            if(completed.length==exercises.length-1){
                // alert("Index:"+index)
                navigation.navigate('WellDone')
            }else{
                navigation.navigate('Rest');
            }
        } else if (index === exercises.length - 1) {
           
                if(completed.length==exercises.length){
                    navigation.navigate('WellDone')
                }
                // navigation.navigate('Exercise',{exercises})
            }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.bgColor2(0.8), }}>
            <View>
                <StatusBar
                    backgroundColor={themeColors.bgColor(0.7)}
                    barStyle="light-content"
                />
                <Image
                    style={{ width: "100%", height: 350, }}
                    source={{
                        uri: current.image,
                    }} />
                <Ionicons onPress={() => {
                    navigation.goBack();
                }} name="arrow-back-outline" size={28} color={themeColors.bgColor(0.7)} style={{ position: 'absolute', top: 20, left: 20 }} />
            </View>
            {/* Exercises */}
            <View style={[styles.flexWithCenter, { marginHorizontal: 15, marginVertical: -15, padding: 10, paddingVertical: 15, backgroundColor: themeColors.bgColor(0.7), borderRadius: 10 }]}>
                <Text style={[styles.headingB, { marginVertical: 5, fontSize: 33, color: themeColors.homeText, }]}>{current.name}</Text>
                <Text style={[styles.headingB, { marginVertical: 10, fontSize: 38, color: themeColors.homeText, }]}>x{current.sets}</Text>


                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 'auto' }}>
                    {
                        //Done Button
                        (!completed.includes(current.name)) ? (
                            <TouchableOpacity style={{ alignItems: 'center', }} onPress={onDone}>
                                <Ionicons name="ios-checkmark-done-circle-sharp" size={50} color={themeColors.homeText} />
                            </TouchableOpacity>
                        ) : (
                            //Reset Button
                            <TouchableOpacity style={{ alignItems: 'center', }} onPress={onReset}>
                                <MaterialCommunityIcons name="restart" size={50} color={themeColors.homeText} />
                            </TouchableOpacity>
                        )

                    }


                    {/* Skip Button */}
                    <TouchableOpacity style={{ alignItems: 'center', }} onPress={onSkip}>
                        <MaterialCommunityIcons
                            name="skip-next-circle" style={{ marginLeft: 15 }} size={50} color={themeColors.homeText} />

                    </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView>
    )
}

export default ExerciseScreen

const styles = StyleSheet.create({
    headingB: {
        fontWeight: '900',

        // fontFamily: 'Playfair Display',
        letterSpacing: 1,

        textTransform: 'uppercase',

    },

    flexWithCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})