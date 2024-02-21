import { configureStore } from "@reduxjs/toolkit";
import requestsSlice from "./requestsSlice";

const store = configureStore({
   reducer: {
      requests: requestsSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
