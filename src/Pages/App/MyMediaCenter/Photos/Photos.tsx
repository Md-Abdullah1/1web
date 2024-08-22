import { Container } from 'reactstrap'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import PhotosData from '../../../../Component/App/MyMediaCenter/Photos/PhotosData'
import { useEffect } from 'react';

const Photos = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <UserHeader/>
      <Container fluid className="search-page">
        <PhotosData/>
      </Container>
    </div>
  )
}

export default Photos