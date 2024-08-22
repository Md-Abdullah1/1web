import { TabPane } from "reactstrap";
import { LI, UL } from "../../../../../../AbstractElements";
import TrashEmailContent from "./TrashEmailContent";
import { trashEmailData } from "../../../../../../Data/Application/Email/LetterBox/LetterBox";

const TrashContent = () => {
  return (
    <TabPane tabId="5">
      <div className="mail-body-wrapper">
        <UL className="simple-list">
          {trashEmailData.map((data,i)=>(
            <LI className="inbox-data" key={i}>
              <TrashEmailContent data={data} i={i}/> 
            </LI>
          ))}
        </UL>
      </div>
    </TabPane>
  );
};

export default TrashContent;
