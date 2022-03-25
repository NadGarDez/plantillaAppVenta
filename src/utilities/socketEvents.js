import { Alert } from "react-native";

const socketEvents = (socket)=>{
    socket.on(
        "connect",
        ()=>{
            console.log('conectadoooooooooooooooooo');
           
        }
    )

    socket.emit("test_message", "hey");

    socket.on(
        'test_message',
        (text)=>{
            console.log(`the server says: ${text}`);
            Alert.alert(`the server says: ${text}`)
        }
    )

    return socket

}

export {socketEvents}