import Redirect from 'umi/redirect'

export default props => {
    if(Math.random() > 0.5) {
        return <Redirect to = '/login' />
    }
    return (
        <div>
            <div>PrivateRoute (routes/PrivateRoute.js)</div>
            { props.children }
        </div>
    )
}