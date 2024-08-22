import { createSlice } from "@reduxjs/toolkit";

export interface InitalState {
    countries: Array<any>;
}
const initialState = {
    countries:[],
}

const CountrySlice = createSlice({
    name:"country",
    initialState,
    reducers:{
        setCounteries : (state, action) =>{
            state.countries = action.payload;
        }
    }
});

export const { setCounteries} = CountrySlice.actions;

export default CountrySlice.reducer;