import { Alert } from "react-native";
import { socketEventSelect } from "../reduxFiles/socketEventSllice";
import store from "../reduxFiles/store";
import { saveMessage } from "./db/dbManager";


const socketEvents = (socket, dispatch)=>{
    socket.on(
        "connect",
        ()=>{
            console.log('conectadoooo', socket.id)
        
           dispatch(
               {
                   name:'debug/connect',
                   time: new Date().getTime()
               }
           )
           
        }
    )
    socket.on(
        "connect_error",
        (err)=>{
           dispatch(
               {
                   name:'debug/connect',
                   time: new Date().getTime()
               }
           )
           
        }
    )
    
    socket.on(
        "chat/message",
        async (objectMessage)=>{
        
            const result  = await saveMessage(objectMessage.data);
           
            
            dispatch(
                {
                    name:'chat/message',
                    data:objectMessage,
                    time: new Date().getTime()
                }
            )
        }
    )
    

    socket.on(
        "chat/sendMessageResponse",

        async (obj)=>{
            if (obj.status === 'success') {
                try {
                    const result  = await saveMessage(obj.data);
                } catch (error) {
                    console.log(error)
                }
                dispatch(
                    {
                        name:'chat/sendMessageResponse',
                        time: new Date().getTime(),
                        data:obj
                    }
                )
            }
           
            
        }
    )
    

    return socket

}

export {socketEvents}