import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LI, P } from "../../../../AbstractElements";
import ProfileBox from "./ProfileBox";
import { fas } from "@fortawesome/free-solid-svg-icons";

const UserProfile = () => {
  return (
    <LI className="profile-nav onhover-dropdown p-0">
      <div className="d-flex profile-media align-items-center">
        <FontAwesomeIcon icon={fas.faUser} />
        {/* <div className="flex-grow-1">
          <span>{"Alen Miller"}</span>
          <P className="mb-0">{"UI Designer"}</P>
        </div> */}
      </div>
      <ProfileBox />
    </LI>
  );
};

export default UserProfile;
