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

const Component = ({item,navigation})=>{
  const {foto,mensaje, nombre, fecha} = item
  return(
    <TouchableOpacity
      onPress={
        ()=>navigation.navigate("conversation")
      }
    >
    <View style={[flex.Row,flex.Wrap, {width:"100%",padding:5,borderStyle:"solid",borderWidth:0.3,borderTopColor:"white",borderBottomColor:"grey",borderLeftColor:"white",borderRightColor:"white"}]}>
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
        <View >
          <Text style={[fonts.type.f3,{textAlign:"justify"}]}>{`${mensaje.slice(0,36)}...`}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default Component
