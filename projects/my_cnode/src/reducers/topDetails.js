let loc_state = {
    data: {
        data: {
            reply_count: 0,
            replies: [],
            author: {},
            create_at: ''
        }
    }
}
export default function topDetails(state = {
    ...loc_state,
    loading: true,
    
}, action) {
    switch (action.type) {
        case 'Details_UPDATE':
            return {
                loading: false,
                data: state.data
            }
        case 'Details_SUCC':
            return {
                loading: false,
                data: action.data.data
            }
        case 'Detail_ERROR':
            return {
                ...loc_state,
                loading: false,
            }
        default:
            return state
    }
}