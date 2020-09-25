let loc_state = {
    data: {
        data: {
            loginname: '',
            avatar_url: '',
            score: 0,
            create_at: '',
            recent_topics: [],
            recent_replies: []
        }
    }
}
export default function user(state = {
    ...loc_state,
    loading: true
}, action) {
    switch (action.type) {
        case 'USER_UPDATE':
            return {
                loading: false,
                data: state.data
            }
        case 'USER_SUCC':
            return {
                data: action.data.data,
                loading: false
            }
        case 'USER_ERROR':
            return {
                ...loc_state,
                loading: false
            }
        default:
            return state
    }
}