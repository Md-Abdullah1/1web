import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { ManageBranches, DeliveryFeesTitle } from "../../../../utils/Constant"; 
import DeliveryFeesMain from "../../../../Component/Tools/ManageOnlineStore/DeliveryFees/DeliveryFeesMain";

const AddDeliveryFees = () => {

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={DeliveryFeesTitle} parent={ManageBranches} />
      <Container className="card p-4" fluid>
         <DeliveryFeesMain/>
      </Container>
    </div>
  );
};

export default AddDeliveryFees;
