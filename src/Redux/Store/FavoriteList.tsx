import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { favoriteItem } from '../../TypeScriptTypes/FavoritesTypes'

export const getFavoritesServer = createAsyncThunk(
    "favorites/getFavorites",
    async() => {
        const response = await fetch('http://localhost:3000/favorites')
        const data = await response.json()
        return data as favoriteItem[] 
    }
)


const slice = createSlice({
    name:'favorites',
    initialState:[] as favoriteItem[],
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getFavoritesServer.fulfilled, (state, action) => {
           return action.payload
        })
      },
})

export default slice.reducer