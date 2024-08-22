import { useEffect, useRef } from "react";
import { Container } from 'reactstrap'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import AlbumsData from '../../../../Component/App/MyMediaCenter/AlbumsData/AlbumsData'

const Albums = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <UserHeader/>
      <Container fluid className="search-page">
        <AlbumsData/>
      </Container>
    </div>
  )
}

export default Albums