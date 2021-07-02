import {configureStore} from "@reduxjs/toolkit"
import sessionSlice from "./sessionSlice.js"

export default configureStore(
  {
    reducer:{
      token:sessionSlice
    }
  }
)
