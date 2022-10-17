import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

import { CountState } from 'interface'

export const countSlice = createSlice({
    name: 'count',
    initialState: {
        count: 0
    } as CountState,
    reducers: {
        incremented: (state, { payload }) => {
            state.count += payload ? payload : 1
        },
        decremented: (state) => {
            state.count -= 1
        }
    }
})
// export const countActions = countSlice.actions

export const { incremented, decremented } = countSlice.actions

export default countSlice.reducer