import React,{createContext} from 'react';
import { selectToken } from '../reduxFiles/sessionSlice';
import {  useSelector } from 'react-redux';
import { socketConection } from '../utilities/socketConection';

const WebSocketContext = createContext(null);

const WebSocketProvider = ({children})=>{

    const token = useSelector(selectToken);
    let con;

    if (token!== null && !con ) {
        con = socketConection(token);
    }


    return (
        <WebSocketContext.Provider value={con}>
            {children}
        </WebSocketContext.Provider>
    );
}

export default WebSocketProvider;
export {WebSocketContext}