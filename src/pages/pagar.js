import React, {useState,useEffect} from "react"
import {View,Text,KeyboardAvoidingView,Platform,ScrollView} from "react-native"

const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
import Bar from "../components/headerBack.js"
import Button from "../components/togleButtonNad.js"
import Tab from "../components/tabBar.js"
import Button2 from "../components/buttonNad.js"
import {Input} from "react-native-elements"
import {Picker} from '@react-native-picker/picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

let Component = ({navigation})=>{

  const [activo,changeActivo] = useState([true,false])
  const [mes,setMes] = useState(1);
  const [año,setAño]= useState(2021);
  useEffect(
    ()=>{

    }
  )

  const PagoMovil=()=>{
    return (
      <View

        style={[flex.Column,{width:"100%",height:"100%"}]}>
        <View style={[flex.Row,{width:"100%",height:"15%",padding:10}]}>
          <View style={[flex.HorizontalCenter,flex.Row,{padding:5,width:"50%",backgroundColor:colors.customWhite}]}>
            <Text style={[fonts.type.f4,fonts.size.medium]}>Banco</Text>
          </View>
          <View style={[flex.RowReverse,flex.HorizontalCenter,{padding:5,width:"50%",backgroundColor:colors.customWhite}]}>
            <Text style={[fonts.type.f3,fonts.size.small]} >BANCO 123</Text>
          </View>


        </View>
        <View style={[flex.Row,{width:"100%",height:"15%",padding:10}]}>
          <View style={[flex.HorizontalCenter,flex.Row,{padding:5,width:"50%",backgroundColor:colors.customWhite}]}>
            <Text style={[fonts.type.f4,fonts.size.medium]}>Numero de telefono</Text>
          </View>
          <View style={[flex.RowReverse,flex.HorizontalCenter,{padding:5,width:"50%",backgroundColor:colors.customWhite}]}>
            <Text style={[fonts.type.f3,fonts.size.small]}>123456</Text>
          </View>
        </View>
        <View style={[flex.Row,{width:"100%",height:"15%",padding:10}]}>
          <View style={[flex.HorizontalCenter,flex.Row,{padding:5,width:"50%",backgroundColor:colors.customWhite}]}>
            <Text style={[fonts.type.f4,fonts.size.medium]}>C.I</Text>
          </View>
          <View style={[flex.RowReverse,flex.HorizontalCenter,{padding:5,width:"50%",backgroundColor:colors.customWhite}]}>
            <Text style={[fonts.type.f3,fonts.size.small]}>123456</Text>
          </View>
        </View>
        <View style={[{width:"100%",height:"15%",padding:5}]}>
          <Text style={[fonts.type.f3,{textAlign:"center",color:colors.principal}]}>Teien la responsabilidad de enviar un pago movil a los datos previemente mostrados</Text>
        </View>
        <View style={[flex.PerfectCenter,{width:"100%",height:"15%"}]}>
          <Input placeholder="Numero de referencia"/>
        </View>

        <View style={[flex.PerfectCenter,{width:"100%",height:"15%"}]}>
          <Button2 title="Registrar Pago" width={80} action={()=>console.log("hola")}/>
        </View>


      </View>
    )
  }

  const Punto = ()=>{
    return (
      <View

        style={[flex.Column, {width:"100%",height:"100%"}]}>
        <View style={[flex.Row,{width:"100%",height:"15%",padding:10}]}>
          <Input placeholder="Nombre en la tarjeta"/>
        </View>
        <View style={[flex.Row,{width:"100%",height:"15%",padding:10}]}>
          <Input placeholder="numero de tarjeta"/>
        </View>
        <View style={[flex.Row,{width:"100%",height:"15%",padding:10}]}>
          <Input placeholder="Cedula de indentidad"/>
        </View>
        <View style={[flex.PerfectCenter,{width:"100%",height:"15%"}]}>
          <Input placeholder="Codigo de seguridad"/>
        </View>
        <View style={[flex.Column,{width:"100%",height:"20%"}]}>
          <View style={{width:"100%", height:"15%"}}>
              <Text style={[fonts.type.f3,{textAlign:"center",color:colors.principal}]}>Vencimiento</Text>
          </View>
          <View style={[flex.Row,{width:"100%", height:"85%"}]}>
            <Picker
              style={{width:"50%",height:"100%"}}
              selectedValue={mes}
              onValueChange={(itemValue, itemIndex) =>
                setMes(itemValue)
              }
            >
              <Picker.Item label="Enero" value="1" />
              <Picker.Item label="Febrero" value="2" />
              <Picker.Item label="Marzo" value="3" />
              <Picker.Item label="Abril" value="4" />
              <Picker.Item label="Mayo" value="5" />
              <Picker.Item label="Junio" value="6" />
              <Picker.Item label="Julio" value="7" />
              <Picker.Item label="Agosto" value="8" />
              <Picker.Item label="Septiembre" value="9" />
              <Picker.Item label="Octubre" value="10" />
              <Picker.Item label="Noviembre" value="11" />
              <Picker.Item label="Diciembre" value="12" />
            </Picker>
            <Picker
              style={{width:"50%",height:"100%"}}
              selectedValue={año}
              onValueChange={(itemValue, itemIndex) =>
                setAño(itemValue)
              }
            >
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2022" value="2022" />
              <Picker.Item label="2023" value="2023" />
              <Picker.Item label="2023" value="2023" />
              <Picker.Item label="2024" value="2024" />
              <Picker.Item label="2025" value="2025" />
              <Picker.Item label="2026" value="2026" />
              <Picker.Item label="2027" value="2027" />
              <Picker.Item label="2028" value="2028" />
              <Picker.Item label="2029" value="2029" />
              <Picker.Item label="2030" value="2030" />
              <Picker.Item label="2031" value="2031" />
            </Picker>
          </View>

        </View>
        <View style={[flex.PerfectCenter,{width:"100%",height:"15%"}]}>
          <Button2 title="Pagar" width={80} action={()=>console.log("hola")}/>
        </View>


      </View>
    )
  }

  let S = ()=>{
    if(activo[0]==true){
      return(
        <PagoMovil />
      )

    }
    else{
      return(
        <Punto />
      )
    }
  }
  return (
    <KeyboardAwareScrollView

    >
      <View style={[h(100),{width:"100%",backgroundColor:colors.principal}]}>
      <Bar navigation={navigation}/>
      <View style={[{ width:"100%",height:"86%"}]}>
        <View style={[{width:"100%",height:"20%",paddingLeft:5,paddingTop:5,paddingBottom:2.5,paddingRight:5}]}>
          <View style={[flex.Column,{width:"100%", height:"100%", borderRadius:5,backgroundColor:"white"}]}>
            <View style={[flex.PerfectCenter,{width:"100%",height:"50%"}]}>
              <Text style={[fonts.type.f3,fonts.size.medium]}>Seleccione el metodo de pago</Text>
            </View>
            <View style={[flex.Row,{width:"100%",height:"50%"}]}>
              <View style={[flex.PerfectCenter,{width:"50%", height:"100%"}]}>
                <Button title="Pago Movil"
                  togle={activo[0]}
                  width={40} action={()=>changeActivo([true,false])}/>
              </View>
              <View style={[flex.PerfectCenter,{width:"50%", height:"100%"}]}>
                <Button title="Punto de Venta"
                  togle={activo[1]}
                  width={40} action={()=>changeActivo([false,true])}/>
              </View>
            </View>
          </View>
        </View>
        <View style={[{width:"100%",height:"80%",paddingLeft:5,paddingTop:2.5,paddingBottom:5,paddingRight:5}]}>
          <View style={[{width:"100%",height:"100%", borderRadius:5,backgroundColor:"white"}]}>
            <S/>
          </View>
        </View>
      </View>
      <Tab focus={[false,true,false,false,false]} display={true} navigation={navigation}/>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Component
