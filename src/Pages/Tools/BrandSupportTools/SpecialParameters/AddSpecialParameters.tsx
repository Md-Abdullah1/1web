import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  BrandSupportTools,
  AddSpecialParameter,
} from "../../../../utils/Constant";
import SpecialParametersMain from "../../../../Component/Tools/BrandSupportTools/SpecialParameters/SpecialParametersMain";

const AddSpecialParameters = () => {
  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={AddSpecialParameter} parent={BrandSupportTools} />
      <Container className="card p-4" fluid>
        <SpecialParametersMain/>
      </Container>
    </div>
  );
};

export default AddSpecialParameters;
