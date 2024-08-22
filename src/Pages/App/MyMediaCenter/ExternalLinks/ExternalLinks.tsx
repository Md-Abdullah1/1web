import { useEffect} from "react";
import { Container } from 'reactstrap'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import ExternalLinksData from '../../../../Component/App/MyMediaCenter/ExternalLinksData/ExternalLinksData'

const ExternalLinks = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <UserHeader/>
      <Container fluid className="search-page">
          <ExternalLinksData/>
      </Container>
    </div>
  )
}

export default ExternalLinks