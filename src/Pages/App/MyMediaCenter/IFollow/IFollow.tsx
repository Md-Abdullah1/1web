import { Container } from 'reactstrap'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import IFollowData from '../../../../Component/App/MyMediaCenter/IFollowData/IFollowData'
import { useEffect } from 'react';

const IFollow = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <UserHeader/>
      <Container fluid className="search-page">
        <IFollowData/>
      </Container>
    </div>
  )
}

export default IFollow