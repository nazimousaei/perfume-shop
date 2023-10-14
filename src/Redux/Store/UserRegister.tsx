import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userRegisterType } from '../../TypeScriptTypes/UserRegisterTypes'


export const getUsersServer = createAsyncThunk(
    "users/getUsers",
    async () => {
        const response = await fetch('http://localhost:3000/users')
        const data = await response.json()
        return data as userRegisterType[]
    }
)

export const postUsersServer = createAsyncThunk(
    "users/postUsers",
    async (newUser:userRegisterType) => {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newUser)

        })
        const data = await response.json()
        return data as userRegisterType
    }
)




const slice = createSlice({
    name: 'users',
    initialState: [] as userRegisterType[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersServer.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(postUsersServer.fulfilled, (state, action) => {
            const result = state.some(item => action.payload.id === item.id)
            if (!result) {
                return [...state,action.payload]
            }
        })
    },
})


export default slice.reducer