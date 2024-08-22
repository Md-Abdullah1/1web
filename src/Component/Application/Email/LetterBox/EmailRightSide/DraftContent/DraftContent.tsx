import { TabPane } from "reactstrap";
import { LI, UL } from "../../../../../../AbstractElements";
import DraftEmailContent from "./DraftEmailContent";
import { draftEmailData } from "../../../../../../Data/Application/Email/LetterBox/LetterBox";

const DraftContent = () => {
  return (
    <TabPane tabId="4" >
      <div className="mail-body-wrapper">
        <UL className="simple-list">
          {draftEmailData.map((data,i)=>(
            <LI className="inbox-data" key={i}>
              <DraftEmailContent data={data} i={i}/> 
            </LI>
          ))}
        </UL>
      </div>
    </TabPane>
  );
};

export default DraftContent;
