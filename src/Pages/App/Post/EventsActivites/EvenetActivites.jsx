import { Container } from "reactstrap";
import {EventAndActivites, Post } from "../../../../utils/Constant";
import MediaData from "../../../../Component/App/MediaData/MediaData";
import { Home } from "react-feather";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";

 

const EventActivites = () => {
  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={EventAndActivites} parent={Post} />
      <Container fluid>
        <MediaData />
      </Container>
    </div>
  );
};

export default EventActivites;
