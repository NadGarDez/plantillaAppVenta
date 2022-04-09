import React, { useContext, useEffect, useState} from "react"
import {View,FlatList} from "react-native"
import {useDispatch} from "react-redux"
import Bar from "../components/headerSolo.js"
import CartChat from "../components/chatCart.js"
import Tab from "../components/tabBar.js"
const {flex} = require("../styles/flex.js")
const {colors}=require("../styles/colors.js")
import { WebSocketContext } from "../components/WebSocketPovider.js"
import { getLastMesages, getLastMessage, rowToArray, saveMessage, saveMessages } from "../utilities/db/dbManager.js"
import { selectId } from "../reduxFiles/idSlice.js"
import { socketEventSelect } from "../reduxFiles/socketEventSllice.js"
import store from "../reduxFiles/store.js"
import { getAllMessages, getInformationPartners } from "../utilities/chat/chatUtils.js"

const component = ({navigation})=>{

  const socketContext = useContext(WebSocketContext);
  const [conversations, setConversations] = useState(null); 
  const [lastDate, setLastDate] = useState(null);


  const formatConversation = async (arr, id)=>{
     
    const partnersId = arr.map(
      (item)=>item.fromUser === id ? item.toUser : item.fromUser
    )
    const partners = await getInformationPartners(partnersId);
    const conversation = arr.map(
      (item)=>{
        const key = item.fromUser === id ? item.toUser : item.fromUser;
        const {avatar,user,_id} = partners.data[key];
        return {lastMessage:item, avatar,user,_id}
      }
    )
    return conversation;

  }

  const printConversations = async (event) => {
    const myId = selectId(store.getState())
      if (event === false) {
      
        const lastId = await getLastMessage(selectId(store.getState()))
        const newMessages = await getAllMessages(lastId.data.rows.length > 0 ? lastId.data.rows.item(0)._id : null);
        const saveTrans = await saveMessages(newMessages.status !== 'error' ? newMessages.data : null);
      }
      let messages = await getLastMesages(myId);
      messages = (messages.status !== 'error' && messages.data.rows.length > 0) ? rowToArray(messages.data.rows) : [];
      const conversation = await formatConversation(messages, myId);
      setConversations(conversation);
  }

  useEffect(
    async ()=>{
      await printConversations(false);
      const unsuscribe = store.subscribe(
        async ()=>{
          const {name, data} = socketEventSelect(store.getState());
          switch (name) {
            case "chat/message":
            case "chat/sendMessageResponse":
            
              await printConversations(true);
              break;
          }
        }
      )

      return unsuscribe
      
    },
    []
  )


  useEffect(
    async ()=>{
      const unsubscribe = navigation.addListener('focus', async () => {
        await printConversations(false);
      });
  
      return unsubscribe;
    },
    [navigation]
  )

  
  let dispatch = useDispatch();



  return(
    <View style={[flex.column,flex.wrap,{backgroundColor:colors.customWhite,width:"100%"}]}>
      <Bar />
      {
        conversations !== null &&(
        <FlatList
          style={{width:"100%",height:"86%"}}
          data={conversations}
          renderItem={({item})=><CartChat item={item} navigation={navigation}/>}
        />
        )
      }
      
      <Tab focus={[false,false,true,false,false]} display={true} navigation={navigation}/>

    </View>
  )
}

export default component
