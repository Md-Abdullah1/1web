import { Card, CardBody, Col } from 'reactstrap'
import { VerticalStyles } from '../../../../../utils/Constant'
import CommonCardFooter from '../Common/CommonCardFooter'
import VerticalStyleForm from './VerticalStyleForm'
import { verticalStyleData } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'
import CardHeaderCommon from '../../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const VerticalStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-12">
      <Card className="height-equal">
        <CardHeaderCommon title={VerticalStyles} span={verticalStyleData} />
        <CardBody>
          <VerticalStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="primary" color2="light" />
      </Card>
    </Col>
  )
}

export default VerticalStyle