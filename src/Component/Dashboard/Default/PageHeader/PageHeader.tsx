import { Link } from "react-router-dom";
import { Card, CardHeader, Col, Row } from "reactstrap";
import { referralactions } from "../../../Application/Users/MyReferralsContainer/MyReferralsContainer";



const PageHeader = () => {
  return (
    <Card className="earning-card ">
      <CardHeader>
            {referralactions.map((item, index) =>(
                <Link to={`${process.env.PUBLIC_URL}/${item.path}`} key={index}><span className='border rounded p-2 m-1 border-primary'>{item.title} {item.counter && item.counter >= 0 ? `(${item.counter})`:``}</span></Link>
            ))}
        </CardHeader>
    </Card>
  );
};

export default PageHeader;
