import {createSlice} from "@reduxjs/toolkit"

export const socketEventSlice = createSlice(
  {
    name: "event",
    initialState:null,
    reducers:{
      setEvent: (state,action)=>{
        state.event = action.payload
      }
    }
  }
)

export const {setEvent} = socketEventSlice.actions

export const socketEventSelect = state => state.event;


export default socketEventSlice.reducer
