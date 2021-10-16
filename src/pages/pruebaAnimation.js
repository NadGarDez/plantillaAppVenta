import React, {useRef, useState,useEffect} from "react"
import {View,Text,Animated,Button} from "react-native"

const component = (props)=>{

  const top = useRef(new Animated.Value(50)).current;
  const other =  useRef(new Animated.Value(50))
  const left = useRef(new Animated.Value(0)).current;
  const [block,setBlock] = useState(false)

  const verticalControl = (num)=>{

    Animated.timing(
      top,
      {
        toValue:num,
        duration:500,
        useNativeDriver: false
      }
    ).start(({finished})=>{
      setBlock(false)
    })
  }

  const horizontalControl = (num)=>{
    setBlock(true)
    Animated.timing(
      left,
      {
        toValue:num,
        duration:500,
        useNativeDriver:false
      }
    ).start(({finished})=>{
      setBlock(false)
    })
  }

  let array = []

  useEffect(
    ()=>{

    },
    []
  )

  const move = (direction)=>{

    let num = 0

    switch (direction) {
      case "arriba":
        num  = parseInt(JSON.stringify(top))
        num-=10
        verticalControl(num)
      break;
      case "abajo":
        num  = parseInt(JSON.stringify(top))
        num+=10
        verticalControl(num)

      break

      case "derecha":
          num = parseInt(JSON.stringify(left))
          num += 10
          horizontalControl(num)

      break

      case "izquierda":
          num = parseInt(JSON.stringify(left))
          num -= 200
          horizontalControl(num)

      break

    }



  }


  let styles = {
    container:{

    },
    movil:{
      position:"absolute",
      left:left,
      width:30,
      top:top,
      height:30,
      backgroundColor:"black"
    }

  }
  console.log(top, "este es e top")

  return (
    <View style={{width:"100%", height:"100%", display:"flex", flexDirection:"column-reverse",backgroundColor:"blue"}}>
      <Animated.View style={[styles.movil]}>

      </Animated.View>
      <View style={{width:"100%", height:"10%",display:"flex",flexDirection:"row"}}>
        <Button
          style={{width:"25%"}}
          title="arriba"
          onPress={
            ()=>block == false ? move("arriba") : false
          }
        />
        <Button
          style={{width:"25%"}}
          title="abajo"
          onPress={
            ()=>block == false ? move("abajo") : false
          }
        />
        <Button
          title="derecha"
          style={{width:"25%"}}
          onPress={
            ()=>block == false ? move("derecha") : false
          }
        />
        <Button
          title="izquierda"
          style={{width:"25%"}}
          onPress={
            ()=>block == false ? move("izquierda") : false
          }
        />
      </View>
    </View>
  )
}

export default component
