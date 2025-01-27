import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userProfile } from "../../api/Membership";
import { Balance } from "../../api/Transaction";

const initialState = {
    data: [],
    amount: 0,
    isLoading: false,
    message: "",
    showAmount: false,
    photo : ""

}
export const getUser = createAsyncThunk('GET_USER', async (thunkAPI) => {
    try {
        const data = await userProfile()
        console.log(data);
        const saldo = await Balance()
        data.data.balance = saldo?.data.balance
        return data?.data
    } catch (error) {
        return error.message
    }

})


const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        showAmount: (state) => {
            state.showAmount = !state.showAmount
        },
        setDefaultImage: (state, action) => {
            state.photo = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                console.log(action.payload);
                state.isLoading = false
                state.data = action.payload
                state.message = ""
                state.amount = action.payload.balance
                if (action.payload.profile_image !== undefined) {
                    const { profile_image } = action.payload
                    const splitImage = profile_image.toString().split("/")[4]
                    if (splitImage !== 'null') {
                        state.photo = profile_image
                    } else {
                        state.photo = window.location.origin.toString()+"/src/assets/Profile Photo.png"
                    }
                }
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false
                state.data = []
                state.message = action.payload
            })
    },
});

export const { showAmount, setDefaultImage } = userSlice.actions;
export default userSlice.reducer;