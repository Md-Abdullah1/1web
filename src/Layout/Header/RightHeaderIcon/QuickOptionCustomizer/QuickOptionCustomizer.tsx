import { useState } from "react";
import { Image, LI } from "../../../../AbstractElements";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setOpenCus } from "../../../../ReduxToolkit/Reducers/ThemeCustomizerSlice";
import { ColorsLayouts } from "../../../../utils/Constant";
import { dynamicImage } from "../../../../Service";

const QuickOptionCustomizer = () => {
  const [selected, setSelected] = useState("sidebar-type");
  const { openCus } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();

  const callbackNav = (select: string, open: boolean) => { 
    
    setSelected(select);
    dispatch(setOpenCus(open));
  };
  return (
    <LI
      onClick={() => callbackNav("sidebar-type", true)}
      style={{ cursor: "pointer" }}
    >
      <div className={`d-flex align-items-center justify-content-start gap-1`}>
        <div className="settings">
          <Image
            src={dynamicImage(`customizer/1.png`)}
            alt="icons"
            style={{ width: "18px", height: "18px" }}
          />
        </div>
        {ColorsLayouts}
      </div>
    </LI>
  );
};

export default QuickOptionCustomizer;
