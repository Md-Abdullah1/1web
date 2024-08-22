import { useState } from "react";
import { Badges, H3, H6, LI, SVG } from "../../../../AbstractElements";
import CommonModal from "../../../../Component/Ui-Kits/Modal/Common/CommonModal";
import { Settings } from "../../../../utils/Constant";
import DarkMode from "../DarkMode/DarkMode";
import Language from "../Language/Language";
import QuickOptionCustomizer from "../QuickOptionCustomizer/QuickOptionCustomizer";
import LayoutType from "../../../ThemeCustomizer/TabCustomizer/LayoutType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setOpenCus } from "../../../../ReduxToolkit/Reducers/ThemeCustomizerSlice";

const SettingsPopup = () => { 

  const [selected, setSelected] = useState("sidebar-type");
  const { openCus } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();

  const callbackNav = (select: string, open: boolean) => { 
    setSelected(select);
    dispatch(setOpenCus(open));
  };
 
  return (
    <LI className="" onClick={() => callbackNav("sidebar-type", true)}>
      <div className="notification-box">
        <FontAwesomeIcon icon={fas.faSliders} />
      </div> 
    </LI>
  );
};

export default SettingsPopup;
