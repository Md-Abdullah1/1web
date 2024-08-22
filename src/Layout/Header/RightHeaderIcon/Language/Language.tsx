import { useState } from "react";
import { useTranslation } from "react-i18next";
import { H6, LI } from "../../../../AbstractElements";
import { languageData } from "../../../../Data/LayoutData/LanguageData";
import { LanguageDataType } from "../../../../Types/Layout/HeaderType";
import { Languages } from "../../../../utils/Constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

const Language = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [flag, setFlag] = useState("us");
  const { i18n } = useTranslation();
  const changeLanguage = (lng: LanguageDataType) => {
    setLang(lng.languageParameter);
    setFlag(lng.languageIconClassName);
    i18n.changeLanguage(lng.languageParameter);
    setOpen(false);
  };
  const LanguageSelection = (open: boolean) => {
    if (open) {
      setOpen(!open);
    } else {
      setOpen(!open);
    }
  };

  return (
    <LI className="language-nav mt-4">
      <div className={`translate_wrapper ${open ? "active" : ""}`}>
        <div className="current_lang">
          <div
            className="lang d-flex align-items-center justify-content-start gap-2"
            onClick={() => LanguageSelection(open)}
          >
            <FontAwesomeIcon icon={fas.faLanguage} style={{ width:' 23px' }} />
            <H6 className="py-0 my-0">{Languages} {`(${lang})`}</H6> 
          </div>
        </div>
        <div className={`more_lang position-relative z-3 ${open ? "active" : ""}`}>
          {languageData.map((data, index) => (
            <div
              className="lang selected"
              key={index}
              onClick={() => changeLanguage(data)}
            >
              <i
                className={`flag-icon fi fi-${data.languageIconClassName}`}
              ></i>
              <span className="lang-txt">
                {data.languageName}
                {data.subTitle && <span> ({data.subTitle})</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </LI>
  );
};

export default Language;
