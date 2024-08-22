import { Container } from "reactstrap";
import MediaData from "../../../Component/App/MediaData/MediaData";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Home, MediaCap } from "../../../utils/Constant";

const Media = () => {
  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={MediaCap} parent={Home} />
      <Container fluid>
        <MediaData />
      </Container>
    </div>
  );
};

export default Media;
