import PropTypes from "prop-types";
import useAuth from "./../hooks/GetAuthInfo/useAuth";
import { Navigate } from "react-router-dom";
import useRole from "../hooks/GetRole/useRole";
import Loading from "../components/shared/Loading/Loading";

function AdminRoute({ children }) {
  const { user, loading } = useAuth();

  const { role, roleLoading } = useRole();

  if (loading && roleLoading) {
    return <Loading></Loading>;
  }

  if (user && role === "admin") {
    return children;
  }

  return <Navigate to="/dashboard" replace="true"></Navigate>;
}

AdminRoute.propTypes = {
  children: PropTypes.any,
};

export default AdminRoute;
