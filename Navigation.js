    import { StyleSheet, Text, View } from 'react-native'
    import React from 'react'
    import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import RestScreen from './screens/RestScreen';
import WellDone from './screens/WellDone';
import ChallangeScreen from './screens/ChallangeScreen';

    const Navigation = () => {
        const Stack = createNativeStackNavigator();
      return (
        <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false, // This will hide the header for all screens in this stack
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Challange" component={ChallangeScreen} />
        <Stack.Screen name="Rest" component={RestScreen} />
        <Stack.Screen name="WellDone" component={WellDone} />
      </Stack.Navigator>
    </NavigationContainer>
      )
    }
    
    export default Navigation
    
    const styles = StyleSheet.create({})