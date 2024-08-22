import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badges, H6, LI, SVG } from "../../../../AbstractElements";
import { Messages } from "../../../../utils/Constant";
import MessageBox from "./MessageBox";
import { fas } from "@fortawesome/free-solid-svg-icons";

const HeaderMessage = () => {
  return (
    <LI className="onhover-dropdown ">
      <div className="message">
        <FontAwesomeIcon icon={fas.faEnvelope} />
        <Badges pill color="secondary">
          4
        </Badges>
      </div>
      <div className="onhover-show-div message-dropdown">
        <H6 className="f-18 mb-0 dropdown-title">{Messages} </H6>
        <MessageBox />
      </div>
    </LI>
  );
};

export default HeaderMessage;
