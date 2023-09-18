import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const WellDone = ({navigation}) => {
  setTimeout(()=>{navigation.navigate('Home')},1000);
  return (
    <View style={styles.container}>
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' }}
      style={styles.backgroundImage}
    >
    <View style={{ flex:1, justifyContent:'center',
      alignItems:'center' }}>
      <View style={{ flexDirection:'row', justifyContent:'center',
      alignItems:'center' }}>
        <MaterialCommunityIcons name="party-popper" style={{transform: [{ scaleX: -1 }],marginRight:10}}  size={30} color={themeColors.bgColor(0.9)} />
        <Text style={styles.headingB}>Well Done!</Text>
        <MaterialCommunityIcons name="party-popper" style={{marginLeft:10}}  size={30} color={themeColors.bgColor(0.8)} />
      </View>
      <Text style={styles.textSemiHeading}>Congratulation! You have completed the Full Body Workout!</Text>
    </View>
    </ImageBackground>
  </View>
  )
}

export default WellDone

const styles = StyleSheet.create({
    container: {
      flex: 1,
     
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover', // You can use 'cover', 'contain', 'stretch', or 'center' as per your requirement
    },
    headingB: {
      fontWeight: '900',
      fontSize: 42,
      // fontFamily: 'Playfair Display',
      letterSpacing: 1,
      textTransform: 'uppercase',
      color: themeColors.bgColor(0.8),
  },
  textSemiHeading: {
      fontWeight: '800',
      fontSize: 30,
      marginTop:10,
      textAlign:'center',
      color: themeColors.bgColor(0.7),
  },
  });
  