import {configureStore} from "@reduxjs/toolkit"
import sessionSlice from "./sessionSlice.js"
import carSlice from "./carSlice.js"
import idSlice from "./idSlice.js"
import  socketEventSlice from "./socketEventSllice.js"

export default configureStore(
  {
    reducer:{
      token:sessionSlice,
      car:carSlice,
      _id:idSlice,
      socketEvent:socketEventSlice
    }
  }
)
