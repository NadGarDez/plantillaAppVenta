import React,{useState,useEffect,useRef} from "react"

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
import {setToken,unsetTokenm,selectToken} from "../reduxFiles/sessionSlice.js"
import {setProduct,unset,unsetAll,selectProducts} from "../reduxFiles/carSlice.js"
import { useSelector, useDispatch } from 'react-redux'
import store from "../reduxFiles/store.js"
import fm from "../utilities/fetchManager.js"
import config from "../../config.js"


let ancho = Dimensions.get('window').width
let anchoComponente = (50*ancho)/100;
const Element = ({navigation,route})=>{
  useEffect(
    ()=>{
      if (search == true) {
        getProduct()
        setSearch(false)
      }
    }
  )


  const dispatch = useDispatch()
  const [search,setSearch] = useState(true)
  const [item,setItem] = useState([0])
  const [requiredAmount,setRequiredAmount] = useState("1")
  let amountRef = useRef(null)
  const Stars = (props)=>{
    const component = []

    for (var i = 0; i < 5; i++) {
      let aux = ""
      if (i<=props.calification-1) {
        aux = (<Icon name="star" color={colors.principal} size={20} style={{margin:5}}/>)
      }
      else {
        aux = (<Icon name="star" color={colors.second} size={20} style={{margin:5}}/>)
      }
      component.push(aux)
    }
    return component
  }

  const getProduct = async ()=>{
    let params = getFilters()



    let a = new fm(config.host,params)
    const token = selectToken(store.getState())
    try{
        const result = await a.getJson(params,token)
        console.log(result)
        setItem(result)
    }
    catch(e){
      console.log(e)
    }


  }

  const getFilters = ()=>{
    let obj ={
      id:route.params.id,
      typeProjection:"publication",
      limitStart:0,
      matchType:"noMatch"
    }

    return `/p/${obj.id}/${obj.typeProjection}/${obj.typeOrder}/${obj.limitStart}/${obj.matchType}/${obj.matchKey}/${obj.matchValue}`
  }

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

            <Image source={{uri:item[0].image}} resizeMode="stretch" style={[h(22),{width:"100%"}]} />
            <View style={styles.titulo}>
              <Text style={[fonts.type.f1,fonts.size.gigant]}>
                {item[0].title}
              </Text>
            </View>
            <View style={[flex.Column,flex.VerticalCenter,flex.wrap]}>
              <Text style={[fonts.size.big,fonts.type.f4,{color:colors.gold}]}>{item[0].price}</Text>
              <Text style={[fonts.type.f1,{color:colors.grey}]}>Vendido por {item[0].seller} </Text>
            </View>
            <View style={[flex.Row,flex.HorizontalCenter,h(10)]}>
              <Text style={[fonts.type.f3,{color:colors.grey,marginRight:5}]}>Cantidad</Text>
              <TextInput
                value={requiredAmount}
                ref={amountRef}
                style={[fonts.type.f3,{height:30,color:colors.grey,marginRight:5,borderStyle:"solid",borderColor:"black",borderWidth: 1,borderRadius:5,padding:0,textAlign:"center"}]}
                onChangeText={
                  text => {
                    console.log(text)
                    if (parseInt(text) <= item[0].stock || text == "" ) {

                      setRequiredAmount(text)

                    }
                    else{
                      console.log("mayor")
                    }
                  }
                }

                keyboardType="numeric"
              />
              <Text style={[fonts.type.f3,{color:colors.grey}]}>Disponible {item[0].stock}</Text>
            </View>
            <View style={[flex.Row,h(10),{width:"100%"}]}>
              <View style={[flex.PerfectCenter,{width:"50%"}]}>
                <NadBoton width={45} title="Agregar al carrito"
                  action={
                    ()=>{
                      if (parseInt(requiredAmount) > 0 && amountRef.current.value !== "" ) {
                        let obj = {
                          id:item[0]._id,
                          title:item[0].title,
                          seller:item[0].seller,
                          price:item[0].price,
                          amount:parseInt(requiredAmount),
                          image:item[0].image
                        }
                        dispatch(setProduct(obj))
                        console.log(selectProducts(store.getState()))
                        console.log(store.getState())
                      }
                      else{
                        Alert.alert("Cantidad de producto invalido");
                      }


                    }
                  }
                />
              </View>
              <View style={[flex.PerfectCenter,{width:"50%"}]}>
                <NadBoton width={45} title="consultar al vendedor"
                  action={
                    ()=>{ 
                      console.log(item[0], "item object")
                      navigation.navigate("Chat",{
                        screen:'conversation',
                        params:{
                          partnerId:item[0].idUser
                        }
                        
                      })
                      // the id of the product creator is in the product object
                      // here we have to go to a new conversation and send the id param to the servidor 
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
                {item[0].description}
                </Text>
              </View>

            </View>



          </View>
          <View style={[flex.column,{backgroundColor:colors.customWhite,width:"100%",padding:5,borderRadius:3}]}>
            <View style={[flex.PerfectCenter,{padding:10}]}>
              <Text style={[fonts.type.f4,fonts.size.medium]}>Calificacion de este producto</Text>
            </View>
            <View style={[flex.Row,flex.PerfectCenter,{padding:10}]}>
              <Stars calification={item[0].calificacion}/>
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
