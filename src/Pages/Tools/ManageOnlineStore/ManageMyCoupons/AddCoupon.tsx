import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs"; 
import {
  AddCouponTitle,
  ManageOnlineStoreTitle,
} from "../../../../utils/Constant";
import CouponMain from "../../../../Component/Tools/ManageOnlineStore/ManageMyCoupon/CouponMain";

const AddCoupon = () => {
  
  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={AddCouponTitle} parent={ManageOnlineStoreTitle} />
      <Container className="card p-4" fluid>
          <CouponMain/>
      </Container>
    </div>
  );
};

export default AddCoupon;
