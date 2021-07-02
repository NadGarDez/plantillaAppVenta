import React ,{Component} from "react"
import {View,Text,Image} from "react-native"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"

const component = ({obj})=>{
  const {foto,mensaje,fecha,nombre} = obj
  return(
    <View style={[flex.Row,flex.Wrap, {width:"100%",padding:5}]}>
      <View style={[{width:"20%",padding:5}]}>
        <View style={{width:50,height:50,borderRadius:25,overflow:"hidden"}}>
          <Image source={{uri:foto}} resizeMode="stretch" style={{width:50,height:50}}/>
        </View>
      </View>
      <View style={[flex.Column,{width:"80%"}]}>
        <View style={[flex.Column]}>
          <Text style={[fonts.type.f4,fonts.size.small,{color:colors.principal}]}>{nombre}</Text>
          <Text style={[fonts.type.f3,fonts.size.small,{color:colors.second}]}>{fecha}</Text>
        </View>
        <View style={{paddingRight:5}}>
          <Text style={[fonts.type.f3,{textAlign:"justify",padding:5}]}>{mensaje}</Text>
        </View>
      </View>
    </View>
  )
}

export default component
