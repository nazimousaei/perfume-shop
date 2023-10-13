import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {allCommentGetServer} from '../../TypeScriptTypes/CommentTypes'

export const getCommentsServer = createAsyncThunk(
    "comments/getComments",
    async() => {
        const response = await fetch('http://localhost:3000/comments')
        const data = await response.json()
        return data as allCommentGetServer[] 
    }
)


const slice = createSlice({
    name:'comments',
    initialState:[] as allCommentGetServer[],
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getCommentsServer.fulfilled, (state, action) => {
           return action.payload
        })
      },
})

export default slice.reducer