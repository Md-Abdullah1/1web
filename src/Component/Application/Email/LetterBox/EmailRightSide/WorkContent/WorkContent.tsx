import { TabPane } from "reactstrap";
import { LI, UL } from "../../../../../../AbstractElements";
import WorkEmailContent from "./WorkEmailContent";
import { workEmailData } from "../../../../../../Data/Application/Email/LetterBox/LetterBox";

const WorkContent = () => {
  return (
    <TabPane tabId="6" >
      <div className="mail-body-wrapper">
        <UL>
          {workEmailData.map((data,i)=>(
            <LI className="inbox-data" key={i}>
              <WorkEmailContent data={data} i={i}/> 
            </LI>
          ))}
        </UL>
      </div>
    </TabPane>
  );
};

export default WorkContent;
