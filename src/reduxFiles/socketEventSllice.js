import {createSlice} from "@reduxjs/toolkit"

export const socketEventSlice = createSlice(
  {
    name: "socketEvent",
    initialState:{},
    reducers:{
      setEvent: (state,action)=>{
       return {
         ...state,
         socketEvent:action.payload
       }
      }
    }
  }
)

export const {setEvent} = socketEventSlice.actions

export const socketEventSelect = state => state.socketEvent;


export default socketEventSlice.reducer
