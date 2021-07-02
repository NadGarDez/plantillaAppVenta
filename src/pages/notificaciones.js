import React from "react"

import {View,Text,Image,ScrollView,FlatList} from "react-native"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
import Tab from "../components/tabBar.js"
import HeaderSolo from "../components/headerSolo.js"
import CartNotification from "../components/cartNotification.js"

const Component = ({navigation})=>{

  const notificaciones = [
    {
      nombre:"Estado del pedido en tienda 'Dary'",
      foto:"https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg",
      mensaje:"El pedido ha sido entregado",
      fecha:"5/6/2021"//jejejejejejej
    },
    {
      nombre:"Estado del pedido en tienda 'Dary'",
      foto:"https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg",
      mensaje:"El esta siendo enviado",
      fecha:"5/6/2021"//jejejejejejej
    },
    {
      nombre:"Estado del pedido en tienda 'Dary'",
      foto:"https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg",
      mensaje:"El pedido esta siendo procesado",
      fecha:"5/6/2021"//jejejejejejej
    },
    {
      nombre:"Alerta de seguridad",
      foto:"https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg",
      mensaje:"Se ha hecho login desde un equipo extraño",
      fecha:"5/6/2021"//jejejejejejej
    },


  ]

  return (
    <View style={[{width:"100%",height:"100%"}]}>
      <HeaderSolo />
      <FlatList
        style={{width:"100%",height:"86%"}}
        data={notificaciones}
        renderItem={({item})=><CartNotification item={item} navigation={navigation}/>}
      />
      <Tab focus={[false,false,false,false,true]} display={true} navigation={navigation}/>
    </View>
  )
}

export default Component
