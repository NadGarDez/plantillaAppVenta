import React from "react"
import {View,ScrollView,TouchableOpacity,KeyboardAvoidingView} from "react-native"
import {useEffect,useState,useContext} from "react"
import {Input} from "react-native-elements"
import Bar from "../components/headerConversation.js"
import Icon from "react-native-vector-icons/FontAwesome"
import MenssageUser from "../components/messageUser.js"
import MenssageCollege from  "../components/messageCollege.js"
import Tab from "../components/tabBar.js"
const {flex} = require("../styles/flex.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
import { getInformationSeller } from "../utilities/chat/chatUtils.js"
import { WebSocketContext } from "../components/WebSocketPovider.js"



const component =  ({navigation,route})=>{
  const instanceSocket = useContext(WebSocketContext);
  let [displaTab,setDisplayTap] = useState(true);
  const [messageObject,setMessageObject]=useState({
    toUser:route.params.partnerId,
    type:"",
    content:""
  });
  const [sellerInformation,setSellerInformation]= useState(null)

  console.log(route.params,'params')

  useEffect(
    async ()=>{
      const result = await getInformationSeller(route.params.partnerId);
      setSellerInformation(result.data[0]);
    },
    []
  )
  useEffect(
    async ()=>{
      console.log(instanceSocket);
      instanceSocket.emit("chat/create_connection", route.params.partnerId);
    },
    [instanceSocket]
  )
  useEffect(
    ()=>{
      console.log(messageObject);
    },
    [messageObject]
  )

 
 // Alert.alert(JSON.stringify(route))
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

  return(
    <KeyboardAvoidingView


    >
      <View style={[flex.column,{backgroundColor:"white",width:"100%",height:"100%"}]}>
        <Bar navigation={navigation} name={ sellerInformation!== null ? sellerInformation.user : ""} avatar={ sellerInformation!== null ? sellerInformation.avatar:""}/>
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
              value={messageObject.type = "text" ? messageObject.content : ""}
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

              onChangeText={(text)=>{
                setMessageObject(
                  {...messageObject,content:text,type:"text"}
                )
                instanceSocket.emit("chat/writing", route.params.partnerId);
              }}

            />
          </View>
          <View style={[flex.PerfectCenter,{width:"10%",height:"100%"}]}>
            <TouchableOpacity style={[flex.PerfectCenter,w(9),{height:w(9).width,borderRadius:w(9).width/2,backgroundColor:colors.principal}]}
              onPress={
                ()=>{
                  instanceSocket.emit("chat/message",messageObject.content,messageObject.toUser,messageObject.type);
                  setMessageObject({...messageObject,content:"",type:"text"})
                }
              }
            >

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
