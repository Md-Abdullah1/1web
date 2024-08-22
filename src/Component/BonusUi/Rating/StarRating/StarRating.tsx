//@ts-nocheck
import { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import Rating from "react-rating";
import { StarRatingBar } from '../../../../utils/Constant';
import { starRatingData } from '../../../../Data/BonusUi/Rating/Rating';
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon';

const StarRating = () => {
  const [rating, setRating] = useState(1);
  return (
    <Col xxl="4" md="4">
      <Card>
        <CardHeaderCommon title={StarRatingBar} span={starRatingData} headClass='pb-0' />
        <CardBody>
          <div className="rating-container">
            <Rating initialRating={rating} emptySymbol="txt-primary star fa fa-star-o fa-2x" fullSymbol="txt-primary star fa fa-star fa-2x" onChange={(rate) => setRating(rate)} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default StarRating