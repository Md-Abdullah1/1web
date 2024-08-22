import { Gallery, Item } from 'react-photoswipe-gallery';
import {  CardBody } from 'reactstrap';
import { H4,Image, LI, P, UL } from '../../../../AbstractElements';
import { Href, PortfolioTitle } from '../../../../utils/Constant';
import { Link } from 'react-router-dom';
import Masonry from "react-masonry-css";
import { dynamicImage } from '../../../../Service';
import { masonryImageData } from '../../../../Data/Miscellaneous/Gallery/Gallery';

const MasonryGalleryWithDescCardBody = () => {
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        700: 2,
        500: 1,
      };
    
      return (
        <CardBody className="photoswipe-pb-responsive me-3">
          <Gallery>
            <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery-with-description" columnClassName="grid-item col-xl-3 col-sm-6">
              {masonryImageData.map((element, index) => (
                <li style={{ listStyle: "none" }} key={index} className="p-0 mb-3">
                  <figure className="m-0 border mb-1">
                    <Item original={dynamicImage(element.src)} caption="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy." width="700" height="850">
                      {({ ref, open }) => (
                        <Link to={Href} onClick={open}>
                          <img className="img-thumbnail p-2 rounded-0 rounded-top-1" ref={ref} src={dynamicImage(element.src)} alt="images" />
                          {/* try -1 */}
                          
                          <div className='d-flex border-0 border-bottom mb-0' key={index}>
                            <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/user.png`)} alt="user" />
                            <div className={`social-status social-online`} />
                            <div className='flex-grow-1'>
                              <span className="d-block">{`Bucky Barnes`}</span>
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
                          
                          <div className="caption border-top-0 p-2 border-0 mb-1">
                            <H4 className="mt-0">{PortfolioTitle}</H4>
                            <P>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</P>
                          </div>
                        </Link>
                      )}
                    </Item>
                  </figure>
                </li>
              ))}
            </Masonry>
          </Gallery>
        </CardBody>
      );
}

export default MasonryGalleryWithDescCardBody