import { Card, Col } from 'reactstrap'
import { basicFloatSubTitle } from '../../../../../Data/Forms/FormsControl/BaseInput/BaseInput'
import { BasicFloatingInputControls } from '../../../../../utils/Constant'
import BasicFloatingInputControlForm from './BasicFloatingInputControlForm'
import CardHeaderCommon from '../../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const BasicFloatingInputControl = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={BasicFloatingInputControls} span={basicFloatSubTitle}/>
        <BasicFloatingInputControlForm />
      </Card>
    </Col>
  )
}

export default BasicFloatingInputControl