import { Container, Row } from "reactstrap";
import LeftSidebar from "../PrivateChat/LeftSidebar/LeftSidebar";
import UserGroupChat from "./UserGroupChat/UserGroupChat";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Communication, PrivateCChat } from "../../../../utils/Constant";

const GroupChatContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={PrivateCChat} parent={Communication} />
      <Container fluid>
        <Row className="g-0">
          <LeftSidebar />
          <UserGroupChat />
        </Row>
      </Container>
    </>
  );
};

export default GroupChatContainer;
