import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import qAaReducer from "../features/questionAndAnswer/questionAndAnswerSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    qAa : qAaReducer

  },
});
