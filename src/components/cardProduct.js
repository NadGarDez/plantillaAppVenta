import React,{useState,useEffect} from "react"

import { View, Text, Image,Dimensions ,Alert} from 'react-native'

import NadBoton from "./buttonNad.js"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")


let ancho = Dimensions.get('window').width
let anchoComponente = (50*ancho)/100;
const Element = ({item})=>{
  let styles={
    padre:{
      padding:7,
      width:ancho,
      height:anchoComponente*2.3
    },
    contenedorBlanco:[
      flex.column,
      {
        backgroundColor:colors.customWhite,
        width:"100%",
        height:"100%",
        paddingLeft:5,
        paddingRight:5,
        borderRadius:3,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
      }
    ],
    titulo:[
      flex.PerfectCenter,
      flex.wrap,
      {
        width:"100%",
        height:"20%"
      }
    ]
  }


  return(
    <View style={styles.padre}>
      <View style={[flex.column,{backgroundColor:colors.customWhite,width:"100%", height:"100%",paddingLeft:5,paddingRight:5,borderRadius:3}]}>
        <View style={styles.titulo}>
          <Text style={[fonts.type.f1,fonts.size.gigant]}>
            {
              item.title.length > 15 ? `${item.title.slice(0,50)}..`:item.title
            }
          </Text>
        </View>
        <Image source={{uri:item.image}} resizeMode="stretch" style={{width:"100%", height:"40%"}} />
        <View style={[flex.Column,flex.VerticalCenter,{height:"20%"}]}>
          <Text style={[fonts.size.big,fonts.type.f4,{color:colors.gold}]}>{item.price}</Text>
          <Text style={[fonts.size.small,fonts.type.f1,{color:colors.grey}]}>Vendido por {item.seller} </Text>
        </View>

          <View style={[flex.PerfectCenter,{width:"100%",height:"20%"}]}>
            <NadBoton width={80} title="detalles"
              action={
                ()=>{
                  item.navigation.navigate("product",{item:item})
                }
              }
            />
          </View>




      </View>
    </View>
  )
}

export default Element
