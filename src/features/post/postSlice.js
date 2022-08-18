import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// GET
export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async ({ id = 1 }) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }
);

// POST
export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async ({ newPost }) => {
    const url = `https://jsonplaceholder.typicode.com/posts/`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title: newPost.title,
        body: newPost.detail,
        userId: 1
      })
    });
    const data = await response.json()
    return data;
  }
);
//PUT
export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ id, title, body }) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Accept: 'application/json',
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
        userId: 1
      })
    });
    const data = await response.json()
    console.log(data);
    return data;
  }
);

//DELETE
export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async ({ id }) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(url, {
      method: "DELETE"
    });
    const data = await response.json()
    return data;
  }
);

const initialState = {
  posts: [],
  addedPost: {},
  updatedPost: {},
  deleteText: '',
  loading: false,
  error: false,
  isEdit: false,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    removeDeleteText: (state) => { state.deleteText = '' },
    changeEdit: (state,action) => {state.isEdit = action.payload}
  },

  extraReducers: {
    //GET
    [getPosts.pending]: (state) => {
      state.loading = true
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = [action.payload]
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
      state.error = true
    },
    //POST
    [addNewPost.pending]: (state) => {
      state.loading = true
    },
    [addNewPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.addedPost = action.payload
    },
    [addNewPost.rejected]: (state) => {
      state.loading = false;
      state.error = true
    },
    //UPDATE
    [updatePost.pending]: (state) => {
      state.loading = true
    },
    [updatePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.updatedPost = action.payload
    },
    [updatePost.rejected]: (state) => {
      state.loading = false;
      state.error = true
    },
    //DELETE
    [deletePost.pending]: (state) => {
      state.loading = true
    },
    [deletePost.fulfilled]: (state) => {
      state.loading = false;
      state.deleteText = 'Post deleted'
    },
    [deletePost.rejected]: (state) => {
      state.loading = false;
      state.error = true
    }
  },
});

export const { removeDeleteText,changeEdit } = postSlice.actions;

export default postSlice.reducer;
