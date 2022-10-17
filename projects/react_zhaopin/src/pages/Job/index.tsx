import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import { countActions } from 'stores/count/slice'

import { incremented } from 'stores/count'


export const Job: React.FC = () => {
    const dispatch = useDispatch(),
        { count } = useSelector((state: any) => state.countSlice),
        addCountClick = () => {
            // dispatch(countActions.incremented(Math.random()))
            dispatch(incremented(Math.random()))
        };
    return (
        <section onClick={ addCountClick }>job{ count }</section>
    )
}