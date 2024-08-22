import { Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap'
import {  Badges, H3, H5, H6, P } from '../../../../AbstractElements'
import CardHeaderCommon from '../../../BonusUi/CardHeaderCommon/CardHeaderCommon';

const AboutData = () => {
  const SingleBlogParagraph1 = `From the east coast to the west, each river has its own beauty and character. Each river has its own story. Take a look at some America’s best rivers and some of the rivers we’re working to protect. And learn some facts about your favorite rivers. The Harpeth River and its tributaries are home to rich freshwater biodiversity, including more than 50 species of fish and 30 species of mussels`;
  const SingleBlogParagraph2 = `The Harpeth River flows through the heart of downtown Franklin, the 14th fastest growing city in the United States, and traverses Williamson County, one of the fastest growing counties in Tennessee. This rapid development has already caused harm to the river from adding treated sewage, increasing stormwater runoff, and withdrawing water.The river’s impairment is caused by dangerously low levels of dissolved oxygen driven by high concentrations of nutrients – particularly phosphorus – that fuel oxygen-hungry algal blooms that can lead to toxic conditions.`;
  return (
    <>
    <Card>
        <CardHeaderCommon title={`About`} tagClass={"card-title mb-0 pb-0 ps-2"} />
        <CardBody className='ps-4 p-0'>
        {/* <H4 className='mt-3'>{SingleBlogHeading}</H4>   */}
        <div className="single-blog-content-top ">
          <P>{SingleBlogParagraph1}</P>
          <P>{SingleBlogParagraph2}</P>
        </div>
        </CardBody>    
    </Card>

    <Card>
      <CardHeaderCommon title={`My Resume`} tagClass={"card-title mb-0 pb-0 ps-2"} />
      <CardBody className='px-3 py-0'>
        <Row>
          <Col md="4">
            <Card className="height-equal border">
              {/* <CardHeader className={`border-bottom`}></CardHeader> */}
              <CardBody className={``}>
                <div className='d-flex justify-content-center'>
                  <H5 className="pb-2">{`Job Title`}</H5>                 
                </div>
                <div className="badge-spacing justify-content-center">
                <Badges pill={true} color={`success`} className={`text-capitalize tag-pills-sm-mb`} >
                  {`IT`}
                </Badges>
                <Badges pill={true} color={`success`} className={`text-capitalize tag-pills-sm-mb`} >
                  {`Developer`}
                </Badges>
                </div>

                <div className='d-flex justify-content-center mt-5'>
                  <H5 className="pb-2">{`Sub Categories`}</H5>                 
                </div>
                <div className="justify-content-center" >
                  <H6 className='bg-warning p-1 text-center rounded' style={{whiteSpace:"break-spaces", lineHeight:'2em'}}>
                    {`Astrid Goodwin [Brice Will Elias BeahanJr. | Robb Fristch]`}
                  </H6>
                </div>

                <div className='d-flex justify-content-center mt-5'>
                  <H5 className="pb-2">{`Languages`}</H5>                 
                </div>
                <div className="badge-spacing justify-content-center">
                <Badges pill={true} color={`info`} className={`text-capitalize tag-pills-sm-mb`} >
                  {`Albanian (shqip / gjuha shqipe)`}
                </Badges>
                <Badges pill={true} color={`info`} className={`text-capitalize tag-pills-sm-mb`} >
                  {`Arabic`}
                </Badges>
                </div>
                
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Row>
              <Col md="6">
                <Card className="height-equal border">
                  <CardHeader className={`border-bottom`}>{`Work Experience`}</CardHeader>
                  <CardBody className={``}>
                    <H3 className="pb-2">{`no data`}</H3>
                    <P className="mb-0">{`Description`}</P>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="height-equal border">
                  <CardHeader className={`border-bottom`}>{`Education`}</CardHeader>
                  <CardBody className={``}>
                    <H3 className="pb-2">{`no data`}</H3>
                    <P className="mb-0">{`Description`}</P>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="height-equal border">
                  <CardHeader className={`border-bottom`}>{`Training`}</CardHeader>
                  <CardBody className={``}>
                    <H3 className="pb-2">{`no data`}</H3>
                    <P className="mb-0">{`Description`}</P>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="height-equal border">
                  <CardHeader className={`border-bottom`}>{`Skills`}</CardHeader>
                  <CardBody className={``}>
                    <H3 className="pb-2">{`no data`}</H3>
                    <P className="mb-0">{`Description`}</P>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="height-equal border">
                  <CardHeader className={`border-bottom`}>{`Hobbies Interests`}</CardHeader>
                  <CardBody className={``}>
                    <H3 className="pb-2">{`no data`}</H3>
                    <P className="mb-0">{`Description`}</P>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>    
    </Card>
    </>
  )
}

export default AboutData