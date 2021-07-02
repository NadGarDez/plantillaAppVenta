import React, {Component} from "react"
import {View,StatusBar,Text,ScrollView,Image,TouchableOpacity} from "react-native"
import Tab from "../components/tabBar.js"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
import Icon from "react-native-vector-icons/FontAwesome"
import HeaderSolo from "../components/headerSolo.js"

export default class User extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View
        style={{width:"100%",height:"100%"}}
      >
        <HeaderSolo />
        <ScrollView
          style={[w(100),h(86)]}
        >
          <View
            style={[flex.Column,flex.Wrap]}
          >
            <View
              style={[h(30),flex.PerfectCenter,{width:"100%"}]}
            >
              <View
                style={[h(25),{width:h(25).height, borderRadius:h(25).height/2,overflow:"hidden"}]}
              >
                <Image source={{uri:"https://www.ecestaticos.com/imagestatic/clipping/a82/792/a827920d3ca50d619ce6a3d85fa1802b.jpg"}} resizeMode="stretch" style={{width:"100%",height:"100%"}}/>
              </View>
            </View>
            <View
              style={[flex.Row,flex.Wrap,flex,flex.VerticalCenter,{width:"100%"}]}
            >
              <Text style={[fonts.type.f4,fonts.size.gigant, {color:colors.second}]}>Algun Usuario</Text>
            </View>
            <View
              style={[flex.Row,flex.Wrap,flex,flex.VerticalCenter,{width:"100%",padding:5}]}
            >
              <Text style={[fonts.type.f3,fonts.size.small, {color:colors.grey, textAlign:"center"}]}>Alguna calle en alguna urbanizacion en alguna ciudad en algun pais</Text>
            </View>
            <View style={[h(60),flex.Row,flex.Wrap,{width:"100%"}]}>
              <TouchableOpacity style={{width:"50%",height:"50%",padding:5}}>
                <View style={[{backgroundColor:colors.gold,width:"100%",height:"100%"},shadow,flex.Column,flex.PerfectCenter]}>
                  <Icon name="book" color="white" size={30}/>
                  <Text style={[fonts.type.f4,fonts.size.medium, {color:colors.customWhite,textAlign:"center"}]}>Pedidos</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:"50%",height:"50%",padding:5}}>
                <View style={[{backgroundColor:colors.maya,width:"100%",height:"100%"},shadow,flex.Column,flex.PerfectCenter]}>
                  <Icon name="lock" color="white" size={30}/>
                  <Text style={[fonts.type.f4,fonts.size.medium, {color:colors.customWhite,textAlign:"center"}]}>Seguridad</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:"50%",height:"50%",padding:5}}>
                <View style={[{backgroundColor:colors.principal,width:"100%",height:"100%"},shadow,flex.Column,flex.PerfectCenter]}>
                  <Icon name="cog" color="white" size={30}/>
                  <Text style={[fonts.type.f4,fonts.size.medium, {color:colors.customWhite,textAlign:"center"}]}>Configuracion</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{width:"50%",height:"50%",padding:5}}>
                <View style={[{backgroundColor:colors.rojo,width:"100%",height:"100%"},shadow,flex.Column,flex.PerfectCenter]}>
                  <Icon name="power-off" color="white" size={30}/>
                  <Text style={[fonts.type.f4,fonts.size.medium, {color:colors.customWhite,textAlign:"center"}]}>Cerrar Sesion</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>

        </ScrollView>
        <Tab focus={[false,false,false,true,false]} display={true} navigation={this.props.navigation}/>
      </View>
    )
  }
}

let shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
}
