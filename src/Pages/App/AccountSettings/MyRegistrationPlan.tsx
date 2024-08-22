import UserBanner from '../../../Component/App/User/UserBanner'
import { Card, CardBody, Col, Collapse, Container, Row } from 'reactstrap'
import React, {  useState, useEffect} from 'react'
import MyCurrentRegistrationPlan from '../../../Component/App/AccountSettings/MyCurrentRegistrationPlan/MyCurrentRegistrationPlan'
import DataTable, { TableColumn } from 'react-data-table-component';
import { Btn, H2, H5 } from '../../../AbstractElements';
import { AdditionalServices, PlanDetails, PlanSummary, MyRegistrationPlans, AccountSettings, MyCurrentPlan, OthersPlan } from '../../../utils/Constant';
import CardHeaderCommon from '../../../CommonElements/CardHeaderCommon/CardHeaderCommon';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { FaCheck } from 'react-icons/fa';
import { VscChromeClose } from 'react-icons/vsc';
import HeaderWithIcon from '../../../Component/Application/SocialApp/TimelineTab/LeftSideBar/HeaderWithIcon';
import CardHeaderCollapse from '../../../CommonElements/CardHeaderCommon/CardHeaderCollapse';
import { Link } from 'react-router-dom';

export const iDownloadedData = [
  {
    srno:1,
    orderId:"ORD-123",
    dailyPrice:"60.00",
    currentPrice:"5.00",
    totalOrderPrice:"10.00",
    paidPeriod:"No",
    subscriptionPlan:"-",
    discountPriceMNintyPercentDays:"-",
    discountPriceMOneEightyPercentDays:"-",
    paymentMode:"",
    paymentStatus:"",
    cancellationFeeFixed:5,
    cancellationFee:1000,
    accountCreated:false,
    renewedDate:"-",
    expirationDate:"-",
    name:"James",
    image:"user/5.jpg",
    email:"start@gmail.com",
    skill: 100,
    skillColor: "info",
  },
  {
    srno:2,
    orderId:"ORD-124",
    dailyPrice:"1200.00",
    currentPrice:"5.00",
    totalOrderPrice:"10.00",
    paidPeriod:"Yes",
    subscriptionPlan:"-",
    discountPriceMNintyPercentDays:"-",
    discountPriceMOneEightyPercentDays:"-",
    paymentMode:"",
    paymentStatus:"",
    cancellationFeeFixed:5,
    cancellationFee:1000,
    accountCreated:false,
    renewedDate:"-",
    expirationDate:"-",
    name:"James",
    image:"user/5.jpg",
    email:"start@gmail.com",
    skill: 100,
    skillColor: "danger",
  }
];

export interface DownloadDataType{
  id: number;
  srno:number;
  orderId:string;
  dailyPrice:string;
  currentPrice:string;
  totalOrderPrice:string;
  paidPeriod:string;
  subscriptionPlan:string;
  discountPriceMNintyPercentDays:string;
  discountPriceMOneEightyPercentDays:string;
  discountAnually:string;
  paymentMode:string;
  paymentStatus:string;
  cancellationFeeFixed:number;
  cancellationFee:number;
  accountCreated:boolean;
  renewedDate:string;
  expirationDate:string;  
}

export interface ImageDataProp{
  image:string;
  title:string
} 


export interface ActionButtonProps{
  action:number;
}

const ActionButtons: React.FC<ActionButtonProps> = ({action}) => {
  return(
      <div className="d-flex justify-content-between">
          <Btn size='sm' color='primary' className='mx-1 px-1'>
            <i className="fa fa-pencil" />
          </Btn>
          <Btn size='sm' color='success' className='mx-1 px-1'>
            <i className="fa fa-link" /> 
          </Btn>
          <Btn size='sm' color='danger' className='mx-1 px-1'>
            <i className="fa fa-trash" /> 
          </Btn>
      </div>
  );
}



export const TableHeadColumn = ({title}) => {
  return (
    <span style={{whiteSpace:'break-spaces'}}>{title}</span>
  );
}

