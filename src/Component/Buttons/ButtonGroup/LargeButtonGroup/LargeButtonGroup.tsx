import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import { LargeButtonGroups, Left, Middle, Right } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'
import CommonGroupButton from '../Common/CommonGroupButton'
import { buttonGroupData } from '../../../../Data/Buttons/ButtonGroup'
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const LargeButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={LargeButtonGroups} headClass='card-no-border'/>
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xl="4" md="6" sm="12">
              <ButtonGroup>
                <Btn size="lg" color="primary">{Left}</Btn>
                <Btn size="lg" color="primary">{Middle}</Btn>
                <Btn size="lg" color="primary">{Right}</Btn>
              </ButtonGroup>
            </Col>
            <CommonGroupButton data={buttonGroupData} size="lg"  />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LargeButtonGroup