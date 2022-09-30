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
            <Text style={styles.titleText} > {recipe.nameCepekai} </Text>
            <Image source={{uri: recipe.imageUrlCepekai }} 
            style={styles.image} />
            <Text style={styles.text} > Ingredients </Text>
            <Text>{recipe.ingredientsCepekai}</Text>
            <Text style={styles.text} > Steps </Text>
            <Text>{recipe.stepsCepekai}</Text>
            </ScrollView>
          )
          }
    
       )
      )
}

/*
 <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}    
      />
      <Button1 name="Leave a comment" color="#40E0D0" click={() => setComment("borscht", text)}/>
      <Button1 name="Check comments" color="#40E0D0" click={() => fetchComment()}/>
*/