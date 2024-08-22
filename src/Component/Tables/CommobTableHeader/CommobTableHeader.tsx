import React, { Fragment } from "react";
import { CardHeader } from "reactstrap";
import { CommonCardHeaderProp } from "../../../Types/Ui-Kits/UiKitsTypes";
import { H3 } from "../../../AbstractElements";

const CommonTableHeader: React.FC<CommonCardHeaderProp> = ({ title, span, headClass, icon, tagClass }) => {
  return (
    <CardHeader className={`${headClass ? headClass : ""}`}>
      <H3 className={tagClass ? tagClass : ""}>{icon && icon}{title}</H3>
      {span && (
        <span>
          {span.map((data, index) => (
            <Fragment key={index}>
              {'text' in data && data.text} 
              {'code' in data && <code>{data.code}</code>} 
              {'mark' in data && <mark>{data.mark}</mark>}
            </Fragment>
          ))}
        </span>
      )}
    </CardHeader>
  );
};

export default CommonTableHeader;