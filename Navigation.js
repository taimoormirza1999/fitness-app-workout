import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ExerciseScreen from "./screens/ExerciseScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import RestScreen from "./screens/RestScreen";
import WellDone from "./screens/WellDone";
import ChallangeScreen from "./screens/ChallangeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
function MyTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Stack" component={StackNavigator} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ExerciseScreen" component={ExerciseScreen} />
    </Tab.Navigator>
  );
}
function StackNavigator({navigation, route}) {
  const Stack = createNativeStackNavigator();
// if(route.state && route.state.index >0) {
//   navigation.setOptions({tabBarStyle: { display: 'none' },tabBarShowLabel:false})
// }else{
// navigation.setOptions({tabBarStyle: { display: 'flex' },tabBarShowLabel:true})
// }
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false, // This will hide the header for all screens in this stack
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          tabBarStyle: { display: 'none' },
          tabBarShowLabel: false,
        }}/>
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Challange" component={ChallangeScreen} />
        <Stack.Screen name="Rest" component={RestScreen} />
        <Stack.Screen name="WellDone" component={WellDone} />
      </Stack.Navigator>
  );
}
const Navigation = () => {

  return (
    <NavigationContainer>
     {/* <MyTabs /> */}
     <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
