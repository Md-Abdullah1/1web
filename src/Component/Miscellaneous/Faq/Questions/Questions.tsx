import { Col, Row } from 'reactstrap'
import { H3 } from '../../../../AbstractElements'
import { QuickQuestions } from '../../../../utils/Constant'
import { Fragment } from 'react'
import AccordionCard from './AccordionCard'
import FaqRightSidebar from './FaqRightSidebar'
import { faqQuestionData } from '../../../../Data/Miscellaneous/Faq/Faq'

const Questions = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <H3 className="mb-0">{QuickQuestions}</H3>
      </div>
      <Row className="default-according style-1 faq-accordion">
        <Col xl="8" lg="6" md="7" className="xl-60">
          {faqQuestionData.map((item, i) => (
            <Fragment key={i}>
              {item.subTitle && (
                <div className="faq-title">
                  <H3>{item.subTitle}</H3>
                </div>
              )}
              {faqQuestionData[i].titles.map((item, id) => (
                <AccordionCard key={id} item={item} />
              ))}
            </Fragment>
          ))}
        </Col>
        <FaqRightSidebar />
      </Row>
    </Col>
  )
}

export default Questions