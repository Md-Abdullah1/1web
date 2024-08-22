import React, { Fragment } from "react";
import { CardHeader } from "reactstrap";
import { CommonCardHeaderProp } from "../../Types/Ui-Kits/UiKitsTypes";
import H4 from "../Headings/H4Element";
import P from "../Paragraph";

const CardHeaderCommon: React.FC<CommonCardHeaderProp> = ({ title, span, headClass, icon, tagClass }) => {
  return (
    <CardHeader className={`${headClass ? headClass : ""} pb-0`}>
      <H4 className={tagClass ? tagClass : ""}>{icon && icon}{title}</H4>
      {span && (
        <P className="f-m-light mt-1">
          {span.map((data, index) => (
            <Fragment key={index}>
              {'text' in data && data.text} 
              {'code' in data && <code>{data.code}</code>} 
              {'mark' in data && <mark>{data.mark}</mark>}
            </Fragment>
          ))}
        </P>
      )}
    </CardHeader>
  );
};

export default CardHeaderCommon;