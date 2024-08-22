import { Container } from 'reactstrap'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import PhotoContestsData from '../../../../Component/App/MyMediaCenter/PhotoContestsData/PhotoContestsData'
import { useEffect } from 'react';

const PhotoContests = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <UserHeader/>
      <Container fluid className="search-page">
        <PhotoContestsData/>
      </Container>
    </div>
  )
}

export default PhotoContests