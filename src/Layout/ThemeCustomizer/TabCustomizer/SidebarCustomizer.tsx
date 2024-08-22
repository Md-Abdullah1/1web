import DarkMode from "../../Header/RightHeaderIcon/DarkMode/DarkMode";
import Language from "../../Header/RightHeaderIcon/Language/Language";
import ColorComponent from "./ColorComponent";
import ColorDarkLayout from "./ColorDarkLayout";
import ColorLightLayout from "./ColorLightLayout";
import LayoutType from "./LayoutType";
import MixLayoutComponent from "./MixLayoutComponent";

const SidebarCustomizer = () => {
  return (
    <>
      <DarkMode />
      <Language />
      <LayoutType />
      {/* <ColorComponent /> */}
      {/* <ColorLightLayout /> */}
      {/* <ColorDarkLayout /> */}
      {/* <MixLayoutComponent />                                                                                                                */}
    </>
  );
};

export default SidebarCustomizer;
