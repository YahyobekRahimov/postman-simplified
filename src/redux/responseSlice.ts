import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { response: {}; data: {} | [] } = {
   response: {},
   data: {},
};

const responseSlice = createSlice({
   name: "response Slice",
   initialState,
   reducers: {
      setResponse: (state, { payload }: PayloadAction<{}>) => {
         state.response = payload;
      },
      setData: (state, { payload }: PayloadAction<{}>) => {
         state.data = payload;
      },
   },
});

export const { setResponse, setData } = responseSlice.actions;

export default responseSlice.reducer;
