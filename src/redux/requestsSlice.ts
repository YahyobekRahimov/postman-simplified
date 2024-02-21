import { requestType } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
   requests: requestType[];
   currentRequest: null | string | number;
}

const initialState: IState = {
   requests: [],
   currentRequest: null,
};

const requestsSlice = createSlice({
   name: "Requests Slice",
   initialState,
   reducers: {
      addNewRequest: (
         state,
         { payload }: PayloadAction<requestType>
      ) => {
         state.requests.push(payload);
      },
   },
});

export const { addNewRequest } = requestsSlice.actions;

export default requestsSlice.reducer;
