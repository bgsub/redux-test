import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type InitialState = {
    value: Initial
}
type  Initial = {
    name: string,
    numberOfClicks: number
}
const initialState = {
    value:{
        name: '',
        numberOfClicks: 0
    } as Initial
} as InitialState

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        update: (state,action) => {
            state.value.name = action.payload.name;
            state.value.numberOfClicks = action.payload.numberOfClicks;
        },
        clear: (state, action) => {
            state.value.name = action.payload.name;
            state.value.numberOfClicks = action.payload.numberOfClicks;
        }
    }
});

export const {update, clear} = userSlice.actions;
export default userSlice.reducer;  // so we can call it any name with want 