import { createSlice } from '@reduxjs/toolkit'

import { UserState } from 'interface'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: 'vinvent'
    } as UserState,
    reducers: {
        changeUsername: (state, { payload }) => {
            state.username = payload
        }
    }
})

export const { changeUsername } = userSlice.actions

export default userSlice.reducer