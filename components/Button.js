import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import { themeColors } from '../theme'
import { fontSizes, width } from '../constants/DimensionFontSizes';

const Button = ({ title, onPress,color }) => {
  return (
    <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }]} >
    
    <TouchableOpacity style={[styles.button,{ flex: 1, justifyContent: 'center', alignItems: 'center' }]} onPress={onPress} >
      <Text style={[styles.buttonText,{color:color?color:'white'},]}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: themeColors.bgColor(0.7),
    paddingVertical: 12,
    paddingHorizontal: width*0.03,
    marginHorizontal:'30',
    marginVertical: 10,
    width: '75%',
    borderRadius: 6,
    elevation: 3, // Adds a shadow (Android)
    shadowColor: themeColors.bgColor(0.7), // Adds a shadow (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: fontSizes.small+2,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default Button;
