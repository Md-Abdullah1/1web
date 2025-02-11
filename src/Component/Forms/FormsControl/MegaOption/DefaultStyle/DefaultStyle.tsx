import { Card, CardBody, Col } from 'reactstrap'
import { DefaultStyleMegaOptions } from '../../../../../utils/Constant'
import DefaultStyleForm from './DefaultStyleForm'
import CommonCardFooter from '../Common/CommonCardFooter'
import { megaOptionDefaultData } from '../../../../../Data/Forms/FormsControl/MegaOption/MegaOption'
import CardHeaderCommon from '../../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const DefaultStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CardHeaderCommon title={DefaultStyleMegaOptions} span={megaOptionDefaultData} />
        <CardBody className="megaoptions-border-space-sm">
          <DefaultStyleForm />
        </CardBody>
        <CommonCardFooter footerClass='text-end' color1='primary' color2='light'/>
      </Card>
    </Col>
  )
}

export default DefaultStyle