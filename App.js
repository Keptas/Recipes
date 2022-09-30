import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { View, Vibration, Text, ProgressViewIOSComponent, Image, ScrollView, FlatList, TextInput, onChangeText, Alert} from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import styles from './styles';
import Button1 from './button';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recipes from './recipes.json';
import ingredients from './recipes.json';
import Saltekai from './recipes/Saltekai';
import Borscht from './recipes/Borscht';
import Cepekai from './recipes/Cepekai';
import Kugelis from './recipes/Kugelis';
import Tinginys from './recipes/Tinginys';
import Pancakes from './recipes/Pancakes';
function Soups( { navigation} ) {
  return (
    <View style={styles.container}>
<Text style={styles.titleText} > Soups </Text>
<Button1 name="Saltekai" color="#40E0D0" click={() => navigation.navigate('Saltekai')}/>
<Button1 name="Borscht" color="#40E0D0" click={() => navigation.navigate('Borscht')}/>

</View> 
  );
}

function Meals( { navigation} ) {
  return (
    <View style={styles.container}>
<Text style={styles.titleText} > Meals </Text>
<Button1 name="Cepekai" color="#40E0D0" click={() => navigation.navigate('Cepekai')}/>
<Button1 name="Kugelis" color="#40E0D0" click={() => navigation.navigate('Kugelis')}/>
</View> 
  );
 
}
function Desserts( { navigation} ) {
  return (
    <View style={styles.container}>
<Text style={styles.titleText} > Desserts </Text>
<Button1 name="Tinginys" color="#40E0D0" click={() => navigation.navigate('Tinginys')}/>
<Button1 name="Pancakes" color="#40E0D0" click={() => navigation.navigate('Pancakes')}/>
</View> 
  );
}
function HomeScreen( { navigation} ) {
  return (
    <View style={styles.container}>

<Text style={styles.titleText} > Menu </Text>
<Button1 name="Soups" color="#40E0D0" click={() => navigation.navigate('Soups')}/>
<Button1 name="Meals" color="#40E0D0" click={() => navigation.navigate('Meals')}/>
<Button1 name="Desserts" color="#40E0D0" click={() => navigation.navigate('Desserts')}/>
</View> 
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "Red"
          },
          headerTintColor: "blue",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold"
          }
        }}>
        <Stack.Screen name="Home"  component={HomeScreen} />
        <Stack.Screen name="Soups" component={Soups} />
        <Stack.Screen name="Meals" component={Meals} />
        <Stack.Screen name="Desserts" component={Desserts} />
        <Stack.Screen name="Saltekai" component={Saltekai} />
        <Stack.Screen name="Borscht" component={Borscht} />
        <Stack.Screen name="Cepekai" component={Cepekai} />
        <Stack.Screen name="Kugelis" component={Kugelis} />
        <Stack.Screen name="Tinginys" component={Tinginys} />
        <Stack.Screen name="Pancakes" component={Pancakes} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}
