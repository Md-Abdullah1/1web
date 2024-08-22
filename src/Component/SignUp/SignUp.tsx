import { ChangeEvent, useState } from 'react'
import { Col, Container, Row } from 'reactstrap';

import SignupAccount from './SignupAccount'
import Birthdate from './Birthdate';

const SignUp = () => {
    
    const [showFinish, setShowFinish] = useState(false);
    const [formValue, setFormValue] = useState({userName: "",email: "", password:"",confirm_password:"", country:"", subscription_type:"" , subscription_plan:""});
    
    const handleBackButton = () => {
        setShowFinish(false);
        if (level === 2) {setLevel(level - 1);}
        if (level === 3) {setLevel(level - 1);}
        if (level === 4) {setLevel(level - 1);}
      };
    const getUserData = (event: ChangeEvent<HTMLInputElement>) =>{
        let name = event.target.name;
        let value = event.target.value;
        setFormValue({ ...formValue, [name]: value });
    }

    const handleNextButton = () =>{
        const {userName, email} = formValue;//, password, confirm_password, country, plan
        if(userName !== "" && email !=="" && level === 1){
            setLevel(level + 1);
        }else if(level === 2){
            setShowFinish(true);
        }else{
            toast.error("please fill all field after press next button");
        }
    }
    const [level, setLevel] = useState(1);
  return (
    // <div className='page-body'>
    <Container fluid>
        <Row>
            <Col xs="12" className="p-0">
            <div className="login-card login-dark">
                <div>
                <SignupAccount formValue={formValue} getUserData={getUserData}/>
                </div>
            </div>
                {/* <div>
                    <div className="theme-form">
                        <div className="wizard-4">
                            <SideBar level={level}/>
                            <div className="step-container login-card">
                            {level === 1 && (<SignupAccount formValue={formValue} getUserData={getUserData}/>)}
                            {level === 2 && (<Birthdate formValue={formValue} getUserData={getUserData}/>)}
                            </div>
                           
                            <div className="action-bar">
                                <div className="loader">{'Loading'}</div>
                                <Row>
                                    <Col xs="12" className="p-0 justify-content-center">
                                    {level === 4 && (<Link to={Href} className={`btn btn-primary`} onClick={() =>toast.success("form submitted successfully")}>{Finish}</Link>)}
                                    {level !== 5 && (<Link to={Href} onClick={handleNextButton} className={`btn btn-primary ${showFinish ? "buttonDisabled" : ""}`}>{Next}</Link>)}
                                    {level > 1 && (<Link to={Href} className={`btn btn-primary `} onClick={handleBackButton}>{Previous}</Link>)}
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div> */}
                
            </Col>
            {/* <Col xl="5" ><Image className="bg-img-cover bg-center" src={dynamicImage("login/icon.png")} alt="loginpage" /></Col>
            <Col xl="7" className="p-0">
                <SignupAccount formValue={formValue} getUserData={getUserData}/>
            </Col> */}
        </Row>
    </Container>
    // </div>
  )
}

export default SignUp;