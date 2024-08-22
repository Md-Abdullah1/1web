import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { UploadCoverLetterJob, UploadRecommendationsJob } from '../../../../utils/Constant'

const UploadFiles = () => {
  return (
    <Form className="theme-form">
      <Row>
        <Col xl="4">
          <FormGroup>
            <Label className="col-form-label pt-0" check>{UploadCoverLetterJob}:</Label>
            <Input type="file" />
          </FormGroup>
        </Col>
      
        
     
        <Col xl="4">
          <FormGroup className="mb-0">
            <Label className="col-form-label pt-0" check>{UploadRecommendationsJob}:</Label>
            <Input type="file" />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}

export default UploadFiles