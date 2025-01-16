import PropTypes from 'prop-types'
import useAuth from '../hooks/GetAuthInfo/useAuth'
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({children}) {
  const {user, loading} = useAuth();
  const location = useLocation()

  if(loading){
    return <h1>loading...</h1>
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
