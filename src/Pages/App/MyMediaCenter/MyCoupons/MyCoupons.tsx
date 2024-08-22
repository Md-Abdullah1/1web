import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import { Container } from 'reactstrap'
import MyCouponsData from '../../../../Component/App/MyMediaCenter/MyCouponsData/MyCouponsData'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { useEffect } from 'react'

const MyCoupons = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <Breadcrumbs mainTitle={`My Coupons`} parent={`Apps`} />
      <UserHeader/>
      <Container fluid className="search-page">
          <MyCouponsData/>
      </Container>
    </div>
  )
}

export default MyCoupons