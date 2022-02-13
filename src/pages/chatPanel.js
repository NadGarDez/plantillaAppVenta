import React, {Component} from "react"
import {View,StatusBar,Text,Button,FlatList} from "react-native"
import {useSelector,useDispatch} from "react-redux"
import {useEffect,useSate} from "react"
import {setToken,unsetTokenm,selectToken} from "../reduxFiles/sessionSlice.js"
import Bar from "../components/headerSolo.js"
import CartChat from "../components/chatCart.js"
import Footer from "../components/footer.js"
import Tab from "../components/tabBar.js"
const {flex} = require("../styles/flex.js")
const {fonts} = require("../styles/fonts.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
import config from "../../config.js"
import io from 'socket.io-client/dist/socket.io.js';


const con = io('ws://127.0.0.1:7070/', {reconnect: true, transports: ["websocket"],
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

const component = (props)=>{
  let selector = useSelector(selectToken)
  let dispatch = useDispatch()
  useEffect(
    ()=>{

    }
  )

  con.on("connect_error", (err) => {
    console.log(err)
   console.log(`connect_error due to ${err.message}`);
});

  con.on(
    "connect",
    ()=>{
      console.log("conectaadaaaaado")
      con.send("hello");
    }
  )
  //console.log(socket.connect, "socketttttttttttttttttttttt")

  let opiniones = [
    {
      nombre:"Algun usuario",
      foto:"https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"//jejejejejejej
    },
    {
      nombre:"Algun usuario",
      foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKZYYfBtlYAVrWfSk1xL-h2RYJ99059nA-A&usqp=CAU",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"//jejejejejejej
    },
    {
      nombre:"Algun usuario",
      foto:"https://www.mundopsicologos.com/site/article/10338/49668/hay-personas-sin-sentimientos-0_ai1.jpg",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"
    },
    {
      nombre:"Algun usuario",
      foto:"https://www.ecestaticos.com/imagestatic/clipping/a82/792/a827920d3ca50d619ce6a3d85fa1802b.jpg",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"
    },
    {
      nombre:"Algun usuario",
      foto:"https://eststatic.com/2676/conversions/malas-personas-social.jpg",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"
    },
    {
      nombre:"Algun usuario",
      foto:"https://www.latercera.com/resizer/mp_c_41mYGXiP_UsSGdFZTevjYk=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/3V5Z225DDJBEHMLQJJEETMYVCE.JPG",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"
    },
    {
      nombre:"Algun usuario",
      foto:"https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"//jejejejejejej
    },
    {
      nombre:"Algun usuario",
      foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKZYYfBtlYAVrWfSk1xL-h2RYJ99059nA-A&usqp=CAU",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"//jejejejejejej
    },
    {
      nombre:"Algun usuario",
      foto:"https://www.mundopsicologos.com/site/article/10338/49668/hay-personas-sin-sentimientos-0_ai1.jpg",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"
    },
    {
      nombre:"Algun usuario",
      foto:"https://www.ecestaticos.com/imagestatic/clipping/a82/792/a827920d3ca50d619ce6a3d85fa1802b.jpg",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"
    },
    {
      nombre:"Algun usuario",
      foto:"https://eststatic.com/2676/conversions/malas-personas-social.jpg",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"
    },
    {
      nombre:"Algun usuario",
      foto:"https://www.latercera.com/resizer/mp_c_41mYGXiP_UsSGdFZTevjYk=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/3V5Z225DDJBEHMLQJJEETMYVCE.JPG",
      mensaje:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      fecha:"5/6/2021"
    },

  ]
  return(
    <View style={[flex.column,flex.wrap,{backgroundColor:colors.customWhite,width:"100%"}]}>
      <Bar />
      <FlatList
        style={{width:"100%",height:"86%"}}
        data={opiniones}
        renderItem={({item})=><CartChat item={item} navigation={props.navigation}/>}
      />
      <Tab focus={[false,false,true,false,false]} display={true} navigation={props.navigation}/>

    </View>
  )
}

export default component
