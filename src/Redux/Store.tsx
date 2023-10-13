import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from './Store/Products'
import CommentsReducer from './Store/Comments'
import ProductInfoReducer from './Store/ProductDetal'

 const store = configureStore({
    reducer:{
      products:ProductsReducer,
      comments:CommentsReducer,
      productInfo:ProductInfoReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;