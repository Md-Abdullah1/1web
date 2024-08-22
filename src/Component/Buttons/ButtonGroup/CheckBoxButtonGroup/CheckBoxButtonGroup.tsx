import { Card, CardBody, Col, Row } from 'reactstrap'
import { CheckBoxButtonGroups } from '../../../../utils/Constant'
import StaticCheckBoxButtonGroup from './StaticCheckBoxButtonGroup'
import DynamicCheckBoxButtonGroup from './DynamicCheckBoxButtonGroup'
import { checkboxButtonGroupData } from '../../../../Data/Buttons/ButtonGroup'
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const CheckBoxButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={CheckBoxButtonGroups} span={checkboxButtonGroupData} />
        <CardBody className="btn-group-showcase">
          <Row>
            <StaticCheckBoxButtonGroup />
            <DynamicCheckBoxButtonGroup />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CheckBoxButtonGroup