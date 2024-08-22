import { useAppSelector } from "../../../../../../ReduxToolkit/Hooks";
import { LI, UL } from "../../../../../../AbstractElements";
import StarredEmailContent from "./StarredEmailContent";
import { Fragment } from "react";
import { TabPane } from "reactstrap";

const StarredContent = () => {
  const { starredValue } = useAppSelector((state) => state.letterBox);
  return (
    <TabPane tabId="3" >
      <div className="mail-body-wrapper">
        <UL className="simple-list">
          {starredValue.length > 0
            ? starredValue.map((data:any, i:number) => (
                <Fragment key={i}>
                  {data.star && (
                    <LI className="inbox-data" >
                      <StarredEmailContent data={data} i={i} />
                    </LI>
                  )}
                </Fragment>
              ))
            : "NO Starred Data"}
        </UL>
      </div>
    </TabPane>
  );
};

export default StarredContent;
