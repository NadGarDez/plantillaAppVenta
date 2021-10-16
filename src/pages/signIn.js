import React, {Component,useState,useEffect} from "react"
import {View,StatusBar,Text,ScrollView,ImageBackground,Image,TouchableOpacity,Alert} from "react-native"
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
import cf from "../utilities/fetchManager.js"
import config from "../../config.js"

const component = ({navigation,route})=>{

    let [user,setUser] = useState("")
    let [email,setEmail] = useState("")
    let [password1,setPassword1] = useState("")
    let [password2,setPassword2] = useState("")

    let signIn = async ()=>{
      if(password1 == password2){
        console.log("iguales")
        try{
          let a = new cf(`${config.host}/createUser`)
          let body = {
            user:user,
            email:email,
            pass:password1
          }

          let result =await a.postJson(body)
          if(!result.error){
            Alert.alert(JSON.stringify("Ahora ingrese al login"))
            navigation.navigate("Login")

          }
          else{
            Alert.alert(result.error)
          }
        }
        catch(err){
          console.log(err)
        }

      }
      else{
        Alert.alert("contraceñas no coinciden")
      }
    }

    return(
      <View>
        <StatusBar backgroundColor={colors.second}/>
        <ScrollView style={{width:"100%",height:"100%"}}>
          <View style={[flex.Column,flex.Wrap,{backgroundColor:colors.customWhite,width:"100%",}]}>
            <ImageBackground source={require("../assets/images/signin.jpg")} resizeMode="stretch" style={[h(30),{width:"100%"},flex.PerfectCenter]}>


              <Icon name="fire" size={60} color={colors.gold} style={{margin:8}} />
              <Text style={[fonts.type.ft,{color:colors.customWhite,fontSize:40}]}>
                Nombre app
              </Text>

            </ImageBackground>
            <LinearGradient colors={["white",colors.second]} style={[flex.Column,flex.Wrap,{width:"100%"}]}>
              <View style={[{width:"100%"}, h(20),flex.PerfectCenter]}>
                <Text style={[fonts.type.f3,{color:colors.second,fontSize:30}]}>SignIn</Text>
              </View>
              <View style={[{width:"100%"}, h(10),flex.PerfectCenter]}>
                <Input placeholder="Nombre de usuario"
                  onChangeText={
                    text => setUser(text)

                  }

                />
              </View>
              <View style={[{width:"100%"}, h(10),flex.PerfectCenter]}>
                <Input placeholder="Email"
                  onChangeText = {
                    text => setEmail(text)
                  }
                />
              </View>
              <View style={[{width:"100%"}, h(10),flex.PerfectCenter]}>
                <Input placeholder="Password" secureTextEntry={true}
                  onChangeText = {
                    text => setPassword1(text)
                  }

                />
              </View>
              <View style={[{width:"100%"}, h(10),flex.PerfectCenter]}>
                <Input placeholder="Repit Password" secureTextEntry={true}
                  onChangeText = {
                    text => setPassword2(text)
                  }

                 />
              </View>

              <View style={[{width:"100%"}, h(10),flex.PerfectCenter]}>

                <Button
                  width={80} title="Enviar"
                    action={
                      ()=>{
                        signIn()
                      }
                    }
                />


              </View>
              <View style={[{width:"100%"}, h(15),flex.PerfectCenter]}>

                <TouchableOpacity
                  onPress={
                    ()=>{
                      navigation.navigate("Login")
                    }
                  }
                >
                  <Text style={[fonts.type.f3,fonts.size.small,{color:"grey" }]} >Ya tiene una cuenta? Inicie secion</Text>
                </TouchableOpacity>


              </View>



            </LinearGradient>
            <Footer/>

          </View>
        </ScrollView >
      </View>
    )

}

export default component
