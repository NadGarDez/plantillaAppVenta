import React from "react"
import {View,ScrollView,TouchableOpacity,KeyboardAvoidingView,Text} from "react-native"
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
import { getAllMessages, getInformationPartner, getInformationPartners, } from "../utilities/chat/chatUtils.js"
import { WebSocketContext } from "../components/WebSocketPovider.js"
import { saveUser } from "../utilities/db/dbManager.js"

const component =  ({navigation,route})=>{
  const instanceSocket = useContext(WebSocketContext);
  let [displaTab,setDisplayTap] = useState(true);
  const [messageObject,setMessageObject]=useState({
    toUser:route.params.partnerId,
    gruop:route.params.gruop,
    type:"",
    content:""
  });
  const [partnerInformation,setParnerInformation]= useState(null);


  useEffect( // cut and paste code of conversation to chat panel file, not here
    async ()=>{
      const result = await getInformationPartner(route.params.partnerId);
      try {
        const result = saveUser(result.data[0]);
      } catch (error) {
        
      }
      setParnerInformation(result.data[0]);

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
    //  console.log(messageObject);
    },
    [messageObject]
  )

  return(
    <KeyboardAvoidingView


    >
      <View style={[flex.column,{backgroundColor:"white",width:"100%",height:"100%"}]}>
        <Bar navigation={navigation} name={ partnerInformation!== null ? partnerInformation.user : ""} avatar={ partnerInformation!== null ? partnerInformation.avatar:""}/>
        <ScrollView style={[h(79),{width:"100%"}]}>
          {
            /*
            mensajes.map(
              (item,index)=>{
                return item.propietario == true ? <MenssageUser obj={item}/> : <MenssageCollege obj={item}/>
              }
            )
            */
          }

          <Text>hola</Text>
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
                let copy = {...messageObject};
                copy.content = text;
                copy.type = "text";
                console.log(copy, 'copy')
                setMessageObject(
                  copy
                )
                instanceSocket.emit("chat/writing", route.params.partnerId);
              }}

            />
          </View>
          <View style={[flex.PerfectCenter,{width:"10%",height:"100%"}]}>
            <TouchableOpacity style={[flex.PerfectCenter,w(9),{height:w(9).width,borderRadius:w(9).width/2,backgroundColor:colors.principal}]}
              onPress={
                ()=>{
                  instanceSocket.emit("chat/message",messageObject.content,messageObject.toUser,messageObject.gruop,messageObject.type);
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
