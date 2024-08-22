import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registrationTypes:[],
}

const RegistrationTypeSlice = createSlice({
    name:"CountrySlice",
    initialState,
    reducers:{
        setRegistrationType:(state, action) =>{
            state.registrationTypes = action.payload;
        }
    }
});

export const {setRegistrationType} = RegistrationTypeSlice.actions;

export default RegistrationTypeSlice.reducer;