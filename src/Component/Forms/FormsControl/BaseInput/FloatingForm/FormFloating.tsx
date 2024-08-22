import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { CheckMeOut, EmailAddress, Password, SignIn } from '../../../../../utils/Constant'
import { Btn } from '../../../../../AbstractElements'

const FormFloating = () => {
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="floating-wrapper custom-floating-wrapper">
      <Row className='g-3'>
        <Col xs="12">
          <FormGroup floating>
            <Input type="email"/>
            <Label>{EmailAddress}</Label>
          </FormGroup>
        </Col>
        <Col xs="12" className="mt-2">
          <FormGroup floating>
            <Input type="password" autoComplete=''/>
            <Label>{Password}</Label>
          </FormGroup>
        </Col>
        <Col xs="12" className="mt-0">
          <FormGroup check className="checkbox-checked">
            <Input type="checkbox" id='checkMeOut1'/>
            <Label for='checkMeOut1' check>{CheckMeOut}</Label>
          </FormGroup>
        </Col>
        <Col xs="12">
          <Btn color="primary">
            {SignIn}
          </Btn>
        </Col>
      </Row>
    </Form>
  )
}

export default FormFloating