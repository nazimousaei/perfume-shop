import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {allProductGetServer} from '../../TypeScriptTypes/ProductsTypes'

export const getProductsServer = createAsyncThunk(
    "products/getProducts",
    async(url:string) => {
        const response = await fetch(url)
        const data = await response.json()
        return data as allProductGetServer[] 
    }
)


const slice = createSlice({
    name:'products',
    initialState:[] as allProductGetServer[],
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getProductsServer.fulfilled, (state, action) => {
           return action.payload
        })
      },
})

export default slice.reducer