import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TPayload = {
  logged: boolean
}

const initialState = {
  logged: false
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLogged: (state, { payload }: PayloadAction<TPayload>) => {
      state.logged = payload.logged
    }
  }
})

export const userReducer = userSlice.reducer
export const { setLogged } = userSlice.actions
