import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './SidebarResponsive.css'; // Ensure your CSS file is correctly styled
import { MenuList } from '../../Data/LayoutData/SidebarData';
import { H3 } from '../../AbstractElements';

interface MenuItem {
  path?: string;
  title?: string;
  type: string;
  id?: number;
  icon?: IconDefinition;
  children?: MenuItem[];
  Items?: MenuItem[];
  subtitle?: string;
  description?: string;
  iconbi?: any;
}

// Extract items from "Marketplace" to "Tools" (inclusive)
const getItemsInRange = (): MenuItem[] => {
  const topLevelItems = MenuList[0]?.Items || [];

  // Find the index of "Marketplace" and "Tools"
  const startIndex = topLevelItems.findIndex(item => item.title === "Marketplace");
  const endIndex = topLevelItems.findIndex(item => item.title === "Tools") + 1;

  if (startIndex !== -1 && endIndex !== -1) {
    return topLevelItems.slice(startIndex, endIndex) as MenuItem[];
  }

  return [];
};

const SidebarResponsive: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Default: no dropdown open
  const items = getItemsInRange();
  const location = useLocation();
  const currentPath = location.pathname;
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const isActive = (path: string | undefined) => currentPath === path;

  const getActiveClass = (item: MenuItem) => {
    if (item.path && isActive(item.path)) {
      return 'active';
    }

    if (item.children) {
      const hasActiveChild = item.children.some(child => isActive(child.path) || (child.Items && child.Items.some(subItem => isActive(subItem.path))));
      return hasActiveChild ? 'active' : '';
    }

    return '';
  };

  const toggleDropdown = (title: string) => {
    setOpenDropdown(prev => (prev === title ? null : title));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="top-navigation" ref={dropdownRef}>
      {items.map(({ title, icon, path, children }) => {
        const activeClass = getActiveClass({ path, children });
        const isDropdownOpen = openDropdown === title;

        return (
          <div className={`top-menu-item ${activeClass}`} key={title}>
            {path ? (
              <Link
                to={path}
                className={`text-dark svg_size ${activeClass}`}
                onClick={() => setOpenDropdown(null)} // Close all dropdowns on link click
              >
                <span className={`svg_size ${activeClass}`}>
                  {icon && <FontAwesomeIcon icon={icon} />}
                </span>
              </Link>
            ) : (
              <div className={`top-menu-subitem ${activeClass}`} onClick={() => toggleDropdown(title)}>
                <span className={`svg_size ${activeClass}`}>
                  {icon && <FontAwesomeIcon icon={icon} />}
                </span>
                <FontAwesomeIcon
                  icon={isDropdownOpen ? faAngleUp : faAngleDown}
                  className="dropdown-toggle-icon"
                />
                {children && (
                  <div className={`top-dropdown-content ${title === 'Tools' ? 'gap-4 p-3 mx-2 flex-column' : ''} ${isDropdownOpen ? 'd-block' : 'd-none'}`}>
                    {children.map(child => {
                      const childActiveClass = getActiveClass(child);

                      return (
                        <div key={child.title} className={childActiveClass}>
                          {title !== "Tools" ? (
                            <Link
                              to={child.path || '#'}
                              onClick={() => setOpenDropdown(null)} // Close all dropdowns on link click
                            >
                              {child.icon && <FontAwesomeIcon icon={child.icon} />}
                              {child.iconbi && (<i className={child.iconbi}/>)}
                              <span>{child.title}</span>
                            </Link>
                          ) : (
                            <H3 className='mb-3'>{child.title}</H3>
                          )}
                          {child.Items && child.Items.map((item, index) => (
                            <Link
                              key={index}
                              to={item.path || '#'}
                              className={`p-0 pb-3 fw-medium fs-6 item d-block ${isActive(item.path) ? 'active' : ''}`}
                              onClick={() => setOpenDropdown(null)} // Close all dropdowns on link click
                            >
                              {item.icon && <FontAwesomeIcon icon={item.icon} className='me-2' />}
                              {item.subtitle}
                              <p style={{ fontSize: "13px" }} className='text-muted mb-0'>{item.description}</p>
                            </Link>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarResponsive;
