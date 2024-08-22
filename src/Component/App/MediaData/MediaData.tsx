import { Card, Row } from "reactstrap";
import { dynamicImage } from "../../../Service";
import { Link } from "react-router-dom";
import { H4, Image, LI, P, UL } from "../../../AbstractElements";
import { useState, useCallback } from "react";
import { Carousel } from "react-responsive-carousel";
import MediaModal from "./MediaModal";

export const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const images_a = [
  "masonry/1.jpg",
  "masonry/1.jpg",
  "masonry/1.jpg",
  "masonry/1.jpg",
  "masonry/1.jpg",
];
const images_b = [
  "masonry/2.jpg",
  "masonry/2.jpg",
  "masonry/2.jpg",
  "masonry/2.jpg",
  "masonry/2.jpg",
];

export const items = [
  { id: 1, title: "" },
  { id: 2, title: "" },
  { id: 3, title: "" },
  { id: 4, title: "" },
];

const MediaData = () => {
  const [dataId, setDataId] = useState<undefined | number>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handlePopupClick = useCallback((id: number) => {
    setDataId(id);
    setOpenModal(true);
  }, []);

  const renderCarousel = (index: number) => (
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
      emulateTouch={false}
      onClickItem={() => handlePopupClick(index + 1)}
    >
      {(index % 2 === 0 ? images_a : images_b).map((image, idx) => (
        <div className="item" key={idx}>
          <img src={dynamicImage(image)} alt="" />
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
      ))}
    </Carousel>
  );

  return (
    <div className="product-wrapper-grid">
      <Row>
        {items.map((item, index) => (
          <div id="gridId" className="col-xl-3 col-sm-6" key={item.id}>
            <Card>
              <div className="product-box border">
                <div className="product-img">
                  {renderCarousel(index)}
                </div>
                <div className="product-details">
                  <div className="d-flex border-0 border-bottom mb-0">
                    <Image
                      className="img-50 rounded-circle m-r-15"
                      src={dynamicImage(`user/user.png`)}
                      alt="user"
                    />
                    <div className="social-status social-online" />
                    <div className="flex-grow-1">
                      <span className="d-block">Bucky Barnes</span>
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
                    <H4>Name</H4>
                  </Link>
                  <P>Gray Denim Regular Men's Denim Jacket</P>
                  <div className="product-price">
                    $50 <del>$45.00</del>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
        {openModal && (
          <MediaModal
            value={openModal}
            setOpenModal={setOpenModal}
            dataId={dataId}
          />
        )}
      </Row>
    </div>
  );
};

export default MediaData;
