import React, {Component} from "react"
import {View,StatusBar,Text,ScrollView,ImageBackground,Image,TouchableOpacity} from "react-native"
import {Input} from "react-native-elements"
import Button from "../components/buttonNad.js"
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome"
import Footer from "../components/footer.js"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
import Bar from "../components/headerSolo.js"
export default class Login extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
        <StatusBar backgroundColor={colors.second}/>
        <ScrollView style={{width:"100%",height:"100%"}}>
          <View style={[flex.Column,flex.Wrap,{backgroundColor:colors.customWhite,width:"100%",}]}>
            <ImageBackground source={require("../assets/images/login.jpg")} resizeMode="stretch" style={[h(30),{width:"100%"},flex.PerfectCenter]}>


              <Icon name="fire" size={60} color={colors.gold} style={{margin:8}} />
              <Text style={[fonts.type.ft,{color:colors.customWhite,fontSize:40}]}>
                Nombre app
              </Text>

            </ImageBackground>
            <LinearGradient colors={["white",colors.second]} style={[flex.Column,flex.Wrap,{width:"100%"}]}>
              <View style={[{width:"100%"}, h(20),flex.PerfectCenter]}>
                <Text style={[fonts.type.f3,{color:colors.second,fontSize:30}]}>Login</Text>
              </View>
              <View style={[{width:"100%"}, h(10),flex.PerfectCenter]}>
                <Input placeholder="Email o Usuario"/>
              </View>
              <View style={[{width:"100%"}, h(10),flex.PerfectCenter]}>
                <Input placeholder="Password" secureTextEntry={true} />
              </View>

              <View style={[{width:"100%"}, h(10),flex.PerfectCenter]}>

                <Button
                  width={80} title="Enviar"
                    action={
                      ()=>{

                      }
                    }
                />


              </View>
              <View style={[{width:"100%"}, h(15),flex.PerfectCenter]}>

                <TouchableOpacity
                  onPress={
                    ()=>{
                        this.props.navigation.navigate("SignIn")
                    }
                  }
                >
                  <Text style={[fonts.type.f3,fonts.size.small,{color:"grey" }]} >Presiona aqui si no tiene cuenta</Text>
                </TouchableOpacity>


              </View>



            </LinearGradient>
            <Footer/>

          </View>
        </ScrollView >
      </View>
    )
  }
}
