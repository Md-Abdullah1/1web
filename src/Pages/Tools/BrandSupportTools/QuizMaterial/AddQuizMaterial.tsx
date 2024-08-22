import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  BrandSupportTools,
  AddAQuizMaterial,
} from "../../../../utils/Constant"; 
import QuizMaterialMain from "../../../../Component/Tools/BrandSupportTools/QuizMaterial/QuizMaterialMain";

const AddQuizMaterial = () => {
  

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={AddAQuizMaterial} parent={BrandSupportTools} />
      <Container className="card p-4" fluid>
          <QuizMaterialMain addQuestions={true}/>
      </Container>
    </div>
  );
};

export default AddQuizMaterial;
