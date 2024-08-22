import { H6, LI, SVG } from "../../../../AbstractElements";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setDarkMode } from "../../../../ReduxToolkit/Reducers/LayoutSlice";
import { setMixBackgroundLayout } from "../../../../ReduxToolkit/Reducers/ThemeCustomizerSlice";
import { DarkModeText, LightModeText } from "../../../../utils/Constant";

const DarkMode = () => {
  const { mix_background_layout } = useAppSelector(
    (state) => state.themeCustomizer
  );
  const { darkMode } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const handleDarkMode = (name: string) => {
    dispatch(setDarkMode(!darkMode));
    if (name === "light" || name === "dark-sidebar") {
      dispatch(setMixBackgroundLayout("dark-only"));
    } else if (name === "dark-only") {
      dispatch(setMixBackgroundLayout("light"));
    }
  };
  return (
    <LI onClick={() => handleDarkMode(mix_background_layout)}>
      <div
        className={`mode ${
          mix_background_layout === "dark-only" ? "active" : ""
        } d-flex align-items-center justify-content-start gap-2`}
        style={{ height: "20px", cursor: "pointer" }}
      >
        <SVG style={{ width: 20 }} iconId="fill-dark" />
        <H6 className="py-0 my-0 ">
        {darkMode ? LightModeText : DarkModeText}
        </H6>
      </div>
    </LI>
  );
};

export default DarkMode;
