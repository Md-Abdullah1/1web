import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badges, Btn, H3, H6, LI, SVG } from "../../../../AbstractElements";
import CommonModal from "../../../../Component/Ui-Kits/Modal/Common/CommonModal";
import { Notification } from "../../../../utils/Constant";
import NotificationBox from "./NotificationBox";
import { useState } from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalToggle = () => setIsOpen(!isOpen);
  return (
    <LI className="" onClick={() => setIsOpen(!isOpen)}>
      <div className="notification-box">
        <FontAwesomeIcon icon={fas.faBell} />
        <Badges pill color="primary">
          3
        </Badges>
      </div>

      <CommonModal
        isOpen={isOpen}
        toggle={openModalToggle}
        modalBodyClassName="p-0"
        heading="Login"
        size="lg"
      >
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <div className="modal-header justify-content-between">
            <H3 className=" pb-0">
              {Notification}            
            </H3>
            <div className="text-end d-flex">
              <div className="px-1"><FontAwesomeIcon icon={fas.faEnvelopeOpen} className='pe-1'/>Read</div>
              <div className="px-1"><FontAwesomeIcon icon={fas.faEnvelope} className='pe-1'/>UnRead</div>
              <div className="px-1"><FontAwesomeIcon icon={fas.faTrash} className='pe-1'/>Delete</div>
            </div>
          </div>          
          <div className="px-2 py-2">
            <NotificationBox openModalToggle={openModalToggle} />
          </div>
        </div>
      </CommonModal>
    </LI>
  );
};

export default Notifications;
