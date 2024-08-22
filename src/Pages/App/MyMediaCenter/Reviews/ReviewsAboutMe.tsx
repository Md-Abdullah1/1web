import {useEffect} from 'react'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader';
import { Container } from 'reactstrap';
import ReviewsData from '../../../../Component/App/MyMediaCenter/ReviewsData/ReviewsData';
import ReviewsAboutMeData from '../../../../Component/App/MyMediaCenter/ReviewsData/ReviewsAboutMeData';

const ReviewsAboutMe = () => {
    useEffect(()=>{
        var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
        window.scrollTo({ top: scroll_top, behavior: "smooth" });
    });

    return (
    <div className='page-body'>
        <UserHeader/>
        <Container fluid className="search-page">
            <ReviewsAboutMeData />
        </Container>
    </div>
    )
}

export default ReviewsAboutMe