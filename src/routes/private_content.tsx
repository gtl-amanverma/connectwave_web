import { Navigate, Outlet } from "react-router-dom";
import { authMiddleware } from "../middlewares/user_auth";

type ProtectedRouteType = {
  isUserRequired?: boolean;
  isSidebar?: boolean;
};

const PrivateRoute = (props: ProtectedRouteType) => {
  const { authToken, deviceToken, lang } = authMiddleware();

  if (props.isUserRequired) {
    return authToken ? (
      <Outlet />
    ) : (
      <Navigate to={`/public/user/login?lang=${lang}&token=${deviceToken}`} />
    );
  } else {
    return authToken ? (
      <Outlet />
    ) : (
      <Navigate to={`/public/user/login?lang=${lang}&token=${deviceToken}`} />
    );
  }
};

export default PrivateRoute;
