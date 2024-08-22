import React,{useState} from 'react'
import { Col, Row } from 'reactstrap';
import Popup from '../../../Component/MasterPopup/Popup';
import { H5, LI, UL } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import { navData } from '../../../Component/App/MyMediaCenter/About/UserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'



export const communications = [
    {title:'Private C-Chat', path:'communication/private-classified-chat',icon:<FontAwesomeIcon icon={fas.faAddressCard} className='pe-2'/>},
    {title:'Start a Classified Chat', path:'communication/start-classified-chat',icon:<FontAwesomeIcon icon={fas.faAddressCard} className='pe-2'/>},
    {title:'Thread List', path:'communication/message-threads-inbox',icon:<FontAwesomeIcon icon={fas.faAddressCard} className='pe-2'/>},
    {title:'Contacts', path:'communication/contacts',icon:<FontAwesomeIcon icon={fas.faAddressCard} className='pe-2'/>},
]

const QRCodePopup = () => {    
    const [isEditOpen , setIsEditOpen] = useState(false);
    const [isOpen , setIsOpen] = useState(true); 
    const handleRowSelected =() =>{}
    const openPopup = (type:boolean) =>{
        setIsOpen(!isOpen);
        setIsEditOpen(type);
    }

    const openModalToggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <Popup title={`QR Code`} openModalToggle={openModalToggle} isOpen={isOpen} size={`lg`} backdrop={false} isClose={false}>
                <Row className='px-4 py-4'>
                    <Col md={4} className='px-4 offset-md-1 my-2'>
                        <H5>{`My Media Center`}</H5>
                        <hr/>
                        <UL>
                            {navData.map((item , index)=>{
                                    return (<Link to={`${process.env.PUBLIC_URL}/${item.path}`} key={index}><span className='p-1 m-1 ps-2 pe-2 border border-primary text-nowrap'>{item.icon}{item.tittle}</span></Link>);
                                })}                            
                        </UL>
                    </Col>
                    <Col md={4} className='px-4 offset-md-2 my-2'>
                        <H5>{`Communication`}</H5>
                        <hr/>
                        <UL>
                            {communications.map((item, index)=>{
                                return (<Link to={`${process.env.PUBLIC_URL}/${item.path}`} key={index}><span className='p-1 m-1 ps-2 pe-2 border border-primary text-nowrap'>{item.title}</span></Link>);
                            })}                            
                        </UL>
                    </Col>
                </Row>
            </Popup>
        </div>
    )
}

export default QRCodePopup