import { Container } from "reactstrap";
import MediaData from "../../../Component/App/MediaData/MediaData";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { CustomFileInputsUpload, Home, MediaCap } from "../../../utils/Constant";
import UploadData from "../../../Component/App/UploadData/UploadData";

const Upload = () => {
  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={CustomFileInputsUpload} parent={Home} />
      <Container fluid>
        <UploadData />
      </Container>
    </div>
  );
};

export default Upload;
