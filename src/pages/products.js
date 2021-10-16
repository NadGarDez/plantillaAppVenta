import React, {Component,useEffect,useState} from "react"
import {View,StatusBar,Text,FlatList} from "react-native"
import {Imput,Header} from "react-native-elements"
import { useSelector, useDispatch } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Product from "../components/cardProduct.js"
import Tab from "../components/tabBar.js"
import HeaderSolo from "../components/headerSolo.js"
const {colors}=require("../styles/colors.js")
import config from "../../config.js"
import {w,h} from "../utilities/sizes.js"
import {setToken,unsetTokenm,selectToken} from "../reduxFiles/sessionSlice.js"
import store from "../reduxFiles/store.js"
import fm from "../utilities/fetchManager.js"

const component = (props)=>{
  useEffect(
    ()=>{
      if (search == true) {
        getProducts()
        setSearch(false)
      }
    }
  )



  const [items,setItems] = useState([])
  const [search,setSearch] = useState(true)

  const getProducts = async ()=>{
    let params = getFilters()

    console.log(config.host+params, "route")

    let a = new fm(config.host,params)
    const token = selectToken(store.getState())
    try{
        const result = await a.getJson(params,token)
        result.forEach((item, i) => {
          item["navigation"] = props.navigation
        });

        setItems(result)
    }
    catch(e){
      console.log(e)
    }


  }

  const getFilters = ()=>{
    let obj ={

        typeOrder:"datePublicationDesc",
        typeProjection:"preview",
        matchType:"noMatch",
        limitStart:0

    }

    return `/p/${obj.id}/${obj.typeProjection}/${obj.typeOrder}/${obj.limitStart}/${obj.matchType}/${obj.matchKey}/${obj.matchValue}`
  }

  return(
    <View style={{backgroundColor:colors.principal,width:"100%",height:"100%"}}>
      <StatusBar backgroundColor={colors.second}/>
      <HeaderSolo />
      <FlatList
        style={[h(86),{width:"100%"}]}
        data={items}
        renderItem={({item})=><Product item={item}/>}
        keyStractor={(item,index) =>{
          return index.toString()
        }}
      />
      <Tab focus={[true,false,false,false,false]} display={true} navigation={props.navigation}/>
    </View>
  )
}

export default component

/*

export default class SignIn extends Component{
  constructor(props){
    super(props)
  }

  getProducts(){

  }

  getFilters(){

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
*/
