import { ButtonGroup, Card, CardBody, Col, Row } from 'reactstrap'
import { Left, Middle, OutlineButtonGroups, Right } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'
import CommonGroupButton from '../Common/CommonGroupButton'
import { buttonGroupData } from '../../../../Data/Buttons/ButtonGroup'
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const OutlineButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon title={OutlineButtonGroups} headClass='card-no-border'/>
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xl="4" md="6" sm="12">
              <ButtonGroup>
                <Btn outline color="primary">{Left}</Btn>
                <Btn outline color="primary">{Middle}</Btn>
                <Btn outline color="primary">{Right}</Btn>
              </ButtonGroup>
            </Col>
            <CommonGroupButton data={buttonGroupData} outline={true} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlineButtonGroup