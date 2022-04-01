import React, { useContext, useEffect, useState} from "react"
import {View,FlatList} from "react-native"
import {useDispatch} from "react-redux"
import Bar from "../components/headerSolo.js"
import CartChat from "../components/chatCart.js"
import Tab from "../components/tabBar.js"
const {flex} = require("../styles/flex.js")
const {colors}=require("../styles/colors.js")
import { WebSocketContext } from "../components/WebSocketPovider.js"
import { getLastMesages, rowToArray } from "../utilities/db/dbManager.js"
import { selectId } from "../reduxFiles/idSlice.js"
import { socketEventSelect } from "../reduxFiles/socketEventSllice.js"
import store from "../reduxFiles/store.js"
import { getInformationPartners } from "../utilities/chat/chatUtils.js"

const component = (props)=>{

  const socketContext = useContext(WebSocketContext);
  const [conversations, setConversations] = useState(null); 
  console.log(socketEventSelect(store.getState));


  const formatConversation = async (arr, id)=>{
     
    const partnersId = arr.map(
      (item)=>item.fromUser === id ? item.toUser : fromUser
    )
    const partners = await getInformationPartners(partnersId);
    const conversation = arr.map(
      (item)=>{
        const key = item.fromUser === id ? item.toUser : fromUser;
        const {avatar,user,_id} = partners.data[key];
        return {lastMessage:item, avatar,user,_id}
      }
    )
    return conversation;

  }

  useEffect(
    async ()=>{

      const myId = selectId(store.getState())

      let messages = await getLastMesages(myId);
      messages = (messages.status !== 'error' && messages.data.rows.length > 0) ? rowToArray(messages.data.rows) : [];
      const conversation = await formatConversation(messages, myId);
      console.log(conversation, 'format conversation')
      setConversations(conversation);
      const unsuscribe = store.subscribe(
        async ()=>{
          const {name, data} = socketEventSelect(sore.getState);
          switch (name) {
            case 'chat/message':
             
              break;
          
            default:
              break;
          }
        }
      )

      return unsuscribe
      /*
      const messages = await getAllMessages(null);
      console.log(messages, 'mensajes');
      const partnersId = Object.keys(messages.data);
      console.log(partnersId);
      const partners = await getInformationPartners(partnersId);
      console.log(partners, 'partners');
      // now save the messages and partners in the local db
      let filterCon = [];

      for (const key in partners.data) {
        filterCon.push({
            ...partners.data[key],
            lastMessage:messages.data[key][0]
        })
          
      }
      console.log(filterCon, 'conversationsssssssssssssssssssssssssssssssssssssssssssssssss')
      setConversations(filterCon);
      */
    },
    []
  )



  
  let dispatch = useDispatch();


  //console.log(socket.connect, "socketttttttttttttttttttttt")

  return(
    <View style={[flex.column,flex.wrap,{backgroundColor:colors.customWhite,width:"100%"}]}>
      <Bar />
      {
        conversations !== null &&(
        <FlatList
          style={{width:"100%",height:"86%"}}
          data={conversations}
          renderItem={({item})=><CartChat item={item} navigation={props.navigation}/>}
        />
        )
      }
      
      <Tab focus={[false,false,true,false,false]} display={true} navigation={props.navigation}/>

    </View>
  )
}

export default component
