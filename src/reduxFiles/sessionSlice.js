import {createSlice} from "@reduxjs/toolkit"

export const sessionSlice = createSlice(
  {
    name: "token",
    initialState:{
      token:null
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

export const selectToken = state => state.token.token


export default sessionSlice.reducer
