import { StyleSheet, Text, View, Image,TouchableOpacity,Platform  } from 'react-native'
import React,{useContext} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';    
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme'
import { FitnessItems } from "../Context";

const WorkoutExerciseCard = ({ data }) => {
    const {  completed, setCompleted }=
        useContext(FitnessItems);
    const navigation=useNavigation();
    const onPress = () => navigation.navigate('Exercise', {
        id: data.id,
        name: data.name,
        sets: data.sets,
        image:data.image,
    });

    return (
        // <TouchableOpacity onPress={onPress} key={data.id} style={{ flex:1 }}>
            <View style={{ display:'flex',flexDirection:'row',alignItems:'center' , }}>
                <Image
                style={[shadowStyle,{ width: 100, height: 100, margin: 10, borderRadius:10 }]}
                source={{
                    uri: data.image,
                }}
            />
           
         <View style={{ marginLeft:10 }}>
             <View style={{ display:"flex",flexDirection:'row' }}>
             <Text style={styles.textSemiHeading}>{data.name}</Text> 
                {(completed.includes(data.name))&&(
                    <MaterialCommunityIcons name="check-circle-outline" style={{marginLeft:10}}  size={24} color={themeColors.bgColor(0.8)} />
                )}
             </View>
             <Text style={styles.text}>x{data.sets}</Text>
         </View>
            </View>
        // </TouchableOpacity>
    )
}

export default WorkoutExerciseCard
const shadowStyle = Platform.select({
    ios: {
      shadowColor: 'black',
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
            fontWeight: '600',
            fontSize: 25,
            color: themeColors.bgColor(0.8),
        },
        text: {
          
            fontSize: 22,
            textTransform: 'uppercase',
           color: themeColors.bgColor(0.5),
        },
})