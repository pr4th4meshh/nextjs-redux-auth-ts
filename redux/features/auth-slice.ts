import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
  value: AuthState
}

type AuthState = {
  isAuth: boolean
  username: string
  email: string
  uId: string
  isMod: boolean
}

const initialState = {
  value: {
    isAuth: false,
    username: "",
    email: "",
    uId: "",
    isMod: false,
  } as AuthState,
} as InitialState

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
        return initialState
    },
    logIn: (state, action: PayloadAction<{ username: string; email: string }>) => {
      const { username, email } = action.payload;
      state.value.isAuth = true;
      state.value.username = username;
      state.value.email = email;
      state.value.uId = "randomuseridbyprathamesh";
      state.value.isMod = false;
  },
    toggleMod: (state) => {
        state.value.isMod = !state.value.isMod
    }
  },
})

export const {logIn, logOut, toggleMod} = auth.actions
export default auth.reducer