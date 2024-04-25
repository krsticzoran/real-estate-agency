import React, { FC, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useIsValidToken } from "../../graphql/hook/useIsAdmin";
import Loader from "../loader/Loader";

interface PrivateRouteProps {
  component: React.FC;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }) => {
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useIsValidToken();
  console.log(isAuthenticated);

  useEffect(() => {
    setLoading(false);
  }, [isAuthenticated]);

  if (loading) {
    return <Loader />;
  }

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
