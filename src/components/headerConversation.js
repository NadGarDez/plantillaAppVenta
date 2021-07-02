import React ,{Component} from "react"
import {View,Text,Image,TouchableOpacity} from "react-native"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
import IconButton from "./buttonIconNad.js"
const component = ({navigation})=>{
  let obj = {
    nombre:"Algun Usuario",
    foto:"https://www.ecestaticos.com/imagestatic/clipping/a82/792/a827920d3ca50d619ce6a3d85fa1802b.jpg",
    mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    fecha:"5/6/2021"
  }
  const {foto,mensaje,fecha,nombre} = obj
  let conectado = true

  return(
    <View style={[flex.Row,flex.Wrap,flex.HorizontalCenter, h(7),{width:"100%",padding:5,backgroundColor:colors.principal}]}>
      <TouchableOpacity style={[flex.PerfectCenter,w(5),{ height:"100%"}]}>
        <IconButton
          size="big"
          name="chevron-left"
          color={colors.customWhite}
          backgroundColor="transparent"
          action={
            ()=>{
              navigation.goBack()
            }
          }
        />
      </TouchableOpacity>
      <View style={[flex.PerfectCenter,h(6),{marginRight:5,marginLeft:5,width:h(6).height,backgroundColor:"blue", borderRadius:h(6).height/2,overflow:"hidden"}]}>

        <Image  source={{uri:foto}} resizeMode="stretch" style={{width:"100%",height:"100%"}}/>
      </View>
      <View style={[flex.Column,{width:"60%"}]}>
        <View style={[flex.Column]}>
          <Text style={[fonts.type.f4,fonts.size.small,{color:colors.customWhite}]}>{nombre}</Text>
          <Text style={[fonts.type.f3,fonts.size.small,{color:conectado==true?colors.second:"grey"}]}>{conectado==true?"En linea":""}</Text>
        </View>
      </View>
    </View>
  )
}

export default component
