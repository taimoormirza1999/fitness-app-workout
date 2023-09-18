import React,{useContext} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar } from 'react-native';
import FitnessCard from '../components/FitnessCard';
import fitnessData from '../data/fitness2';
import { themeColors } from '../theme'
import { FitnessItems } from "../Context";

const HomeScreen = () => {
    const {  workout, 
        calories, minutes}=
        useContext(FitnessItems);
    return (
        <ScrollView style={styles.container}>
        <StatusBar
        backgroundColor={themeColors.bgColor(0.7)}
        barStyle="light-content"
      />
            <View>
                <View style={{ height: 220, width: '100%', backgroundColor: themeColors.bgColor(0.9), padding: 10 }}>
                    <Text style={[styles.headingB, {  marginTop: 5,marginHorizontal: 15 }]}>Home Workout</Text>

                    {/* 3 sections */}
                    <View style={[styles.flexWithSpaceBetween, { marginTop: 15, marginHorizontal: 15 }]}>
                        <View style={[styles.flexWithCenter,styles.homecardbanner]}>
                            <Text style={[styles.textSemiHeading,{}]}>{workout}</Text>
                            <Text style={[styles.text, { marginTop: 2 }]}>Workouts</Text>
                        </View>
                        <View style={[styles.flexWithCenter,styles.homecardbanner]}>
                            <Text style={styles.textSemiHeading}>{calories.toFixed(2)}</Text>
                            <Text style={[styles.text, { marginTop: 2 }]}>kcal</Text>
                        </View>
                        <View style={[styles.flexWithCenter,styles.homecardbanner]}>
                            <Text style={styles.textSemiHeading}>{minutes}</Text>
                            <Text style={[styles.text, { marginTop: 2 }]}>Mins</Text>
                        </View>
                    </View>

                    {/* Image */}
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ width: '95%', height: 120, marginTop: 10, borderRadius: 7 }}
                            source={{
                                uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png',
                            }}
                        />
                        <Text style={{position:'absolute',top:'50%',color:themeColors.bgColor(0.8), fontWeight: '900',
        fontSize: 25, }}>Workout Plans</Text>
                    </View>
                </View>
                    {/* FitnessCard */}
                    <View style={{ marginTop: 60, marginHorizontal: 10, marginBottom:15 }}>
                        {fitnessData.map((item, index) => (
                            <FitnessCard key={item.id} data={item} />
                        ))}
                    </View>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{flex:1,
        backgroundColor:themeColors.bgColor2(0.8),
    },
    homecardbanner:{
        width:'30%',
        backgroundColor:themeColors.bgColor2(0.2),padding:10,borderRadius:10},
    flexWithSpaceBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flexWithCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    headingB: {
        fontWeight: '900',
        fontSize: 25,
        // fontFamily: 'Playfair Display',
        letterSpacing: 1,
        textTransform: 'uppercase',
        color: themeColors.homeText,
    },
    textSemiHeading: {
        fontWeight: '800',
        fontSize: 27,
        color: themeColors.homeText,
    },
    text: {
      
        fontSize: 18,
        textTransform: 'uppercase',
        color: themeColors.homeText,
    },
});

export default HomeScreen;
