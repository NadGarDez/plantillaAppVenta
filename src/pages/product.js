import React,{useState,useEffect} from "react"

import { View, Text, Image,Dimensions ,Alert,ScrollView,TextInput} from 'react-native'
import Bar from "../components/headerBack.js"
import NadBoton from "../components/buttonNad.js"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
import Icon from "react-native-vector-icons/FontAwesome"
import Opinion from "../components/opinion.js"
import Tab from "../components/tabBar.js"


let ancho = Dimensions.get('window').width
let anchoComponente = (50*ancho)/100;
const Element = ({navigation,route,store})=>{
  console.log("hola mundo")
  let {item} = route.params
  let styles={
    padre:{
      padding:7,
      width:ancho,
      height:anchoComponente*2
    },
    contenedorBlanco:[
      flex.column,
      {
        backgroundColor:colors.customWhite,
        width:"100%",
        height:"100%",
        paddingLeft:5,
        paddingRight:5,
        borderRadius:3,
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
      }
    ],
    titulo:[
      flex.VerticalCenter,
      flex.wrap,
      {
        width:"100%",
        paddingTop:h(2).height,
        paddingBottom:h(2).height
      }
    ]
  }//HOLA MUNDO

  let opiniones = [
    {
      nombre:"Antonia Petra Julibileisys Perez",
      foto:"https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"//jejejejejejej
    },
    {
      nombre:"Jorge Nitales",
      foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKZYYfBtlYAVrWfSk1xL-h2RYJ99059nA-A&usqp=CAU",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"//jejejejejejej
    },
    {
      nombre:"Rosa Melano",
      foto:"https://www.mundopsicologos.com/site/article/10338/49668/hay-personas-sin-sentimientos-0_ai1.jpg",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"
    },
    {
      nombre:"Elsa Polindo",
      foto:"https://www.ecestaticos.com/imagestatic/clipping/a82/792/a827920d3ca50d619ce6a3d85fa1802b.jpg",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"
    },
    {
      nombre:"Jeferson Juskleiber Andres Ramirez",
      foto:"https://eststatic.com/2676/conversions/malas-personas-social.jpg",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"
    },
    {
      nombre:"Armando Bronca",
      foto:"https://www.latercera.com/resizer/mp_c_41mYGXiP_UsSGdFZTevjYk=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/3V5Z225DDJBEHMLQJJEETMYVCE.JPG",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"
    },

  ]


  return(
    <View

    >
      <Bar navigation={navigation}/>
        <ScrollView style={{width:"100%",height:"86%"}}>
        <View style={[flex.Column,flex.Wrap,{backgroundColor:colors.principal,width:"100%",padding:5}]}>
          <View style={[flex.column,{backgroundColor:colors.customWhite,width:"100%",padding:5,borderRadius:3,marginBottom:5}]}>

            <Image source={{uri:item.image}} resizeMode="stretch" style={[h(22),{width:"100%"}]} />
            <View style={styles.titulo}>
              <Text style={[fonts.type.f1,fonts.size.gigant]}>
                {item.title}
              </Text>
            </View>
            <View style={[flex.Column,flex.VerticalCenter,flex.wrap]}>
              <Text style={[fonts.size.big,fonts.type.f4,{color:colors.gold}]}>{item.price}</Text>
              <Text style={[fonts.type.f1,{color:colors.grey}]}>Vendido por {item.seller} </Text>
            </View>
            <View style={[flex.Row,flex.HorizontalCenter,h(10)]}>
              <Text style={[fonts.type.f3,{color:colors.grey,marginRight:5}]}>Cantidad</Text>
              <TextInput value="1" style={[fonts.type.f3,{height:30,color:colors.grey,marginRight:5,borderStyle:"solid",borderColor:"black",borderWidth: 1,borderRadius:5,padding:0,textAlign:"center"}]}/>
              <Text style={[fonts.type.f3,{color:colors.grey}]}>Disponible 50</Text>
            </View>
            <View style={[flex.Row,h(10),{width:"100%"}]}>
              <View style={[flex.PerfectCenter,{width:"50%"}]}>
                <NadBoton width={45} title="Agregar al carrito"
                  action={
                    ()=>{
                      item.navigation.navigate("product",{item:item})
                    }
                  }
                />
              </View>
              <View style={[flex.PerfectCenter,{width:"50%"}]}>
                <NadBoton width={45} title="consultar al vendedor"
                  action={
                    ()=>{

                    }
                  }
                />
              </View>
            </View>
            <View style={[flex.Column,flex.Wrap]}>

              <View style={[flex.PerfectCenter,{padding:10}]}>
                <Text style={[fonts.type.f4,fonts.size.big]}>Descripcion</Text>
              </View>
              <View style={[flex.wrap]}>
                <Text style={[fonts.type.f3,fonts.size.small, {flexDirection:'row',flexWrap: 'wrap',textAlign:"justify",padding:5}]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </Text>
              </View>

            </View>



          </View>
          <View style={[flex.column,{backgroundColor:colors.customWhite,width:"100%",padding:5,borderRadius:3}]}>
            <View style={[flex.PerfectCenter,{padding:10}]}>
              <Text style={[fonts.type.f4,fonts.size.medium]}>Calificacion de este producto</Text>
            </View>
            <View style={[flex.Row,flex.PerfectCenter,{padding:10}]}>
              <Icon name="star" color={colors.principal} size={20} style={{margin:5}}/>
              <Icon name="star" color={colors.principal} size={20} style={{margin:5}}/>
              <Icon name="star" color={colors.principal} size={20} style={{margin:5}}/>
              <Icon name="star" color={colors.principal} size={20} style={{margin:5}}/>
              <Icon name="star" color={colors.second} size={20} style={{margin:5}}/>
            </View>
            <View style={[flex.PerfectCenter,{padding:10}]}>
              <Text style={[fonts.type.f4,fonts.size.medium]}>Opiniones</Text>
            </View>
            <View>
              {
                opiniones.map(
                  item => <Opinion obj={item}/>
                )
              }
            </View>
          </View>
        </View>

        </ScrollView>
      <Tab focus={[true,false,false,false,false]} display={true} navigation={navigation}/>
    </View>

  )
}

export default Element
