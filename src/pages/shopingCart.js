import React, {Component} from "react"
import {View,StatusBar,Text,FlatList} from "react-native"
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
import Tab from "../components/tabBar.js"
import HeaderSolo from "../components/headerSolo.js"
import Cart from "../components/carCart.js"
import Resumen from "../components/carResume.js"


let car = [
  {
    nombre:"Cachapa",
    foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHWPvPjKfEC3vXtMfnO6S89O56YAvhfkLLDWHGumSWrkPx_twq_94HBkRs0oyec4s-0w&usqp=CAU",
    precio:"200$",
    cantidad:"x4"//jejejejejejej
  },
  {
    nombre:"Cachapa",
    foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHWPvPjKfEC3vXtMfnO6S89O56YAvhfkLLDWHGumSWrkPx_twq_94HBkRs0oyec4s-0w&usqp=CAU",
    precio:"200$",
    cantidad:"x4"//jejejejejejej
  },
  {
    nombre:"Cachapa",
    foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHWPvPjKfEC3vXtMfnO6S89O56YAvhfkLLDWHGumSWrkPx_twq_94HBkRs0oyec4s-0w&usqp=CAU",
    precio:"200$",
    cantidad:"x4"//jejejejejejej
  },
  {
    nombre:"Cachapa",
    foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHWPvPjKfEC3vXtMfnO6S89O56YAvhfkLLDWHGumSWrkPx_twq_94HBkRs0oyec4s-0w&usqp=CAU",
    precio:"200$",
    cantidad:"x4"//jejejejejejej
  },
  {
    nombre:"Cachapa",
    foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHWPvPjKfEC3vXtMfnO6S89O56YAvhfkLLDWHGumSWrkPx_twq_94HBkRs0oyec4s-0w&usqp=CAU",
    precio:"200$",
    cantidad:"x4"//jejejejejejej
  },
  {
    nombre:"Cachapa",
    foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHWPvPjKfEC3vXtMfnO6S89O56YAvhfkLLDWHGumSWrkPx_twq_94HBkRs0oyec4s-0w&usqp=CAU",
    precio:"200$",
    cantidad:"x4"//jejejejejejej
  },
  {
    nombre:"Cachapa",
    foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHWPvPjKfEC3vXtMfnO6S89O56YAvhfkLLDWHGumSWrkPx_twq_94HBkRs0oyec4s-0w&usqp=CAU",
    precio:"200$",
    cantidad:"x4"//jejejejejejej
  },

]

let resumen ={
  subtotal:1400,
  impuestos:200,
  total:1600
}


let S = ({navigation})=>{
  console.log(car.length)
  if(car.length>0){
    return(
      <>
      <View style={[w(100),{height:"70%",padding:5}]}>
        <View style={[flex.PerfectCenter,{width:"100%",height:"100%", backgroundColor:"white",padding:5,borderRadius:3}]}>
          <FlatList
            style={{width:"100%",height:"100%"}}
            data={car}
            renderItem={({item})=><Cart item={item}/>}

          >
          </FlatList>
        </View>
      </View>
      <View style={[w(100),{height:"30%",padding:5}]}>
        <View style={[flex.PerfectCenter,{width:"100%",height:"100%", backgroundColor:"white",borderRadius:3}]}>
          <Resumen resumen={resumen} navigation={navigation}/>
        </View>
      </View>
      </>
    )
  }
  else {
    return (
      <View style={[w(100),{height:"100%",padding:5}]}>
        <View style={[flex.PerfectCenter,{width:"100%",height:"100%", backgroundColor:"white"}]}>
          <Text>No hay productos en el carrito</Text>
        </View>
      </View>
    )
  }
}



export default class ShoppingCart extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={{backgroundColor:colors.principal,width:"100%",height:"100%"}}>

        <StatusBar backgroundColor={colors.second}/>
        <HeaderSolo />
        <View style={{height:"86%"}}>

          <S navigation={this.props.navigation}/>


        </View>
        <Tab focus={[false,true,false,false,false]} display={true} navigation={this.props.navigation}/>
      </View>
    )
  }
}
