import { Container } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Home } from "../../../utils/Constant";
import ContestsData from "../../../Component/App/ContestsData/ContestsData";

const Contests = () => {
  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={`Contests`} parent={Home} />
      <Container fluid>
        <ContestsData />
      </Container>
    </div>
  );
};

export default Contests;
