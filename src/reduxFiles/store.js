import {configureStore} from "@reduxjs/toolkit"
import sessionSlice from "./sessionSlice.js"
import carSlice from "./carSlice.js"

export default configureStore(
  {
    reducer:{
      token:sessionSlice,
      car:carSlice
    }
  }
)
