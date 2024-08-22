import { Col, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import { Badges, Btn, H3 } from '../../../AbstractElements'
import { MdLocationPin } from "react-icons/md";
import {useState , useEffect} from 'react';
import { ChevronDown } from 'react-feather';
import CommonModal from '../../Ui-Kits/Modal/Common/CommonModal';
import ReactDatePicker from 'react-datepicker';
import { FaUser } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { useAppSelector } from '../../../ReduxToolkit/Hooks';

const DeliveryService = () => {
  const { mobileView } = useAppSelector((state) => state.layout);
  const [marginLeft, setMarginLeft] = useState(mobileView ? 109 : 42);
  const [siftMarginLeft, setSiftMarginLeft] = useState(mobileView ? 190 : 135);
  const [toggleText, setToggleText] = useState("Delivery");
  const [openModal, setOpenModal] = useState(false);
  const openModalToggle = () => setOpenModal(!openModal);
  const handleChange = (date: Date) => setStartDate(date);
  const [startDate, setStartDate] = useState(new Date()); 
  
  return (
    <div>
        <Row className='pb-2'>
            <Col md="2" sm="6" className='d-flex justify-content-center m-1'>
              <Btn className='d-flex align-items-center pt-0 pb-0 ps-2 pe-2' color={`grey`} onClick={openModalToggle}>
                <MdLocationPin size="1.2em"/>
                <span className='p-1 text-nowrap'>{`1442 New York City`}</span>
                <ChevronDown size="1.2em"/>
              </Btn>
            </Col>
            <Col md="2" sm="6" className='align-items-center m-1'>                
                <div className='d-flex justify-content-center'>
                  <Btn className='alert-light-dark' style={{borderRadius:'20px'}}>
                    <span className='bg-dark position-absolute height-auto text-center p-2 text-white' style={{left:marginLeft,height:"36px", width:'84px' ,borderRadius:'20px', transition:'.5s',top:'-1px'}}>{toggleText}</span> 
                    <span className='bg-transparent' style={{zIndex:55}} onClick={()=>{setMarginLeft(mobileView ? 109 : 41);setToggleText("Delivery")}}>Delivery</span> 
                    <span className='bg-transparent ps-4' onClick={()=>{setMarginLeft(mobileView ? 190 : 137);setToggleText("Pickup")}}> Pickup</span> 
                  </Btn>
                </div>
            </Col>
            <Col md="2" sm="6" className='justify-content-center m-1 col-5'>
              {/* <FormGroup> */}
                  {/* <Label>{`Total No. of People`}<span className="font-danger">*</span></Label> */}
                  <Input type="text" placeholder={`Total No. of People`} />
              {/* </FormGroup> */}
            </Col>
            <Col md="1" sm="6" className='justify-content-center m-1 col-5'>
              {/* <InputGroup className="flatpicker-calender"> */}
                <ReactDatePicker className="form-control flatpickr-input" selected={startDate} onChange={handleChange} dateFormat="MMMM dd,yyyy" />
              {/* </InputGroup> */}
            </Col>
        </Row>
        {/* <div className=''>
          <h3>{`Enter your address`}</h3>
        </div> */}

        <CommonModal
              isOpen={openModal}
              toggle={openModalToggle}
              modalBodyClassName="p-0"
              heading="Login"
            >
              <div className="modal-toggle-wrapper social-profile text-start dark-sign-up p-2 pt-4">
                
                <InputGroup>
                  <InputGroupText id="basic-addon1"><MdLocationPin size="1.2em"/></InputGroupText>
                  <Input type="text" placeholder={`Address`} />
                </InputGroup>
                <Btn className='d-flex align-items-center pt-0 pb-0 ps-2 pe-2 mt-3' color={`warning`} onClick={openModalToggle}>
                  <FaUser size="1em"/>
                  <span className='p-1 text-nowrap'>{`Signin for saved addresses`}</span>
                </Btn>
                <div className='bg-light p-1 mt-2'></div>
                <div className='d-flex pt-4 pb-2'>
                  <FaRegCircleDot size="1em" color="warning" />
                  <span className='ps-2 p-0'>{`1422 Eugen Heimann Cir Richmond, TX 777469, USA`}</span>
                </div>
              </div>
        </CommonModal>
    </div>
  )
}

export default DeliveryService