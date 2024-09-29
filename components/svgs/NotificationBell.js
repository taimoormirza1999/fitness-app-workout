import React, { useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming, 
  Easing, 
  cancelAnimation, 
  withSpring,
  ReduceMotion
} from 'react-native-reanimated';
import { NotificationBellSVG } from './SvgCompo.js';

const { width } = Dimensions.get('window');

const NotificationBell = () => {
  // Shared value for rotation
  const rotation = useSharedValue(0);
  
  useEffect(() => {
    let stopTimeout;
    let startTimeout;

    const startAnimation = () => {
      // Start the "ringing" effect
      rotation.value = withRepeat(
        withTiming(-16, {
          duration: 350, // 350ms for a gentle swing
          easing: Easing.inOut(Easing.ease), // Smooth in and out motion
        }, () => {
          rotation.value = withRepeat(
            withTiming(16, {
              duration: 350,
              easing: Easing.inOut(Easing.ease),
            }),
            -1, // infinite loop
            true // reverse on each repeat
          );
        }),
        -1, // Infinite loop
        true // reverse on each repeat
      );
    
      // Stop the animation after 3 seconds (3000ms)
      stopTimeout = setTimeout(() => {
        cancelAnimation(rotation);
      }, 3000); // 3 seconds
    };
    

    const initiateCycle = () => {
      // Start the animation initially
      startAnimation();

      // Set up a repeating cycle (wait 30 seconds after stopping, then restart)
      startTimeout = setInterval(() => {
        startAnimation();
      }, 4000); // 30 seconds
    };

    // Start the animation cycle on component mount
    initiateCycle();
    // Clean up the timeouts and intervals on component unmount
    return () => {
      clearTimeout(stopTimeout);
      clearInterval(startTimeout);
      cancelAnimation(rotation); // Stop the animation if component unmounts
    };
  }, [rotation]);

  // Define the animated style for the bell
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`, // Rotate based on the shared value
        },
      ],
    };
  });

  return (
    <View>
      {/* Apply the animated style to the bell icon */}
      <Animated.View style={animatedStyle}>
        <NotificationBellSVG width={width * 0.075} color={"red"}/>
      </Animated.View>
    </View>
  );
};

export default NotificationBell;
