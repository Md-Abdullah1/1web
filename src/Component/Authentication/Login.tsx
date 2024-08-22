import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { H2, } from "../../AbstractElements";
import {Href} from "../../utils/Constant";
import { useState , useEffect} from "react";
import { toast } from "react-toastify";
import LoginForm from "./LoginForm";
import { Logo } from "../Images";

const Login = () => {
    const [isAuthenticate, setIsAuthenticate] = useState(false);

    useEffect(()=>{
      let token = localStorage.getItem("token");
      if(token && token.length > 10){
        navigate(`${process.env.PUBLIC_URL}/dashboard/default`);
      }
    },[]);

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("test123@gmail.com");
    const [password, setPassword] = useState("Test@123");
    const navigate = useNavigate();
  
    const SimpleLoginHandle = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (email === "test123@gmail.com" && password === "Test@123") {
        localStorage.setItem("login", JSON.stringify(true));
        navigate(`${process.env.PUBLIC_URL}/dashboard/user-dashboard`);
      } else {
        toast.error("Please Enter valid `${Username}` or password...!");
      }
    };
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <div className="login-card login-dark">
            <div>
              <div>
                <Link className="logo text-center" to={Href}>
                  <Logo width={500} className="w-25"/>
                </Link>
              </div>
              <div className="login-main">
                {/* <Form className="theme-form" onSubmit={(e) => SimpleLoginHandle(e)} > */}
                  <H2 className="text-center mb-4">Login</H2>
                  
                <LoginForm/>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
