import { ChangeEvent, useState } from 'react'
import { Col, Container, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap'
import { Btn, H3 } from '../../../AbstractElements'
import CommonModal from '../../../Component/Ui-Kits/Modal/Common/CommonModal'
import { Formik , Form, Field, ErrorMessage} from 'formik'
import { Unlock, EnterPassword, Password } from '../../../utils/Constant'
import { FaEyeSlash , FaEye  } from "react-icons/fa";
import { confirmPasswordFormSchema } from '../../../Component/Authentication/FormSchema'

const ReConfirmPassword = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [formValue, setFormValue] = useState({password:""});
    const [openModal, setOpenModal] = useState(false);
    const [formSubmit, setFormSubmit] = useState(false);
    const [submitErrors, setSubmitError] = useState<boolean>(false);
    const openModalToggle = () => setOpenModal(!openModal);
    const handleLogin = () =>{
        openModalToggle();
    }

    return (
    <div className='page-body'>
      <Row className="justify-content-center mt-4 pt-4" style={{top:50}}>
        <div className="header-logo-wrapper col-auto p-0 mt-4">
            <div className="logo-wrapper pt-4">
                <Btn color="primary" onClick={openModalToggle}>Login</Btn>
                <CommonModal isOpen={openModal} toggle={openModalToggle} modalBodyClassName="p-0" heading="Login">
                    <div className="modal-toggle-wrapper social-profile text-start dark-sign-up px-2">
                        <H3 className="modal-header justify-content-center border-0 pb-4">Confirm Password</H3>                        
                        <Formik initialValues={{ password: "" }} onSubmit={handleLogin} validationSchema={confirmPasswordFormSchema}>
                            {({errors}) =>(
                                <Form >
                                    <Row className="g-3 pb-3">
                                        <Col md="12">
                                           
                                            <InputGroup className="has-validation">
                                                <Field type={showPassword ? "password":"text"} name="password" placeholder={EnterPassword}  className={`form-control ${submitErrors && `${errors.password ? "is-invalid" : "is-valid"}`}`} autoFocus={true}/>
                                                <InputGroupText onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash/>:<FaEye/> }</InputGroupText>
                                                <ErrorMessage
                                                name="password"
                                                component="span"
                                                className="invalid-feedback"
                                                />
                                            </InputGroup>

                                        </Col>
                                        <Col md="12" className='text-center pt-2 pb-2'>
                                            <Btn color="primary" onClick={()=>setSubmitError(true)}>{Unlock}</Btn>
                                        </Col>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                        
                    </div>
                </CommonModal>
            </div>
        </div>
      </Row>
    </div>
  )
}

export default ReConfirmPassword