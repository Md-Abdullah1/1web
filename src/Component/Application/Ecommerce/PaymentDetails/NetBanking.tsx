import { Card, CardBody, Col, Form, Row } from 'reactstrap'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { AcHolderName, AccountNumber, EnterMobileNumber, IcfcCode, NetBankings, OtherDetails, Submit } from '../../../../utils/Constant'
import FormGroupCommon from './Common/FormGroupCommon'
import { Btn } from '../../../../AbstractElements'
import SelectCommon from './Common/SelectCommon'
import { emiBankSelect } from '../../../../Data/Application/Ecommerce/PaymentDetails'

const NetBanking = () => {
  return (
    <Col xl="4" lg="6" className="box-col-33">
      <Card>
        <CommonCardHeader title={NetBankings} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder={AcHolderName} formClass="col-12" />
              <FormGroupCommon type="text" placeholder={AccountNumber} formClass="col-12" />
              <SelectCommon size={1} data={emiBankSelect} selectClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder={IcfcCode} formClass="col-6" />
              <FormGroupCommon type="number" placeholder={EnterMobileNumber} formClass="col-12" />
              <FormGroupCommon type="text" placeholder={OtherDetails} formClass="col-12" />
              <Col xs="12">
                <Btn color="primary">{Submit}</Btn>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default NetBanking