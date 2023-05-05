import { configureStore } from "@reduxjs/toolkit";
import passwordsReducer from "./passwordsSlice";
import { saveState, loadState } from "./persistState";

export const store = configureStore({
  reducer: {
    passwords: passwordsReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});
