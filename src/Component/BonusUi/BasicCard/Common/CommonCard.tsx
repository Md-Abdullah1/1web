import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Col } from 'reactstrap'
import { H3, P } from '../../../../AbstractElements'
import { CrocsTheme } from '../../../../utils/Constant'
import { CommonCardProp } from '../../../../Types/BonusUi/BonusUiTypes'

const CommonCard:React.FC<CommonCardProp>= ({ data }) => {
  return (
    <>
      <Col xl="4" sm={data.sm}>
        <Card className="height-equal">
          <CardHeader className={data.headerClass}>
            <H3 className={data.headingClass}>{data.title}</H3>
          </CardHeader>
          <CardBody className={data.bodyClass}>
            <H3 className="pb-2">{data.text}</H3>
            <P className="mb-0">{data.span}</P>
          </CardBody>
          <CardFooter className={data.footerClass}>
            <H3 className="mb-0 text-end">{CrocsTheme}</H3>
          </CardFooter>
        </Card>
      </Col>
    </>
  )
}

export default CommonCard