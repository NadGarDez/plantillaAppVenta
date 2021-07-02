import React, {Component} from "react"
import {View,StatusBar,Text,ScrollView} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Products from "./products.js";
import ShoppingCart from "./shopingCart.js"
import Pagar from "./pagar.js"
import Product from "./product.js"
import ChatPanel from "./chatPanel.js"
import Conversation from "./conversation.js"
import Icon from "react-native-vector-icons/FontAwesome"
import User from "./user.js"
import Notification from "./notificaciones.js"
let Stack = createStackNavigator()
let StackProducts = createStackNavigator()
let StackShoping = createStackNavigator()
let StackChat = createStackNavigator()
const {colors}=require("../styles/colors.js")

const Sproducts = (props)=>{
  return (
    <StackProducts.Navigator
      screenOptions={
                  {
          headerShown: false
        }
      }
    >
      <StackProducts.Screen name="products" component={Products} />
      <StackProducts.Screen name="product" component={Product} />
    </StackProducts.Navigator>
  )
}

const Sshoping = (props)=>{
  return (
    <StackShoping.Navigator
      screenOptions={
                  {
          headerShown: false
        }
      }
    >
      <StackShoping.Screen name="shopingCart" component={ShoppingCart} />
      <StackShoping.Screen name="pagar" component={Pagar} />
    </StackShoping.Navigator>
  )
}


const Schat = (props)=>{
  return (
    <StackChat.Navigator
      screenOptions={
                  {
          headerShown: false
        }
      }
    >
      <StackChat.Screen name="chatPanel" component={ChatPanel} />
      <StackChat.Screen name="conversation" component={Conversation} />

    </StackChat.Navigator>
  )
}

export default class Home extends Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props.store)
    return(

        <Stack.Navigator
          screenOptions={
                      {
              headerShown: false
            }
          }
        >
          <Stack.Screen component={Sproducts} name="Productos" />
          <Stack.Screen component={Sshoping} name="Carrito" />
          <Stack.Screen component={Schat} name="Chat" />
          <Stack.Screen component={User} name="Usuario" />
          <Stack.Screen component={Notification} name="Notificaciones" />
        </Stack.Navigator>

    )
  }
}
//
/*


switch (route.name) {
  case "Productos":
    name = "list"
    break;
  case "Carrito":
    name = "shopping-cart"
    break
  case "Chat":
    name = "comments"
    break
  case "Usuario":
    name = "user"


*/
