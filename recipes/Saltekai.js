import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { View, Vibration, Text, ProgressViewIOSComponent, Image, ScrollView, FlatList, TextInput, onChangeText, Alert} from 'react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import styles from '../styles';
import Button1 from '../button';
import Recipes from '../recipes.json';




export default function App() {
    return (
        Recipes.map( recipe => {
            return(
              <ScrollView style={styles.container2}>
                <Text style={styles.titleText} > {recipe.nameSaltekai} </Text>
              <Image source={{uri: recipe.imageUrlSaltekai }} 
              style={styles.image} />
              <Text style={styles.text} > Ingredients </Text>
              <Text>{recipe.ingredientsSaltekai}</Text>
              <Text style={styles.text} > Steps </Text>
              <Text>{recipe.stepsSaltekai}</Text>
              </ScrollView>
            )
            }
      
         )

    )
}