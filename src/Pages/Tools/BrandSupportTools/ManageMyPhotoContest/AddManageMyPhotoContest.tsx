import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs"; 
import { AddPhotoCotest, BrandSupportTools } from "../../../../utils/Constant"; 
import PhotoContestMain from "../../../../Component/Tools/BrandSupportTools/ManageMyPhotoContest/PhotoContestMain";
const AddManageMyPhotoContest = () => {
  
  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={AddPhotoCotest} parent={BrandSupportTools} />
      <Container className="card p-4" fluid>
          <PhotoContestMain/>
      </Container>
    </div>
  );
};

export default AddManageMyPhotoContest;
