import { Container, Row, Card, CardBody, Col, } from 'reactstrap'
import { Btn, H3, Image,  P } from '../../../AbstractElements'
import { dynamicImage } from '../../../Service'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useAppSelector } from '../../../ReduxToolkit/Hooks'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { QRCode } from 'react-qrcode-logo';
import CommonModal from '../../Ui-Kits/Modal/Common/CommonModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';


export const data ={name:"Jmaes",test:""};

export const menu =[
    {title:"Personal Information",path:'personal-information' , icon:<FontAwesomeIcon icon={fas.faUser} className='pe-2'/>},
    {title:"My Resumes", path:'my-resumes', icon:<FontAwesomeIcon icon={fas.faUser} className='pe-2'/>},
    {title:"Birth Date", path:'birthday-info', icon:<FontAwesomeIcon icon={fas.faUser} className='pe-2'/>},
    {title:"Shipping Addresses", path:'shipping-addresses', icon:<FontAwesomeIcon icon={fas.faUser} className='pe-2'/>},
    {title: "Password", path:'password', icon:<FontAwesomeIcon icon={fas.faUser} className='pe-2'/>},
    {title:"My Registration Plan ", path:'my-registration-plan', icon:<FontAwesomeIcon icon={fas.faUser} className='pe-2'/>}];

