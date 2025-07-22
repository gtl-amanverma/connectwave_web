import { Navigate, Outlet } from "react-router-dom";
import { authMiddleware } from "../middlewares/user_auth";

const PublicRoute = () => {
  const { authToken, deviceToken } = authMiddleware();
  return authToken ? (
    <Navigate
      replace
      to={`/private/user/auth/dashboard?token=${deviceToken}`}
    />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
