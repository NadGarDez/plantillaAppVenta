import React, {useSate} from "react"
import {TouchableHighlight,Text,View} from "react-native"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"

const Component = (props)=>{

  let styles ={
    view:[
      flex.PerfectCenter,
      w(props.width),
      h(7),
      {

        backgroundColor:props.togle==true ? colors.principal : colors.second,
        borderRadius:3,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }
    ]
  }
  return(

      <TouchableHighlight
        onPress={
          ()=>{
            props.action()
          }
        }
      >
        <View style={styles.view}>
          <Text style={[fonts.size.medium,fonts.type.f3,{color:colors.customWhite,textAlign:"center"}]}>{props.title}</Text>
        </View>
      </TouchableHighlight>

  )
}



export default Component
