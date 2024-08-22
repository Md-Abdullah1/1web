import { Container } from 'reactstrap'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import LikesData from '../../../../Component/App/MyMediaCenter/LikesData/LikesData'
import { useEffect } from 'react';

const Likes = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <UserHeader/>
      <Container fluid className="search-page">
        <LikesData/>
      </Container>
    </div>
  )
}

export default Likes