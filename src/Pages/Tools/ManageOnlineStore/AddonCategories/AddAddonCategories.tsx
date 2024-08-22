
import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  ManageOnlineStoreTitle,
  NewAddonCategory,
} from "../../../../utils/Constant"; 
import AddonCategoriesMain from "../../../../Component/Tools/ManageOnlineStore/AddonCategories/AddonCategoriesMain";
import Message from "../../../../Component/CommonMessage/Message";
const AddAddonCategories = () => {

  return (
    <div className="page-body">
      <Breadcrumbs
        mainTitle={NewAddonCategory}
        parent={ManageOnlineStoreTitle}
      />
      <Container className="card p-4" fluid>
          <Message message="Please at least one product and one branch to be able to use this form.”" />
          <AddonCategoriesMain/>
      </Container>
    </div>
  );
};

export default AddAddonCategories;
