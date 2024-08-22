import { Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap"
import SearchInput from "../../../Application/SearchResult/SearchInput/SearchInput"
import { H4, Image, LI, P, UL } from "../../../../AbstractElements"
import { Href, PortfolioTitle } from "../../../../utils/Constant"
import { dynamicImage } from "../../../../Service"
import { Gallery, Item } from "react-photoswipe-gallery"
import Masonry from "react-masonry-css"
import { Link } from "react-router-dom"
import Rating from "react-rating"
import { useState } from "react"

export const CRating = () =>{
    const [rating, setRating] = useState(1);
    return(
    <Card className="mb-0">
        <CardBody className="p-0">
        <div className="rating-container">
            <Rating initialRating={rating} emptySymbol="txt-primary star fa fa-star-o fa-2x" fullSymbol="txt-primary star fa fa-star fa-2x"  />
        </div>
        </CardBody>
    </Card>
    );
}
export const randomData = [
    {id:1,src: "masonry/1.jpg",},
    {id:2,src: "masonry/2.jpg"},
    {id:3,src: "masonry/3.jpg"},
    {id:4,src: "masonry/4.jpg"}];

const ReviewsData = () => {
    const [basicTab, setBasicTab] = useState<string>("2");
    const breakpointColumnsObj = {
        default: 3,
        1199: 3,
        700: 2,
        500: 1,
      };


  return (
    <Card>
        
        <SearchInput />
        <CardBody className='pt-0'>
            <Row>
                <Col sm="12" xl="12">
                <Card className="mt-2">
                    <CardBody className="photoswipe-pb-responsive p-0">
                        <Gallery>
                        <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery-with-description" columnClassName="grid-item col-xl-3 col-sm-6">
                        {randomData.map((element, index)=>(
                            <li style={{ listStyle: "none" }} key={index} className="p-0 mb-1">
                                <figure className="m-0 border mb-1">
                                    <Item original={dynamicImage(element.src)} caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." width="700" height="850">
                                    {({ ref, open }) => (
                                        <Link to={Href} onClick={open}>
                                        
                                        {/* try -1 */}
                                        
                                        <div className='d-flex border-0 border-bottom mb-0' key={index}>
                                            <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/user.png`)} alt="user" />
                                            <div className={`social-status social-online`} />
                                            <div className='flex-grow-1'>
                                            <span className="d-block">{`James Barnes`}</span>
                                            <span className="d-block">{`James@gmail.com`}</span>
                                            </div>
                                        </div>
                                        {/* try -2 */}
                                        <div className="blog-box blog-grid text-center product-box border-0 border-bottom mb-1">
                                            <div className="blog-details-main simple-list flex-row">
                                            <UL className="blog-social justify-content-center flex-row mt-0 mb-0">
                                                <LI>9 April 2024</LI>
                                                <LI>by: Admin</LI>
                                                <LI>0 Hits</LI>
                                            </UL>
                                            </div>
                                        </div>
                                        <div className="border-0 mb-0">
                                        <CRating/>
                                        </div>
                                        <P className="p-2">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</P>
                                        {/* <img className="img-thumbnail p-2 rounded-0 rounded-top-1" ref={ref} src={dynamicImage(element.src)} alt="images" />
                                        <div className="caption border-top-0 p-2 border-0 mb-1">
                                            <H4 className="mt-0">{PortfolioTitle}</H4>
                                            <P>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</P>
                                        </div> */}
                                        {/* <div className="pt-3 d-flex align-items-center gap-3 pills-blogger">
                                            <div className="blog-wrapper">
                                                <Image className="blog-img w-100" src={dynamicImage(`dashboard-2/headphones.png`)} alt="head-phone" />
                                            </div>
                                            <div className="blog-content"> 
                                                <P> <em className="txt-danger fw-bold">Smart headphones</em>  — also called smart earbuds or hearable — are high-tech in-ear devices that do more than transmit audio. These headphones are usually wireless, and they can sync up with your phone, tablet, computer or other Bluetooth-enabled device. The main appeal of hearables is convenience, as they allow you to complete common tasks without directly accessing your phone or computer. Smart wireless headphones sync up to other devices using Bluetooth technology, and many of their features rely on data from your smartphone or computer.</P>
                                            </div>
                                        </div> */}
                                        <Row className="border-0">
                                            <Col md="4">
                                            <div className="blog-wrapper">
                                                <Image className="blog-img w-100" src={dynamicImage(`dashboard-2/headphones.png`)} alt="head-phone" />
                                            </div>
                                            </Col>
                                            <Col md="8">
                                            <div className="blog-content"> 
                                                <P> <em className="txt-danger fw-bold">Smart headphones</em>  — also called smart earbuds or hearable — are high-tech in-ear devices that do more the</P>
                                            </div>
                                            </Col>
                                        </Row>
                                        </Link>
                                    )}
                                    </Item>
                                </figure>
                            </li>
                        ))}
                        </Masonry>
                    </Gallery>
                    </CardBody>
                </Card>
                </Col>
            </Row>
            
            
        </CardBody>
    </Card>
  )
}

export default ReviewsData