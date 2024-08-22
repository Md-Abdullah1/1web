import { H6, LI, SVG } from "../../../AbstractElements";
import { Settings } from "../../../utils/Constant";
import SettingsBox from "./SettingsBox";

const SettingsDropdown = () => {
  return (
    <LI className="onhover-dropdown">
      <div className="notification-box">
        <SVG iconId="setting" />
      </div>
      <div className="onhover-show-div">
        <H6 className="f-18 mb-0 dropdown-title">{Settings} </H6>
        <SettingsBox />
      </div>
    </LI>
  );
};

export default SettingsDropdown;
