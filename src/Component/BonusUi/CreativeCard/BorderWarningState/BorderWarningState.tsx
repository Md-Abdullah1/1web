import { Card, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { WarningBorderState } from '../../../../utils/Constant'
import { borderWarningData } from '../../../../Data/BonusUi/CreativeCard/CreativeCard'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'

const BorderWarningState = () => {
  return (
    <Col xxl="4" md="4">
      <Card className="height-equal custom-list-group">
        <CardHeaderCommon headClass="border-l-warning border-3 pb-0" title={WarningBorderState} span={borderWarningData} />
        <CardBody>
          <ListGroup numbered>
            <ListGroupItem className="txt-primary fw-bold">known for delivery of useful and usable solutions</ListGroupItem>
            <ListGroupItem className="txt-danger fw-bold">Solve your problem with us</ListGroupItem>
            <ListGroupItem className="txt-success fw-bold">Certified Professionals</ListGroupItem>
            <ListGroupItem className="txt-warning fw-bold">Growth-Driven</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BorderWarningState