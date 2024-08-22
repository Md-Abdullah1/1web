import { ChangeEvent, useState, useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Col, Label, Row , Container} from 'reactstrap'
import {Username, EnterUsername, Login, ForgotPassword, DoNotAccount, CreateAccount,Password,Next,EnterPassword} from '../../utils/Constant';
import {loginFormSchema} from './FormSchema';
import { Btn , P} from '../../AbstractElements';
import { Link , useNavigate} from 'react-router-dom';
import { MdOutlineModeEdit } from "react-icons/md";
import { FaEyeSlash , FaEye  } from "react-icons/fa";
import { client } from '../../Api/client';
import { CHECK_USERNAME } from '../../Api';
import { useLoginMutation } from '../../ReduxToolkit/AuthReducer/LoginApi';



const LoginForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [submitErrors, setSubmitError] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [formSubmit, setFormSubmit] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event :ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value });
        console.log("name::"+name+"::val::"+value)
        if(name === 'username' && value.length > 3){
            setShow(true)
        }
    }

    const handleNext = () =>{        
        console.log("handle next"+(show ? "yes":"no"))
        console.log("name::"+formData.username);
        if(formData.username.length >= 3){
            setShow(true)
            setSubmitError(false);
            // checkUserName(formData.username);            
            //setSubmitError(false)
        }else{
            setSubmitError(true)        
        }
    }

    const checkUserName = async (username:string) =>{
        await client.post(CHECK_USERNAME, {username:username}).then(res =>{
            if(res.data.success){
                setShow(true)
                setSubmitError(false)
            }else{
                setSubmitError(true)
            }
        }).catch(error =>{
            console.log(error);
        });
    }

    const handleLogin = () =>{
        console.log("login call"+JSON.stringify(formData));
        // setFormData({...formData, ['username']: values });
        if(formData.password == undefined || formData.password.length == 0){
            setSubmitError(true)
        }
        login(formData).then(res =>{
            console.log("login response::");
            console.log(res);
            if(res.data.success){
                navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
            }
            if(!(res.error?.data?.success)){
                setSubmitError(true)
            }
        }).catch(error =>{
            setSubmitError(true)
        })        
    }

    const [
        login , 
        {
            isLoading:loginIsLoading, 
            isError: loginIsError,
            isSuccess: loginIsSuccess,
            data: loginData,
            error: loginError
        }] = useLoginMutation();

   

    return (
        <Container className="p-3">
            <Formik initialValues={{ username: "", password: "" }} onSubmit={handleLogin} validationSchema={loginFormSchema}>
                {({errors ,values,  handleChange}) =>(
                    <Form >
                    <Row className="g-3">           
                        
                        {show ? (
                        <>
                        <Col md="12">
                            <Label>{formData.username}</Label>
                            <MdOutlineModeEdit onClick={() => setShow(false)}/>
                        </Col>
                        
                        <Col md="12">
                            <Label>{Password}</Label>
                            <Field type={showPassword ? "password":"text"} value={formData.password} name="password" className={`form-control ${formSubmit && `${errors.username ? "is-invalid" : "is-valid"}`}`} placeholder={EnterPassword} autoFocus={true} onChange={handleInputChange}/>
                            <div className="show-hide pe-4 pt-0" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash/>:<FaEye/> }
                            </div>
                            <ErrorMessage
                                name="password"
                                component="span"
                                className="invalid-feedback"
                                />
                        </Col>
                        <Col md="12">
                            <Btn color="primary" onClick={handleLogin}>{Login}</Btn>
                        </Col>
                        </>
                        ):(<>
                        {/* <Col md="12">
                            <Label>{`Assistant Account`}</Label>
                            <Field
                              as="select"
                              name="account_type"
                              className={`form-control  }`}
                            >
                            <option>{'Select'} {`Assistant Account` }</option>                            
                            {account_types.map((data, index) => (<option key={index} value={data}>{data}</option>))}
                            </Field>
                            <ErrorMessage
                                name="account_type"
                                component="span"
                                className="invalid-feedback"
                                />
                        </Col> */}
                        <Col md="12">
                            <Label>{Username}</Label>
                            <Field type="text" name="username" value={values.username} className={`form-control ${submitErrors && `${errors.username ? "is-invalid" : "is-valid"}`}`} onChange={handleInputChange} placeholder={EnterUsername} autoFocus={true}/>
                            <ErrorMessage
                                name="username"
                                component="span"
                                className="invalid-feedback"
                                >
                                {msg => <div className='text-danger'>{msg}</div>}
                            </ErrorMessage>
                        </Col>
                        <Col md="12">
                            <Btn color="primary" onClick={handleNext}>{Next}</Btn>
                        </Col>
                        </>)}
                        
                        <Col md="12">
                            <Link to={`${process.env.PUBLIC_URL}/forgot-password`}>{ForgotPassword} </Link>
                        </Col>
                        <Col md="12">
                            <P className="mt-1 mb-0 ">
                                {DoNotAccount}
                                <Link className="ms-2" to={`${process.env.PUBLIC_URL}/register-account`} >
                                {CreateAccount}
                                </Link>
                            </P>
                        </Col>  

                        <Col md="12">
                            <P className="mt-1 mb-0 ">                           
                                <Link className="ms-2" to={`${process.env.PUBLIC_URL}/account-list`} >
                                <Btn color="primary" onClick={handleNext}>{`Account List`}</Btn>
                                </Link>
                            </P>
                        </Col>                        
                    </Row>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default LoginForm