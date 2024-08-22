import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { useAppSelector } from '../../ReduxToolkit/Hooks';
import MobileColData from './MobileColData';

const DynamicPlanData = (dynamicData:any) => {
    const { mobileView } = useAppSelector((state) => state.layout);
    const planData = dynamicData.dData;
    const pkg = `tetset`;
    return (
        <div>
            {planData.map((item, index)=>(
                <div key={index} className={`p-2`}>
                    <ul>
                        <li className={`border ${pkg === "Premium"? "bg-primary text-white":""}`}>
                            <div  className={`mx-2  `}>
                                <Row className='px-1 border-bottom-0'>
                                    <Col md="12" className='border-bottom p-2 fw-bold plan-text-line2'>{item.plan_name}</Col>
                                    {Object.keys(item.pricings).map((m_item, index)=>(
                                        <Col md="12" className='plan-text-height p-2 ms-2 text-nowrap' key={index}>{item.pricings[m_item]}</Col>
                                    ))}
                                    <Col md="12" ><Link to={`${process.env.PUBLIC_URL}/register-account`}><Btn className={`btn py-1 my-1  ${pkg === "Premium"? "bg-light text-primary":"btn-primary text-white"}`}>{`Register`}</Btn></Link></Col>
                                </Row>
                                {item.details.map((d_item, d_index)=>(
                                    <div key={d_index}>
                                    <Row className='px-1 border-top-0 border-bottom-0'>
                                        {mobileView ? (
                                            <Col md="12" className='fw-bold border-top border-bottom' style={{paddingTop:'0.25rem', paddingBottom:'0.25rem'}}>{d_item.heading}</Col>
                                        ):(
                                            <Col md="12" className='fw-bold border-top border-bottom py-1' style={{paddingTop:'0.25rem', paddingBottom:'0.25rem'}}>{d_item.heading}</Col>
                                        )}
                                    </Row>
                                    <Row className='ps-1 border-top-0 border-bottom-0'>
                                        {Object.keys(d_item.sub_headings).map((sub_item, i_index)=>(
                                            <>
                                            {mobileView ? (
                                            <>
                                                <MobileColData value={d_item.sub_headings[sub_item]} i_index={i_index} d_index={d_index}/>
                                            </>
                                            ) : (
                                                <>
                                                {(d_index == 0 && i_index == 0) || (d_index == 1 && i_index == 3) || (d_index == 1 && i_index == 4)|| (d_index == 2 && i_index == 0) || (d_index == 2 && i_index == 2)|| (d_index == 5 && i_index == 1)? (
                                                    <Col md="12" className={`plan-text-line2 plan-text-height`} key={i_index}>{d_item.sub_headings[sub_item]}</Col>
                                                ):(
                                                    <Col md="12" className={``} key={i_index}>{d_item.sub_headings[sub_item]}</Col>
                                                )}
                                                </>
                                            )}
                                            </>                                        
                                        ))}
                                    </Row>
                                    </div>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default DynamicPlanData