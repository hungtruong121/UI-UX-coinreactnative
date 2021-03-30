import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Homescreen} from './App/Screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName={"Homescreen"}
        >
          <Stack.Screen name="Homescreen" component={Homescreen} />
        </Stack.Navigator>
    </NavigationContainer>

  )
  
}

export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hung</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
