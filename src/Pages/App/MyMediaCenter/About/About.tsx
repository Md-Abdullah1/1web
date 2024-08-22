import { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import AboutData from "../../../../Component/App/MyMediaCenter/About/AboutData";
import UserHeader from "../../../../Component/App/MyMediaCenter/About/UserHeader";

const About = () => {
  const scrollToRef = useRef( null );
  
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 230;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });

  return (
    <div className='page-body'>
      <UserHeader/>
      <Container fluid className="search-page">
        <AboutData/>
      </Container>
    </div>
  )
}

export default About;