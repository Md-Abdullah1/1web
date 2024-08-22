import { Card, CardBody, Col, Row } from 'reactstrap'
import { RadioButtonGroups } from '../../../../utils/Constant'
import StaticRadioButtonGroup from './StaticRadioButtonGroup'
import DynamicRadioButtonGroup from './DynamicRadioButtonGroup'
import { radioButtonGroupData } from '../../../../Data/Buttons/ButtonGroup'
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const RadioButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={RadioButtonGroups} span={radioButtonGroupData} />
        <CardBody className="btn-group-showcase">
          <Row>
            <StaticRadioButtonGroup />
            <DynamicRadioButtonGroup />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RadioButtonGroup