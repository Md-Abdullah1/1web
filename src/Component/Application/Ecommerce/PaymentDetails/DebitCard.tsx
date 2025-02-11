import React from 'react'
import { Card, CardBody, Col, Form, FormGroup, Label, Row } from 'reactstrap'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import { CVC, CVVNumber, CardNumber, DebitCards, ExpirationDate, FullNameHere, Submit } from '../../../../utils/Constant'
import FormGroupCommon from './Common/FormGroupCommon'
import SelectCommon from './Common/SelectCommon'
import { Btn } from '../../../../AbstractElements'
import { debitMonthSelect, debitYearSelect } from '../../../../Data/Application/Ecommerce/PaymentDetails'

const DebitCard = () => {
  return (
    <Col xl="4" lg="6" className="box-col-33 debit-card">
      <Card>
        <CommonCardHeader title={DebitCards} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form e-commerce-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder={FullNameHere} formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder={CardNumber} formClass="col-6" />
              <FormGroupCommon type="text" placeholder={CVVNumber} formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder={CVC} formClass="col-6" />
              <FormGroup>
                <Col xs="12">
                  <Label className="col-form-label" check>{ExpirationDate}</Label>
                </Col>
              </FormGroup>
              <SelectCommon size={1} data={debitMonthSelect} selectClass="col-6 p-r-0" />
              <SelectCommon size={1} data={debitYearSelect} selectClass="col-6" />
            </Row>
            <Col xs="12">
              <Btn color="primary">{Submit}</Btn>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DebitCard