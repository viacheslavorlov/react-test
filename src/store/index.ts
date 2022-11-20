import {configureStore} from "@reduxjs/toolkit";
import {gantCart} from "./gantCart.api";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [gantCart.reducerPath]: gantCart.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gantCart.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;