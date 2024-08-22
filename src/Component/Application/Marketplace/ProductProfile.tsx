import { Card, CardBody, Collapse } from 'reactstrap'
import HeaderWithIcon from '../SocialApp/TimelineTab/LeftSideBar/HeaderWithIcon'
import { Badges, H3, H5, Image } from '../../../AbstractElements'
import { dynamicImage } from '../../../Service'
import { Fragment, useState } from 'react'
import ProductMultiItemCarousel from './ProductMultiItemCarousel'
import { HoverButtonsProp } from '../../../CommonElements/HoverButton/HoverButtonProp'

const ProductProfile = ({ item, setDataId, setOpenModal }:HoverButtonsProp ) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
            <Fragment>
                <Card>
                    <CardBody>
                        <Card>                    
                            <CardBody className="socialprofile filter-cards-view">
                                <div className="d-flex">
                                    <Image className="img-50 img-fluid m-r-20 rounded-circle" src={dynamicImage('user/1.jpg')} alt="user"/>
                                    <div className='flex-grow-1'>
                                        <H3 className=" ">{`Brand Name`}</H3>
                                        <HeaderWithIcon Heading={`Information`} isOpen={isOpen} setIsOpen={setOpenModal}/>
                                        <Collapse isOpen={isOpen}>
                                        <span className="d-block">
                                            <span>
                                            <i className="fa fa-comments-o"> </i>
                                            <span className="px-2">
                                                {`Messages`} 
                                                <Badges pill color="light" className='ms-2'>9</Badges>
                                            </span>
                                            </span>
                                        </span>
                                        <span className="d-block">
                                            <span>
                                            <i className="fa fa-bell-o"> </i>
                                            <span className="px-2">
                                                {`Notification`} <Badges pill color="light" className='ms-2'>9</Badges>
                                            </span>
                                            </span>
                                        </span>
                                        </Collapse>
                                    </div>
                                </div>
                                {/* <LikesViewButton /> */}
                                {/* <div className="likes-profile text-center">
                                <H5>
                                    <span>
                                    <i className="fa fa-heart font-danger" /> 884
                                    </span>
                                </H5>
                                </div> */}
                                {/* <div className="text-center">35 {NewLikesThisWeek}</div> */}
                                <div className="customers text-center social-group">
                                {/* <SocialGroup /> */}
                                </div>
                                <ProductMultiItemCarousel setDataId={setDataId} setOpenModal={setOpenModal} item={item}/>
                            </CardBody>
                        </Card>
                    </CardBody>
                </Card>                
            </Fragment>
        )
}

export default ProductProfile