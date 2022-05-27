import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../counter/countSlice";

export default configureStore({
  reducer: {
    counter : countSlice,
  },
})