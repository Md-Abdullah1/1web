import React from 'react'
import { Col, Row } from 'reactstrap';

const StaticPlanData = (staticData:any) => {
    const planData = staticData.staticData;
    // console.log(JSON.stringify(staticData.staticData))
    return (
        <div className='auto text-nowrap px-4 p-2'>
            <Row className='border border-bottom-0'>
                <Col md="12" className='border-bottom p-2 fw-bold'>{planData.plan_name}</Col>
                {Object.keys(planData.pricings).map((item, index)=>(
                    <Col md="12" className='plan-text-height p-2 mx-2' key={index}>{planData.pricings[item]}</Col>
                ))}
                <Col md="12" style={{minHeight:'2.5rem'}}></Col>
            </Row>
            {planData.details.map((item, index)=>(
                <div key={index}>
                <Row className='ps-1 border'>
                    <Col md="12" className='fw-bold  py-1 '>{item.heading}</Col>
                </Row>
                <Row className='border ps-1 border-top-0 border-bottom-0'>
                {Object.keys(item.sub_headings).map((sub_item, i_index)=>(
                    <Col md="12" className='' style={{WebkitLineClamp:2, whiteSpace:'break-spaces'}} key={i_index}>{item.sub_headings[sub_item]}</Col>
                ))}
                </Row>
                </div>
            ))}
            <hr/>
            {/* <Row className='border ps-1 border-top-0 border-bottom-0'>
                <Col md="12" className='' style={{WebkitLineClamp:2, whiteSpace:'break-spaces'}}>Instant Discount for any purchase from selected verified vendors you follow</Col>
            </Row>
            <Row className='border ps-1 border-top-0 border-bottom-0'>
                <Col md="12" className='fw-bold border-top border-bottom py-1'>Manage Store</Col>
            </Row>
            <Row className='border ps-1 border-top-0 border-bottom-0'>
                <Col md="12" className='plan-text-line2'>FREE active branches (monthly)</Col>
                <Col md="12" className='plan-text-line2'>Bulk Import branches with an excel file</Col>
                <Col md="12" className='plan-text-line2'>Public Contact Info</Col>
                <Col md="12" className='plan-text-line2'>FREE Insertion and Listing of Products or Services (Monthly)</Col>
                <Col md="12" className='plan-text-line2' style={{WebkitLineClamp:2, whiteSpace:'break-spaces'}}>(ZERO Commission Sales) Number of sales without commission  (monthly)</Col>
                <Col md="12" className='plan-text-line2'>Maximum Total Sale Amount without commission  (monthly)</Col>
                <Col md="12" className='plan-text-line2'>Bulk Import products or services with an excel file</Col>
                <Col md="12" className='plan-text-line2'>FREE active addons (monthly)</Col>
                <Col md="12" className='plan-text-line2'>Bulk Import add-on with an excel file</Col>
                <Col md="12" className='plan-text-line2'>FREE Coupons Monthly Number of </Col>
            </Row>
            <Row className='border ps-1 border-top-0 border-bottom-0'>
            <Col md="12" className='fw-bold border-top border-bottom py-1'>Brand Support Tools</Col>
            </Row>
            <Row className='border ps-1 border-top-0 border-bottom-0'>
                <Col md="12" className='plan-text-line2' style={{WebkitLineClamp:2, whiteSpace:'break-spaces'}}>Number of FREE Activities you can add to  Attendance System  (monthly)</Col>
                <Col md="12" className='plan-text-line2'>Maximum number of FREE Supervisors per Activity</Col>
                <Col md="12" className='plan-text-line2' style={{WebkitLineClamp:2, whiteSpace:'break-spaces'}}>Number of FREE Questions in your Surveys, Quizzes and Tests  (monthly)</Col>
                <Col md="12" className='plan-text-line2' style={{WebkitLineClamp:2, whiteSpace:'break-spaces'}}>Import Bulk Questions Number of FREE Photo Contests (monthly)</Col>
                <Col md="12" className='plan-text-line2'>Number of customers’ wishes you can navigate for FREE</Col>
                <Col md="12" className='plan-text-line2'>Number of FREE Public Posts  (monthly)</Col>
                <Col md="12" className='plan-text-line2'>Number of FREE Keyword and Statistics Searches (monthly)</Col>
            </Row>
            <Row className='border ps-1 border-top-0 border-bottom-0'>
                <Col md="12" className='fw-bold border-top border-bottom py-1'>Recruiting and Human Resources</Col>
            </Row>
            <Row className='border ps-1 border-top-0 '>
                <Col md="12" className='plan-text-line2'>Number of Your Active Resumes (monthly)</Col>
                <Col md="12" className='plan-text-line2' style={{WebkitLineClamp:2, whiteSpace:'break-spaces'}}>Number of Resumes you can Navigate for FREE (monthly)</Col>
            </Row> */}
        </div>     
    )
}

export default StaticPlanData