const UserBanner = () => {
    const { mobileView } = useAppSelector((state) => state.layout);
    const [isOpen, setIsOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const openModalToggle = () => setOpenModal(!openModal);
    const qr_value = 'qr-code-popup';//www.1webbb.com/

    const downloadQR =() =>{
        var canvas = document.getElementById("react-qrcode-logo");
        var url = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = 'QRCode.png';
        link.href = url;
        link.click();
      }
    
    return (
        <>
        
        <Container fluid>
            <div className="user-profile">  
                <Card className='mb-0'>
                    <CardBody className='pb-0'>
                        <Row>
                            <Col md={9}>
                            <div className="new-users-social mb-3">
                                <div className='d-flex align-items-center'>
                                    {/* <Image className="rounded-circle image-radius m-r-15" src={dynamicImage("user/1.jpg")} alt="user121" style={{width:'89px'}}/> */}
                                    <FontAwesomeIcon icon={fas.faCamera} size={`2xl`} className='p-4 rounded-circle bg-dark' />
                                    <div className='flex-grow-1 ps-2'>
                                    <H3 className="mb-0 f-w-700">{`James Mark`}, <small>{`Designer`}</small></H3>
                                    <P>{`B69 Near Schoool Demo Home`}</P>
                                    
                                    {mobileView ? (
                                        <ul><li><span className='ms-1 me-1'><FontAwesomeIcon icon={fas.faCalendarCheck} className='pe-2'/>{`An Appointment`}</span></li><li><span className='ms-1 me-1'><FontAwesomeIcon icon={fas.faHand} className='pe-2'/>{`Available for Work`}</span></li><li><span className='ms-1 me-1'><FontAwesomeIcon icon={fas.faIdBadge} className='pe-2'/>{`My Resumes`}</span></li></ul>
                                    ):(
                                        <P className='d-flex '><span className='ms-1 me-1 text-decoration-underline'><FontAwesomeIcon icon={fas.faCalendarCheck} className='pe-2'/>{`An Appointment`}</span><span className='ms-1 me-1 text-decoration-underline'><FontAwesomeIcon icon={fas.faHand} className='pe-2'/>{`Available for Work`}</span><span className='ms-1 me-1 text-decoration-underline'><FontAwesomeIcon icon={fas.faIdBadge} className='pe-2'/>{`My Resumes`}</span></P>
                                    )}
                                    </div>
                                    <span className="pull-right mt-0">
                                    {/* <FeatherIcons iconName='MoreVertical'/> */}
                                    </span>
                                </div>
                            </div>
                            </Col>
                            <Col md={3}>
                                <div className={` ${ mobileView ? 'w-100 text-center' : 'pull-right'}`} style={{marginTop:mobileView ? "" : " ", height:'100', width:'100' , zIndex:20 }}>
                                    <span className="mt-0 mx-4" onClick={openModalToggle} style={{zIndex:5}}>
                                        <QRCode logoImage={dynamicImage("logo/logo-1.png")} logoWidth={55} logoHeight={55} value="http://1webbb.com/qr-code-popup" size={106} bgColor={'#ffffff'}  style={{ height: "auto", maxWidth: "100%", width: "100%" ,backgroundColor:'#fff' , border:'2px solid black' , zIndex:2 }} />
                                    </span>
                                    <CommonModal
                                        isOpen={openModal}
                                        toggle={openModalToggle}
                                        modalBodyClassName="p-0"
                                        size="lg"
                                        >
                                        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                                            <div className='modal-header'>
                                            <div className='d-flex w-100'>
                                            <Image className="rounded-circle image-radius m-r-15 align-top" src={dynamicImage("logo/logo-1.png")} alt="user121" style={{width:'89px'}}/>
                                            <H3 className="w-100 text-center border-0">
                                                {`My Media Center - 1webbb.com | 2 B with 1 Web`}
                                            </H3> 
                                            <IoClose size='2rem' className='float-end' onClick={openModalToggle}/> 
                                            </div>
                                            
                                            </div>
                                            <div className='modal-body p-2 justify-content-center'>
                                            <Row>
                                                <Col md="12">
                                                <div className='d-flex px-2 '>
                                                    <Image className="rounded-circle image-radius m-r-15 align-top" src={dynamicImage("user/user.png")} alt="user121" style={{width:'49px'}}/>
                                                    <H3 className="w-100  border-0 pt-2 text-warning">
                                                    {`Cfotos admin (https://1webbb.com/cfp-admin-images)`}
                                                    </H3>
                                                </div>
                                                <hr/>
                                                </Col>
                                                <Col md="12" className='d-flex justify-content-end'>
                                                <Btn className='btn btn-primary' onClick={downloadQR}>Download</Btn>
                                                </Col>
                                                <Col md="12" className='d-flex justify-content-center'>                                
                                                <div className='p-2' style={{height:'600px' , width:'600px'}}>
                                                    <QRCode logoImage={dynamicImage("logo/qr-logo.png")} logoWidth={60} logoHeight={60} logoOpacity={1} value="MyMediaCenter" size={106} bgColor={'#ffffff'} style={{ height: "auto", maxWidth: "100%", width: "100%", backgroundColor:'#fff', border:'2px solid black'}} />                        
                                                </div>  
                                                </Col>
                                            </Row>
                                            </div>
                                        </div>
                                    </CommonModal>
                                    { mobileView ? <hr/> : ''}
                                </div>                        
                            </Col>
                        </Row>
                                        
                    
                        
                    
                    
                    
                    
                    <div className="timeline-content">
                        {/* <P>{ "The only way to do something in depth is to work hard. I've always thought of the T-shirt as the Alpha of the fashion alphabet. My breakfast is very important. Everything I do is a matter of heart, body and soul." } </P> */}
                        {/* <LikeContent />
                        <SocialChat data={data}/>
                        <CommentsBox /> */}
                        <Row>
                        {mobileView ? (
                            <>
                            <Col md="12">
                                {isOpen ? (<IoClose size='2em' onClick={()=>setIsOpen(false)} className='p-1 rounded-circle'  style={{backgroundColor:'#b6c8e7'}}/>):(<HiOutlineMenuAlt2 size='2em' onClick={()=>setIsOpen(true)} className='p-1 rounded-circle'  style={{backgroundColor:'#b6c8e7'}}/>)}
                            </Col>
                            <Col md="12">
                                {isOpen ? (<>
                                    {menu.map((item , index)=>{
                                        return (<Link to={`${process.env.PUBLIC_URL}/account-settings/${item.path}`}><span className='p-1 m-1 ps-2 pe-2 border border-primary'>{item.icon}{item.title}</span></Link>);
                                    })}
                                </>):("")}
                            </Col>
                            </>
                        ):(
                            <Col md="12">
                                {menu.map((item , index)=>{
                                    return (<Link to={`${process.env.PUBLIC_URL}/account-settings/${item.path}`}><span className='p-1 m-1 ps-2 pe-2 border border-primary'>{item.icon}{item.title}</span></Link>);
                                })}
                            </Col>
                        )}
                        </Row>
                    </div>
                    </CardBody>
                </Card>
            </div>
        </Container>
        </>
    )
}

export default UserBanner;