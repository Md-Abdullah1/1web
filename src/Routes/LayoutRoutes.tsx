import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { routes } from "./Route";
import Error400 from "../Pages/OtherPages/Error/Error400/Error400";

const LayoutRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Error400 />} />
      {routes.map(({ path, Component }, i) => (
        <Route element={<Layout />} key={i}>
          <Route path={path} element={Component} />
        </Route>
      ))}
    </Routes>
  );
};

export default LayoutRoutes;
