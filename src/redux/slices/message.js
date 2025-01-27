import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: { message: "" },
    reducers: {
        setMessage: (state, action) => { state.message = action.payload },
        getMessage: (state) => { return state.message },
        clearMessage: (state) => { state.message = "" },
    }
});

export const { setMessage , getMessage, clearMessage } = messageSlice.actions;
export default messageSlice.reducer;