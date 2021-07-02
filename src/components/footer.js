import React from "react"
import {View,Text,Image} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import LinearGradient from 'react-native-linear-gradient';
import {w,h} from "../utilities/sizes.js"


const Component = (props)=>{
  return (
    <View style={[{width:"100%",backgroundColor:colors.black},h(40)]}>
      <LinearGradient colors={[colors.black,"black"]} style={[{width:"100%", height:"70%"}, flex.column,flex.VerticalCenter]}>
        <View style={[flex.HorizontalCenter,flex.Column,{width:"100%"}]}>
          <Icon name="fire" size={40} color={colors.gold} style={{margin:8}} />
          <Text style={[fonts.type.ft,{color:colors.customWhite,fontSize:30}]}>
            Nombre app
          </Text>
        </View>
        <View style={[flex.Row,flex.VerticalCenter,flex.Wrap,{width:"100%"}]}>
          <Icon color="white" color={colors.customWhite} name="facebook" size={20} style={{margin:5}}/>
          <Icon color="white" color={colors.customWhite} name="instagram" size={20} style={{margin:5}}/>
          <Icon color="white" color={colors.customWhite} name="twitter"size={20} style={{margin:5}}/>
          <Icon color="white" color={colors.customWhite} name="youtube" size={20} style={{margin:5}}/>
        </View>
        <View style={[flex.Row,flex.VerticalCenter,{width:"100%",height:"20%"}]}>
          <Text style={[fonts.type.f3,{color:"grey",textAlign:"center",fontSize:10}]} >Calle 13 entre Carreras 12 y 13. Calabozo estado Garico. Venezuela</Text>
        </View>
      </LinearGradient>
      <View style={[{width:"100%", height:"30%",backgroundColor:"black",borderStyle:"solid",borderWidth:1,borderTopColor:"grey"}, flex.column, flex.VerticalCenter]}>
        <View style={[flex.Row,flex.VerticalCenter,flex.HorizontalCenter,flex.Wrap,{width:"100%",backgroundColor:"black"}]}>
          <Text style={[fonts.type.f3, fonts.size.small,{color:"grey"}]}>Developed By :</Text>
          <Text style={[fonts.type.f4,{color:"grey"}]}> @NadGarDez</Text>
        </View>
        <View style={[flex.Row,flex.VerticalCenter,flex.Wrap,{width:"100%",backgroundColor:"black"}]}>
          <Icon color="white" color="grey" name="github" size={20} style={{margin:5}}/>
          <Icon color="white" color="grey" name="linkedin" size={20} style={{margin:5}}/>
        </View>
      </View>

    </View>
  )
}

export default Component
