import Error400 from "../Pages/OtherPages/Error/Error400/Error400";
// import Error401 from "../Pages/OtherPages/Error/Error401/Error401";
// import Error403 from "../Pages/OtherPages/Error/Error403/Error403";
// import Error404 from "../Pages/OtherPages/Error/Error404/Error404";
// import Error500 from "../Pages/OtherPages/Error/Error500/Error500";
// import Error503 from "../Pages/OtherPages/Error/Error503/Error503";

export const authRoutes = [
  //Error
  {
    path: `${process.env.PUBLIC_URL}/errors/error400`,
    Component: <Error400 />,
  },
  // {
  //   path: `${process.env.PUBLIC_URL}/errors/error401`,
  //   Component: <Error401 />,
  // },
  // {
  //   path: `${process.env.PUBLIC_URL}/errors/error403`,
  //   Component: <Error403 />,
  // },
  // {
  //   path: `${process.env.PUBLIC_URL}/errors/error404`,
  //   Component: <Error404 />,
  // },
  // {
  //   path: `${process.env.PUBLIC_URL}/errors/error500`,
  //   Component: <Error500 />,
  // },
  // {
  //   path: `${process.env.PUBLIC_URL}/errors/error503`,
  //   Component: <Error503 />,
  // },
];
