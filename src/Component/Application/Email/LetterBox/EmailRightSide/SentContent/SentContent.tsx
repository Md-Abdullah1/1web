import { TabPane } from "reactstrap";
import { LI, UL } from "../../../../../../AbstractElements";
import SentEmailContent from "./SentEmailContent";
import { sentEmailData } from "../../../../../../Data/Application/Email/LetterBox/LetterBox";

const SentContent = () => {
  return (
    <TabPane tabId="2">
      <div className="mail-body-wrapper">
        <UL className="simple-list">
          {sentEmailData.map((data,i)=>(
            <LI className="inbox-data" key={i}>
              <SentEmailContent data={data} i={i}/> 
            </LI>
          ))}
        </UL>
      </div>
    </TabPane>
  );
};

export default SentContent;
