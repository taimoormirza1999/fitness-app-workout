import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import { FitnessContext } from "./Context";

export default function App() {
  return (
     <FitnessContext>
    <Navigation/>
       </FitnessContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
