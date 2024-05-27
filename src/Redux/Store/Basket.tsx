import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { basketItem } from '../../TypeScriptTypes/BasketTypes'

export const getBasketServer = createAsyncThunk(
    "basket/getBasket",
    async () => {
        const response = await fetch('https://db-perfume.liara.run/basket')
        const data = await response.json()
        return data as basketItem[]
    }
)

export const postBasketServer = createAsyncThunk(
    "basket/postBasket",
    async (product: basketItem) => {
        const response = await fetch('https://db-perfume.liara.run/basket', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const data = await response.json()
        return data as basketItem
    }
)

export const putBasketServer = createAsyncThunk(
    "basket/putBasket",
    async (product: basketItem) => {
        const response = await fetch(`https://db-perfume.liara.run/basket/${product.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const data = await response.json()
        return data as basketItem
    }
)

export const deleteBasketServer = createAsyncThunk(
    "basket/deleteBasket",
    async (productID: number) => {
        const response = await fetch(`https://db-perfume.liara.run/basket/${productID}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        return data as basketItem
    }
)


const slice = createSlice({
    name: 'basket',
    initialState: [] as basketItem[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBasketServer.fulfilled, (state, action) => {
            console.log(state)
            return action.payload
        })
        builder.addCase(postBasketServer.fulfilled, (state, action) => {
            const IsExist = state.some(item => action.payload.id === item.id)
            if (!IsExist) {
                return [...state, action.payload]
            }
        })
        builder.addCase(putBasketServer.fulfilled, (state, action) => {

             state.filter(item => {
                if (item.id === action.payload.id) {
                    if(action.payload.count!=0){
                        const editItem = item.count = action.payload.count
                        return editItem
                    }
                }
            }) 

    })
            builder.addCase(deleteBasketServer.fulfilled, (state, action) => {
                const newBasket = state.filter(item => item.id != action.payload.id)
                return newBasket
            })
        },
})

export default slice.reducer