import React, {Component} from "react"
import {View,StatusBar,Text,FlatList} from "react-native"
import {Imput,Header} from "react-native-elements"
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Product from "../components/cardProduct.js"
import Tab from "../components/tabBar.js"
import HeaderSolo from "../components/headerSolo.js"
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
export default class SignIn extends Component{
  constructor(props){
    super(props)
  }

  render(){

    const params =[
      {
        key:1,
        idProduct:1,
        title:"Este es un producto con un titulo muy muy muy muy muy largo",
        price:"$20",
        seller:"Coromar Coco",
        image:"https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        add:()=>{
          console.log("ADD")
        },
        details:()=>{
          console.log("details")
        },
        navigation:this.props.navigation
      },
      {
        key:2,
        idProduct:2,
        title:"Hola Mundo",
        price:"$20",
        seller:"Coromar Coco",
        image:"https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        add:()=>{
          console.log("ADD")
        },
        details:()=>{
          console.log("details")
        },
        navigation:this.props.navigation
      },
      {
        key:3,
        idProduct:3,
        title:"Hola Mundo",
        price:"$20",
        seller:"Coromar Coco",
        image:"https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        add:()=>{
          console.log("ADD")
        },
        details:()=>{
          console.log("details")
        },
        navigation:this.props.navigation
      },
      {
        key:4,
        idProduct:4,
        title:"Hola Mundo",
        price:"$20",
        seller:"Coromar Coco",
        image:"https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        add:()=>{
          console.log("ADD")
        },
        details:()=>{
          console.log("details")
        },
        navigation:this.props.navigation
      }
    ]

    return(
      <View style={{backgroundColor:colors.principal,width:"100%",height:"100%"}}>
        <StatusBar backgroundColor={colors.second}/>
        <HeaderSolo />
        <FlatList
          style={[h(86),{width:"100%"}]}
          data={params}
          renderItem={({item})=><Product item={item}/>}
          keyStractor={(item,index) =>{
            return index.toString()
          }}
        />
        <Tab focus={[true,false,false,false,false]} display={true} navigation={this.props.navigation}/>
      </View>
    )
  }
}
