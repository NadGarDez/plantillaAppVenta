import io from 'socket.io-client/dist/socket.io'
import { socketEvents } from './socketEvents';


const socketConection = (token)=>{
    const con = io(
        'http://127.0.0.1:7070/', 
        {
          reconnect: true, 
          transports: ["websocket"],
          auth: {
            token: `Bearer ${token}`
          }
        }
    );

    return socketEvents(con);
      
}


export {socketConection};