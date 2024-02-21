import { requestType } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
   requests: requestType[];
   currentRequest: null | string;
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
      setCurrentRequest: (
         state,
         { payload }: PayloadAction<string>
      ) => {
         state.currentRequest = payload;
      },
      updateRequest: (
         state,
         { payload }: PayloadAction<Partial<requestType>>
      ) => {
         const { id, ...updatedProps } = payload;
         const index = state.requests.findIndex(
            (request) => request.id === id
         );
         if (index !== -1) {
            state.requests[index] = {
               ...state.requests[index],
               ...updatedProps,
            };
         }
      },
   },
});

export const { addNewRequest, setCurrentRequest, updateRequest } =
   requestsSlice.actions;

export default requestsSlice.reducer;
