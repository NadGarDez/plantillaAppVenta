import React from "react"
import {View,StatusBar,Text,Button,FlatList,ScrollView,TouchableOpacity,KeyboardAvoidingView,Platform} from "react-native"
import {useSelector,useDispatch} from "react-redux"
import {useEffect,useSate} from "react"
import {setToken,unsetTokenm,selectToken} from "../reduxFiles/sessionSlice.js"
import {Input} from "react-native-elements"
import Bar from "../components/headerConversation.js"
import CartChat from "../components/chatCart.js"
import Footer from "../components/footer.js"
import Icon from "react-native-vector-icons/FontAwesome"
import MenssageUser from "../components/messageUser.js"
import MenssageCollege from  "../components/messageCollege.js"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"


const component = ({navigation,focus,display})=>{
  let selector = useSelector(selectToken)
  let dispatch = useDispatch()
  useEffect(() => {

  });
  console.log(display,"este es el display")
  const style={
    father:[
      w(100),
      h(7),
      display==true ? flex.Row : {display:"none"},
      {

        backgroundColor:colors.black,

      }
    ],
    item:[
      flex.PerfectCenter,
      {
        width:"20%",
        height:"100%"
      }
    ]
  }

  return(
    <View style={style.father}>
      <TouchableOpacity
        style={style.item}
        onPress={
          ()=>{
            navigation.navigate("Productos")
          }
        }
      >
        <Icon
          color={
            focus[0] == true ? colors.gold : colors.customWhite
          }
          name="list"
          size={20}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={
          ()=>{
            navigation.navigate("Carrito")
          }
        }
      >
        <Icon
          color={
            focus[1] == true ? colors.gold : colors.customWhite
          }
          name="shopping-cart"
          size={20}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={
          ()=>{
            navigation.navigate("Chat")
          }
        }
      >
        <Icon
          color={
            focus[2] == true ? colors.gold : colors.customWhite
          }
          name="comments"
          size={20}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={
          ()=>{
            navigation.navigate("Usuario")
          }
        }
      >
        <Icon
          color={
            focus[3] == true ? colors.gold : colors.customWhite
          }
          name="user"
          size={20}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.item}
        onPress={
          ()=>{
            navigation.navigate("Notificaciones")
          }
        }
      >
        <Icon
          color={
            focus[4] == true ? colors.gold : colors.customWhite
          }
          name="bell"
          size={20}
        />
      </TouchableOpacity>
    </View>
  )



}


export default component
