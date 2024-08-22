import { Container} from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs"; 
import { BrandSupportTools, AddQuestion } from "../../../../utils/Constant"; 
import AddQuestionsMain from "../../../../Component/Tools/BrandSupportTools/Questions/AddQuestionsMain";
 
const AddQuestions = () => {

  
  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={AddQuestion} parent={BrandSupportTools} />
      <Container className="card p-4" fluid>
          <AddQuestionsMain addQuizMaterial={true}/>
      </Container>
    </div>
  );
};

export default AddQuestions;
