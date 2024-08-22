import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "../../Types/Layout/SidebarType";
import { handlePined } from "../../ReduxToolkit/Reducers/LayoutSlice";
import { H3, H5, H6, LI, SVG, UL } from "../../AbstractElements";
import { Href } from "../../utils/Constant";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap-icons/font/bootstrap-icons.css";

interface MenulistProps {
    menu: MenuItem[];
    heading: string;
    setActiveMenu: React.Dispatch<React.SetStateAction<string[]>>;
    activeMenu: string[];
    level: number;
    className?: string;
}

const Menulist: React.FC<MenulistProps> = ({
    menu,
    heading,
    setActiveMenu,
    activeMenu,
    level,
    className,
}) => {
    const { pinedMenu } = useAppSelector((state) => state.layout);
    const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer);
    const location = useLocation();
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const isActivePath = (path?: string) => location.pathname === path;

    const isActive = (item: MenuItem): boolean => {
        if (isActivePath(item.path)) return true;
        return item.children?.some(subItem => isActive(subItem)) || false;
    };

    const handleClick = (item: string) => {
        setActiveMenu((prevActiveMenu) => {
            const newActiveMenu = [...prevActiveMenu];
            newActiveMenu[level] = item;
            return newActiveMenu;
        });
    };

    useEffect(() => {
        const updatedMenu = menu.find((item) => isActive(item));

        if (updatedMenu) {
            const newActiveMenu = Array(menu.length).fill("");
            newActiveMenu[level] = updatedMenu.title || "";

            if (JSON.stringify(newActiveMenu) !== JSON.stringify(activeMenu)) {
                setActiveMenu(newActiveMenu);
            }
        }
    }, [menu, activeMenu, level, setActiveMenu]);

    return (
        <>
            {menu.map((item, index) => {
                const itemIsActive = isActive(item);
                const childrenAreActive = item.children?.some(child => isActive(child)) || false;
                const subchildrenAreActive = item.children?.some(child => child.Items?.some(subItem => isActive(subItem))) || false;
                const isOpen = itemIsActive || childrenAreActive || subchildrenAreActive;

                return (
                    <LI
                        key={index}
                        className={`${level === 0 ? "sidebar-list" : ""} ${pinedMenu.includes(item.title || "") ? "pined" : ""} ${isOpen ? "active" : ""}`}>
                        <Link
                            className={`${!className && level !== 2 ? "sidebar-link sidebar-title" : ""} ${isOpen ? "active" : ""}`}
                            to={item.path || Href}
                            onClick={() => handleClick(item.title || "")}>
                            {item.icon && <FontAwesomeIcon icon={item.icon} />}
                            <span className={`${item.lanClass ? item.lanClass + " ms-3" : "ms-3"}`}>
                                {t(item.title || "")}
                            </span>
                            {item.children && (
                                <div className="according-menu">
                                    <i className={`fa fa-angle-${isOpen ? "up" : "down"}`} />
                                </div>
                            )}
                        </Link>
                        {item.children && (
                            <UL
                                className={`sidebar-submenu ${item.title === "Tools" ? "end-0" : ""} ${isOpen ? "show" : ""}`}>
                                {item.HeadingDrop && (
                                    <div className="border_b_tools mb-3 text-center">
                                        <H3 className="my-2 px-3 fw-bold">
                                            {item.HeadingDrop}
                                        </H3>
                                    </div>
                                )}
                                <div className={`dropdown-content ${item.title === "Tools" ? "d-flex" : ""}`}>
                                    {item.children.map((child, index) => {
                                        const childIsActive = isActive(child);

                                        return (
                                            <div key={index} className="column">
                                                <div className="column-title">
                                                    {item.title === "Tools" ? (
                                                        <h6 className="fw-semibold">
                                                            {t(child.title || "")}
                                                        </h6>
                                                    ) : (
                                                        <Link to={child.path || Href} className={`${childIsActive ? "active" : ""}`}>
                                                            {child.icon && (
                                                                <FontAwesomeIcon icon={child.icon} className="item-icon" />
                                                            )}
                                                            {child.iconbi && (
                                                                <i className={child.iconbi} />
                                                            )}
                                                            <span>
                                                                {t(child.title || "")}
                                                            </span>
                                                        </Link>
                                                    )}
                                                </div>
                                                {child.Items &&
                                                    child.Items.map((subItem, subIndex) => {
                                                        const isActiveSubItem = isActive(subItem);

                                                        return (
                                                            <Link
                                                                key={subIndex}
                                                                className={`item px-2 ${isActiveSubItem ? "active" : ""}`}
                                                                to={subItem.path || Href}>
                                                                {subItem.icon && (
                                                                    <FontAwesomeIcon
                                                                        icon={subItem.icon}
                                                                        className="item-icon"
                                                                    />
                                                                )}
                                                                {subItem.iconbi && (
                                                                    <i className={subItem.iconbi} />
                                                                )}
                                                                <span>
                                                                    {t(subItem.subtitle || "")}
                                                                </span>
                                                                <p style={{ fontSize: "13px" }} className="text-muted">
                                                                    {t(subItem.description || "")}
                                                                </p>
                                                            </Link>
                                                        );
                                                    })}
                                            </div>
                                        );
                                    })}
                                </div>
                            </UL>
                        )}
                    </LI>
                );
            })}
        </>
    );
};

export default Menulist;
