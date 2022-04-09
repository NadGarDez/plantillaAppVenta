import React ,{Component} from "react"
import {View,Text,Image} from "react-native"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"

const component = ({obj})=>{
  const {content,create_at,type,} = obj
  return(
    <View style={[flex.RowReverse,flex.Wrap,{width:"100%",padding:5}]}>
      <View style={[flex.Row,flex.Wrap, {width:content.length>40 ? "80%" : "60%" ,padding:5,backgroundColor:colors.principal,borderRadius:10}]}>

        <View style={[flex.Column,{width:"100%"}]}>
          <View style={[flex.Column]}>
            
            <Text style={[fonts.type.f3,{textAlign:"justify",color:colors.customWhite, textAlign:'right'}]}>{content}</Text>
            <View style={[flex.RowReverse, flex.Wrap]}>
            <Text style={[fonts.type.f3,{color:colors.second,marginTop:5,fontSize:10, textAlign:'right'}]}>{new Date(create_at).toLocaleString()}</Text>
            </View>
           
          </View>
        </View>
      </View>
    </View>
  )
}

export default component
