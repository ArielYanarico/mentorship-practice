import { useNavigate } from 'react-router-dom'


const withHistory = WrappedComponent => (props) => {
    const navigate = useNavigate();

    return <WrappedComponent navigate={ navigate } { ...props }></WrappedComponent>
}

export default withHistory;