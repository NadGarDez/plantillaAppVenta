import React, {useState}from "react"
import {View,Text,TextInput,TouchableOpacity,Alert} from "react-native"
import {w,h} from "../utilities/sizes.js"
const {colors} = require("../styles/colors.js")
const {flex} = require("../styles/flex.js")
import Icon from "react-native-vector-icons/FontAwesome"


const A = (props)=>{
  let [colorView,setColorView]=useState(props.backgroundColor)
  let [colorIcon,setColorIcon]= useState(props.color)
  let [count,setcount]=useState(0)
  console.log(props.name)
  const handlePress=()=>{
    props.action()
  }




  let width = 0

  switch (props.size) {
    case "small":
      width=w(10)
    break

    case "medium":
      width=w(40)
    break

    case "big":
      width=w(60)
    break

    case "gigant":
      width=w(80)
    break

  }


  const styles={
    contenedor:[
      flex.PerfectCenter,
      width,
      h(100,width.width),
      {
        backgroundColor:colorView,
        borderRadius:5
      }
    ],
    icono:[

    ]
  }


  return(
    <TouchableOpacity

      onPress={
        ()=>handlePress()
      }

    >
      <View style={styles.contenedor}>
        <Icon name={props.name} size={20} color={colorIcon}/>
      </View>
    </TouchableOpacity>
  )
}

export default A
