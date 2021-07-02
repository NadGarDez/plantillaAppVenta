import React from "react";
import {View,Text,TextInput} from "react-native"
import {Input,Button} from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"
const {colors}=require("../styles/colors.js")
const {fonts} = require("../styles/fonts.js")
const {flex}= require("../styles/flex.js")
import {w,h} from "../utilities/sizes.js"
import IconButton from "./buttonIconNad.js"
import LinearGradient from 'react-native-linear-gradient';
/*

  en este componente tenemos que usar redux para almacenar la busqueda como

*/
const handleText = (text)=>{

}

let styles =[
  flex.PerfectCenter,
  h(7),
  {
    backgroundColor:colors.principal,
    width:"100%",

  },

]
let shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
}

const A = ()=>{
  return(
    <LinearGradient colors={['#8879F6', '#6956f7']} style={styles}>

        <Text style={[,fonts.type.ft,{color:"white"/*"#a8509c"*/,fontSize:40}]}>Nombre App</Text>



    </LinearGradient>
  )
}

export default A
/*#fc0176*/
