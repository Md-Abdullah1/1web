import { Card, CardBody, Col } from 'reactstrap'
import { NestingButton } from '../../../../utils/Constant'
import StaticNesting from './StaticNesting'
import DynamicNesting from './DynamicNesting'
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'
import { nestingData } from '../../../../Data/Buttons/ButtonGroup'

const Nesting = () => {
  return (
    <>
      <Col lg="6">
        <Card className="height-equal custom-nesting">
          <CardHeaderCommon title={NestingButton} span={nestingData} />
          <CardBody className="btn-group-wrapper">
            <StaticNesting />
            <DynamicNesting />
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default Nesting