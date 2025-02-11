import { ButtonGroup, Card, CardBody, Col } from 'reactstrap'
import { Buttons, VerticalGroupButton } from '../../../../utils/Constant'
import { Btn } from '../../../../AbstractElements'
import CommonDropDown from './Common/CommonDropDown'
import { verticalButtonGroup } from '../../../../Data/Buttons/ButtonGroup'
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const Vertical = () => {
  return (
    <Col lg="6">
      <Card className="height-equal custom-nesting-dropdown">
        <CardHeaderCommon title={VerticalGroupButton} span={verticalButtonGroup} headClass='card-no-border' />
        <CardBody className="btn-group-wrapper">
          <ButtonGroup vertical>
            <Btn color="primary">{Buttons}</Btn>
            <Btn color="secondary">{Buttons}</Btn>
           <CommonDropDown color="success" />
            <Btn color="info">{Buttons}</Btn>
            <Btn color="warning">{Buttons}</Btn>
            <CommonDropDown color="danger" />
            <CommonDropDown color="light" dark />
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Vertical