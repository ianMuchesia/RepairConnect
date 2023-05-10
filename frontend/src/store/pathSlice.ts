import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const pathSlice = createSlice({
  name: "path",
  initialState: "",
  reducers: {
    setPath: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setPath } = pathSlice.actions;

export default pathSlice.reducer;



// leaving a dash (or underscore) as the name of the first parameter in a function is just a convention to indicate that the parameter is not going to be used in the function.