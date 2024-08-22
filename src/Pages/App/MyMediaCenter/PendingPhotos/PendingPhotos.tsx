import React, { useEffect } from 'react'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import { Container } from 'reactstrap'
import PendingPhotosData from '../../../../Component/App/MyMediaCenter/PendingPhotosData/PendingPhotosData'

const PendingPhotos = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <UserHeader/>
      <Container fluid className="search-page">
        <PendingPhotosData/>
      </Container>
    </div>
  )
}

export default PendingPhotos