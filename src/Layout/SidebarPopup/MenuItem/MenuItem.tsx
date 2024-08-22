import React from "react";
import styles from "./MenuItem.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setToggleSidebarPopup } from "../../../ReduxToolkit/Reducers/LayoutSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = ({ item, isOpen, onToggle }) => {
  const dispatch = useAppDispatch();
  const { toggleSidebarPopup } = useAppSelector((state) => state.layout);
  const location = useLocation(); // Hook to get the current path

  // Function to check if the item is active
  const isActive = location.pathname === item.path;

  return (
    <li className={`${styles.menuItem} ${isActive ? styles.active : ''}`}>
      {item.type === "sub" ? (
        <>
          <div className={styles.menuTitle} onClick={onToggle}>
            <FontAwesomeIcon icon={item.icon} />
            {item.title}
            <div>
              <i className={`fa ${isOpen ? "fa-angle-up" : "fa-angle-down"}`} />
            </div>
          </div>
          {isOpen && (
            <ul className={styles.subMenu}>
              {item.children.map((child, index) => (
                <MenuItem
                  key={index}
                  item={child}
                  isOpen={false} // Sub-items should not be managed here
                  onToggle={() => {}}
                />
              ))}
            </ul>
          )}
        </>
      ) : (
        <Link
          to={item.path}
          className={`${styles.menuLink} ${isActive ? styles.active : ''}`}
          onClick={() => dispatch(setToggleSidebarPopup(!toggleSidebarPopup))}
        >
          <FontAwesomeIcon icon={item.icon} />
          {item.title}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
