import { useState } from "react";
import { Badges, H3, H6, LI, SVG } from "../../../../AbstractElements";
import CommonModal from "../../../../Component/Ui-Kits/Modal/Common/CommonModal";
import { Tools } from "../../../../utils/Constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Brand Support Tools",
    items: [
      {
        icon: fas.faPersonShelter,
        subtitle: "Attendance System",
        description:
          "manage attendance, registration data, appointments, events, classes, work shifts.", 
        path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/attendance-system`,
      },
      {
        icon: fas.faLink,
        subtitle: "Manage External Links",
        description:
          "group you favourite and recommended web pages in one place to help followers and customers find them easily.",
        path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/manage-my-external-links`,
      },
      {
        icon: fas.faTrophy,
        subtitle: "Photo Contest System",
        description:
          "create and manage photo contests to reward and interact with followers and customers.",
        path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/manage-my-photo-contests`,
      },
      {
        icon: fas.faClipboardQuestion,
        subtitle: "Quiz and Survey System",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, consectetur?",
        path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/lessons`,
      },
      {
        subtitle: "Knowledge  System",
        description:
          "add and manage educational games, exams, tests, surveys, lessons, tutorials, training materials…",
        path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/lessons`,
      },
      {
        subtitle: "Manage Projects",
        description: "Manage your work with your team and clients",
        path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/project-list`,
      },
      {
        subtitle: "Support Ticket System",
        description: "Manage customer service and satisfaction effectively",
        path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/support-ticket-system`,
      },
      {
        subtitle: "Ready Templates",
        description: "Save time and use high quality templates",
        path: `${process.env.PUBLIC_URL}/tools/brand-support/ready-templates`,
      },
    ],
  },
  {
    title: "Manage Contents",
    items: [
      {
        icon: fas.faImages,
        subtitle: "Manage Albums",
        description:
          "group  your contents under a specific idea or album name.",
        path: `${process.env.PUBLIC_URL}/manage-contents/manage-my-albums`,
      },
      {
        icon: fas.faBoxesStacked,
        subtitle: "Manage Collections",
        description:
          "Collect any contents from other users and group them under a specific idea or collection name.",
        path: `${process.env.PUBLIC_URL}/tools/manage-contents/manage-my-collections`,
      },
      {
        icon: fas.faImage,
        subtitle: "Manage Uploaded Contests",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, consectetur?",
        path: `${process.env.PUBLIC_URL}/manage-contents/my-uploaded-contents`,
      },
    ],
  },
  {
    title: "Manage Store",
    items: [
      {
        icon: fas.faBuildingFlag,
        subtitle: "Manage Branches",
        description: "add, edit and manage your branches",
        path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-branches`,
      },
      {
        icon: fas.faGifts,
        subtitle: "Manage Products Services",
        description: "add, edit and manage your products and services",
        path: `${process.env.PUBLIC_URL}/manage-store/product-and-service-list`,
      },
      {
        icon: fas.faArrowsDownToLine,
        subtitle: "Addon Categories",
        description:
          "add, edit and manage add-on with your products and services",
        path: `${process.env.PUBLIC_URL}/manage-online-store/addon-categories`,
      },
      {
        icon: fas.faMoneyCheckDollar,
        subtitle: "Coupon System",
        description: "offer discounts and manage coupons.",
        path: `${process.env.PUBLIC_URL}/manage-online-store/manage-my-coupons`,
      },
      {
        icon: fas.faTruckFast,
        subtitle: "Delivery Service",
        description:
          "add, edit, manage your delivery fees and delivery workers",
        path: `${process.env.PUBLIC_URL}/manage-online-store/delivery-fees`,
      },
    ],
  },
];

const ToolsPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalToggle = () => setIsOpen(!isOpen);
  return (
    <LI className="d-block d-md-none " onClick={() => setIsOpen(!isOpen)}>
      <div className="notification-box ">
        <FontAwesomeIcon icon={fas.faWandMagicSparkles} />
      </div>

      <CommonModal
        isOpen={isOpen}
        toggle={openModalToggle}
        modalBodyClassName="p-0"
        heading="Login"
        size="lg"
        
      >
      <div className="modal-toggle-wrapper social-profile text-start dark-sign-up tools_box p-3 ">
        <h4 className="modal-header justify-content-center border-0 pb-0">
          {Tools}
        </h4>
        <hr />
        <div className="d-flex flex-column flex-md-row justify-content-between px-3 gap-3">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="pb-2">{section.title}</h4>

              {section.items.map((item, itemIndex) => (
                <Link to={item.path} key={itemIndex}>
                  <div className="d-flex gap-2">
                    {item.icon && (<FontAwesomeIcon icon={item.icon} />)}
                    <h6>{item.subtitle}</h6>
                  </div>
                  <p
                    style={{
                      fontSize: "12px",
                    }}
                    className="text-muted"
                  >
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      </CommonModal>
    </LI>
  );
};

export default ToolsPopup;
