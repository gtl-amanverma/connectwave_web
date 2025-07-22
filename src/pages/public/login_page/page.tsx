import { Route, Routes } from "react-router-dom";
import PublicMainLayout from "../../../layouts/main_layouts/public/layout";
import LoginLayout from "../../../layouts/sub_layouts/public/login_layout/layout";

const LoginPage = () => {

  return (
     <Routes>
      <Route path="/" element={<PublicMainLayout />}>
        <Route path="/" element={<LoginLayout />} />
      </Route>
    </Routes>
  );
};

export default LoginPage;
