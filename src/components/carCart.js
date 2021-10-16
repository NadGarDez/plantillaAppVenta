import React, {useState,useEffect,useCallback} from "react"
import {View,StatusBar,Text,ScrollView,ImageBackground,Image,TouchableOpacity} from "react-native"
import {Input} from "react-native-elements"
import Button from "../components/buttonNad.js"
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
import {setToken,unsetTokenm,selectToken} from "../reduxFiles/sessionSlice.js"
import {setProduct,unset,unsetAll,selectProducts} from "../reduxFiles/carSlice.js"
import { useSelector, useDispatch } from 'react-redux'
import store from "../reduxFiles/store.js"

const Component = ({item,change})=>{
  const {image,amount, title,price,id} = item
  const del = ()=>{
    change(item.id)
  }
  return(
    <View style={[flex.Row,flex.Wrap, {width:"100%",padding:5,borderStyle:"solid",borderWidth:0.3,borderTopColor:"white",borderBottomColor:"grey",borderLeftColor:"white",borderRightColor:"white"}]}>
      <View style={[{width:"20%",padding:5}]}>
        <View style={{width:50,height:50,borderRadius:25,overflow:"hidden"}}>
          <Image source={{uri:image}} resizeMode="stretch" style={{width:50,height:50}}/>
        </View>
      </View>
      <View style={[flex.Column,{width:"70%"}]}>
        <View style={[flex.Column]}>
          <Text style={[fonts.type.f4,fonts.size.small,{color:colors.principal}]}>{title}</Text>
          <Text style={[fonts.type.f3,fonts.size.small,{color:colors.second}]}>x{amount}</Text>
        </View>
        <View >
          <Text style={[fonts.type.f3,{textAlign:"justify"}]}>{price}$</Text>
        </View>
      </View>
      <TouchableOpacity style={{width:"10%",height:"100%"}}
        onPress={
          ()=>{
            del()
          }
        }
      >
        <View style={[flex.PerfectCenter,{width:"100%"}]}>
          <Icon  name="times" size={20} color={colors.grey}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Component
