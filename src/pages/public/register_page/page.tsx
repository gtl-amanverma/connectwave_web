import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicMainLayout from "../../../layouts/main_layouts/public/layout";
import RegisterLayout from "../../../layouts/sub_layouts/public/register_layout/layout";

const RegisterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicMainLayout />}>
        <Route path="/" element={<RegisterLayout />} />
      </Route>
    </Routes>
  );
};

export default RegisterPage;
