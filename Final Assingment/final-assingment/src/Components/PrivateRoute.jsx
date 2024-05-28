import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


export default function PrivateRoute({ children }) {
    PrivateRoute.propTypes = {
        children: PropTypes.node.isRequired, // Add prop validation for the 'children' prop
      };
      
  const { authDetails } = useContext(AuthContext);

  if (!authDetails?.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}