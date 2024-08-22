import DarkMode from "../RightHeaderIcon/DarkMode/DarkMode";
import Language from "../RightHeaderIcon/Language/Language";
import QuickOptionCustomizer from "../RightHeaderIcon/QuickOptionCustomizer/QuickOptionCustomizer";

const SettingsBox = () => {
  return (
    <div className="mb-3">
      <DarkMode />
      <Language />
      <QuickOptionCustomizer />
    </div>
  );
};

export default SettingsBox;
