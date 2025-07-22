import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { Reducer } from "redux";
import reducerIndex, { RootReducerState } from "./reducers";
import { persistConfig } from "./reducers/config";


const persistedReducer = persistReducer<RootReducerState, any>(persistConfig, reducerIndex as unknown as Reducer<RootReducerState, any>);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
