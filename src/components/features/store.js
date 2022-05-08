import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./User/UserSlice"


export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})