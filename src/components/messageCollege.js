import React ,{Component} from "react"
import {View,Text,Image} from "react-native"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"

const component = ({obj})=>{
  const {mensaje,fecha} = obj
  return(
    <View style={[flex.Row,flex.Wrap,{width:"100%",padding:5}]}>
      <View style={[flex.Row,flex.Wrap, {width:mensaje.length>40 ? "80%" : "50%" ,padding:5,backgroundColor:"#D8DCD3",borderRadius:10}]}>

        <View style={[flex.Column,{width:"100%"}]}>
          <View style={[flex.Column]}>
            <Text style={[fonts.type.f3,{textAlign:"justify",color:colors.black}]}>{mensaje}</Text>
            <Text style={[fonts.type.f3,fonts.size.small,{color:colors.grey,marginTop:5}]}>{fecha}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default component
