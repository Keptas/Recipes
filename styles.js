import { StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

const styles=StyleSheet.create({
    button:{
        padding:20,
        alignItems:"center",
        width:"100%",
        alignSelf:"center",
        borderWidth:2,
        borderColor:"black",
        marginBottom:40,
        marginTop:20,
        borderRadius: 10
    },
    text:{
        fontSize:20,
        color:"black",
        fontWeight:"bold"
    },
    titleText: {
        fontSize:30,
        color:"black",
        fontWeight:"bold",
        textAlign: "center"
    },
    container: {
        marginTop:0,
        padding:120,
        backgroundColor: '#289944',
        width: 400,
        height: 840,
        alignSelf:"center",
        flexDirection: "column"
     },
     container2: {
        marginTop:0,
        padding:40,
        backgroundColor: '#289944',
        width: 375,
        height: 1100,
        alignSelf:"center",
        marginHorizontal: 100,
        paddingTop: StatusBar.currentHeight,
        flexDirection: "collumn"
     },
     container3: {
        marginTop:0,
        padding:20,
        backgroundColor: '#289944',
        width: 400,
        height: 230,
        alignSelf:"center",
        flexDirection: "column"
     },
     linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
        width: 350,
      },
      image: {
        borderColor: "black",
          borderWidth: 2,
          height: 200,
          width: 350,
          alignSelf: "center",
          
      }
})

export default styles;