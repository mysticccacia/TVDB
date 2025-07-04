import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info:null
}

export const tvSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    loadtv : (state,action)=>{
         state.info = action.payload;
    },
    removetv : (state)=>{
         state.info = null;
    }
  },

});

// Action creators are generated for each case reducer function
export const { loadtv,removetv} = tvSlice.actions

export default tvSlice.reducer