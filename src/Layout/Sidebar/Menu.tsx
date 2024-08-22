import React, { useRef, useState, useEffect } from 'react';
import './Menu.css'; // Custom styles for the menu

interface MenuItem {
  label: string;
  href: string;
  isDropdown?: boolean;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Self', href: '#' },
  { label: 'World', href: '#' },
  { label: 'Lifestyle', href: '#' },
  { label: 'Bio', href: '#' },
  { label: 'Politics', href: '#', isDropdown: true, subItems: [
    { label: 'National', href: '#' },
    { label: 'International', href: '#' },
    { label: 'Local', href: '#' },
  ] },
  { label: 'Science', href: '#' },
  { label: 'Tech', href: '#' },
  { label: 'Health', href: '#' },
  { label: 'Food', href: '#' },
  { label: 'Design', href: '#' },
  { label: 'Culture', href: '#' },
  { label: 'Travel', href: '#' },
  { label: 'More', href: '#' },
];

const Menu: React.FC = () => {
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const updateArrows = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust the scroll amount for more gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      // Update arrow visibility after scrolling
      setTimeout(updateArrows, 400); // Delay to match the scrolling duration
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleResize = () => updateArrows();
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    updateArrows(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setSidebarOpen(false);
    }
  };

  return (
    <div>
      <button
        className="btn-sidebar-toggle"
        onClick={toggleSidebar}
      >
        <i className={`fa ${sidebarOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <div className={`bg_light`} ref={sidebarRef}>
        <div className={`container-fluid bg_light ps-0 ps-md-2 menu_wraper`}>
          <div className="d-flex align-items-center" style={{ lineHeight: '40px' }}>
            <div className="flex-shrink-0">
              {showLeftArrow && (
                <button
                  className="btn-left btn-link p-2 text-dark"
                  onClick={() => scroll('left')}
                >
                  <i className="fa fa-arrow-left"></i>
                </button>
              )}
            </div>
            <div className={`${sidebarOpen ? 'nav open' : ''} nav flex-grow-1 o-hidden`}>
              <ul className={`${sidebarOpen ? '' : 'nav'} overflow_auto nav-fill text-uppercase gap-3 small position-relative flex-nowrap`} ref={scrollContainerRef}>
                {menuItems.map((item, index) => (
                  console.log(item),
                  
                  <li key={index} className={`nav-item ${item.isDropdown ? 'dropdown' : ''}`}>
                    <a 
                      href={item.href} 
                      className="nav-link" 
                      onClick={item.isDropdown ? (e) => {
                        e.preventDefault();
                        handleDropdownToggle(item.label);
                      } : undefined}
                    >
                      {item.label}
                    </a>
                    {item.isDropdown && (
                      <ul className="cust-dropdown-menu">
                        {item.subItems?.map((subItem, subIndex) => (
                          <li key={subIndex} className=" ">
                            <a href={subItem.href}>{subItem.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              {showRightArrow && (
                <button
                  className="btn-right btn-link p-2 text-dark"
                  onClick={() => scroll('right')}
                >
                  <i className="fa fa-arrow-right"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
