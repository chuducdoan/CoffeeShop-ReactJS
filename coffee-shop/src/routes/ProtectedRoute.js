import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import config from '~/config';

const RequireAuth = () => {
    const user = useSelector(state => state.authRed.user);
    if (!user) {
        return <Navigate to={config.routes.login} />
    }
    return <Outlet/>
}

export default RequireAuth;