import { Card, Container, } from 'reactstrap';
import {  Home, RegistrationPlan} from '../../utils/Constant';
import PricingPlans from '../../Component/Pricing/PricingPlans';
import Breadcrumbs from "../../CommonElements/Breadcrumbs/Breadcrumbs";

const Pricing = () => {  

  return (
    <div className='page-body'>
      <Breadcrumbs mainTitle={RegistrationPlan} parent={Home} />
      <Container fluid>
          {/* <Row className='justify-content-center'>
            <Col md="8">
              <Logo className={`w-25`}/>
            </Col>
          </Row>             */}
          <Card className='pt-0'>
            <PricingPlans/>
          </Card>
      </Container>
    </div>
  )
}

export default Pricing;