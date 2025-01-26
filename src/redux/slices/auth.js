import { createSlice } from "@reduxjs/toolkit";
import { getSession } from "../../components/Fragments/FormLogin/auth";

const token = getSession();
const initialState = token ? { token } : { token: "" };
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => { state.token = action.payload },
        getToken: (state) => { return state.token },
        clearToken: (state) => { state.token = "" }
    }
})

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;