import { createSlice } from "@reduxjs/toolkit"
import { DATA } from '../data'

const shortid = require('shortid');

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    allPosts: [],
    bookedPosts: []
  },
  reducers: {
    loadPosts: (state, action) => {
      action.payload = DATA
      state.allPosts = action.payload
      state.bookedPosts = action.payload.filter(post => post.booked)
    },
    toggleBooked: (state, action) => {
      const changedAllPosts = state.allPosts.map(post => {
        if (post.id === action.payload.postId) {
          post.booked = !post.booked
        }
        return post;
      })

      state.bookedPosts = changedAllPosts.filter(post => post.booked)
    },
    removePost: (state, action) => {
      state.allPosts = state.allPosts.filter(post => post.id !== action.payload.postId)
      state.bookedPosts = state.bookedPosts.filter(post => post.id !== action.payload.postId)
    },
    addPost: {
      reducer: (state, action) => {
        state.allPosts.unshift(action.payload)
      },
      prepare: (post) => {
        post.id = shortid.generate()
        return { payload: post }
      },
    },
  }
})

export const { loadPosts, toggleBooked, removePost, addPost } = postsSlice.actions

export default postsSlice.reducer