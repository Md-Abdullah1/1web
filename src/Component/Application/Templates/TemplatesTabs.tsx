import React,{useState} from 'react'
import { Card, CardBody, CardHeader, Col, Row, TabContent, TabPane } from 'reactstrap'
import { H3, H6, Image, LI, P, UL } from '../../../AbstractElements';
import { dynamicImage } from '../../../Service';
import { Link } from 'react-router-dom';
import { Href } from '../../../utils/Constant';
import { Edit2, Link2, Share2, Tag, Trash2 } from 'react-feather';
import ViewBookmark from '../Bookmark/BookmarksTabs/ViewBookmark';

export const templates =[
    {image:'user/timeline-1.png' , title:'Template 1',url:'#', desc:'this is Template 1', collection:''},
    {image:'user/timeline-1.png' , title:'Template 1',url:'#', desc:'this is Template 2', collection:''}
]

export interface activeTabs{
    activeTab:string;
}
const TemplatesTabs = ({activeTab}:activeTabs) => {
    const [viewLayout , setViewLayout ] = useState(true);
    const onHandleClick =({}) =>{

    }
    return (    
        <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
                <Card className="mb-0">
                    <CardHeader className="d-flex pb-0">
                    <H3 className="mb-0">{`Created By Me`}</H3>
                    <ViewBookmark setOpenModal={setViewLayout}/>
                    </CardHeader>
                    <CardBody className="pb-0">
                    {viewLayout ? (
                    <div className={`details-bookmark text-center `}>
                        <Row>
                            {templates.length > 0 ? (
                                templates.map((data, index)=>(
                                    <Col xxl="3" md="4" key={index} className="col-md-4 rounded mx-1 p-1">
                                        {/* <Card className="card-with-border bookmark-card o-hidden">  
                                            <div className="details-website">
                                                <Image className="img-fluid" src={`${dynamicImage(data.image)}`} alt="image" />
                                                <div className="desciption-data">
                                                    <div className="title-bookmark">
                                                    <H6 className="title_0 f-w-500">{data.title}</H6>                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </Card> */}
                                        <Card className="card-with-border bookmark-card o-hidden">
                                            <div className="blog-box blog-grid text-center product-box">
                                                <div className="product-img">
                                                <Image className="img-fluid top-radius-blog" src={dynamicImage(`${data.image}`)} alt="faq" />
                                                {/* <div className="product-hover">
                                                <UL className='simple-list flex-row'>
                                                    <LI><i className="icon-link" /></LI>
                                                    <LI><i className="icon-import" /></LI>
                                                </UL>
                                                </div> */}
                                                </div>
                                                <div className="blog-details-main simple-list flex-row">
                                                    <UL className="blog-social justify-content-center flex-row">
                                                    <LI>9 April 2024</LI>
                                                    <LI>by: Admin</LI>
                                                    <LI>0 Hits</LI>
                                                    </UL>
                                                    <hr />
                                                    <H6 className="blog-bottom-details"><span style={{WebkitLineClamp:3 ,textOverflow: 'ellipsis' , WebkitBoxOrient:'vertical', overflow:'hidden' , display:'-webkit-box'}}  >{`Alice Smith, 29 years old, has completed 45 parachute jumps and is a Gold member of the parachute jump club. Her last jump was on July 1, 2024. Bob Johnson, 34 years old, has completed 120 jumps and holds a Platinum membership. His last jump was on June 20, 2024. Carol Lee, 22 years old, has 15 jumps to her name and is a Silver member. Her most recent jump was on July 10, 2024. David Brown, aged 40, has completed 75 jumps and is also a Gold member, with his last jump on June 30, 2024. Eve Martin, 27 years old, has an impressive 200 jumps and is a Platinum member, with her last jump on July 12, 2024.`}</span></H6>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                ))
                            ):("No Record !!!!")}
                        </Row>
                    </div>
                    ) : (
                        <>
                        {templates.length > 0 ? (
                            templates.map((data, index)=>(
<Row className="blog-box blog-list ">
              <Col sm="5">
                <Image className="img-fluid sm-100-w" src={dynamicImage(`${data.image}`)} alt="blog-image" />
              </Col>
              <Col sm="7">
                <div className="blog-details">
                  <div className="blog-date">
                     {`24 July 2024`}
                  </div>
                  <H3 className="mb-1">{`English`}</H3>
                  <div className="blog-bottom-content">
                    <UL className="blog-social simple-list flex-row">
                      <LI>by: {`Sahdev`}</LI>
                      <LI>{100} Hits</LI>
                    </UL>
                    <hr />
                    <P className="mt-0">{`Alice Smith, 29 years old, has completed 45 parachute jumps and is a Gold member of the parachute jump club. Her last jump was on July 1, 2024. Bob Johnson, 34 years old, has completed 120 jumps and holds a Platinum membership. His last jump was on June 20, 2024. Carol Lee, 22 years old, has 15 jumps to her name and is a Silver member. Her most recent jump was on July 10, 2024. David Brown, aged 40, has completed 75 jumps and is also a Gold member, with his last jump on June 30, 2024. Eve Martin, 27 years old, has an impressive 200 jumps and is a Platinum member, with her last jump on July 12, 2024.`}</P>
                  </div>
                </div>
              </Col>
            </Row>
                            ))):("No Record !!!!")}
                        </>
                    )}
                    </CardBody>
                </Card>
            </TabPane>
            <TabPane tabId="2">
                <Card className="mb-0">
                    <CardHeader className="d-flex">
                    <H3 className="mb-0">{`Favourites`}</H3>
                    {/* <ViewBookmark /> */}
                    </CardHeader>
                    <CardBody>
                    <div className={`details-bookmark text-center ${viewLayout ? "" : "list-bookmark" }`} >
                    <Row>
                        {templates.length > 0 ? (
                            templates.map((data, index)=>(
                                <Col xxl="3" md="4" key={index} className="col-md-4 rounded mx-1 p-1">
                                    <Card className="card-with-border bookmark-card o-hidden">  
                                        <div className="details-website">
                                            <Image className="img-fluid" src={`${dynamicImage(data.image)}`} alt="image" />
                                            <div className="desciption-data">
                                                <div className="title-bookmark">
                                                <H6 className="title_0 f-w-500">{data.title}</H6>
                                                {/* <P className="weburl_0">{data.url}</P>
                                                <div className="hover-block">
                                                    <UL className="simple-list d-block">
                                                    <LI><Link to={Href} onClick={() => onHandleClick(data)}><Edit2 /></Link></LI>
                                                    <LI><Link to={Href}><Link2 /></Link></LI>
                                                    <LI><Link to={Href}><Share2 /></Link></LI>
                                                    <LI><Link to={Href} ><Trash2 /></Link></LI>
                                                    <LI className="pull-right text-end"><Link to={Href}><Tag /></Link></LI>
                                                    </UL>
                                                </div>
                                                <div className="content-general">
                                                    <P className="desc_0">{data.desc}</P>
                                                    <span className="collection_0">{data.collection}</span>
                                                </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))
                        ):("No Record !!!!")}
                        </Row>
                    </div>
                    </CardBody>
                </Card>
            </TabPane>
        </TabContent>
    )
}

export default TemplatesTabs