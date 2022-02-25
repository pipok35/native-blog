import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPosts = createAsyncThunk(
  'todos/fetchPosts',
  async function (_, { dispatch }) {
    const response = await axios.get('http://10.0.2.2:3001/posts')
    dispatch(loadPosts(response.data))
  }
)

export const deleteFetchPost = createAsyncThunk(
  'todos/deleteFetchPost',
  async function (id, { dispatch }) {
    await axios.delete(`http://10.0.2.2:3001/posts/${id}`)
    dispatch(removePost(id))
  }
)

export const toggleFetchPost = createAsyncThunk(
  'todos/toggleFetchPost',
  async function (post, { dispatch }) {
    await axios.patch(`http://10.0.2.2:3001/posts/${post.id}`, {
      booked: !post.booked,
    })
    dispatch(toggleBooked(post))
  }
)

export const addFetchPost = createAsyncThunk(
  'todos/addFetchPost',
  async function (obj, { dispatch }) {
    await axios.post(`http://10.0.2.2:3001/posts`, obj)
    dispatch(addPost(obj))
  }
)

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    allPosts: [],
    bookedPosts: [],
    status: '',
  },
  reducers: {
    loadPosts: (state, action) => {
      state.allPosts = action.payload
      state.bookedPosts = action.payload.filter((post) => post.booked)
    },
    toggleBooked: (state, action) => {
      const changedAllPosts = state.allPosts.map((post) => {
        if (post.id === action.payload.id) {
          post.booked = !action.payload.booked
        }
        return post
      })

      state.bookedPosts = changedAllPosts.filter((post) => post.booked)
    },
    removePost: (state, action) => {
      state.allPosts = state.allPosts.filter(
        (post) => post.id !== action.payload
      )
      state.bookedPosts = state.bookedPosts.filter(
        (post) => post.id !== action.payload
      )
    },
    addPost: (state, action) => {
      state.allPosts.unshift(action.payload)
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchPosts.fulfilled]: (state) => {
      state.status = 'done'
    },
  },
})

export const { loadPosts, toggleBooked, removePost, addPost } =
  postsSlice.actions

export default postsSlice.reducer
