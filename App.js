import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import HomeScreen from "./HomeScreen";
import About from "./About";


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        {/*Define our routes*/}
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="About" component={About}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}