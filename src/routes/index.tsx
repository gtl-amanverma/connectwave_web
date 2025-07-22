import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authMiddleware } from "../middlewares/user_auth";
import PrivateRoute from "./private_content";
import InnerContent from "./inner_content";
import PublicRoute from "./public_content";
import NotFoundPage from "../pages/public/notfound_page/page";
import RegisterProvider from "../providers/public/register_provider/provider";
import LoginProvider from "../providers/public/login_provider/provider";

// Pages

const RouteIndex = () => {
  const { deviceToken, userRole } = authMiddleware();
  const [userURL, setUserURL] = useState<string>("manager");
  useEffect(() => {
    if (userRole === "admin") {
      setUserURL("admin");
    } else {
      setUserURL("user");
    }
  }, [userRole]);
  return (
    <Routes>
      {/** Protected Routes */}
      {/** Wrap all Route under ProtectedRoutes element */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<InnerContent />}>
          <Route
            path="/"
            element={
              <Navigate
                replace
                to={`/private/user/auth/dashboard/${userURL}?lang=en&token=${deviceToken}`}
              />
            }
          />
          {/* <Route
            path={`/private/user/auth/dashboard/*`}
            element={<AuthenticatedDashboardProvider />}
          /> */}
        </Route>
      </Route>

      {/** Public Routes */}
      {/** Wrap all Route under PublicRoutes element */}
      <Route path="/" element={<PublicRoute />}>
        <Route path="/" element={<InnerContent />}>
          <Route
            path="/"
            element={
              <Navigate
                replace
                to={`/public/user/login?lang=en&token=${deviceToken}`}
              />
            }
          />
          <Route path={`/public/user/login/*`} element={<LoginProvider />} />
          <Route
            path={`/public/user/register/*`}
            element={<RegisterProvider />}
          />
        </Route>
      </Route>

      {/** Permission denied route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouteIndex;
