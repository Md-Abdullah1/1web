import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LI, UL } from "../../../../AbstractElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsToEye, fas } from "@fortawesome/free-solid-svg-icons";
import { Href } from "../../../../utils/Constant";

// Define dropdown data
const dropdownItems = [
    { label: "Marketplace", path: "/services-and-products", icon: fas.faStore  },
    { label: "Coupons icons", path: "/coupons",icon:fas.faMoneyCheckDollar },
    { label: "Upload", path: "/Upload",icon:fas.faCloudArrowUp },
    {
        label: "My Media Center",
        icon:fas.faArrowsToEye,
        subItems: [
            // { label: "Sub-Service 1", path: "/sub-service-1" },
            // { label: "Sub-Service 2", path: "/sub-service-2" },
            {
                label: "About",
                type: "link",
                path: `${process.env.PUBLIC_URL}/about`,
                icon: fas.faAddressCard,
    
              },
              {
                label: "Photos",
                type: "link",
                icon: fas.faImage,
    
                path: `${process.env.PUBLIC_URL}/photos`,
              },
    
              {
                label: "Activities and Meetings",
                type: "link",
                icon: fas.faPeopleRoof,
    
                path: `${process.env.PUBLIC_URL}/activities-meetings`,
              },
              {
                label: "Quizzes and Surveys",
                type: "link",
                icon: fas.faCloudArrowUp,
    
                path: `${process.env.PUBLIC_URL}/quizzes-surveys`,
              },
              {
                label: "Followers",
                type: "link",
                icon: fas.faUsersRays,
    
                path: `${process.env.PUBLIC_URL}/followers`,
              },
              {
                label: "I Follow",
                type: "link",
                icon: fas.faPersonWalkingArrowRight,
    
                path: `${process.env.PUBLIC_URL}/i-follow`,
              },
              {
                label: "Likes",
                type: "link",
                icon: fas.faHeart,
    
                path: `${process.env.PUBLIC_URL}/likes`,
              },
              {
                label: "Coupons",
                type: "link",
                icon: fas.faCloudArrowUp,
    
                path: `${process.env.PUBLIC_URL}/my-coupons`,
              },
              {
                label: "Albums",
                type: "link",
                icon: fas.faImages,
    
                path: `${process.env.PUBLIC_URL}/albums`,
              },
              {
                label: "Collections",
                type: "link",
                icon: fas.faNoteBook,
    
                path: `${process.env.PUBLIC_URL}/collections`,
              },
              {
                label: "I Downloaded",
                type: "link",
                icon: fas.faCloudArrowDown,
                path: `${process.env.PUBLIC_URL}/i-downloaded`,
              },
              {
                label: "Reviews",
                type: "link",
                icon: fas.faComments,
    
                path: `${process.env.PUBLIC_URL}/reviews`,
              },
              {
                label: "External Links",
                type: "link",
                icon: fas.faLink,
    
                path: `${process.env.PUBLIC_URL}/external-links`,
              },
              {
                icon: fas.faCloudArrowUp,
    
                path: `${process.env.PUBLIC_URL}/my-media-center/calendar`,
                type: "link",
                label: "Calendar",
              },
              {
                label: "Pending Approval",
                type: "link",
                icon: fas.faCircleHalfStroke,
    
                path: `${process.env.PUBLIC_URL}/pending-photos`,
              },
              {
                icon: fas.faCloudArrowUp,
    
                path: `${process.env.PUBLIC_URL}/media-center/customers-wish-list`,
                label: "Customer’s Wishes",
                type: "link",
              },
        ]
    }
];

const MyMediaCenter = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

     

   

    return (
        <LI className="onhover-dropdown d-block d-md-none ">
            <FontAwesomeIcon icon={faArrowsToEye} />
            <div className="onhover-show-div">
            <UL className="simple-list list-group">
                {dropdownItems.map((item, index) => (
                        <LI key={index} className=" list-group has-submenu simple-list">
                            {item.path ? (
                                <Link to={`${process.env.PUBLIC_URL}${item.path}`} >
                                    <FontAwesomeIcon icon={item.icon} className="me-2"/>
                                    {item.label}
                                </Link>
                                
                            ) : (
                                <div className="">
                                    <div className="d-flex justify-content-between align-item-center">
                                    <Link to={Href}> 
                                    <FontAwesomeIcon icon={item.icon} className="me-2"/>
                                    {item.label}
                                    </Link>
                                        <i className="fa fa-angle-down"></i>
                                    </div>
                                    {  item.subItems && (
                                        <div className="sub-dropdown-menu mt-2">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <div key={subIndex} className="sub-dropdown-item d-flex gap-2 list-group flex-row"  >
                                                   <FontAwesomeIcon icon={subItem.icon} />
                                                   <Link to={subItem.path}>
                                                    {subItem.label}
                                                   </Link>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </LI>
                    ))}
            </UL>
            </div>
            {/* {isDropdownOpen && ( */}
            {/* <div className="onhover-show-div message-dropdown">
                    {dropdownItems.map((item, index) => (
                        <div key={index} className="dropdown-item">
                            {item.path ? (
                                <div onClick={() => navigate(`${process.env.PUBLIC_URL}${item.path}`)}>
                                    {item.label}
                                </div>
                            ) : (
                                <div onClick={() => toggleSubDropdown(index)}>
                                    {item.label}
                                    {isSubDropdownOpen === index && item.subItems && (
                                        <div className="sub-dropdown-menu">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <div key={subIndex} className="sub-dropdown-item" onClick={() => navigate(`${process.env.PUBLIC_URL}${subItem.path}`)}>
                                                    {subItem.label}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div> */}
            {/* )} */}
        </LI>
    );
};

export default MyMediaCenter;
