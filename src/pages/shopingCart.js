import React, {Component,useEffect,useState} from "react"
import {View,StatusBar,Text,FlatList,Alert} from "react-native"
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
import Tab from "../components/tabBar.js"
import HeaderSolo from "../components/headerSolo.js"
import Cart from "../components/carCart.js"
import Resumen from "../components/carResume.js"
import {setProduct,unset,unsetAll,selectProducts,selectInfo} from "../reduxFiles/carSlice.js"
import { useSelector, useDispatch } from 'react-redux'
import store from "../reduxFiles/store.js"



/*
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
*/

let resumen ={
  subtotal:1400,
  impuestos:200,
  total:1600
}

/*
let S = ({navigation,delete})=>{
  const [car,setCar] = useState([])
  const [resumen,setResumen] = useState(selectInfo(store.getState()))
  const [idDel,setIdDel] = useState(null)

  const change = (id)=>{

    setIdDel(id)
    Alert.alert(`${idDel}`)
  }

  useEffect(
    ()=>{
      console.log(idDel,"idDel")
      if(JSON.stringify(car)!=JSON.stringify(selectProducts(store.getState()))){

        setCar(selectProducts(store.getState()))

      }
      if (JSON.stringify(resumen) != JSON.stringify(selectInfo(store.getState()))) {
        setResumen(selectInfo(store.getState()))
      }

      if (idDel != null) {

        //setIdDel(null)
      }

    }
  )

  if(car.length>0){
    return(
      <>
      <View style={[w(100),{height:"70%",padding:5}]}>
        <View style={[flex.PerfectCenter,{width:"100%",height:"100%", backgroundColor:"white",padding:5,borderRadius:3}]}>


          <FlatList style={{width:"100%",height:"100%"}} data={car} renderItem={({item})=><Cart item={item} change={change}/>}></FlatList>


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


*/
const shopingCart = ({navigation}) =>{

    const [car,setCar] = useState([])
    const [resumen,setResumen] = useState(selectInfo(store.getState()))
    const [idDel,setIdDel] = useState(null)
    const [changed, setChanged] = useState(true);
    const dispatch = useDispatch();

    const change = (id)=>{

      dispatch(unset(id));
      setChanged(true);


    }

    useEffect(

      ()=>{

        const carro = selectProducts(store.getState());
        if(changed){

          setCar(carro);
          setResumen(selectInfo(store.getState()))
          setChanged(false);

        }
        
        /*

        if (idDel != null) {
          //console.log("aqui");
          dispatch(unset(idDel));

        }
        */

      }
    )

    return(
      <View style={{backgroundColor:colors.principal,width:"100%",height:"100%"}}>

        <StatusBar backgroundColor={colors.second}/>
        <HeaderSolo />
        <View style={{height:"86%"}}>

          {
            car.length > 0
            ?(
              <>
              <View style={[w(100),{height:"70%",padding:5}]}>
                <View style={[flex.PerfectCenter,{width:"100%",height:"100%", backgroundColor:"white",padding:5,borderRadius:3}]}>


                  <FlatList style={{width:"100%",height:"100%"}} data={car} renderItem={({item})=><Cart item={item} change={change}/>}></FlatList>


                </View>
              </View>
              <View style={[w(100),{height:"30%",padding:5}]}>
                <View style={[flex.PerfectCenter,{width:"100%",height:"100%", backgroundColor:"white",borderRadius:3}]}>
                  <Resumen resumen={resumen} navigation={navigation}/>
                </View>
              </View>
              </>
            )
            :(
              <View style={[w(100),{height:"100%",padding:5}]}>
                <View style={[flex.PerfectCenter,{width:"100%",height:"100%", backgroundColor:"white"}]}>
                  <Text>No hay productos en el carrito</Text>
                </View>
              </View>
            )
          }


        </View>
        <Tab focus={[false,true,false,false,false]} display={true} navigation={navigation}/>
      </View>
    )

}

export default shopingCart
