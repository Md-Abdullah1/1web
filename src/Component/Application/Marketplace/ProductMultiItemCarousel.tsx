import { Gallery, Item } from 'react-photoswipe-gallery'
import { H4, H6, Image, LI, P, UL } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import { Link } from "react-router-dom";
import { Href, PortfolioTitle } from "../../../utils/Constant";
import { BookMarkData } from "../../../Types/Application/Bookmark/Bookmark";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Masonry from 'react-masonry-css';
import {useState,useEffect} from 'react';
import { Collapse } from 'reactstrap';
import HoverButtons from '../../../CommonElements/HoverButton/ProductHoverButtons';
import { ProductInterface } from './Product';
import ProductModal from './ProductModal';
import { useAppSelector } from '../../../ReduxToolkit/Hooks';
import { ProductItemInterface } from '../../../Types/Application/Ecommerce/Product';
import { HoverButtonsProp } from '../../../CommonElements/HoverButton/HoverButtonProp';




export const branchs =[
    {branchName:"Branch 1"},
    {branchName:"Branch 2"}
];


const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl:true,
    swipe:true,
    swipeToSlide:true,
    pauseOnHover:true,
    arrows:true,
    nextArrow:(
        <div>
            <div className="next-slick-arrow ">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
            </div>
        </div>
    ),
    prevArrow:(
        <div>
            <div className="next-slick-arrow rotate-180" style={{rotate:"180deg"}}>
            <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
            </div>
        </div>
    ),
    responsive:[
        {
            breakpoint: 1024,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        
        {
            breakpoint: 480,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
  };

const ProductMultiItemCarousel = ({ item, setDataId, setOpenModal }:HoverButtonsProp) => {
    const { productItem } = useAppSelector((state) => state.product);
    const [isOpen, setIsOpen] = useState(false);
    const addToFavourites = (data: BookMarkData) => {}
    // const { bookmark } = useAppSelector((state) => state.bookmarkTab);
    
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1,
    };

    
  return (
    <>
     {/* <Slider {...settings} >
     {images.map((data, index)=>(
        <Image className="img-fluid p-2" src={`${dynamicImage(data.src)}`} alt="image" />
     ))}
     </Slider> */}
        
        <Gallery>
            <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery-with-description" columnClassName="grid-item col-xl-12 col-sm-12 w-100">
            <Slider {...settings}>
            {productItem.map((element:ProductItemInterface, index:number)=>(
                <li style={{ listStyle: "none" }} key={index} className="p-0 mb-3 px-2">
                    <figure className="m-0 border mb-1">
                        <Item original={dynamicImage(`ecommerce/${element.image}`)} caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." width="700" height="850">
                        {({ ref, open }) => (
                            <>
                            <Link to={Href} >
                                <div className="product-box">
                                    <div className="product-img">
                                        <img className="img-thumbnail p-2 rounded-0 rounded-top-1" ref={ref} src={dynamicImage(`ecommerce/${element.image}`)} alt="images" />
                                        <HoverButtons   setOpenModal={setOpenModal} item={element} setDataId={setDataId}/> 
                                    </div>
                                </div>
                            </Link>
                            
                            {/* try -1 */}
                            
                            <div className='d-flex border-0 border-bottom mb-0' key={index}>                                
                                <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/user.png`)} alt="user" />                                                                                                     
                                <div className={`social-status social-online`} />
                                <div className='flex-grow-1'>
                                <span className="d-block" onClick={() => setIsOpen(!isOpen)}>{`Bucky Barnes`}</span>
                                <span className="d-block">{`winter@gmail.com`}</span>
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
                            <Collapse isOpen={isOpen}>
                                {branchs.map((branch, index)=>(
                                <H6 key={index}>{branch.branchName}</H6>
                                ))}
                            </Collapse>
                            <div className="caption border-top-0 p-2 border-0 mb-1">
                                <H4 className="mt-0">{PortfolioTitle}</H4>
                                <P>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</P>
                            </div>
                            </>
                        )}
                        </Item>
                    </figure>
                </li>
            ))}            
            </Slider>
            </Masonry>
        </Gallery>
        
    </>
  )
}

export default ProductMultiItemCarousel