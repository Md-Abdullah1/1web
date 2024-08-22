import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import { BasicButtonGroups, Left, Middle, Right } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'
import CommonGroupButton from '../Common/CommonGroupButton'
import { buttonGroupData } from '../../../../Data/Buttons/ButtonGroup'
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const BasicButtonGroup = () => {
  return (
    <Col xs="12">
      <Card>
        <CardHeaderCommon headClass='card-no-border' title={BasicButtonGroups} />
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xl="4" md="6" sm="12">
              <ButtonGroup>
                <Btn color="primary">{Left}</Btn>
                <Btn color="primary">{Middle}</Btn>
                <Btn color="primary">{Right}</Btn>
              </ButtonGroup>
            </Col>
            <CommonGroupButton data={buttonGroupData} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BasicButtonGroup