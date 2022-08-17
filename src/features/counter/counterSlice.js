import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {

};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
  },
 
  extraReducers: (builder) => {
    
  },
});

export const { } = counterSlice.actions;

export default counterSlice.reducer;
