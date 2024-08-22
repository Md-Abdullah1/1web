import { useState } from "react";
import { Maximize } from "react-feather";
import { LI } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

const ZoomInOut = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenHandler = (isFullScreen: boolean) => {
    setFullScreen(isFullScreen);
    if (isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document?.exitFullscreen();
    }
  };

  return (
    <LI className="d-none d-md-block ">
      <Link
        className="text-dark"
        onClick={() => fullScreenHandler(!fullScreen)}
        to={Href}
      >
        <FontAwesomeIcon icon={fas.faExpand} />
      </Link>
    </LI>
  );
};

export default ZoomInOut;
