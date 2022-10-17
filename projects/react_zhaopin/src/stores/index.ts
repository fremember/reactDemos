import { configureStore  } from '@reduxjs/toolkit'

import countSlice from './count'
import userSlice from './user'

const store = configureStore({
    reducer: {
        countSlice,
        userSlice
    }
})

export default store