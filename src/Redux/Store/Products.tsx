import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allProductGetServer } from "../../TypeScriptTypes/ProductsTypes";
import { getAllProducts } from "../../../db";

export const getProductsServer = createAsyncThunk(
  "products/getProducts",
  async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data as allProductGetServer[];
    } catch (error) {
      const getData = async () => {
        const products = await getAllProducts();
        return products;
      };
      const data = await getData();
      return data
    }
  }
);

const slice = createSlice({
  name: "products",
  initialState: [] as allProductGetServer[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsServer.fulfilled, (state, action:any) => {
      console.log(state)
      return action.payload;
    });
   
  },
});

export default slice.reducer;
