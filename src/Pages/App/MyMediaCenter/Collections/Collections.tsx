import { useEffect, useRef } from "react";
import { Container } from 'reactstrap'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import CollectionsData from '../../../../Component/App/MyMediaCenter/CollectionsData/CollectionsData'

const Collections = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <UserHeader/>
      <Container fluid className="search-page">
        <CollectionsData/>
      </Container>
    </div>
  )
}

export default Collections