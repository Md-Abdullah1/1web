import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import { Left, Middle, OutlineFlatButtons, Right } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'
import CommonGroupButton from '../Common/CommonGroupButton'
import { buttonGroupData } from '../../../../Data/Buttons/ButtonGroup'
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const OutlineFlatButton = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon headClass='card-no-border' title={OutlineFlatButtons} />
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xl="4" md="6" sm="12">
              <ButtonGroup className="btn-group-square">
                <Btn outline color="primary">{Left}</Btn>
                <Btn outline color="primary">{Middle}</Btn>
                <Btn outline color="primary">{Right}</Btn>
              </ButtonGroup>
            </Col>
            <CommonGroupButton data={buttonGroupData}  buttonClass="btn-group-square" outline={true} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlineFlatButton