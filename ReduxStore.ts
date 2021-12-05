import configureStore from "./configureStore";

// Redux store
export const store = configureStore();

// Redux state type
export type RootState = ReturnType<typeof store.getState>;

// Redux dispatch type
export type AppDispatch = typeof store.dispatch;
