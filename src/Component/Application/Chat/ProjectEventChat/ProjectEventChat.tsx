import { Container, Row } from "reactstrap";
import LeftSidebar from "../PrivateChat/LeftSidebar/LeftSidebar";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { ApplicationChat, Communication } from "../../../../utils/Constant";
import UserGroupChat from "../GroupChat/UserGroupChat/UserGroupChat";

const ProjectEventChatContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ApplicationChat} parent={Communication} />
      <Container fluid>
        <Row className="g-0">
          <LeftSidebar />
          <UserGroupChat />
        </Row>
      </Container>
    </>
  );
};

export default ProjectEventChatContainer;
