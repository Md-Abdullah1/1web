import { useEffect, useRef } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";
import NavCustomizer from "./NavCustomizer/NavCustomizer";
import TabCustomizer from "./TabCustomizer/TabCustomizer";
import { setOpenCus } from "../../ReduxToolkit/Reducers/ThemeCustomizerSlice";

const ThemeCustomizer = () => {
  const [selected, setSelected] = useState("sidebar-type");
  const { openCus } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();
  const customizerRef = useRef<HTMLDivElement>(null);
  const themeCustomRef = useRef<HTMLDivElement>(null);

  const callbackNav = (select: string, open: boolean) => {
    setSelected(select);
    dispatch(setOpenCus(open));
  };

  // Handle clicks outside of the customizer component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        customizerRef.current &&
        !customizerRef.current.contains(event.target as Node) &&
        themeCustomRef.current &&
        !themeCustomRef.current.contains(event.target as Node)
      ) {
        dispatch(setOpenCus(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleClickInside = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        ref={themeCustomRef}
        className={`top-0 w-100 h-100 ${openCus ? "theme_custom" : ""}`}
        onClick={() => dispatch(setOpenCus(false))}
      >
        <div
          ref={customizerRef}
          className={`customizer-contain ${openCus ? "open" : ""}`}
          onClick={handleClickInside}
        >
          <TabCustomizer selected={selected} callbackNav={callbackNav} />
        </div>
      </div>
    </>
  );
};

export default ThemeCustomizer;
