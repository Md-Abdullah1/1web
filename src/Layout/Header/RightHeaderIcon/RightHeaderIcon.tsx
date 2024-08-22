import { useState } from "react";
import { Row, Col } from "reactstrap";
import { Btn, UL, H3 } from "../../../AbstractElements";
import ZoomInOut from "./ZoomInOut/ZoomInOut";
import Notifications from "./Notifications/Notifications";
import HeaderMessage from "./HeaderMessage/HeaderMessage";
import HeaderCart from "./HeaderCart/HeaderCart";
import UserProfile from "./UserProfile/UserProfile";
import CommonModal from "../../../Component/Ui-Kits/Modal/Common/CommonModal";
import LoginForm from "../../../Component/Authentication/LoginForm";
import SettingsDropdown from "../SettingsDropdown/SettingsDropdown";
import SavedSearch from "./SavedSearch/SavedSearch";
import SettingsPopup from "./SettingsPopup/SettingsPopup";
import ToolsPopup from "./ToolsPopup/ToolsPopup";
import MyMediaCenter from "./MyMediaCenter/MyMediaCenter";
import Upload from "./Upload/Upload";

const RightHeaderIcon = () => {
  const [openModal, setOpenModal] = useState(false);
  const openModalToggle = () => setOpenModal(!openModal);
  return (
    <>
      <Col
        xxl="7"
        xl="8"
        className="nav-right col-auto box-col-6 pull-right right-header p-0 ms-auto"
      >
        <UL className="nav-menus flex-row">
          {/* <MyMediaCenter/> */}
          {/* <ToolsPopup /> */}
          <SavedSearch />
          <Upload/>
          {/* <SettingsDropdown /> */}
          <SettingsPopup />
          <HeaderMessage />
          <ZoomInOut />
          <Notifications />
          {/* <HeaderBookmark /> */}
          <HeaderCart />
          <UserProfile />
          <Btn color="primary" onClick={openModalToggle}>
            Login
          </Btn>
        </UL>
      </Col>
      <CommonModal
        isOpen={openModal}
        toggle={openModalToggle}
        modalBodyClassName="p-0"
        heading="Login"
      >
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <H3 className="modal-header justify-content-center border-0">
            Login
          </H3>
          <LoginForm />
        </div>
      </CommonModal>
    </>
  );
};

export default RightHeaderIcon;
