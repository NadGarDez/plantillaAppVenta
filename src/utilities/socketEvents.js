import { socketEventSelect } from "../reduxFiles/socketEventSllice";
import store from "../reduxFiles/store";
import { saveMessage } from "./db/dbManager";


const socketEvents = (socket, dispatch)=>{
    socket.on(
        "connect",
        ()=>{
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
        (objectMessage)=>{
            let result;
            try {
                result = saveMessage(objectMessage.data);
                if (result.status === 'error') {
                    throw result.data;
                }
                else {
                    console.log(socketEventSelect(store.getState()));
                    dispatch(
                        {
                            name:'chat/message',
                            time: new Date().getTime()
                        }
                    )
                }
            } catch (error) {
                console.log(error);
            }
            
            
        }
    )


    return socket

}

export {socketEvents}