import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { ReferralText, ReferralTextB, ReferralTextC, Transactions } from '../../../../utils/Constant';
import { useState } from "react";
import { H3, H4, H5, H6, SVG } from '../../../../AbstractElements';
import DataTable from 'react-data-table-component';
import { ReferralsColumnData ,supportTicketData} from '../../../../Data/Tools/BrandSupportTools/ButtonActions';

export const referralactions = [
    {title:"User Dashboard", counter:0 , path:"dashboard/user-dashboard"},
    {title:"Purchases", counter:0 , path:"dashboard/my-sales"},
    {title:"Sales", counter:0 , path:"dashboard/my-sales"},
    {title:"Pyament Method", counter:0 , path:"user-dashboard/payment-methods/"},
    {title:"Withdrawls",  path:"dashboard/withdrawals"},
    {title:"Referrals", counter:0 , path:"dashboard/referrals"},
];
export const totalRevenueData = [
    {
      icon:"Revenue",
      amount:"$73,927",
      title:"Total Registered Users",
      arrowIcon:"arrow-chart-up",
      percentage:"+34%",
      chartClass:"earning-chart",
      id:"earning-chart"
    },
    {
      icon:"Sales",
      amount:"24k USD",
      title:"Total Transactions",
      arrowIcon:"arrow-chart",
      percentage:"-14%",
      classExtra:"up-sales",
      chartClass:"sales-chart",
      id:"sales-chart"
    },
    {
      icon:"Customer",
      amount:"62,828",
      title:"Total Earnings",
      arrowIcon:"arrow-chart",
      percentage:"-24%",
      classExtra:"total-customer",
      chartClass:"customer-chart",
      id:"total-customer-chart"
    },
  ]

const MyReferralsContainer = () => {
    const [toggleDelete, setToggleDelete] = useState(false);
    const [data, setData] = useState(supportTicketData); 
    const handleRowSelected =() =>{}
    return (
        <>
            <Card>
                <CardHeader>
                    {referralactions.map((item, index) =>(
                        <Link to={`${process.env.PUBLIC_URL}/${item.path}`} key={index}><span className='border rounded p-2 m-1 border-primary'>{item.title} {item.counter && item.counter >= 0 ? `(${item.counter})`:``}</span></Link>
                    ))}
                </CardHeader>
                <CardBody>
                    <p>{ReferralText}</p>
                    <p>{ReferralTextB}</p>
                    <p>{ReferralTextC}{`${process.env.PUBLIC_URL}`}</p>

                    <Row className='general-widget ps-4 pe-4 justify-content-center'>
                        <Col md="3" sm="12">
                            <div className='p-2 border total-sales'>
                                <div className='d-flex  mt-2'>
                                    <span>
                                    <SVG iconId={`Customer`} />
                                    </span>
                                    <div className=' ps-4'>
                                        <H5 >{`Total Registered Users`}</H5>
                                        <H4 className=''>0</H4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col  md="3" sm="12">
                            <div className='p-2 border'>
                                <div className='total-sales  mt-2'>
                                    <div className='d-flex'>
                                        <span>
                                        <SVG iconId={`Sales`} />
                                        </span>
                                        <div className=' ps-4'>
                                            <H5 >{`Total Transactions`}</H5>
                                            <H4 className=''>0</H4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="3" sm="12">
                            <div className='p-2 border total-sales'>
                                <div className='d-flex  mt-2'>
                                    <span>
                                    <SVG iconId={`Revenue`} />
                                    </span>
                                    <div className=' ps-4'>
                                        <H5 >{`Total Earnings`}</H5>
                                        <H4 className=''>0</H4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='pt-4'>
                        <Col>
                            <H3 className='pb-2'>{Transactions}</H3>
                            <DataTable className='custom-scrollbar border' columns={ReferralsColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}

export default MyReferralsContainer