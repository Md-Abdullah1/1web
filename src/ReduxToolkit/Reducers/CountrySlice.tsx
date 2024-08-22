import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countries:[],
}

const CountrySlice = createSlice({
    name:"CountrySlice",
    initialState,
    reducers:{
        setCountries:(state, action) =>{
            state.countries = action.payload;
        }
    }
});

export const {setCountries} = CountrySlice.actions;

export default CountrySlice.reducer;