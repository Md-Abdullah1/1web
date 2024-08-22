import Masonry from 'react-masonry-css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { dynamicImage } from '../../../../Service';
import { Link } from 'react-router-dom';
import { Href, PortfolioTitle } from '../../../../utils/Constant';
import { H4, Image, LI, P, UL } from '../../../../AbstractElements';
import SearchInput from '../../../Application/SearchResult/SearchInput/SearchInput';
import PhotosModal from './PhotosModal';
import { useState } from 'react';
import { items } from '../../CouponsData/CouponsData';
import { Carousel } from 'react-responsive-carousel';
import GalleryFilter from './GalleryFilter';

export const randomData = [
    {id:1,src: "masonry/1.jpg",},
    {id:2,src: "masonry/2.jpg"},
    {id:3,src: "masonry/3.jpg"},
    {id:4,src: "masonry/4.jpg"}];

const PhotosData = () => {
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1,
    };
    const images_a = ["masonry/1.jpg","masonry/1.jpg","masonry/1.jpg","masonry/1.jpg","masonry/1.jpg"];
    const images_b = ["masonry/2.jpg","masonry/2.jpg","masonry/2.jpg","masonry/2.jpg","masonry/2.jpg"];

    const [dataId, setDataId] = useState<undefined | number>();
    const [openModal, setOpenModal] = useState<boolean>(false);
    
    const handlePopupClick = (id:number) =>{
        setDataId(id);
        setOpenModal(true);
    }
  return (
    <Card>
        <SearchInput/>
        <GalleryFilter/>
        <CardBody className='pt-2'>
        <Row>
              {items.map((item, index) =>{
              return (
                    <div id="gridId" className={`col-xl-3 col-sm-6 `} key={index}>
                      <Card >
                        <div className="product-box border" >
                            <div className="product-img" >
                            <Carousel
                                    className="owl-carousel owl-theme"
                                    showStatus={false}
                                    showIndicators={false}
                                    showArrows={true}
                                    swipeable={false}
                                    autoPlay={true}
                                    infiniteLoop={true}
                                    showThumbs={false}
                                    stopOnHover={true}
                                    onClickItem={() =>handlePopupClick(item.id)}
                                >
                                {(index % 2 == 0) ? (
                                    images_a.map((image, index)=>{
                                    return (
                                    <>
                                    <div className="item" key={index}>
                                        <img src={dynamicImage(`${image}`)} alt="" />
                                        <div className="product-hover">
                                        <UL className="simple-list flex-row">                        
                                            <LI>
                                            <Link to={``}>
                                                <i className="icon-eye"></i>
                                            </Link>
                                            </LI>
                                        </UL>
                                        </div>  
                                    </div>
                                    </>
                                    );
                                    })
                                ):(
                                    images_b.map((image, index)=>{
                                    return (
                                    <>
                                    <div className="item" key={index}>
                                        <img src={dynamicImage(`${image}`)} alt="" />
                                        <div className="product-hover">
                                        <UL className="simple-list flex-row">                        
                                            <LI>
                                            <Link to={``}>
                                                <i className="icon-eye"></i>
                                            </Link>
                                            </LI>
                                        </UL>
                                        </div>
                                    </div>
                                    </>
                                    );
                                    })
                                )}
                            </Carousel>
                            </div>
                            <div className="product-details">
                            <div className='d-flex border-0 border-bottom mb-0' >
                                <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/user.png`)} alt="user" /> 
                                <div className={`social-status social-online`} />
                                <div className='flex-grow-1'>
                                <span className="d-block" >{`Bucky Barnes`}</span>
                                </div>
                            </div>
                            <div className="blog-box blog-grid text-center product-box border-0 border-bottom mb-1">
                                <div className="blog-details-main simple-list flex-row">
                                <UL className="blog-social justify-content-center flex-row mt-0 mb-0">
                                    <LI>9 April 2024</LI>
                                    <LI>by: Admin</LI>
                                    <LI>0 Hits</LI>
                                </UL>
                                </div>
                            </div>
                            <Link to={`${process.env.PUBLIC_URL}/ecommerce/productpage`}>
                                <H4>{`Name`}</H4>
                            </Link>
                            <P>{`Gray Denim Regular Men's Denim Jacket`}</P>
                            <div className="product-price">
                                {`$`}{`50`} <del>{`$`}{`45.00`}</del>
                            </div>
                            </div>
                        </div>
                      </Card>
                    </div>
                );
              })}
              {openModal && <PhotosModal value={openModal} setOpenModal={setOpenModal} dataId={dataId} />}
          </Row> 
        </CardBody>
    </Card>
  )
}

export default PhotosData