import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FeatherIcons, LI, UL } from "../../../../AbstractElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface adminDropdownType {
  name: string;
  icon: IconDefinition;
  link?: string;
  children?: {
    name: string;
    link: string;
    icon?: IconDefinition; // Optional icon property for child items
  }[];
}

export const adminDropdown: adminDropdownType[] = [
  {
    name: "Username1",
    icon: fas.faUser,
    link: `${process.env.PUBLIC_URL}/panel/admin`,
  },
  {
    name: "Admin Panel",
    icon: fas.faLock,
    link: `https://1webbb.net/login`,
  },
  {
    name: "Dashboard",
    icon: fas.faTachometerAlt, 
    children: [
      { name: "User Dashboard", link: `${process.env.PUBLIC_URL}/dashboard/user-dashboard` },
      {
        name: "Payment Methods",
        link: `${process.env.PUBLIC_URL}/user-dashboard/payment-methods/`,
      },
      {
        name: "Withdrawals",
        link: `${process.env.PUBLIC_URL}/dashboard/withdrawals`,
      },
      {
        name: "My Purchases",
        link: `${process.env.PUBLIC_URL}/user-dashboard/my-purchases`,
      },
      {
        name: "Sales",
        link: `${process.env.PUBLIC_URL}/dashboard/my-sales`,
      },
      {
        name: "Referrals",
        link: `${process.env.PUBLIC_URL}/dashboard/referrals`,
      },
    ],
  },
  {
    name: "Account Settings",
    icon: fas.faGear,
    children: [
      {
        name: "Personal Information",
        link: `${process.env.PUBLIC_URL}/account-settings/personal-information`,
      },
      {
        name: "Resumes",
        link: `${process.env.PUBLIC_URL}/account-settings/my-resumes`,
      },
      {
        name: "Birth Date",
        link: `${process.env.PUBLIC_URL}/account-settings/birthday-info`,
      },
      {
        name: "Shipping Addresses",
        link: `${process.env.PUBLIC_URL}/account-settings/shipping-addresses`,
      },
      {
        name: "Password",
        link: `${process.env.PUBLIC_URL}/account-settings/password`,
      },
      {
        name: "Registration Plan",
        link: `${process.env.PUBLIC_URL}/account-settings/my-registration-plan`,
      },
    ],
  },
  {
    name: "Other Accounts",
    icon: fas.faUser,
    children: [
      {
        name: "Username1",
        icon: fas.faUser, // Icon for child item
        link: `${process.env.PUBLIC_URL}/panel/admin`,
      },
      {
        name: "Username2",
        icon: fas.faUser, // Icon for child item
        link: `${process.env.PUBLIC_URL}/panel/admin`,
      },
      {
        name: "Username3",
        icon: fas.faUser, // Icon for child item
        link: `${process.env.PUBLIC_URL}/panel/admin`,
      },
    ],
  },
  {
    name: "Log Out",
    icon: fas.faArrowRightFromBracket,
    link: `${process.env.PUBLIC_URL}/login`,
  },
];

const ProfileBox = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>("Other Accounts"); // Set default to "Other Accounts"
  const [selectedUser, setSelectedUser] = useState<string | null>("Username1"); // Set default selected user to "Username1"

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const handleClick = (name: string) => {
    if (name === "Log Out") {
      localStorage.removeItem("login");
    }
  };

  const handleAccordionToggle = (name: string) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  const handleUserSelect = (name: string) => {
    setSelectedUser(name);
  };

  useEffect(() => {
    // Set the first list item as the selected user by default
    const firstItem = adminDropdown[0];
    if (firstItem) {
      setSelectedUser(firstItem.name);
    }
  }, []);

  return (
    <UL className="profile-dropdown onhover-show-div simple-list">
      {adminDropdown.map((data, index) => (
        <LI key={index}>
          {data.children ? (
            <>
              <div
                onClick={() => handleAccordionToggle(data.name)}
                className="d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon icon={data.icon} />
                  <span>{data.name}</span>
                </div>
                {data.name === "Other Accounts" ? (
                  // No icon for "Other Accounts"
                  <span></span>
                ) : (
                  <FeatherIcons
                    iconName={
                      activeAccordion === data.name
                        ? "ChevronDown"
                        : "ChevronRight"
                    }
                  />
                )}
              </div>
              {activeAccordion === data.name && (
                <UL className="submenu">
                  {data.children.map((child, childIndex) => (
                    <LI
                      key={childIndex}
                      className={
                        selectedUser === child.name ? "selected" : ""
                      } // Highlight selected user
                      onClick={() => handleUserSelect(child.name)}
                    >
                      <Link
                        to={child.link}
                        onClick={() => handleClick(child.name)}
                        className="d-flex align-items-center"
                      >
                        {child.icon && (
                          <FontAwesomeIcon icon={child.icon} />
                        )}{" "}
                        {/* Display icon if provided */}
                        <span>{child.name}</span>
                      </Link>
                    </LI>
                  ))}
                </UL>
              )}
            </>
          ) : (
            <Link
              to={data.link!}
              onClick={() => handleClick(data.name)}
              className={`d-flex align-items-center ${selectedUser === data.name ? "selected-user flex-column gap-2" : ""}`} 
            >
              <FontAwesomeIcon icon={data.icon} />
              <span>{selectedUser === data.name ? `Hi, ${data.name}!` : data.name}</span>
            </Link>
          )}
        </LI>
      ))}
    </UL>
  );
};

export default ProfileBox;
