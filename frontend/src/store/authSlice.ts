import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setIsAuthenticated(state, action:PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});


export const { setIsAuthenticated , setUser} = authSlice.actions
export default authSlice.reducer