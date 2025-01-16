import PropTypes from 'prop-types'
import useAuth from '../hooks/GetAuthInfo/useAuth'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/shared/Loading/Loading';

function PrivateRoute({children}) {
  const {user, loading} = useAuth();
  const location = useLocation()

  if(loading){
    return <Loading></Loading>
  }

  if(user) {
    return children;
  } 

  return <Navigate to="/login" state={location?.pathname} replace="true"></Navigate>
}

PrivateRoute.propTypes = {
  children: PropTypes.any
}

export default PrivateRoute
