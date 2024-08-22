import { Fragment } from 'react'
import { Card, CardBody, Col, Input, Label } from 'reactstrap'
import { RadioChecked, RadioToggleButton } from '../../../../../utils/Constant'
import { radioToggleData, radioToggleDataList } from '../../../../../Data/Forms/FormsControl/RadioCheckbox/RadioCheckbox'
import CardHeaderCommon from '../../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const RadioToggleButtons = () => {
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={RadioToggleButton} span={radioToggleData} />
        <CardBody className="common-flex main-radio-toggle custom-radio-buttons">
          <Input className="btn-check radio-light-secondary" id="option1" type="radio" name="options" defaultChecked />
          <Label className="btn list-light-secondary" for='option1' check>
            {RadioChecked}
          </Label>
          {radioToggleDataList.map(({ id, text, disabled }, index) => (
            <Fragment key={index}>
              <Input className="btn-check radio-light-secondary" id={id} type="radio" name="options" disabled={disabled} />
              <Label for={id} className="btn list-light-secondary" check>
                {text}
              </Label>
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default RadioToggleButtons