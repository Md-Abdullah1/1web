import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import { FlatButtonGroups, Left, Middle, Right } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'
import CommonGroupButton from '../Common/CommonGroupButton'
import { buttonGroupData } from '../../../../Data/Buttons/ButtonGroup'
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const FlatButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={FlatButtonGroups} headClass='card-no-border' />
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xl="4" md="6" sm="12">
              <ButtonGroup className="btn-group-square">
                <Btn color="primary">{Left}</Btn>
                <Btn color="primary">{Middle}</Btn>
                <Btn color="primary">{Right}</Btn>
              </ButtonGroup>
            </Col>
            <CommonGroupButton data={buttonGroupData}  buttonClass="btn-group-square" />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FlatButtonGroup