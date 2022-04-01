import React,{createContext} from 'react';
import { selectToken } from '../reduxFiles/sessionSlice';
import {  useSelector } from 'react-redux';
import { socketConection } from '../utilities/socketConection';
import { useDispatch } from 'react-redux';
import { setEvent } from '../reduxFiles/socketEventSllice';

const WebSocketContext = createContext(null);

const WebSocketProvider = ({children})=>{

    const dispatch = useDispatch();

    const dispatchEvent = async (obj)=>{
        dispatch(setEvent(obj));
    }

    const token = useSelector(selectToken);
    let con;

    if (token!== null && !con ) {
        con = socketConection(token,dispatchEvent);
    }


    return (
        <WebSocketContext.Provider value={con}>
            {children}
        </WebSocketContext.Provider>
    );
}

export default WebSocketProvider;
export {WebSocketContext}