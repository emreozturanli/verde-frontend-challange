import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async ({id=1}) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }
  );
  
const initialState = {
  posts: [],
  loading: false,
  error: false
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    
  },
 
  extraReducers: {
    [getPosts.pending]: (state)=>{
      state.loading = true
    },
    [getPosts.fulfilled]: (state,action)=>{
      state.loading=false;
      state.posts = [action.payload]
    },
    [getPosts.rejected]: (state)=>{
      state.loading = false;
      state.error = true
    }
  },
});

// export const { } = postSlice.actions;

export default postSlice.reducer;
