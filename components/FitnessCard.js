import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import { Image } from 'expo-image';
import { AnimatedWrapper } from '../constants/AnimationEntering';
const FitnessCard = ({ data }) => {
    const navigation = useNavigation();
    const onPress = () => navigation.navigate('Challange', {
        id: data.id,
        image: data.image,
        description: data.description,
        challanges: data.challanges,
        completedDays: data.completedDays,
    });

    return (
        <AnimatedWrapper>
        <TouchableOpacity onPress={onPress} key={data.id} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{ width: "95%", height: 140, marginTop: 10,  marginBottom: 10, borderRadius: 7 }}
                source={{
                    uri: data.image,
                }}
            />
            <View style={styles.viewMy}>
                <MaterialCommunityIcons name="lightning-bolt" size={24} 
                style={styles.cardIcon} 
                />
                <Text
                 style={[styles.cardText, styles.text2]}
                 >{data.challanges?.length}</Text></View>
            <Text style={[styles.cardText, styles.text]}>{data.name}</Text>
        </TouchableOpacity>
        </AnimatedWrapper>
    )
}

export default FitnessCard

const styles = StyleSheet.create({
    viewMy: {
       
        flexDirection:'row',
        // alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        left: 20,
    },
    cardText: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase',
        color: themeColors.bgColor(0.8),
    },
    text: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    text2: {
        display:'inline-block',
    },
    
    cardIcon: {
        display:'inline-block',
        // position: 'absolute',
        // bottom: 15,
        // left: 20,
         color: themeColors.bgColor(0.9),
    }
})