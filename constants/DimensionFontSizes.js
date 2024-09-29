import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const fontSizes = {
  xsmall: width * 0.027,
  xsmall1: width * 0.031,
  small: width * 0.033,
  small2: width * 0.034,
  medium: width * 0.0375,
  large: width * 0.042,
  large2: width * 0.045,
  title: width * 0.06,
};
const cardLayout = {
  horizontalPadding: width * 0.04,
};
const iconSizes = {
  small: 0,
  normal0: width * 0.050,
  normal: width * 0.055,
  big0: width * 0.12,
};
const buttonPadding = {
  Vertical: Platform.OS === 'android'?height*0.018:height*0.020,
  horizontal: width * 0.055,
};
const inputPadding = {
  Vertical: Platform.OS === 'android'?2:3,
  horizontal: width * 0.055,
};
const getFontSizes = (currentLanguage) => {
  const isArabic = currentLanguage === 'ar';
  return {
    xsmall: isArabic ? width * 0.03 : width * 0.027,
    xsmall1: isArabic ? width * 0.035 : width * 0.031,
    small: isArabic ? width * 0.037 : width * 0.033,
    small2: isArabic ? width * 0.038 : width * 0.034,
    medium: isArabic ? width * 0.04 : width * 0.0375,
    large: isArabic ? width * 0.045 : width * 0.042,
    marquee: isArabic ? width * 0.036 : width * 0.033,
    large2: isArabic ? width * 0.048 : width * 0.045,
  };
};

const getTextAlignment = (currentLanguage) => ({
  textAlign: currentLanguage === "ar" ? "right" : "left",
  writingDirection: currentLanguage === "ar" ? "rtl" : "ltr",
});
const absoluteComponentDirection = (currentLanguage, value,TopValue) => ({
  position: "absolute",
  top:TopValue,
  right: currentLanguage === "ar" ? null : value,  // For LTR languages
  left: currentLanguage === "ar" ? value : null   // For RTL languages
});
const absoluteCloseComponentDirection = (currentLanguage, value,TopValue) => ({
  position: "absolute",
  top:TopValue,
   // For LTR languages
  left: value   // For RTL languages
});
const getRowDirection = (currentLanguage) => ({
  textAlign: currentLanguage === "ar" ? "right" : "left",
  writingDirection: currentLanguage === "ar" ? "rtl" : "ltr",
});

export { width, height,iconSizes,cardLayout, fontSizes,getTextAlignment,getRowDirection,getFontSizes,buttonPadding,absoluteCloseComponentDirection,absoluteComponentDirection,inputPadding };