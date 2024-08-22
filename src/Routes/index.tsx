import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LayoutRoutes from "./LayoutRoutes";
import { authRoutes } from "./AuthRoutes";
import Login from "../Component/Authentication/Login";
import SignUp from "../Component/SignUp/SignUp";
import ForgetPassword from "../Component/Authentication/ForgetPassword";
import Error400 from "../Pages/OtherPages/Error/Error400/Error400";

const RouterData = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        {/* {login ? (
          <>
            <Route
              path={`${process.env.PUBLIC_URL}` || '/'}
              element={
                <Navigate to={`${process.env.PUBLIC_URL}/see-all-contents`} />
              }
            />
          </>
        ) : (
          ""
        )} */}
        <Route
          path={`${process.env.PUBLIC_URL}` || "/"}
          element={
            <Navigate to={`${process.env.PUBLIC_URL}/see-all-contents`} />
          }
        />
        <Route path={`/*`} element={<LayoutRoutes />} />
        <Route path="*" element={<Error400 />} />
        <Route path={"/"} element={<PrivateRoute />}>
          {" "}
        </Route>
        {authRoutes.map(({ path, Component }, i) => (
          <Route path={path} element={Component} key={i} />
        ))}
        <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />
        <Route
          path={`${process.env.PUBLIC_URL}/register-account`}
          element={<SignUp />}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/forgot-password`}
          element={<ForgetPassword />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterData;
