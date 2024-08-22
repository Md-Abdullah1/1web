import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './BottomNavigation.css';
import { MenuList } from '../../Data/LayoutData/SidebarData';

interface MenuItem {
  path?: string;
  title?: string;
  type: string;
  id?: number;
  icon?: IconDefinition;
  children?: MenuItem[];
}

const getFirstFiveItems = (): MenuItem[] => {
  const topLevelItems = MenuList[0]?.Items;
  return topLevelItems ? topLevelItems.slice(0, 5) : [];
};

const BottomNavigation: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const location = useLocation();
  const items = getFirstFiveItems();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = (id: number) => {
    setOpenDropdown(prev => (prev === id ? null : id));
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
    <div className="bottom-navigation" ref={dropdownRef}>
      {items.map(({ id, title, icon, path, children }) => {
        const isActive = location.pathname === path;
        const isDropdownOpen = openDropdown === id;

        return (
          <div className={`bottom-menu-item ${isActive ? 'active' : ''}`} key={id}>
            {path ? (
              <Link to={path} className={`text-dark svg_size ${isActive ? 'active' : ''}`}>
                {icon && <FontAwesomeIcon icon={icon} />}
              </Link>
            ) : (
              <div className="bottom-menu-subitem">
                <div
                  className={`dropdown-header svg_size d-flex align-items-center ${isActive ? 'active' : ''}`}
                  onClick={() => handleDropdownToggle(id!)}
                >
                  {icon && <FontAwesomeIcon icon={icon} />}
                  <FontAwesomeIcon
                    icon={isDropdownOpen ? faAngleUp : faAngleDown}
                    className="dropdown-toggle-icon"
                  />
                </div>
                {isDropdownOpen && children && (
                  <div className="bottom-dropdown-content">
                    {children.map(child => {
                      const isChildActive = location.pathname.startsWith(child.path || '');
                      return (
                        <Link
                          to={child.path || '#'}
                          key={child.title}
                          className={`submenu-link ${isChildActive ? 'active' : ''}`}
                        >
                          {child.icon && <FontAwesomeIcon icon={child.icon} />}
                          <span>{child.title}</span>
                        </Link>
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

export default BottomNavigation;
