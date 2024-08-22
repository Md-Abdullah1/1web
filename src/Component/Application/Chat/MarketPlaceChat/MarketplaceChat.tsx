import { Container, Row } from "reactstrap";
import LeftSidebar from "../PrivateChat/LeftSidebar/LeftSidebar";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Communication, MarketplaceChat, } from "../../../../utils/Constant";
import UserGroupChat from "../GroupChat/UserGroupChat/UserGroupChat";

const MarketplaceChatContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={MarketplaceChat} parent={Communication} />
      <Container fluid>
        <Row className="g-0">
          <LeftSidebar />
          <UserGroupChat />
        </Row>
      </Container>
    </>
  );
};

export default MarketplaceChatContainer;
