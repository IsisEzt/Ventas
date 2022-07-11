import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SRadd from './Pantallas/SRadd';


const styles = StyleSheet.create({
  Boton: {
    margin: 20,
    minWidth: "80%",
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function HomeScreen({ navigation }) {
  return (
    <View 
    style={styles.container} >

      <View style={styles.Boton}>
      <Button
        title="agregar información"
        color="#33F23A"
        onPress={() => navigation.navigation ('Agregar')}
      />
      </View>

      <View style={styles.Boton}>
      <Button
        title="Leer información"
        color="#33F23A"

      />
      </View>

    </View>
  );
}

function AddScreen({ navigation }) {
  return (
    <SRadd/>
  );
}

const Stack = createNativeStackNavigator();

function SRPantalla() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Agregar" component={AddScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SRPantalla;

