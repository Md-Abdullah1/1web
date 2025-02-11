import { Card, CardBody, Col } from 'reactstrap'
import { SolidBorderStyles } from '../../../../../utils/Constant'
import CommonCardFooter from '../Common/CommonCardFooter'
import SolidBorderStyleForm from './SolidBorderStyleForm'
import { solidBorderStyleData } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'
import CardHeaderCommon from '../../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const SolidBorderStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={SolidBorderStyles} span={solidBorderStyleData} />
        <CardBody>
          <SolidBorderStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="primary" color2="light"/>
      </Card>
    </Col>
  )
}

export default SolidBorderStyle