export const iDownloadedColumns: TableColumn<DownloadDataType>[] =[
    {
      name: <TableHeadColumn title={`SR. No.`}/>,
      selector: (row) => row["srno"],
      sortable: true,
      center: true,
      width: "80px",
    },
    {
      name: <TableHeadColumn title={`Order ID`}/>,
      selector: (row) => row["orderId"],
      sortable: false,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Order Date`}/>,
      selector: (row) => row["currentPrice"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Expiration Date`}/>,
      selector: (row) => row["expirationDate"],
      sortable: true,
      center: true,
      width: "120px",
    },
    {
      name: <TableHeadColumn title={`Additional Service`}/>,
      selector: (row) => row["totalOrderPrice"],
      sortable: true,
      center: true,
      width: "120px",
    },
    {
      name: <TableHeadColumn title={`Current Price for 30 Days [USD $]`}/>,
      selector: (row) => row["currentPrice"],
      sortable: true,
      right: true,
      width: "120px",
    },
    {
      name: <TableHeadColumn title={`Total Order Price [USD $]`}/>,
      selector: (row) => row["totalOrderPrice"],
      sortable: true,
      right: true,
    },
    {
      name: <TableHeadColumn title={`Paid Period`}/>,
      selector: (row) => row["paidPeriod"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Applied Discount(%)`}/>,
      selector: (row) => row["subscriptionPlan"],
      sortable: true,
      center: true,
      width: "130px",
    },
    
    {
      name: <TableHeadColumn title={`Payment Mode`}/>,
      selector: (row) => row["paymentMode"],
      sortable: true,
      center: true,
      width: "120px",
    },

    {
      name: <TableHeadColumn title={`Payment Status`}/>,
      selector: (row) => row["paymentMode"],
      sortable: true,
      center: true,
      width: "120px",
    },
    
    {
      name: <TableHeadColumn title={`Renewed Date`}/>,
      selector: (row) => row["renewedDate"],
      sortable: true,
      center: true,
      width: "120px",
    },
    
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons action={1}/>,
      center: false,
    },
];


export const data ={
  plan:"Business",
  ndays:'500.00 USD $',
  tdays:'450.00 USD $/30 Days,',
  tdiscount:'(10% discount) If you pay 1350.00 USD $',
  etdays:'425.00 USD $/30 Days,',
  etdiscount:' (15% discount) If you pay 2550.00 USD $',
  anualdays:'400.00 USD $/30 Days,',
  anualdiscount:' (20% discount) If you pay 4800.00 USD $',
  followDiscount:'16%',
  manageStore:{
    active_branch:54,
    bulkBranchExcel:'check mark',
    publicContactInfo:'Red X'
  }
}


const MyRegistrationPlan = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [isAdditionalServiceOpen, setIsAdditionalServiceOpen] = useState(false);
  const [isPlanSummaryOpen, setIsPlanSummaryOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [isMyPlanOpen, setIsMyPlanOpen] = useState(false);

  const handleRowSelected =() =>{
    setSelectedRows([]);
    setToggleDelete(false);
  }
  
  useEffect(()=>{
    
  });

  return (
    <div className='page-body'>
        <Breadcrumbs mainTitle={MyRegistrationPlans} parent={AccountSettings} />
        <UserBanner/>
        <Container fluid>
          <Card key={`1`}>            
            <CardHeaderCollapse title={PlanSummary} isOpen={isPlanSummaryOpen} setIsOpen={setIsPlanSummaryOpen}/>
            <Collapse isOpen={isPlanSummaryOpen}> 
            <CardBody>
              <Row>
                <Col md="4" sm="4">
                  <Row>
                    <Col md="5" className='col-6'>Account Created  : </Col> <Col md="5" className='col-6'>1-July-2021</Col>
                    <Col md="5" className='col-6'>Plan Name  : </Col> <Col md="5" className='col-6'>Business</Col>
                    <Col md="5" className='col-6'>Account Country  : </Col><Col md="5" className='col-6'>India</Col>
                    <Col md="5" className='col-6'>Pay Period  : </Col><Col md="5" className='col-6'>1-July-2021</Col>
                    <Col md="5" className='col-6'>Days Left  : </Col><Col md="5" className='col-6'>21</Col>
                  </Row>
                </Col>
                <Col md="4" sm="4">
                  <Row>
                  <Col md="6" className='col-6'>Plan Type  : </Col> <Col md="5" className='col-6'>Personal</Col>
                  <Col md="6" className='col-6'>Branch Countries  : </Col> <Col md="5" className='col-6'>India</Col>
                  <Col md="6" className='col-6'>Expire Date  : </Col> <Col md="5" className='col-6'>1-July-2021</Col>
                  <Col md="6" className='col-6'>Status : </Col> <Col md="5" className='col-6'>Personal</Col>
                  <Col md="6" className='col-6'><Link to={`${process.env.PUBLIC_URL}/registration-plan-edit`}><Btn className='bg-primary col-12' >Edit Plan</Btn></Link></Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
            </Collapse>
          </Card>

          <Card key={`2`}>
            <CardHeaderCollapse title={AdditionalServices} isOpen={isAdditionalServiceOpen} setIsOpen={setIsAdditionalServiceOpen}/>
            <Collapse isOpen={isAdditionalServiceOpen}>
            <CardBody>
              <DataTable className='custom-scrollbar' columns={iDownloadedColumns} data={iDownloadedData} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
            </CardBody>
            </Collapse>
          </Card>

          <Card key={`3`}>
            <CardHeaderCollapse title={MyCurrentPlan} isOpen={isMyPlanOpen} setIsOpen={setIsMyPlanOpen}/>
            <Collapse isOpen={isMyPlanOpen}> 
            <CardBody >
            <Row className='ps-1'>
                <Col  md="12" sm="12" className='pt-1 justify-content-center'>
                  <Row className='border ps-1 border-bottom-0'>                     
                      <Col md="6" className='border-bottom p-2 fw-bold col-6'>Plan</Col>
                      <Col md="6" className='border-bottom p-2 fw-bold col-6'>{data.plan}</Col>
                      <Col md="6" className='p-2 col-6'>30 Days</Col>
                      <Col md="6" className='p-2 col-6'>{data.ndays}</Col>
                      <Col md="6" className='col-6'>90 Days</Col>
                      <Col md="6" className='col-6'>{data.tdays}<br/>{data.tdiscount}</Col>
                      <Col md="6" className='col-6'>180 Days</Col>
                      <Col md="6" className='col-6'>{data.etdays}<br/>{data.etdiscount}</Col>
                      <Col md="6" className='col-6'>Annually</Col>
                      <Col md="6" className='col-6'>{data.anualdays}<br/>{data.anualdiscount}</Col>                        
                  </Row>
                  <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="12" className='fw-bold border-top border-bottom'>Follower Discount</Col>
                  </Row>
                  <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="6" className='col-8'>Instant Discount for any purchase from selected verified vendors you follow</Col>
                    <Col md="6" className='col-4'>{data.followDiscount}</Col>
                  </Row>
                  <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="12" className='fw-bold border-top border-bottom'>Manage Store</Col>
                  </Row>
                  <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="6" className='col-8'>FREE active branches (monthly)</Col>
                    <Col md="6" className='col-4'>{data.manageStore.active_branch}</Col>
                    <Col md="6" className='col-8'>Bulk Import branches with an excel file</Col>
                    <Col md="6" className='col-4'>{data.manageStore.bulkBranchExcel}</Col>
                    <Col md="6" className='col-8'>Public Contact Info</Col>
                    <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                    <Col md="6" className='col-8'>FREE Insertion and Listing of Products or Services (Monthly)</Col>
                    <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                    <Col md="6" className='col-8'>(ZERO Commission Sales) Number of sales without commission  (monthly)</Col>
                    <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                    <Col md="6" className='col-8'>Maximum Total Sale Amount without commission  (monthly)</Col>
                    <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                    <Col md="6" className='col-8'>Bulk Import products or services with an excel file</Col>
                    <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                    <Col md="6" className='col-8'>FREE active addons (monthly)</Col>
                    <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                    <Col md="6" className='col-8'>Bulk Import add-on with an excel file</Col>
                    <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                    <Col md="6" className='col-8'>FREE Coupons Monthly Number of </Col>
                    <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                  </Row>
                  <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="12" className='fw-bold border-top border-bottom'>Brand Support Tools</Col>
                  </Row>
                  <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="6" className='col-8'>Number of FREE Activities you can add to  Attendance System  (monthly)</Col>
                    <Col md="6" className='col-4'>{54}</Col>
                    <Col md="6" className='col-8'>Maximum number of FREE Supervisors per Activity</Col>
                    <Col md="6" className='col-4'>{654}</Col>
                    <Col md="6" className='col-8'>Number of FREE Questions in your Surveys, Quizzes and Tests  (monthly)</Col>
                    <Col md="6" className='col-4'>{`-`}</Col>
                    <Col md="6" className='col-8'>Import Bulk Questions Number of FREE Photo Contests (monthly)</Col>
                    <Col md="6" className='col-4'>{54}</Col>
                    <Col md="6" className='col-8'>Number of customers’ wishes you can navigate for FREE</Col>
                    <Col md="6" className='col-4'>{546}</Col>
                    <Col md="6" className='col-8'>Number of FREE Public Posts  (monthly)</Col>
                    <Col md="6" className='col-4'>{654}</Col>
                    <Col md="6" className='col-8'>Number of FREE Keyword and Statistics Searches (monthly)</Col>
                    <Col md="6" className='col-4'>{54}</Col>
                  </Row>
                  <Row className='border ps-1 border-top-0 border-bottom-0'>
                    <Col md="12" className='fw-bold border-top border-bottom'>Recruiting and Human Resources</Col>
                  </Row>
                  <Row className='border ps-1 border-top-0 '>
                    <Col md="6" className='col-8'>Number of Your Active Resumes (monthly)</Col>
                    <Col md="6" className='col-4'>{465}</Col>
                    <Col md="6" className='col-8'>Number of Resumes you can Navigate for FREE (monthly)</Col>
                    <Col md="6" className='col-4'>{654}</Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
            </Collapse>
          </Card>

          {/* <Card key={`4`}>
            <CardHeaderCollapse title={OthersPlan} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Collapse isOpen={isOpen}> 
            <CardBody>
            <MyCurrentRegistrationPlan/>
            </CardBody>
            </Collapse>
          </Card> */}
            
        </Container>
    </div>
  )
}

export default MyRegistrationPlan