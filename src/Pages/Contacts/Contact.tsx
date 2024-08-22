import { Container } from "reactstrap";
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";
import { ContactTitle } from "../../utils/Constant"; 
import ContactsMain from "../../Component/Contacts/ContactsMain";

const Contact = () => { 

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={ContactTitle} parent={"Home"} />
      <Container className="card p-4" fluid>
          <ContactsMain/>
      </Container>
    </div>
  );
};

export default Contact;
