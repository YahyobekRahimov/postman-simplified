import { configureStore } from "@reduxjs/toolkit";
import requestsSlice from "./requestsSlice";
import responseSlice from "./responseSlice";

const store = configureStore({
   reducer: {
      requests: requestsSlice,
      responseSlice: responseSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;

store.subscribe(() => {
   console.log(store.getState());
});

export default store;
