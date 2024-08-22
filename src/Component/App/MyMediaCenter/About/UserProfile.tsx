import { Card,  Col,  Row } from 'reactstrap'
import { Btn, H3, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { PropsType } from '../../../../Types/Application/SocialApp/SocialApp'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../ReduxToolkit/Hooks'
import { useState } from 'react';
import { IoClose } from 'react-icons/io5'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { QRCode } from 'react-qrcode-logo';
import CommonModal from '../../../Ui-Kits/Modal/Common/CommonModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "bootstrap-icons/font/bootstrap-icons.css";

export const navData = [
    { id: 1, tittle: 'About', size:1 , mobile_size:3, color:"bg-primary" , path:'about', icon:<FontAwesomeIcon icon={fas.faAddressCard} className='pe-2'/>},
    { id: 4, tittle: 'Online Store', size:2 , mobile_size:4,color:"bg-warning", path:'online-store', icon:<FontAwesomeIcon icon={fas.faShop} className='pe-2'/>},
    { id: 5, tittle: 'Coupons' , size:1,mobile_size:3, color:"bg-primary", path:'my-coupons', icon:<FontAwesomeIcon icon={fas.faMoneyCheckDollar} className='pe-2'/>},
    { id: 2, tittle: 'Photos', size:1 , mobile_size:3, color:"bg-success", path:'photos', icon:<FontAwesomeIcon icon={fas.faFileImage} className='pe-2'/>},   
    
    {id: 12,  tittle: 'Albums', size:1 , mobile_size:3, color:"bg-primary", path:'albums', icon:<FontAwesomeIcon icon={fas.faImages} className='pe-2'/>},    
    {id: 13,  tittle: 'Collections', size:1 , mobile_size:3,color:"bg-primary", path:'collections', icon:<i className='bi bi-journal-plus pe-2'/>},
    {id: 11, tittle: 'Likes', size:1, mobile_size:3,color:"bg-primary", path:'likes' , icon:<FontAwesomeIcon icon={fas.faHeart} className='pe-2'/>},
    {id: 15, tittle: 'Reviews By Me', size:1, mobile_size:5,color:"bg-primary", path:'reviews' , icon:<FontAwesomeIcon icon={fas.faComment} className='pe-2'/>},
    {id: 18, tittle: 'Reviews About Me', size:2, mobile_size:6,color:"bg-primary", path:'reviews-about-me' , icon:<FontAwesomeIcon icon={fas.faComments} className='pe-2'/>},
    {id: 6, tittle: 'Activities and Meetings', size:2 , mobile_size:7,color:"bg-primary", path:'activities-meetings', icon:<FontAwesomeIcon icon={fas.faPeopleRoof} className='pe-2'/>},
    {id: 7, tittle: 'Quizzes and Surveys', size:2 , mobile_size:6,color:"bg-primary", path:'quizzes-surveys', icon:<FontAwesomeIcon icon={fas.faClipboardQuestion} className='pe-2'/>},
    {id: 8,  tittle: 'Photo Contests' , size:2, mobile_size:5,color:"bg-secondary", path:'my-photo-contests', icon:<FontAwesomeIcon icon={fas.faTrophy} className='pe-2'/>},
    {id: 9,  tittle: 'Followers' , size:1, mobile_size:3,color:"bg-primary", path:'followers', icon:<FontAwesomeIcon icon={fas.faUsersRays} className='pe-2'/>},
    {id: 10,  tittle: 'I Follow', size:1, mobile_size:3,color:"bg-primary" , path:'i-follow', icon:<FontAwesomeIcon icon={fas.faPersonWalkingArrowRight} className='pe-2'/>},        
    {id: 14, tittle: 'I Downloaded' , size:1, mobile_size:5,color:"bg-primary", path:'i-downloaded', icon:<FontAwesomeIcon icon={fas.faCloudArrowDown} className='pe-2'/>},    
    {id: 16, tittle: 'External Links', size:2 ,mobile_size:5, color:"bg-primary", path:'external-links', icon:<FontAwesomeIcon icon={fas.faLink} className='pe-2'/>},
    {id: 17, tittle: 'From My Media Masters' , size:3, mobile_size:7, color:"bg-primary", path:'from-my-media-masters', icon:<i className="bi bi-postage-heart me-1 pe-2"></i>},
    {id: 3, tittle: 'Pending Approval', size:2, mobile_size:5, color:"bg-info", path:'pending-photos', icon:<FontAwesomeIcon icon={fas.faCircleHalfStroke} className='pe-2'/>},
  ]

const UserProfile = ({ callback }: PropsType) => {
  const { mobileView } = useAppSelector((state) => state.layout); 
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const backgroundImage = '';
  const openModalToggle = () => setOpenModal(!openModal);
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
    <Row>
      <Col sm="12" className="box-col-12">
        <Card className="hovercard mb-0">
          <div className="cardheader socialheader" style={{backgroundImage:backgroundImage}}/>
          {/* <div className="user-image">
            <div className="avatar">
              <Image alt="user" src={dynamicImage('user/1.jpg')} />
            </div>
            <div className="icon-wrapper">
              <i className="icofont icofont-pencil-alt-5" />
            </div>
            <UserProfileIcon />
          </div> */}
          {/* background:'rgba(52, 52, 52, 0.8)' */}
          {/* <Row className='ms-1'>
            <Col md={9} className='bg-primary' style={{marginTop:"-7.4%" }}> */}
            <div className="new-users-social mb-3 bg-primary" style={{marginTop:"-7.4%" }}>
              <div className='d-flex align-items-center ps-1 z-3 ms-2' >
                  <div>
                    {/* <Image className="rounded-circle image-radius m-r-15 align-top" src={dynamicImage("user/download-avatar.jpg")} alt="user121" style={{width:'89px'}}/> */}
                    <FontAwesomeIcon icon={fas.faCamera} size={`2xl`} className='p-4 rounded-circle bg-dark'/>
                  </div>
                  <div className='flex-grow-1 ps-2'>
                  <H3 className="mb-0 f-w-700 text-white"><span style={{opacity:'1'}}>{`James Mark`}, <small>{`Designer`}</small></span></H3>
                  <P className='text-white'>{`B69 Near Schoool Demo Home`}</P>
                  {mobileView ? (
                    <P className='text-white'><span className='ms-1 me-1 '><FontAwesomeIcon icon={fas.faCalendarCheck} className='pe-2'/>{`An Appointment`}</span><span className='ms-1 me-1'><FontAwesomeIcon icon={fas.faHand} className='pe-2'/>{`Available for Work`}</span><span className='ms-1 me-1'><FontAwesomeIcon icon={fas.faIdBadge} className='pe-2'/>{`My Resumes`}</span></P>
                  ):(
                      <P className='d-flex text-white'><span className='ms-1 me-1 text-decoration-underline'><FontAwesomeIcon icon={fas.faCalendarCheck} className='pe-2'/>{`An Appointment`}</span><span className='ms-1 me-1 text-decoration-underline'><FontAwesomeIcon icon={fas.faHand} className='pe-2'/>{`Available for Work`}</span><span className='ms-1 me-1 text-decoration-underline'><FontAwesomeIcon icon={fas.faIdBadge} className='pe-2'/>{`My Resumes`}</span></P>
                  )}
                  </div>
                  
              </div>
            </div>
            {/* </Col>
            <Col md={3} className='bg-primary' style={{marginTop:"-7.4%" }}> */}
              <div className={` ${ mobileView ? 'w-100 text-center' : 'pull-right'}`} style={{marginTop:mobileView ? "" :"-8.8%", height:'100', width:'100' }}>
                <div className={`mt-0 mx-4 ${ mobileView ? '' : 'pull-right'}`} onClick={openModalToggle}>
                  <QRCode logoImage={dynamicImage("logo/qr-logo.png")} logoWidth={35} logoHeight={35} logoOpacity={1} value={`http://1webbb.com/qr-code-popup`} size={90} bgColor={'#ffffff'} style={{ height: "auto", maxWidth: "100%", width: "100%", backgroundColor:'#fff' , border:'2px solid black'}} />
                </div>
                
                <CommonModal
                    isOpen={openModal}
                    toggle={openModalToggle}
                    modalBodyClassName="p-0"
                    size='lg'
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
                                <QRCode logoImage={dynamicImage("logo/qr-logo.png")} logoWidth={140} logoHeight={140} logoOpacity={1} value="MyMediaCenter" size={1026} bgColor={'#ffffff'} style={{ height: "auto", maxWidth: "100%", width: "100%", backgroundColor:'#fff', border:'2px solid black'}} />                        
                              </div>  
                            </Col>
                          </Row>
                        </div>
                    </div>
                </CommonModal>
              </div>
            {/* </Col>
          </Row> */}
          
          
         
          
          
          
          <div className="timeline-content">
          <Row>
            
          {mobileView ? (
                        <>
                        <Col md="12" >
                          {isOpen ? (<IoClose size='2em' onClick={()=>setIsOpen(false)} className='p-1 rounded-circle' style={{backgroundColor:'#b6c8e7'}}/>):(<HiOutlineMenuAlt2 size='2em' className='p-1 rounded-circle' onClick={()=>setIsOpen(true)} style={{backgroundColor:'#b6c8e7'}}/>)}
                        </Col>
                        <Col md="12">
                            {isOpen ? (<>
                                {navData.map((item , index)=>{
                                    return (<Link to={`${process.env.PUBLIC_URL}/${item.path}`} key={index}><span className='p-1 m-1 ps-2 pe-2 border border-primary'>{item.icon}{item.tittle}</span></Link>);
                                })}
                            </>):("")}
                        </Col>
                        </>
                    ):(
                        <Col md="12">
                            {navData.map((item , index)=>{
                                return (<Link to={`${process.env.PUBLIC_URL}/${item.path}`} key={index}><span className='p-1 m-1 ps-2 pe-2 border border-primary'>{item.icon}{item.tittle}</span></Link>);
                            })}
                        </Col>
                    )
            }
          </Row>
          </div>
          <div className="info market-tabs p-0">
            {/* <NavBarMain callback={callback} /> */}
            
          </div>
        </Card>
      </Col>
    </Row>
    
    </>
  )
}

export default UserProfile