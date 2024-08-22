import { Container } from 'reactstrap'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import QuizzesAndSurverysData from '../../../../Component/App/MyMediaCenter/QuizzesAndSurverysData/QuizzesAndSurverysData'
import { useEffect } from 'react';

const QuizzesAndSurverys = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <UserHeader/>
      <Container fluid className="search-page">
        <QuizzesAndSurverysData/>
      </Container>
    </div>
  )
}

export default QuizzesAndSurverys