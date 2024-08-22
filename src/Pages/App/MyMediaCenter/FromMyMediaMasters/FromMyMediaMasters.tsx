import { useEffect} from "react";
import { Container } from 'reactstrap'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import FromMyMediaMastersData from '../../../../Component/App/MyMediaCenter/FromMyMediaMastersData/FromMyMediaMastersData'

const FromMyMediaMasters = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <UserHeader/>
      <Container fluid className="search-page">
        <FromMyMediaMastersData/>
      </Container>
    </div>
  )
}

export default FromMyMediaMasters