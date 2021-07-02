import React from "react"
import {View,StatusBar,Text,ScrollView,ImageBackground,Image,TouchableOpacity} from "react-native"
import {Input} from "react-native-elements"
import Button from "../components/buttonNad.js"
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"

const Component = ({resumen,navigation})=>{

  const {subtotal,impuestos,total} = resumen

  return(
    <View style={[flex.Column,flex.Wrap, {width:"100%",padding:5,height:"100%"}]}>
      <View style={[flex.Column,{width:"100%", height:"60%"}]}>

        <View style={[flex.Row,{width:"100%",height:"25%"}]}>
          <View style={[flex.PerfectCenter,{width:"50%",height:"100%"}]}>
            <Text style={[fonts.type.f3,fonts.size.small]}>Sub total</Text>
          </View>
          <View style={[flex.PerfectCenter,{width:"50%",height:"100%"}]}>
            <Text>{`${subtotal}$`}</Text>
          </View>
        </View>
        <View style={[flex.Row,{width:"100%",height:"25%"}]}>
          <View style={[flex.PerfectCenter,{width:"50%",height:"100%"}]}>
            <Text style={[fonts.type.f3,fonts.size.small]} >Impuestos</Text>
          </View>
          <View style={[flex.PerfectCenter,{width:"50%",height:"100%"}]}>
              <Text>{`${impuestos}$`}</Text>
          </View>
        </View>
        <View style={[flex.Row,{width:"100%",height:"50%",backgroundColor:colors.customWhite}]}>
          <View style={[flex.PerfectCenter,{width:"50%",height:"100%"}]}>
            <Text style={[fonts.type.f4,fonts.size.medium]} >Total</Text>
          </View>
          <View style={[flex.PerfectCenter,{width:"50%",height:"100%"}]}>
              <Text>{`${total}$`}</Text>
          </View>
        </View>


      </View>
      <View style={[flex.PerfectCenter,{width:"100%", height:"40%"}]}>
        <Button title="Pagar" width={80} action={()=>navigation.navigate("pagar")}/>
      </View>
    </View>
  )
}

export default Component
