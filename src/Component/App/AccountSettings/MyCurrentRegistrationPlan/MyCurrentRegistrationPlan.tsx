import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap'
import { H2, H3, H5 } from '../../../../AbstractElements'
import { VscChromeClose } from 'react-icons/vsc';
import { FaCheck } from 'react-icons/fa';
import { AccountCountry, PlanDetails, RegistrationType, Selected } from '../../../../utils/Constant';
import { Typeahead } from 'react-bootstrap-typeahead';
import {useEffect , useState} from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';

export const  planData = [{},{},{},{},{},{},{},{},{},{},{},{},{}];

export const packgaeData ={
    plan:"Business",
    ndays:'500.00 USD $',
    tdays:'450.00 USD $/30 Days,  If you pay 1350.00 USD $',
    etdays:'425.00 USD $/30 Days, If you pay 2550.00 USD $',
    anualdays:'400.00 USD $/30 Days, If you pay 4800.00 USD $',
    followDiscount:'16%',
    manageStore:{
      active_branch:54,
      bulkBranchExcel:'check mark',
      publicContactInfo:'Red X'
    }
}

export const stateOfUsa = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",]

export const multiWithHeaderData = [
    {name:"India"},
    {name:"US"},
    {name:"Canada"}
  ];

  export interface PlanDataType{
    id:number;
    package:string;
    price:number;
    content_life_cycle_mgt:boolean;
    live_tracking:boolean;
    email_marketing:boolean;
  }

  // Sample data
  const data:PlanDataType[] = [
    { id: 1, package: 'Basic', price: 100, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,  },
    { id: 2, package: 'Pro', price: 200, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 3, package: 'Premium', price: 300, content_life_cycle_mgt: true, live_tracking:false , email_marketing:true,},
    { id: 4, package: 'Business', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 5, package: 'Pro 2', price: 300, content_life_cycle_mgt: true, live_tracking:false , email_marketing:true,},
    { id: 6, package: 'Business 2', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 7, package: 'Pro 3', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 8, package: 'Business 3', price: 300, content_life_cycle_mgt: true, live_tracking:false , email_marketing:true,},
    { id: 9, package: 'Pro 4', price: 300, content_life_cycle_mgt: true, live_tracking:false , email_marketing:true,},
    { id: 10, package: 'Business 4', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 11, package: 'Pro 5', price: 300, content_life_cycle_mgt: true, live_tracking:false , email_marketing:true,},
    { id: 12, package: 'Business 5', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 13, package: 'Pro 6', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
    { id: 15, package: 'Business 6', price: 300, content_life_cycle_mgt: true , live_tracking:false , email_marketing:true,},
  ];

const MyCurrentRegistrationPlan = () => {
    const [isMobile, setIsMobile] = useState(false);
    const groupedData = data.reduce((acc, item) => {
        if (!acc[item.package]) {
          acc[item.package] = [];
        }
        acc[item.package].push(item);
        return acc;
      }, {});

      const handleResize = () => {
        console.log("inner widht"+window.innerWidth);
        setIsMobile(window.innerWidth > 415 ? false : true);
      }

      useEffect(()=>{      
        console.log("use effect call"+window.innerWidth);  
        setIsMobile(window.innerWidth > 415 ? false : true);
        window.addEventListener("resize", handleResize);
      },[]);
  return (
    <Card>
        {/* <CardHeader>{`Plan Summery`}</CardHeader> */}
        <CardBody className='pt-0 ps-0'>
            <Row>
                <Col md="12">
                    <Row className='pt-1'>
                        <Col md="4">
                            <FormGroup>
                                <Label>{AccountCountry}<span className="font-danger">*</span></Label>
                                {/* <Input type='select' className="btn-square form-select">
                                <option>{'Select'}</option>
                                <option>{'Germany'}</option>
                                <option>{'Canada'}</option>
                                <option>{'Usa'}</option>
                                <option>{'Aus'}</option>
                                </Input> */}
                                <Typeahead options={stateOfUsa} placeholder="States of USA" id="Basic TypeAhead"/>
                            </FormGroup>
                        </Col>
                        <Col md="4">
                            <FormGroup>
                                <Label>{RegistrationType}<span className="font-danger">*</span></Label>
                                <Typeahead options={multiWithHeaderData} multiple clearButton placeholder={`${Selected} ${RegistrationType}`} labelKey="name" id="selectTwo" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='ps-0'>
                
                
            {isMobile  ? (
            <Col md="12" className='d-flex'  style={{ overflowX:"auto"}}>
            <div className='auto text-nowrap px-4 p-2'>
                <Row className='border'>
                    <Col md="12" className='border-bottom p-2 fw-bold'>Plan</Col>
                    <Col md="12" className='border-bottom p-2 fw-bold'>30 Days</Col>
                    <Col md="12">90 Days/10% Discount</Col>
                    <Col md="12">180 Days/15% Discount</Col>
                    <Col md="12">Annually/20% Discount</Col>
                </Row>
                <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="12" className='fw-bold border-top border-bottom'>Follower Discount</Col>
                </Row>
                <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="12" className='' style={{WebkitLineClamp:2, whiteSpace:'break-spaces'}}>Instant Discount for any purchase from selected verified vendors you follow</Col>                    
                </Row>
                <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="12" className='fw-bold border-top border-bottom'>Manage Store</Col>
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
                <Col md="12" className='fw-bold border-top border-bottom'>Brand Support Tools</Col>
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
                    <Col md="12" className='fw-bold border-top border-bottom'>Recruiting and Human Resources</Col>
                </Row>
                <Row className='border ps-1 border-top-0 '>
                    <Col md="12" className='plan-text-line2'>Number of Your Active Resumes (monthly)</Col>
                    <Col md="12" className='plan-text-line2' style={{WebkitLineClamp:2, whiteSpace:'break-spaces'}}>Number of Resumes you can Navigate for FREE (monthly)</Col>
                </Row>
            </div>
           
            {/* <div className='d-flex' style={{overflowX : 'auto'}}> */}
            {Object.keys(groupedData).map((pkg) => (
                <div key={pkg} className={`border p-2 text-center ${pkg == "Premium"? "bg-primary text-white":""}`}>
                                
                <ul>
                    {groupedData[pkg].map((item) => (
                        <li key={item.id}>
                            {/* <div>{item.price}</div> */}
                            
                            <Row className=' ps-1 border-bottom-0'>                     
                                <Col md="12" className='border-bottom p-2 fw-bold plan-text-line2'>{packgaeData.plan}</Col>
                                <Col md="12" className='border-bottom p-2 text-nowrap'>{packgaeData.ndays}</Col>
                                <Col md="12" className='plan-text-line2 text-nowrap'>{packgaeData.tdays}</Col>
                                <Col md="12" className='plan-text-line2 text-nowrap'>{packgaeData.etdays}</Col>
                                <Col md="12" className='plan-text-line2 text-nowrap'>{packgaeData.anualdays}</Col>                        
                            </Row>
                            <Row className='ps-1 border-top-0 border-bottom-0'>
                                <Col md="12" className='fw-bold border-top border-bottom'>Follower Discount</Col>
                            </Row>
                            <Row className='ps-1 border-top-0 border-bottom-0'>
                                <Col md="12" className='plan-text-line2 plan-text-height3' >{packgaeData.followDiscount}</Col>
                            </Row>
                            <Row className='ps-1 border-top-0 border-bottom-0'>
                                <Col md="12" className='fw-bold border-top border-bottom'>Manage Store</Col>
                            </Row>
                            <Row className='ps-1 border-top-0 border-bottom-0'>
                                <Col md="12">{packgaeData.manageStore.active_branch}</Col>
                                <Col md="12">{packgaeData.manageStore.bulkBranchExcel}</Col>
                                <Col md="12">{packgaeData.manageStore.publicContactInfo}</Col>
                                <Col md="12" className='plan-text-line2 plan-text-height3'>{packgaeData.manageStore.publicContactInfo}</Col>
                                <Col md="12" className='plan-text-line2 plan-text-height3'>{packgaeData.manageStore.publicContactInfo}</Col>
                                <Col md="12" className='plan-text-line2 plan-text-height3'>{packgaeData.manageStore.publicContactInfo}</Col>
                                <Col md="12">{packgaeData.manageStore.publicContactInfo}</Col>
                                <Col md="12">{packgaeData.manageStore.publicContactInfo}</Col>
                                <Col md="12">{packgaeData.manageStore.publicContactInfo}</Col>
                                <Col md="12" className='plan-text-line2 plan-text-height3'>{packgaeData.manageStore.publicContactInfo}</Col>
                            </Row>
                            <Row className='ps-1 border-top-0 border-bottom-0'>
                                <Col md="12" className='fw-bold border-top border-bottom'>Brand Support Tools</Col>
                            </Row>
                            <Row className='ps-1 border-top-0 border-bottom-0'>
                                <Col md="12" className='plan-text-height3'>{54}</Col>
                                <Col md="12" className='plan-text-height'>{654}</Col>
                                <Col md="12" className='plan-text-height3'>{`-`}</Col>
                                <Col md="12" className='plan-text-height'>{54}</Col>
                                <Col md="12" className='plan-text-height'>{546}</Col>
                                <Col md="12" className='plan-text-height'>{654}</Col>
                                <Col md="12" className='plan-text-height'>{54}</Col>
                            </Row>
                            <Row className='ps-1 border-top-0 border-bottom-0'>
                                <Col md="12" className='fw-bold border-top border-bottom'>Recruiting and Human Resources</Col>
                            </Row>
                            <Row className='ps-1 border-top-0 '>
                                <Col md="12" className='plan-text-height'>{465}</Col>
                                <Col md="12" className='plan-text-height'>{654}</Col>
                            </Row>
                        </li>
                    ))}
                </ul>
                </div>
            ))}
            {/* </div> */}
            </Col>
            ):(
            <>
            <Col md="4">
            <div className='auto text-nowrap px-4 p-2'>
                <Row className='border ps-1'>
                    <Col md="12" className='border-bottom p-2 fw-bold'>Plan</Col>
                    <Col md="12" className='border-bottom p-2 fw-bold'>30 Days</Col>
                    <Col md="12">90 Days/10% Discount</Col>
                    <Col md="12">180 Days/15% Discount</Col>
                    <Col md="12">Annually/20% Discount</Col>
                </Row>
                <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="12" className='fw-bold border-top border-bottom'>Follower Discount</Col>
                </Row>
                <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="12" className='' style={{WebkitLineClamp:2, whiteSpace:'break-spaces'}}>Instant Discount for any purchase from selected verified vendors you follow</Col>                    
                </Row>
                <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="12" className='fw-bold border-top border-bottom'>Manage Store</Col>
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
                <Col md="12" className='fw-bold border-top border-bottom'>Brand Support Tools</Col>
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
                    <Col md="12" className='fw-bold border-top border-bottom'>Recruiting and Human Resources</Col>
                </Row>
                <Row className='border ps-1 border-top-0 '>
                    <Col md="12" className='plan-text-line2'>Number of Your Active Resumes (monthly)</Col>
                    <Col md="12" className='plan-text-line2' style={{WebkitLineClamp:2, whiteSpace:'break-spaces'}}>Number of Resumes you can Navigate for FREE (monthly)</Col>
                </Row>
                
            </div>
            </Col> 
            <Col md="8" >
               <Row>
                    <Col md="12" className='d-flex w-100'  style={{ overflowX:"scroll", scrollbarWidth:'initial', scrollbarColor:'#000'}}>
                    <div className='d-flex w-auto'>
                    {Object.keys(groupedData).map((pkg) => (
                        <div key={pkg} className={`border p-2 mx-2 text-center ${pkg == "Premium"? "bg-primary text-white":""}`}>                      
                        <ul>
                            {groupedData[pkg].map((item) => (
                            <li key={item.id}>
                                {/* <div>{item.price}</div> */}
                               
                                <Row className=' ps-1 border-bottom-0'>                     
                                    <Col md="12" className='border-bottom p-2 fw-bold plan-text-line2'>{packgaeData.plan}</Col>
                                    <Col md="12" className='border-bottom p-2 text-nowrap'>{packgaeData.ndays}</Col>
                                    <Col md="12" className='plan-text-line2 text-nowrap'>{packgaeData.tdays}</Col>
                                    <Col md="12" className='plan-text-line2 text-nowrap'>{packgaeData.etdays}</Col>
                                    <Col md="12" className='plan-text-line2 text-nowrap'>{packgaeData.anualdays}</Col>                        
                                </Row>
                                <Row className='ps-1 border-top-0 border-bottom-0'>
                                    <Col md="12" className='fw-bold border-top border-bottom'>Follower Discount</Col>
                                </Row>
                                <Row className='ps-1 border-top-0 border-bottom-0'>
                                    <Col md="12" className='plan-text-line2 plan-text-height' >{packgaeData.followDiscount}</Col>
                                </Row>
                                <Row className='ps-1 border-top-0 border-bottom-0'>
                                    <Col md="12" className='fw-bold border-top border-bottom'>Manage Store</Col>
                                </Row>
                                <Row className='ps-1 border-top-0 border-bottom-0'>
                                    <Col md="12">{packgaeData.manageStore.active_branch}</Col>
                                    <Col md="12">{packgaeData.manageStore.bulkBranchExcel}</Col>
                                    <Col md="12">{packgaeData.manageStore.publicContactInfo}</Col>
                                    <Col md="12" className='plan-text-height'>{packgaeData.manageStore.publicContactInfo}</Col>
                                    <Col md="12" className='plan-text-height'>{packgaeData.manageStore.publicContactInfo}</Col>
                                    <Col md="12" className='plan-text-height'>{packgaeData.manageStore.publicContactInfo}</Col>
                                    <Col md="12">{packgaeData.manageStore.publicContactInfo}</Col>
                                    <Col md="12">{packgaeData.manageStore.publicContactInfo}</Col>
                                    <Col md="12">{packgaeData.manageStore.publicContactInfo}</Col>
                                    <Col md="12">{packgaeData.manageStore.publicContactInfo}</Col>
                                </Row>
                                <Row className='ps-1 border-top-0 border-bottom-0'>
                                    <Col md="12" className='fw-bold border-top border-bottom'>Brand Support Tools</Col>
                                </Row>
                                <Row className='ps-1 border-top-0 border-bottom-0'>
                                    <Col md="12" className='plan-text-height'>{54}</Col>
                                    <Col md="12">{654}</Col>
                                    <Col md="12" className='plan-text-height'>{`-`}</Col>
                                    <Col md="12" className='plan-text-height'>{54}</Col>
                                    <Col md="12">{546}</Col>
                                    <Col md="12">{654}</Col>
                                    <Col md="12" className='plan-text-height'>{54}</Col>
                                </Row>
                                <Row className='ps-1 border-top-0 border-bottom-0'>
                                    <Col md="12" className='fw-bold border-top border-bottom'>Recruiting and Human Resources</Col>
                                </Row>
                                <Row className='ps-1 border-top-0 '>
                                    <Col md="12">{465}</Col>
                                    <Col md="12" className='plan-text-height'>{654}</Col>
                                </Row>
                            </li>
                            ))}
                        </ul>
                        </div>
                    ))}
                    </div>
                    </Col>
                </Row>
            </Col>  
            </>                
            )}
            </Row>
        </CardBody>
    </Card>
  )
}

export default MyCurrentRegistrationPlan