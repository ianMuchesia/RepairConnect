import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userAuth } from "../@types/@types";

const initialAuthState = {
  isAuthenticated: false,
  user: {
    name:"",
    userId:"",
    role:"",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setIsAuthenticated(state, action:PayloadAction<userAuth>) {
      state.isAuthenticated = true;
      state.user = action.payload
    },
    setisNotAuthenticated() {
      return initialAuthState
    },
  },
});


export const { setIsAuthenticated , setisNotAuthenticated} = authSlice.actions
export default authSlice.reducer