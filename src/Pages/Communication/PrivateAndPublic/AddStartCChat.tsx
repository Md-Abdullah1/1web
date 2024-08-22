import { Container } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { CommunicationTitle,StartIChatTitle } from "../../../utils/Constant"; 
import StartCChatMain from "../../../Component/Communication/StartCChatMain";

const AddStartCChat = () => {
  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={StartIChatTitle} parent={CommunicationTitle} />
      <Container className="card p-4" fluid>
        <StartCChatMain/>
      </Container>
    </div>
  );
};

export default AddStartCChat;
