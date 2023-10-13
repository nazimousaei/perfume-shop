import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {infoProductGetServer} from '../../TypeScriptTypes/InfoProductTypes'

export const getProductInfoServer = createAsyncThunk(
    "productInfo/getProductinfo",
    async(id:string) => {
        const response = await fetch(`http://localhost:3000/productInfo/${id}`)
        const data = await response.json()
        return data as infoProductGetServer
    }
)


const slice = createSlice({
    name:'productInfo',
    initialState:{} as infoProductGetServer,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getProductInfoServer.fulfilled, (state, action) => {
           return action.payload
        })
      },
})

export default slice.reducer