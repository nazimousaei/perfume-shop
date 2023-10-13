import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { basketItem } from '../../TypeScriptTypes/BasketTypes'

export const getBasketServer = createAsyncThunk(
    "basket/getBasket",
    async() => {
        const response = await fetch('http://localhost:3000/basket')
        const data = await response.json()
        return data as basketItem[] 
    }
)


const slice = createSlice({
    name:'basket',
    initialState:[] as basketItem[],
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getBasketServer.fulfilled, (state, action) => {
           return action.payload
        })
      },
})

export default slice.reducer