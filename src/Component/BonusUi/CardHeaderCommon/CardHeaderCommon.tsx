import React, { Fragment } from "react";
import { CardHeader } from "reactstrap";
import { CommonCardHeaderProp } from "../../../Types/BonusUi/BonusUiTypes";
import { H3, P } from "../../../AbstractElements";

const CardHeaderCommon: React.FC<CommonCardHeaderProp> = ({
  title,
  span,
  headClass,
  icon,
  tagClass,
}) => {
  return (
    <CardHeader className={headClass ? headClass : ""}>
      <H3 className={`${tagClass ? tagClass : ""}`}>
        {icon && icon}
        {title}
      </H3>
      {span && (
        <P className="f-m-light mt-1">
          {span.map((data, index) => (
            <Fragment key={index}>
              {data?.text} {data.code && <code>{data.code}</code>}{" "}
              {data.mark && <mark>{data.mark}</mark>}
            </Fragment>
          ))}
        </P>
      )}
    </CardHeader>
  );
};

export default CardHeaderCommon;
