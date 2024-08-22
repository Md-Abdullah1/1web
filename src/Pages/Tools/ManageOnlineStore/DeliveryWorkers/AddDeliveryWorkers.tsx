import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  ManageBranches,
  DeliveryWorkersTitle,
} from "../../../../utils/Constant"; 
import DeliveryWorkersMain from "../../../../Component/Tools/ManageOnlineStore/DeliveryWorkers/DeliveryWorkersMain";

const AddDeliveryWorkers = () => {
   

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={DeliveryWorkersTitle} parent={ManageBranches} />
      <Container className="card p-4" fluid>
          <DeliveryWorkersMain/>
      </Container>
    </div>
  );
};

export default AddDeliveryWorkers;
