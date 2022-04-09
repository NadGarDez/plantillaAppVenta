import React from "react"
import {View,ScrollView,TouchableOpacity,KeyboardAvoidingView,Text} from "react-native"
import {useEffect,useState,useContext, useRef} from "react"
import {Input} from "react-native-elements"
import Bar from "../components/headerConversation.js"
import Icon from "react-native-vector-icons/FontAwesome"
import MenssageUser from "../components/messageUser.js"
import MenssageCollege from  "../components/messageCollege.js"
import Tab from "../components/tabBar.js"
const {flex} = require("../styles/flex.js")
const {colors}=require("../styles/colors.js")
import {w,h} from "../utilities/sizes.js"
import { selectId } from "../reduxFiles/idSlice.js"
import { getAllMessages, getInformationPartner, getInformationPartners, } from "../utilities/chat/chatUtils.js"
import { WebSocketContext } from "../components/WebSocketPovider.js"
import { getMessages, rowToArray, saveMessage } from "../utilities/db/dbManager.js"
import store from "../reduxFiles/store.js"
import { socketEventSelect } from "../reduxFiles/socketEventSllice.js"

const component =  ({navigation,route})=>{
  const instanceSocket = useContext(WebSocketContext);
  const scrollRef = useRef(null)
  let [displaTab,setDisplayTap] = useState(true);
  const userId = selectId(store.getState());
  const [messageObject,setMessageObject]=useState({
    toUser:route.params.partnerId,
    group_member:route.params.group_member,
    type:"",
    content:""
  });

  const [messages, setMessages] = useState(
    null
  )
  const [partnerInformation,setParnerInformation]= useState(null);

  const showObject = ()=>messageObject;


  useEffect( // cut and paste code of conversation to chat panel file, not here
    async ()=>{
      const result = await getInformationPartner(route.params.partnerId);
      /*
      try {
        const result = saveUser(result.data[0]);
      } catch (error) {
        
      }
      */
      setParnerInformation(result.data[0]);
      let fetchedMessages = await getMessages(route.params.group_member);
      fetchedMessages = (fetchedMessages.status !== 'error' && fetchedMessages.data.rows.length > 0) ? rowToArray(fetchedMessages.data.rows) : [];
      setMessages(fetchedMessages);
      
      
      
    },
    []
  )
  useEffect(
    async ()=>{
      instanceSocket.emit("chat/create_connection", route.params.partnerId);
    },
    [instanceSocket]
  )
  useEffect(
    ()=>{
      const unsuscribe = store.subscribe(
        async ()=>{
          const {name,data} = socketEventSelect(store.getState()).socketEvent;
         
          switch (name) {
            case "chat/message":
            case "chat/sendMessageResponse":
              //const result = await saveMessage(data.data);
              const copy = messages;
              copy.push(data.data)
              setMessages(
                [...copy]
              )
              scrollRef.current.scrollToEnd()
            
            break;

            default:
              break;
          }
          
        }
      )
      return unsuscribe;
    },
    [messageObject,messages,scrollRef]
  )


  return(
    <KeyboardAvoidingView


    >
      <View style={[flex.column,{backgroundColor:"white",width:"100%",height:"100%"}]}>
        <Bar navigation={navigation} name={ partnerInformation!== null ? partnerInformation.user : ""} avatar={ partnerInformation!== null ? partnerInformation.avatar:""}/>
        <ScrollView ref={scrollRef} style={[h(79),{width:"100%"}]}>
          {
            messages !== null && messages.map(
              (item,index)=>{
                return item.fromUser !==  route.params.partnerId ? <MenssageUser obj={item}/> : <MenssageCollege obj={item}/>
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

              onChangeText={(value)=>{
                let copy = {...messageObject, type:'text', content:value};
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
                  if (messageObject.content !== "") {
                  instanceSocket.emit("chat/message",messageObject.content,messageObject.toUser,messageObject.group_member,messageObject.type);
                  setMessageObject({...messageObject, content:"", type:""})
                  }
                  
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
