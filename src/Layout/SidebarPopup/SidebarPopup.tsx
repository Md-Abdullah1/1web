import React, { useEffect, useRef, useState } from "react";
import styles from "./Sidebar.module.scss";
import { useAppSelector } from "../../ReduxToolkit/Hooks";
import { useDispatch } from "react-redux";
import { setToggleSidebarPopup } from "../../ReduxToolkit/Reducers/LayoutSlice";
import { dynamicImage } from "../../Service";
import { SVG } from "../../AbstractElements";
import { MenuList } from "../../Data/LayoutData/SidebarData";
import MenuItem from "./MenuItem/MenuItem";
import { Link } from "react-router-dom";
import Image from '../../CommonElements/Media/index'
 
const SidebarPopup = () => {
  const { toggleSidebarPopup } = useAppSelector((state) => state.layout);
  const dispatch = useDispatch();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      dispatch(setToggleSidebarPopup(false));
    }
  };

  useEffect(() => {
    if (toggleSidebarPopup) {
      document.body.style.overflow = "hidden"; // Prevent body scrolling
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto"; // Restore body scrolling
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled if the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSidebarPopup, dispatch]);


  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {toggleSidebarPopup && <div className={styles.overlay}></div>}
      <div
        ref={sidebarRef}
        className={`${styles.sidebar} ${toggleSidebarPopup ? styles.open : ""}`}
      >
        <div className={styles.sidebarTop}>
          <Link to={`${process.env.PUBLIC_URL}/dashboard/user-dashboard`}>
          <Image
            className="img-fluid for-light"
            src={dynamicImage("logo/logo-1.png")}
            alt="logo"
          />
          <Image
            className="img-fluid for-dark"
            src={dynamicImage("logo/logo.png")}
            alt="logo"
          />
        </Link>
          <SVG
            className="stroke-icon sidebar-toggle status_toggle middle"
            iconId={"toggle-icon"}
            onClick={() => dispatch(setToggleSidebarPopup(!toggleSidebarPopup))}
          ></SVG>
        </div>
        <ul className={styles.menuList}>
      {MenuList?.map((item, index) => (
        <div key={index}>
          <p className={styles.menuItemTitle}>{item.title}</p>
          {item.Items?.map((subItem, subIndex) => (
            <MenuItem
              key={subIndex}
              item={subItem}
              isOpen={openIndex === subIndex}
              onToggle={() => handleToggle(subIndex)}
            />
          ))}
        </div>
      ))}
    </ul>
      </div>
    </>
  );
};

export default SidebarPopup;
