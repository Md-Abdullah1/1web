import { Container } from 'reactstrap'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import ReviewsData from '../../../../Component/App/MyMediaCenter/ReviewsData/ReviewsData'
import { useEffect } from 'react';

const Reviews = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <UserHeader/>
      <Container fluid className="search-page">
          <ReviewsData/>
      </Container>
    </div>
  )
}

export default Reviews