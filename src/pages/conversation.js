import React from "react"
import {View,StatusBar,Text,Button,FlatList,ScrollView,TouchableOpacity,KeyboardAvoidingView,Platform} from "react-native"
import {useSelector,useDispatch} from "react-redux"
import {useEffect,useState} from "react"
import {setToken,unsetTokenm,selectToken} from "../reduxFiles/sessionSlice.js"
import {Input} from "react-native-elements"
import Bar from "../components/headerConversation.js"
import CartChat from "../components/chatCart.js"
import Footer from "../components/footer.js"
import Icon from "react-native-vector-icons/FontAwesome"
import MenssageUser from "../components/messageUser.js"
import MenssageCollege from  "../components/messageCollege.js"
import Tab from "../components/tabBar.js"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



const component = ({navigation})=>{
  let selector = useSelector(selectToken)
  let dispatch = useDispatch()
  let [displaTab,setDisplayTap] = useState(true)


  let mensajes = [
    {
      propietario:false,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:true,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:false,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:true,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:false,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:false,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:true,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:false,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:true,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:false,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:false,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:true,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:false,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:true,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
    {
      propietario:false,
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      fecha:"5/6/2021"
    },
  ]

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
    <KeyboardAvoidingView


    >
      <View style={[flex.column,{backgroundColor:"white",width:"100%",height:"100%"}]}>
        <Bar navigation={navigation}/>
        <ScrollView style={[h(79),{width:"100%"}]}>
          {
            mensajes.map(
              (item,index)=>{
                return item.propietario == true ? <MenssageUser obj={item}/> : <MenssageCollege obj={item}/>
              }
            )
          }
        </ScrollView>
        <View style={[flex.Row,h(7),{backgroundColor:colors.customWhite}]}>
          <View style={[w(90),{height:"100%"}]}>
            <Input
              placeholder="mensaje"
              onFocus={
                ()=>{
                  setDisplayTap(false)
                }
              }
              onBlur={
                ()=>{
                  setDisplayTap(true)
                }
              }

            />
          </View>
          <View style={[flex.PerfectCenter,{width:"10%",height:"100%"}]}>
            <TouchableOpacity style={[flex.PerfectCenter,w(9),{height:w(9).width,borderRadius:w(9).width/2,backgroundColor:colors.principal}]}>

              <Icon color="white" name="send"/>
            </TouchableOpacity>
          </View>

        </View>
        <Tab focus={[false,false,true,false,false]} display={displaTab} navigation={navigation}/>
      </View>
    </KeyboardAvoidingView>
  )
}

export default component
