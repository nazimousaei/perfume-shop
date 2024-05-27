import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { favoriteItem } from '../../TypeScriptTypes/FavoritesTypes'


export const getFavoritesServer = createAsyncThunk(
    "favorites/getFavorites",
    async () => {
        const response = await fetch('https://db-perfume.liara.run/favorites')
        const data = await response.json()
        return data as favoriteItem[]
    }
)

export const postFavoritesServer = createAsyncThunk(
    "favorites/postFavorites",
    async (newFavoriteItem: favoriteItem) => {
        const response = await fetch('https://db-perfume.liara.run/favorites', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newFavoriteItem)

        })
        const data = await response.json()
        return data as favoriteItem
    }
)

export const deleteFavoritesServer = createAsyncThunk(
    "favorites/deleteFavorites",
    async (faviriteID:number) => {
        const response = await fetch(`https://db-perfume.liara.run/favorites/${faviriteID}`, {
            method: 'DELETE',
        })
        const data = await response.json()
        return data as favoriteItem
    }
)



const slice = createSlice({
    name: 'favorites',
    initialState: [] as favoriteItem[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFavoritesServer.fulfilled, (state, action) => {
            console.log(state)
            return action.payload
        })
        builder.addCase(postFavoritesServer.fulfilled, (state, action) => {
            const result = state.some(item => action.payload.id === item.id)
            if (!result) {
                return [...state,action.payload]
            }
        })
        builder.addCase(deleteFavoritesServer.fulfilled, (state, action) => {
          
            const newStore = state.filter(item => item.id != action.payload.id)
            return newStore
        })
    },
})


export default slice.reducer