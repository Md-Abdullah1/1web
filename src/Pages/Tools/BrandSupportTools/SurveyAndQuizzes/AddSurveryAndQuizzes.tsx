
import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs"; 
import {
  BrandSupportTools,
  AddSurveyQuizzes,
} from "../../../../utils/Constant"; 
import SurveyAndQuizzesMain from "../../../../Component/Tools/BrandSupportTools/SurveyAndQuizzes/SurveyAndQuizzesMain";
const AddSurveyAndQuizzes = () => {

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={AddSurveyQuizzes} parent={BrandSupportTools} />
      <Container className="card p-4" fluid>
          <SurveyAndQuizzesMain/>
      </Container>
    </div>
  );
};

export default AddSurveyAndQuizzes;
