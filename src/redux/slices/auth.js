import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSession, setSession,Logout } from "../../components/Fragments/FormLogin/auth";
import { Login ,Register} from "../../api/Membership";

const token = getSession();
const initialState = token ? { isLogged: true, token: token, isError: false, message: "", isLoading: false } : { isLogged: false, token: "", isError: false, message: "", isLoading: false };
console.log(initialState);
export const authLogin = createAsyncThunk('AUTH_LOGIN', async (formData, thunkAPI) => {

    try {
        const { email, password } = formData
        if (!email || !password) {
            return 'Username/Password harus diisi.'
        }
        const token = await Login(formData);
        if (token?.status === 103) {
            return 'Username/Password yang anda masukan salah.'
        }
        if (token?.status !== 0) {
            return token?.message

        }
        setSession(token?.data?.token);
        return token?.message



    } catch (error) {
        return error.message;
    }
})

export const authRegister = createAsyncThunk('AUTH_REGISTER', async (formData, thunkAPI) => {

    try {
        const { firstName, lastName, email, password, confirmPassword } = formData

        if (!email || !firstName || !lastName || !password || !confirmPassword) {
            return 'Semua kolom harus diisi'
        }

        if (password.length <= 8) {
            return 'Password minimal 8 karakter'
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return 'Email tidak valid'
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if (!passwordRegex.test(password)) {
            return 'Password harus mengandung setidaknya satu huruf besar, satu huruf kecil, dan satu angka'
        }

        if (password !== confirmPassword) {
            return 'Password tidak sama'
        }
        const payload = {
            email: email,
            first_name: firstName,
            last_name: lastName,
            password: password
        }
    
        const postData = await Register(payload);

        
        if (postData?.status !== 0) {
            return postData?.message
        }
        return postData?.message
    } catch (error) {
        return error.message;
    }
})
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        AuthLogout: (state) => {
            Logout();
            state.isLogged = false;
            state.token = "";
            state.isError = false;
            state.message = "";
            state.isLoading = false;
        },
        Reset: (state) => {
            state.isLogged = false;
            state.token = "";
            state.isError = false;
            state.message = "";
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authLogin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(authLogin.fulfilled, (state, action) => {
                const token = getSession();
                state.isLoading = false;
                state.isError = false;
                if (token) {
                    state.isLogged = true;
                    state.message = action.payload;
                    state.token = token;

                } else {
                    state.isLogged = false;
                    state.message = action.payload;
                    state.token = "";
                }
            })
            .addCase(authLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isLogged = false;
                state.token = "";
                state.message = action.payload
            })
            .addCase(authRegister.pending, (state) => {
                state.isLoading = true
            })
            .addCase(authRegister.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.message = action.payload;
            })
            .addCase(authRegister.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload
            })

    }
})

export const { AuthLogout, Reset } = authSlice.actions;
export default authSlice.reducer;