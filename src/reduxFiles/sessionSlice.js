import {createSlice} from "@reduxjs/toolkit"

export const sessionSlice = createSlice(
  {
    name: "token",
    initialState:{
      token:1
    },
    reducers:{
      setToken: (state,action)=>{
        state.token = action.payload
      },
      unsetToken: state =>{
        state.token = null
      }
    }
  }
)

export const {setToken,unsetToken} = sessionSlice.actions

export const selectToken = state => state.token

export default sessionSlice.reducer
