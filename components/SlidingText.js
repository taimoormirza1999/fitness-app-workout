import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { themeColors } from '../theme';
import { fontSizes, iconSizes, width } from '../constants/DimensionFontSizes';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ItemIconComponent = ({ name, icon }) => (
    <View style={{flexDirection:'row', marginVertical:4,}}>
      <MaterialCommunityIcons name="check-decagram-outline"  color={themeColors.bgColor2(0.9)} size={iconSizes.normal}  />
      <Text style={{fontSize:fontSizes.small-2, color:themeColors.bgColor2(0.9), marginLeft:10}}>{name}</Text>
    </View>
  )
const SlidingText = ({data}) => {
  const showValue = 0;
  const hideValue = 500;
  const translateX = useSharedValue(hideValue); // Initial position off-screen to the right
  const [visible, setVisible] = useState(false); // To toggle sliding text visibility

  // Define the animated style for the sliding text
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  // Slide-in and slide-out animations for the text
  const showText = () => {
    translateX.value = withSpring(showValue, {
      damping: 10,
      stiffness: 80,
    });
    setVisible(true);
  };

  const hideText = () => {
    translateX.value = withSpring(hideValue, {
      damping: 150,
      stiffness: 80,
    });
    setTimeout(() => setVisible(false), 500); // Hide after the animation
  };

  // Toggle the sliding text
  const toggleText = () => {
    if (visible) {
      hideText();
    } else {
      showText();
    }
  };
useEffect(()=>{
    const timeoutId =  setTimeout(() => {
        toggleText()
      }, 2000);
      return () => clearTimeout(timeoutId);
},[])
  return (
    <View style={styles.container}>
      {/* Sliding Text View */}
      <Animated.View style={[styles.slidingContainer, animatedStyle]}>
        <View style={{flex:1}}>
        <Text style={{fontSize:fontSizes.medium-2, fontWeight:'700'}}>Benifits</Text>
        {/* <Text style={styles.text}>{data}</Text> */}
        {data?.map((item, inex)=>{
            return <ItemIconComponent name={item} />
        })}
        {/* <ItemIconComponent name={data}/> */}
        </View>
        <TouchableOpacity onPress={hideText}>
          <Text style={styles.close}>X</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Button to Toggle Sliding Text */}
      <TouchableOpacity style={styles.toggleButton} onPress={toggleText}>
      <Ionicons name="body" size={iconSizes.big0-30} color="black" />
        {/* <Text style={styles.toggleButtonText}>Targets</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  slidingContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: themeColors.bgColor(0.9),
    padding: 10,
    marginHorizontal:10,
    marginBottom: 20, // Add margin to create space above the button
    position: 'relative',
    borderRadius:7,
  },
  text: {
    flex: 1,
    fontSize: fontSizes.small,
    color: 'black',
    fontStyle:'italic'

  },
  close: {
    fontSize:  fontSizes.medium,
    color: 'red',
    paddingLeft: 10,
    alignSelf:"flex-start",
    fontWeight:'bold'
  },
  toggleButton: {
    backgroundColor: themeColors.bgColor(0.9),
    // paddingVertical: width*0.04,
    padding: 10,
    borderRadius: 50,
    alignSelf:'flex-end',
    borderLeftColor: themeColors.bgColor2(0.9),
    borderLeftWidth:3,
    flexDirection:'row'
  },
  toggleButtonText: {
    color: themeColors.bgColor2(1),
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  },
});

export default SlidingText;
