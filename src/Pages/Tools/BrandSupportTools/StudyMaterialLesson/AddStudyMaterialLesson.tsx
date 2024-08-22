import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  BrandSupportTools,
  AddStudyMaterialAndLesson,
} from "../../../../utils/Constant"; 
import StudyMaterialLessonMain from "../../../../Component/Tools/BrandSupportTools/StudyMaterialLesson/StudyMaterialLessonMain";

const AddStudyMaterialLesson = () => {
  
  return (
    <div className="page-body">
      <Breadcrumbs
        mainTitle={AddStudyMaterialAndLesson}
        parent={BrandSupportTools}
      />
      <Container className="card p-4" fluid>
          <StudyMaterialLessonMain/>
      </Container>
    </div>
  );
};

export default AddStudyMaterialLesson;
