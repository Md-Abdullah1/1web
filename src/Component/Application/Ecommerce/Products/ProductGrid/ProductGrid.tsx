import { useState } from 'react'
import { useAppSelector } from '../../../../../ReduxToolkit/Hooks';
import { Card, Row } from 'reactstrap';
import { dynamicImage } from '../../../../../Service';
import HoverButtons from './HoverButtons';
import ProductDetails from './ProductDetails';
import { ProductItemInterface } from '../../../../../Types/Application/Ecommerce/Product';
import { getVisibleProducts } from '../../../../../Service/Ecommerce.service';
import { Carousel } from "react-responsive-carousel";
import ProductModal from '../../../Marketplace/ProductModal';

// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   rtl:true,
//   swipe:true,
//   swipeToSlide:true,
//   pauseOnHover:true,
//   arrows:true,
//   nextArrow:(
//       <div className="me-4">
//           <div className="next-slick-arrow ">
//           <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
//           </div>
//       </div>
//   ),
//   prevArrow:(
//       <div className="ms-4">
//           <div className="next-slick-arrow rotate-180" style={{rotate:"180deg"}}>
//           <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
//           </div>
//       </div>
//   ),
//   responsive:[
//       {
//           breakpoint: 1024,
//           settings:{
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//           }
//       },      
//       {
//           breakpoint: 480,
//           settings:{
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               infinite: true,
//           }
//       }
//   ]
// };

const images_a = ["masonry/1.jpg","masonry/1.jpg","masonry/1.jpg","masonry/1.jpg","masonry/1.jpg"];
const images_b = ["masonry/2.jpg","masonry/2.jpg","masonry/2.jpg","masonry/2.jpg","masonry/2.jpg"];


const ProductGrid = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const { listView, colClass } = useAppSelector((state) => state.filterData);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [dataId, setDataId] = useState<undefined | number>();
  const { filter } = useAppSelector((state) => state.filterData);
  const products = getVisibleProducts(productItem, filter);
  const [isOdd, setIsOdd] = useState(false);

  const handlePopupClick = (id:number) =>{
    setDataId(id);
    setOpenModal(true);
  }

  return (
    <div className={`product-wrapper-grid ${listView ? "list-view" : ""}`}>
      <Row>
        {products &&
          products.map((item: ProductItemInterface, index: number) => {
            
            return (
              <div id="gridId" className={`${colClass} ${listView ? "col-xl-12" : ""}`} key={index}>
                
                <Card >
                  <div className="product-box border" >
                    <div className="product-img" >
                      {item.status !== "none" && <div className={`ribbon-index ${item.ribbonClassName}`}>{item.status}</div>}                      
                      
                      {/* <Slider {...settings}>
                        <Image className="img-fluid" src={dynamicImage(`ecommerce/${item.image}`)} alt="product" />
                        <Image className="img-fluid" src={dynamicImage(`ecommerce/${item.image}`)} alt="product" />
                        <Image className="img-fluid" src={dynamicImage(`ecommerce/${item.image}`)} alt="product" />
                      </Slider> */}
                      <>
                      
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
                                      {/* <span>{image}</span> */}
                                    </div>
                                    </>
                                    );
                                  })
                                )}
                                
                        </Carousel>
                        </>
                      {/* <HoverButtons setDataId=  {setDataId} setOpenModal={setOpenModal} item={item} /> */}
                    </div>
                    <ProductDetails item={item} />
                  </div>
                </Card>
              </div>
            );
          })}
        {openModal && <ProductModal value={openModal} setOpenModal={setOpenModal} dataId={dataId} />}
      </Row>
    </div>
  )
}

export default ProductGrid