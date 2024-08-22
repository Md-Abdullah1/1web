import React, { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../ReduxToolkit/Hooks";
import {
  setToggleSidebar,
  setMobileView,
} from "../ReduxToolkit/Reducers/LayoutSlice";
import { setLayout } from "../ReduxToolkit/Reducers/ThemeCustomizerSlice";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Loader from "./Loader/Loader";
import Sidebar from "./Sidebar/Sidebar";
import TapTop from "./TapTop/TapTop";
import ThemeCustomizer from "./ThemeCustomizer/ThemeCustomizer";
import { Outlet } from "react-router-dom";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import SearchResponsiveIcon from "./SearchResponsiveIcon/SearchResponsiveIcon";
import SidebarPopup from "./SidebarPopup/SidebarPopup";
import SidebarResponsive from "./SidebarResponsive/SidebarResponsive";
import Menu from "./Sidebar/Menu";

const Layout = () => {
  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const { toggleSidebar, scroll } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  const compactSidebar = useCallback(() => {
    let windowWidth = window.innerWidth;
    if (layout === "compact-wrapper") {
      if (windowWidth > 991) {
        dispatch(setLayout("horizontal-wrapper"));
      }
    } else if (layout === "horizontal-wrapper") {
      if (windowWidth < 992) {
        dispatch(setToggleSidebar(true));
        dispatch(setLayout("compact-wrapper"));
      } else {
        dispatch(setToggleSidebar(false));
        dispatch(setLayout(localStorage.getItem("layout")));
      }
    }

    dispatch(setMobileView(windowWidth > 415 ? false : true));
  }, [dispatch, layout]);

  useEffect(() => {
    localStorage.setItem("layout", layout);
    compactSidebar();

    const handleResize = () => {
      compactSidebar();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [compactSidebar]);

  const headerStyle = { display: scroll ? "none" : "" };

  return (
    <>
      <TapTop />
      <SearchResponsiveIcon />
      <div className={`page-wrapper ${layout}`}>
        <div
          className={`page-header ${toggleSidebar ? "close_icon" : ""}`}
          style={headerStyle}
        >
          <Header />
        </div>
        <div className={`page-body-wrapper ${scroll ? "scorlled" : ""}`}>
          <Sidebar />
          {/* <Menu/>     */}
                <SidebarResponsive />
          <SidebarPopup />
          <Outlet />
          <Footer />
          <BottomNavigation />
        </div>
      </div>
      <ThemeCustomizer />
    </>
  );
};

export default Layout;
