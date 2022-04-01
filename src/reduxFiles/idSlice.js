import {createSlice} from "@reduxjs/toolkit"

export const idSlice = createSlice(
    {
      name: "_id",
      initialState:{
        _id:null
      },
      reducers:{
        setId: (state,action)=>{
          state._id = action.payload
        },
        unsetId: state =>{
          state._id = null
        }
      }
    }
  )
  
export const {setId,unsetId} = idSlice.actions

export const selectId = state => state._id._id

export default idSlice.reducer